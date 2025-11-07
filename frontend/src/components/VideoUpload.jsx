import { useState, useRef, useEffect } from 'react'
import './VideoUpload.css'

function VideoUpload() {
  const [file, setFile] = useState(null)
  const [videoPreview, setVideoPreview] = useState(null)
  const [isUploading, setIsUploading] = useState(false)
  const [feedback, setFeedback] = useState([])
  const [finalResult, setFinalResult] = useState(null)
  const [error, setError] = useState(null)
  const [progress, setProgress] = useState(0)
  const [processingTime, setProcessingTime] = useState(0)
  const fileInputRef = useRef(null)
  const startTimeRef = useRef(null)
  const timerRef = useRef(null)

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]
    if (selectedFile && selectedFile.type.startsWith('video/')) {
      setFile(selectedFile)
      setError(null)
      setFeedback([])
      setFinalResult(null)
      setProgress(0)
      
      // Create video preview
      const url = URL.createObjectURL(selectedFile)
      setVideoPreview(url)
    } else {
      setError('Please select a valid video file (MP4, MOV, AVI, etc.)')
      setFile(null)
      setVideoPreview(null)
    }
  }

  // Cleanup video preview URL
  useEffect(() => {
    return () => {
      if (videoPreview) {
        URL.revokeObjectURL(videoPreview)
      }
    }
  }, [videoPreview])

  // Timer for processing duration
  useEffect(() => {
    if (isUploading && !timerRef.current) {
      startTimeRef.current = Date.now()
      timerRef.current = setInterval(() => {
        setProcessingTime(Math.floor((Date.now() - startTimeRef.current) / 1000))
      }, 1000)
    } else if (!isUploading && timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [isUploading])

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a video file first')
      return
    }

    setIsUploading(true)
    setFeedback([])
    setFinalResult(null)
    setError(null)
    setProgress(0)
    setProcessingTime(0)

    const formData = new FormData()
    formData.append('file', file)

    try {
      const response = await fetch('/inference/upload/', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.statusText}`)
      }

      // Read the SSE stream
      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ''
      let frameCount = 0
      const maxFrames = 60 // Expected max frames

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        buffer += decoder.decode(value, { stream: true })
        const parts = buffer.split('\n\n')
        buffer = parts.pop() || ''

        for (const part of parts) {
          if (part.startsWith('data: ')) {
            const jsonStr = part.substring(6).trim()
            try {
              const data = JSON.parse(jsonStr)
              
              if (data.error) {
                setError(data.error)
                setIsUploading(false)
                return
              } else if (data.final_label !== undefined) {
                setFinalResult(data)
                setProgress(100)
              } else {
                frameCount++
                setFeedback(prev => {
                  // Keep last 100 frames for performance
                  const updated = [...prev, data]
                  return updated.slice(-100)
                })
                setProgress(Math.min(95, (frameCount / maxFrames) * 100))
              }
            } catch (e) {
              console.error('Failed to parse SSE data:', jsonStr, e)
            }
          }
        }
      }
    } catch (err) {
      setError(`Error: ${err.message}. Make sure the Django backend is running.`)
    } finally {
      setIsUploading(false)
    }
  }

  const handleReset = () => {
    setFile(null)
    setFeedback([])
    setFinalResult(null)
    setError(null)
    setProgress(0)
    setProcessingTime(0)
    if (videoPreview) {
      URL.revokeObjectURL(videoPreview)
      setVideoPreview(null)
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleExport = () => {
    if (!finalResult && feedback.length === 0) return
    
    const data = {
      filename: file?.name,
      timestamp: new Date().toISOString(),
      exercise: finalResult?.final_label || 'Unknown',
      totalReps: finalResult?.total_count || 0,
      processingTime: processingTime,
      frames: feedback.map(f => ({
        frame: f.frame,
        kneeAngle: f.knee_angle,
        state: f.state,
        count: f.count
      }))
    }
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `motion-analysis-${Date.now()}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const latestFeedback = feedback.length > 0 ? feedback[feedback.length - 1] : null
  const avgKneeAngle = feedback.length > 0 
    ? (feedback.reduce((sum, f) => sum + (f.knee_angle || 0), 0) / feedback.length).toFixed(1)
    : 0

  return (
    <div className="video-upload">
      <div className="upload-section">
        <div className="file-input-wrapper">
          <input
            ref={fileInputRef}
            type="file"
            accept="video/*"
            onChange={handleFileChange}
            disabled={isUploading}
            className="file-input"
            id="video-input"
          />
          <label htmlFor="video-input" className={`file-input-label ${isUploading ? 'disabled' : ''}`}>
            <span className="upload-icon">📹</span>
            <span className="upload-text">
              {file ? 'Change Video' : 'Choose Video File'}
            </span>
            <span className="upload-hint">MP4, MOV, AVI supported</span>
          </label>
        </div>
        
        {videoPreview && (
          <div className="video-preview">
            <video src={videoPreview} controls className="preview-video" />
            <div className="file-info">
              <p>📹 {file.name}</p>
              <p className="file-size">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
            </div>
          </div>
        )}

        <div className="button-group">
          <button
            onClick={handleUpload}
            disabled={!file || isUploading}
            className="btn btn-primary"
          >
            {isUploading ? (
              <>
                <span className="btn-spinner"></span>
                Processing... {processingTime}s
              </>
            ) : (
              <>🚀 Upload & Analyze</>
            )}
          </button>
          
          {(file || feedback.length > 0) && (
            <button
              onClick={handleReset}
              disabled={isUploading}
              className="btn btn-secondary"
            >
              🔄 Reset
            </button>
          )}

          {finalResult && (
            <button
              onClick={handleExport}
              className="btn btn-success"
            >
              💾 Export Results
            </button>
          )}
        </div>

        {isUploading && (
          <div className="progress-container">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="progress-text">{progress.toFixed(0)}% complete</p>
          </div>
        )}
      </div>

      {error && (
        <div className="error-message">
          ⚠️ {error}
        </div>
      )}

      {isUploading && feedback.length === 0 && (
        <div className="loading">
          <div className="spinner"></div>
          <p>Processing video... This may take a moment</p>
        </div>
      )}

      {latestFeedback && (
        <div className="live-feedback">
          <h2>📊 Live Feedback</h2>
          <div className="metrics">
            <div className="metric-card highlight">
              <div className="metric-value">{latestFeedback.count}</div>
              <div className="metric-label">Reps Count</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">{latestFeedback.knee_angle?.toFixed(1)}°</div>
              <div className="metric-label">Current Angle</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">{avgKneeAngle}°</div>
              <div className="metric-label">Avg Angle</div>
            </div>
            <div className="metric-card">
              <div className="metric-value state-indicator" data-state={latestFeedback.state}>
                {latestFeedback.state === 'up' ? '⬆️' : '⬇️'} {latestFeedback.state}
              </div>
              <div className="metric-label">Position</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">{latestFeedback.frame}/{feedback.length}</div>
              <div className="metric-label">Frame</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">{processingTime}s</div>
              <div className="metric-label">Duration</div>
            </div>
          </div>
        </div>
      )}

      {finalResult && (
        <div className="final-result">
          <h2>✅ Analysis Complete</h2>
          <div className="result-content">
            <div className="result-item">
              <span className="result-label">Exercise Detected:</span>
              <span className="result-value exercise-name">{finalResult.final_label || 'Unknown'}</span>
            </div>
            <div className="result-item">
              <span className="result-label">Total Repetitions:</span>
              <span className="result-value">{finalResult.total_count}</span>
            </div>
            <div className="result-item">
              <span className="result-label">Processing Time:</span>
              <span className="result-value">{processingTime}s</span>
            </div>
            <div className="result-item">
              <span className="result-label">Frames Analyzed:</span>
              <span className="result-value">{feedback.length}</span>
            </div>
            <div className="result-item">
              <span className="result-label">Average Knee Angle:</span>
              <span className="result-value">{avgKneeAngle}°</span>
            </div>
          </div>
        </div>
      )}

      {feedback.length > 0 && (
        <div className="feedback-log">
          <h3>Frame-by-Frame Log (last 10 frames)</h3>
          <div className="log-entries">
            {feedback.slice(-10).reverse().map((item, idx) => (
              <div key={idx} className="log-entry">
                <span className="log-frame">Frame {item.frame}</span>
                <span className="log-angle">{item.knee_angle?.toFixed(1)}°</span>
                <span className="log-state" data-state={item.state}>{item.state}</span>
                <span className="log-count">Reps: {item.count}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default VideoUpload

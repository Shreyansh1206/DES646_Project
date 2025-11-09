import { useState, useRef, useEffect } from 'react'
import BlurText from './BlurText'
import './VideoUpload.css'

function VideoUpload() {
  const [file, setFile] = useState(null)
  const [videoPreview, setVideoPreview] = useState(null)
  const canvasRef = useRef(null)
  const [isUploading, setIsUploading] = useState(false)
  const [feedback, setFeedback] = useState([])
  const feedbackByFrameRef = useRef({})
  const [finalResult, setFinalResult] = useState(null)
  const [nlpFeedback, setNlpFeedback] = useState('')
  const [ttsAudioUrl, setTtsAudioUrl] = useState(null)
  const [error, setError] = useState(null)
  const [progress, setProgress] = useState(0)
  const [processingTime, setProcessingTime] = useState(0)
  const [backendStatus, setBackendStatus] = useState('checking') // checking | up | down
  const fileInputRef = useRef(null)
  const startTimeRef = useRef(null)
  const timerRef = useRef(null)
  const backendBase = (import.meta.env.VITE_BACKEND_URL || '').replace(/\/$/, '')
  const backendPort = import.meta.env.VITE_BACKEND_PORT || '8000'
  const [showSkeleton, setShowSkeleton] = useState(true)

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

  // Backend connectivity check
  useEffect(() => {
    let abort = false
    const check = async () => {
      try {
        const url = backendBase ? `${backendBase}/inference/upload/` : '/inference/upload/'
        const res = await fetch(url, { method: 'HEAD' })
        if (!abort) setBackendStatus(res.ok ? 'up' : 'down')
      } catch (e) {
        if (!abort) setBackendStatus('down')
      }
    }
    check()
    const id = setInterval(check, 5000)
    return () => { abort = true; clearInterval(id) }
  }, [])

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a video file first')
      return
    }

    setIsUploading(true)
    setFeedback([])
    setFinalResult(null)
  setTtsAudioUrl(null)
    setError(null)
    setProgress(0)
    setProcessingTime(0)

    const formData = new FormData()
    formData.append('file', file)

    try {
      const url = backendBase ? `${backendBase}/inference/upload/` : '/inference/upload/'
      const response = await fetch(url, {
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
                // NLP feedback integration: synthesize feedback text
                if (data.feedback) {
                  // Backend sends feedback as an array, join into a single string
                  const feedbackText = Array.isArray(data.feedback) 
                    ? data.feedback.join('. ') 
                    : data.feedback
                  setNlpFeedback(feedbackText)
                  // Text-to-speech
                  if ('speechSynthesis' in window) {
                    const utter = new window.SpeechSynthesisUtterance(feedbackText)
                    utter.rate = 1.05
                    utter.pitch = 1.0
                    utter.lang = 'en-US'
                    window.speechSynthesis.cancel()
                    window.speechSynthesis.speak(utter)
                  }
                }
                if (data.audio_base64) {
                  setTtsAudioUrl(data.audio_base64)
                }
              } else {
                frameCount++
                feedbackByFrameRef.current[data.frame] = data
                setFeedback(prev => {
                  // Keep last 200 frames in ordered array (for graphs)
                  const updated = [...prev, data]
                  return updated.slice(-200)
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
  const videoRef = useRef(null)
  const [syncedFrame, setSyncedFrame] = useState(null)

  // Pose connections (subset for clarity)
  const POSE_EDGES = [
    [11,13],[13,15], // left arm
    [12,14],[14,16], // right arm
    [23,25],[25,27], // left leg
    [24,26],[26,28], // right leg
    [11,12], // shoulders
    [23,24], // hips
    [11,23],[12,24] // torso diagonals
  ]

  // Frame sync: use requestVideoFrameCallback if available to align skeleton to current video frame proportionally
  useEffect(() => {
    const vid = videoRef.current
    if (!vid) return
    let rafId
    const loop = () => {
      if (!vid || !videoPreview) return
      const duration = vid.duration || 0
      if (duration > 0) {
        // Map current playback time proportionally to highest frame index we received
        const maxFrame = Math.max(...Object.keys(feedbackByFrameRef.current).map(Number), 0)
        const targetFrame = Math.min(maxFrame, Math.round((vid.currentTime / duration) * maxFrame))
        setSyncedFrame(targetFrame)
        if (showSkeleton && canvasRef.current) {
          const data = feedbackByFrameRef.current[targetFrame]
          if (data && data.landmarks) {
            const canvas = canvasRef.current
            const ctx = canvas.getContext('2d')
            const landmarks = data.landmarks
            const w = canvas.width
            const h = canvas.height
            ctx.clearRect(0,0,w,h)
            ctx.lineWidth = 2
            ctx.strokeStyle = 'rgba(0,255,200,0.85)'
            ctx.fillStyle = 'rgba(255,255,255,0.95)'
            ctx.beginPath()
            for (const [a,b] of POSE_EDGES) {
              const pa = landmarks[a]; const pb = landmarks[b]
              if (!pa || !pb) continue
              ctx.moveTo(pa[0]*w, pa[1]*h)
              ctx.lineTo(pb[0]*w, pb[1]*h)
            }
            ctx.stroke()
            for (let i=0;i<landmarks.length;i++) {
              const [x,y] = landmarks[i]
              ctx.beginPath()
              ctx.arc(x*w,y*h,3,0,Math.PI*2)
              ctx.fill()
            }
          }
        }
      }
      rafId = requestAnimationFrame(loop)
    }
    rafId = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(rafId)
  }, [videoPreview, showSkeleton, feedback])
  const avgKneeAngle = feedback.length > 0 
    ? (feedback.reduce((sum, f) => sum + (f.knee_angle || 0), 0) / feedback.length).toFixed(1)
    : 0

  // Simple sparkline canvases for knee angle & rep count
  const angleCanvasRef = useRef(null)
  const countCanvasRef = useRef(null)

  useEffect(() => {
    const drawSpark = (canvas, values, color) => {
      if (!canvas || values.length < 2) return
      const ctx = canvas.getContext('2d')
      const w = canvas.width = canvas.clientWidth
      const h = canvas.height = canvas.clientHeight
      ctx.clearRect(0,0,w,h)
      const min = Math.min(...values)
      const max = Math.max(...values)
      const range = max - min || 1
      ctx.strokeStyle = color
      ctx.lineWidth = 2
      ctx.beginPath()
      values.forEach((v,i) => {
        const x = (i/(values.length-1))*w
        const y = h - ((v - min)/range)*h
        if (i===0) {
          ctx.moveTo(x,y)
        } else {
          ctx.lineTo(x,y)
        }
      })
      ctx.stroke()
    }
    const angles = feedback.map(f => f.knee_angle).filter(a => typeof a === 'number')
    const counts = feedback.map(f => f.count).filter(c => typeof c === 'number')
    drawSpark(angleCanvasRef.current, angles, '#8a5cff')
    drawSpark(countCanvasRef.current, counts, '#10b981')
  }, [feedback])

  return (
    <div className="video-upload">
      <div className={`backend-status ${backendStatus}`}>
        {backendStatus === 'checking' && `Checking backend (127.0.0.1:${backendPort})…`}
        {backendStatus === 'up' && `Backend Connected ✅ (127.0.0.1:${backendPort})`}
        {backendStatus === 'down' && `Backend Unreachable ❌ (127.0.0.1:${backendPort})`}
      </div>
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
            <div className="video-wrapper">
              <video
                ref={videoRef}
                src={videoPreview}
                controls
                className="preview-video"
                onLoadedMetadata={(e)=>{
                  const vid = e.target
                  if (canvasRef.current) {
                    canvasRef.current.width = vid.videoWidth || 640
                    canvasRef.current.height = vid.videoHeight || 360
                  }
                }}
              />
              {showSkeleton && <canvas ref={canvasRef} className="overlay-canvas" />}
            </div>
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

          {videoPreview && (
            <button
              type="button"
              onClick={() => setShowSkeleton(s => !s)}
              className="btn btn-tertiary"
            >
              {showSkeleton ? '🙈 Hide Skeleton' : '👁️ Show Skeleton'}
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
            <div className="metric-card" style={{display:'flex',flexDirection:'column',alignItems:'stretch'}}>
              <div style={{fontSize:'0.8rem',color:'rgba(255,255,255,0.7)',marginBottom:'0.25rem'}}>Angle Trend</div>
              <div style={{flex:1, position:'relative'}}>
                <canvas ref={angleCanvasRef} style={{width:'100%',height:'60px'}} />
              </div>
            </div>
            <div className="metric-card">
              <div className="metric-value state-indicator" data-state={latestFeedback.state}>
                {latestFeedback.state === 'up' ? '⬆️' : '⬇️'} {latestFeedback.state}
              </div>
              <div className="metric-label">Position</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">{syncedFrame ?? latestFeedback.frame}/{finalResult?.total_frames || feedback.length}</div>
              <div className="metric-label">Video Frame (Synced)</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">{processingTime}s</div>
              <div className="metric-label">Duration</div>
            </div>
            <div className="metric-card" style={{display:'flex',flexDirection:'column',alignItems:'stretch'}}>
              <div style={{fontSize:'0.8rem',color:'rgba(255,255,255,0.7)',marginBottom:'0.25rem'}}>Reps Progress</div>
              <div style={{flex:1, position:'relative'}}>
                <canvas ref={countCanvasRef} style={{width:'100%',height:'60px'}} />
              </div>
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
          {(nlpFeedback || ttsAudioUrl) && (
            <div className="nlp-feedback">
              {nlpFeedback && (
                <>
                  <h3>🧠 Coaching Feedback</h3>
                  <BlurText text={nlpFeedback} animateBy="words" direction="top" className="nlp-blur-text" />
                </>
              )}
              {ttsAudioUrl && (
                <div className="tts-audio">
                  <h4>🔊 Audio Feedback</h4>
                  <audio controls src={ttsAudioUrl} style={{ width: '100%' }} />
                </div>
              )}
            </div>
          )}
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

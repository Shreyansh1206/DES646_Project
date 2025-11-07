import Prism from '../components/Prism';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      <div className="about-background">
        <Prism
          animationType="rotate"
          timeScale={0.2}
          height={4.0}
          baseWidth={5.0}
          scale={2.2}
          hueShift={0}
          colorFrequency={0.5}
          noise={0.05}
          glow={0.5}
          bloom={1.2}
        />
      </div>
      <div className="about-content">
        <h1 className="about-title">About the Project</h1>
        
        <section className="about-section">
          <h2>What is Motion Analysis Platform?</h2>
          <p>
            Motion Analysis Platform is an AI-powered exercise form analysis tool that uses advanced 
            computer vision and machine learning to provide real-time feedback on workout videos. 
            Our system can automatically detect and count repetitions while analyzing your form 
            to help you exercise more effectively and safely.
          </p>
        </section>

        <section className="about-section">
          <h2>How It Works</h2>
          <div className="how-it-works">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Upload Video</h3>
              <p>Upload your workout video in MP4, MOV, or AVI format</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>AI Processing</h3>
              <p>Our LSTM model analyzes pose keypoints extracted by MediaPipe</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Get Feedback</h3>
              <p>Receive real-time feedback with rep counts and angle measurements</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Technology Stack</h2>
          <div className="tech-grid">
            <div className="tech-item">
              <h3>MediaPipe</h3>
              <p>Google's pose estimation for accurate body landmark detection</p>
            </div>
            <div className="tech-item">
              <h3>LSTM Neural Network</h3>
              <p>Deep learning model for motion classification</p>
            </div>
            <div className="tech-item">
              <h3>Django Backend</h3>
              <p>Robust Python framework for video processing</p>
            </div>
            <div className="tech-item">
              <h3>React Frontend</h3>
              <p>Modern UI with real-time streaming updates</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Supported Exercises</h2>
          <ul className="exercise-list">
            <li>🏋️ Squats - Analyze depth, knee alignment, and form</li>
            <li>💪 Deadlifts - Track hip hinge, back position, and bar path</li>
            <li>🤸 Pull-ups - Count reps and measure range of motion</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Features</h2>
          <ul className="features-list">
            <li>✅ Real-time video processing with Server-Sent Events</li>
            <li>✅ Automatic repetition counting</li>
            <li>✅ Joint angle measurements</li>
            <li>✅ Motion classification (squat, deadlift, pull-up)</li>
            <li>✅ Export results as JSON for further analysis</li>
            <li>✅ Video preview with synchronized feedback</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

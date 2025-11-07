import { Link } from 'react-router-dom';
import ColorBends from '../components/ColorBendsExact';
import './Home.css';

export default function Home() {
  return (
    <div className="home-page">
      <ColorBends
  colors={["#ff0080", "#ff8c00", "#ffff00", "#00ff00", "#00ffff", "#0080ff", "#8000ff"]}
  rotation={20}
  speed={0.14}
  scale={1.2}
  frequency={1.8}
  warpStrength={1.8}
  mouseInfluence={0.6}
  parallax={0.6}
  noise={0.03}
        transparent={false}
        className="home-background"
      />
      <div className="home-content">
        <div className="hero-section">
          <h1 className="hero-title">Motion Analysis Platform</h1>
          <p className="hero-subtitle">
            AI-Powered Exercise Form Analysis with Real-Time Feedback
          </p>
          <p className="hero-description">
            Upload your workout videos and get instant feedback on your form, 
            rep counting, and technique using advanced computer vision and machine learning.
          </p>
          <div className="cta-buttons">
            <Link to="/upload" className="btn btn-primary">
              Get Started
            </Link>
            <Link to="/about" className="btn btn-secondary">
              Learn More
            </Link>
          </div>
        </div>

        <div className="features-section">
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Real-Time Analysis</h3>
            <p>Get instant feedback on your exercise form as the video processes</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Rep Counting</h3>
            <p>Automatic repetition counting with angle measurements</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3>AI-Powered</h3>
            <p>LSTM-based motion classification with MediaPipe pose estimation</p>
          </div>
        </div>
      </div>
    </div>
  );
}

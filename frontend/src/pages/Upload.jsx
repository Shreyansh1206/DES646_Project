import ColorBends from '../components/ColorBendsExact';
import VideoUpload from '../components/VideoUpload';
import './Upload.css';

export default function Upload() {
  return (
    <div className="upload-page">
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
        className="upload-background"
      />
      <div className="upload-content">
        <h1 className="upload-title">Upload Your Workout Video</h1>
        <p className="upload-subtitle">
          Get real-time feedback and analysis on your exercise form
        </p>
        <VideoUpload />
      </div>
    </div>
  );
}

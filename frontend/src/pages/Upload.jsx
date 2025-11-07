import Prism from '../components/Prism';
import VideoUpload from '../components/VideoUpload';
import './Upload.css';

export default function Upload() {
  return (
    <div className="upload-page">
      <div className="upload-background">
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

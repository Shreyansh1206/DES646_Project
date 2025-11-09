import Prism from '../components/Prism';
import VideoUpload from '../components/VideoUpload';
import './Upload.css';

export default function Upload() {
  return (
    <div className="upload-page">
      <div className="upload-background">
        <Prism
          animationType="rotate"
          timeScale={0.35}
          height={4.0}
          baseWidth={5.0}
          scale={2.2}
          hueShift={0}
          colorFrequency={0.6}
          noise={0.03}
          glow={0.7}
          bloom={1.3}
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

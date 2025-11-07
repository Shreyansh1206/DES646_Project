import Prism from '../components/Prism';
import './Team.css';

export default function Team() {
  const teamMembers = [
    {
      name: 'Team Member 1',
      role: 'Machine Learning Engineer',
      description: 'Specialized in LSTM models and pose estimation',
      emoji: '🧠'
    },
    {
      name: 'Team Member 2',
      role: 'Full Stack Developer',
      description: 'Django backend and React frontend integration',
      emoji: '💻'
    },
    {
      name: 'Team Member 3',
      role: 'Computer Vision Engineer',
      description: 'MediaPipe integration and angle calculations',
      emoji: '👁️'
    },
    {
      name: 'Team Member 4',
      role: 'UI/UX Designer',
      description: 'User interface and experience design',
      emoji: '🎨'
    }
  ];

  return (
    <div className="team-page">
      <div className="team-background">
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
      <div className="team-content">
        <h1 className="team-title">Meet the Team</h1>
        <p className="team-subtitle">
          The passionate developers behind Motion Analysis Platform
        </p>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-avatar">{member.emoji}</div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-description">{member.description}</p>
            </div>
          ))}
        </div>

        <section className="team-info">
          <h2>Our Mission</h2>
          <p>
            We are a team of passionate developers and researchers committed to making 
            exercise form analysis accessible to everyone. Our goal is to help people 
            exercise more effectively and safely through the power of AI and computer vision.
          </p>
        </section>

        <section className="team-info">
          <h2>Project Information</h2>
          <p>
            This project was developed as part of DES646 course. It combines state-of-the-art 
            machine learning techniques with modern web technologies to create a seamless 
            user experience for exercise analysis.
          </p>
        </section>

        <section className="team-info">
          <h2>Get In Touch</h2>
          <p>
            Interested in contributing or have questions? We'd love to hear from you!
          </p>
          <div className="contact-links">
            <a href="https://github.com/Shreyansh1206/DES646_Project" target="_blank" rel="noopener noreferrer" className="contact-btn">
              GitHub Repository
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

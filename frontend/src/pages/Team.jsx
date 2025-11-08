import Prism from '../components/Prism';
import ChromaGrid from '../components/ChromaGrid';
import './Team.css';

export default function Team() {
  const teamMembers = [
    {
      title: 'Kanishk Sharma',
      subtitle: 'Full Stack Developer (Leader)',
      handle: '@kanishksharma',
      image: '/images/team/kanishksh.jpeg',
      borderColor: '#8B5CF6',
      gradient: 'linear-gradient(225deg, #8B5CF6, #000)',
      url: ''
    },
    {
      title: 'Varun Agrawal',
      subtitle: 'Data Analyst and Consultant',
      handle: '@varunagrawal',
      image: '/images/team/varun.png',
      borderColor: '#10B981',
      gradient: 'linear-gradient(210deg, #10B981, #000)',
      url: ''
    },
    {
      title: 'Shreyansh Rastogi',
      subtitle: 'Computer Vision Engineer and Data Analyst',
      handle: '@shreyansh',
      image: '/images/team/shreyansh.png',
      borderColor: '#F59E0B',
      gradient: 'linear-gradient(165deg, #F59E0B, #000)',
      url: ''
    },
    {
      title: 'Aashvi Agarwal',
      subtitle: 'UI/UX Designer',
      handle: '@aashviagarwal',
      image: '/images/team/aashvi.png',
      borderColor: '#EF4444',
      gradient: 'linear-gradient(195deg, #EF4444, #000)',
      url: ''
    },
    {
      title: 'Aarzoo',
      subtitle: 'Design and Creatives',
      handle: '@aarzoo',
      image: '/images/team/aarzoo.png',
      borderColor: '#4F46E5',
      gradient: 'linear-gradient(145deg, #4F46E5, #000)',
      url: ''
    },
    {
      title: 'Amar Kumar Behera',
      subtitle: 'Guide and Mentor',
      handle: '@amarbehera',
      image: '/images/team/amar.png',
      borderColor: '#4F46E5',
      gradient: 'linear-gradient(145deg, #4F46E5, #000)',
      url: ''
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
          The passionate developers behind KinetiForm
        </p>

        <ChromaGrid 
          items={teamMembers}
          columns={3}
          rows={2}
          radius={300}
          damping={0.45}
          fadeOut={0.6}
        />

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

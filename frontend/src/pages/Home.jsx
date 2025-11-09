import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Prism from '../components/Prism';
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const exerciseCardsRef = useRef(null);

  useEffect(() => {
    const cards = exerciseCardsRef.current?.querySelectorAll('.exercise-card');
    if (!cards) return;

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 100,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            end: 'top center',
            scrub: 1,
            toggleActions: 'play none none reverse'
          },
          delay: index * 0.1
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  return (
    <div className="home-page">
      <div className="home-background">
        <Prism
          animationType="rotate"
          timeScale={0.35}  // slightly faster motion
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
            <div className="home-content">
        <div className="hero-section">
          <h1 className="hero-title">KinetiForm</h1>
          <p className="hero-subtitle">Perfect your form. Prevent injuries. Track your progress.</p>
          <p className="hero-tagline">By Gemineers</p>
        </div>

        <div className="info-section">
          <div className="section-header">
            <h2>How It Works</h2>
            <p>Three simple steps to perfect your form</p>
          </div>

          <div className="info-cards">
            <div className="info-card">
              <div className="info-number">01</div>
              <div className="info-icon">📤</div>
              <h3>Upload Your Video</h3>
              <p>
                Record your workout and upload it to our platform. We support
                squats, deadlifts, and pull-ups.
              </p>
            </div>

            <div className="info-card">
              <div className="info-number">02</div>
              <div className="info-icon">🧠</div>
              <h3>AI Analysis</h3>
              <p>
                Our advanced AI analyzes your form in real-time, tracking key
                angles and movement patterns.
              </p>
            </div>

            <div className="info-card">
              <div className="info-number">03</div>
              <div className="info-icon">📈</div>
              <h3>Get Feedback</h3>
              <p>
                Receive detailed feedback on your form, rep count, and areas for
                improvement.
              </p>
            </div>
          </div>

          <div className="cta-section">
            <Link to="/upload" className="btn btn-large-primary">
              Start Analyzing Your Form
              <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>

        <div className="exercises-section" ref={exerciseCardsRef}>
          <div className="section-container">
            <h2 className="section-title">Supported Exercises</h2>
            <p className="section-description">Advanced AI analysis for your key compound movements</p>
          </div>

          <div className="exercise-cards">
            <div className="exercise-card squat-card">
              <div className="exercise-icon">🏋️</div>
              <h3 className="exercise-title">Squats</h3>
              <p className="exercise-description">
                Analyze your squat depth, knee alignment, and bar path. Get real-time feedback on hip and knee angles to ensure proper form and prevent injury.
              </p>
              <ul className="exercise-features">
                <li>Depth tracking</li>
                <li>Knee alignment analysis</li>
                <li>Hip angle measurement</li>
                <li>Rep counting</li>
              </ul>
              <Link to="/upload" className="exercise-cta">Analyze Squats →</Link>
            </div>

            <div className="exercise-card deadlift-card">
              <div className="exercise-icon">💪</div>
              <h3 className="exercise-title">Deadlifts</h3>
              <p className="exercise-description">
                Monitor your hip hinge mechanics, back position, and bar path. Ensure optimal form with precise angle tracking and movement pattern analysis.
              </p>
              <ul className="exercise-features">
                <li>Hip hinge tracking</li>
                <li>Back position analysis</li>
                <li>Bar path monitoring</li>
                <li>Form validation</li>
              </ul>
              <Link to="/upload" className="exercise-cta">Analyze Deadlifts →</Link>
            </div>

            <div className="exercise-card pullup-card">
              <div className="exercise-icon">🤸</div>
              <h3 className="exercise-title">Pull-Ups</h3>
              <p className="exercise-description">
                Track your range of motion, shoulder engagement, and body positioning. Perfect your pull-up technique with detailed movement analysis.
              </p>
              <ul className="exercise-features">
                <li>Range of motion tracking</li>
                <li>Shoulder angle analysis</li>
                <li>Body position check</li>
                <li>Rep counting</li>
              </ul>
              <Link to="/upload" className="exercise-cta">Analyze Pull-Ups →</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

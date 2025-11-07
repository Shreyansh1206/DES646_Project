import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-icon">🎯</span>
          <span className="logo-text">Motion Analysis</span>
        </Link>
        <div className="nav-links">
          <Link to="/" className={`nav-link ${isActive('/')}`}>
            Home
          </Link>
          <Link to="/upload" className={`nav-link ${isActive('/upload')}`}>
            Upload
          </Link>
          <Link to="/about" className={`nav-link ${isActive('/about')}`}>
            About
          </Link>
          <Link to="/team" className={`nav-link ${isActive('/team')}`}>
            Team
          </Link>
        </div>
      </div>
    </nav>
  );
}

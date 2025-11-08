import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './BubbleMenu.css';

export default function BubbleMenu({
  logo,
  items = [],
  menuAriaLabel = "Toggle navigation",
  menuBg = "rgba(255, 255, 255, 0.1)",
  menuContentColor = "#ffffff",
  useFixedPosition = true,
  animationEase = "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  animationDuration = 0.5,
  staggerDelay = 0.12
}) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div 
      ref={menuRef}
      className={`bubble-menu ${useFixedPosition ? 'fixed' : 'absolute'} ${isOpen ? 'open' : ''}`}
      style={{
        '--menu-bg': menuBg,
        '--menu-color': menuContentColor,
        '--animation-duration': `${animationDuration}s`,
        '--animation-ease': animationEase,
        '--stagger-delay': `${staggerDelay}s`
      }}
    >
      <button
        className="bubble-menu-toggle"
        onClick={toggleMenu}
        aria-label={menuAriaLabel}
        aria-expanded={isOpen}
      >
        <div className="logo-container">
          {logo}
        </div>
        <div className="hamburger">
          <span className={`line line-1 ${isOpen ? 'open' : ''}`}></span>
          <span className={`line line-2 ${isOpen ? 'open' : ''}`}></span>
          <span className={`line line-3 ${isOpen ? 'open' : ''}`}></span>
        </div>
      </button>

      <div className={`bubble-menu-content ${isOpen ? 'visible' : ''}`}>
        <div className="bubble-items">
          {items.map((item, index) => (
            <div
              key={index}
              className="bubble-item-wrapper"
              style={{
                '--item-delay': `${index * staggerDelay}s`,
                '--item-rotation': `${item.rotation || 0}deg`
              }}
            >
              <Link
                to={item.href}
                className="bubble-item"
                aria-label={item.ariaLabel}
                onClick={closeMenu}
                style={{
                  '--hover-bg': item.hoverStyles?.bgColor || '#3b82f6',
                  '--hover-color': item.hoverStyles?.textColor || '#ffffff'
                }}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

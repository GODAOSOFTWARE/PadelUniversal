import React, { useState } from 'react';
import '../styles/layout/MobileHeader.css';
import { useNavigate } from 'react-router-dom';

interface MobileHeaderProps {
  menuItems: Array<{
    path: string;
    label: string;
    icon: React.ReactNode;
  }>;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({ menuItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="mobile-header">
        <div className="mobile-header-content">
          <div className="mobile-brand">
            <h1 className="mobile-logo-title">Padel-Universal</h1>
          </div>
          <button className="burger-button" onClick={toggleMenu}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isMenuOpen ? (
                // X icon
                <path d="M6 6L18 18M6 18L18 6" />
              ) : (
                // Burger icon
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      <nav className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav">
          <ul>
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="mobile-menu-item"
                onClick={() => handleNavigation(item.path)}
              >
                <span className="icon">{item.icon}</span>
                <span className="label">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}; 
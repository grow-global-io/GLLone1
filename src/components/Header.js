import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <span className="logo-m">m</span>
            <span className="logo-o">o</span>
            <span className="logo-d">d</span>
            <span className="logo-e">e</span>
            <div className="logo-mobile">mobile</div>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="mobile-menu-toggle" onClick={toggleMenu}>
          <div className={`hamburger ${menuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        {/* Navigation and CTA button */}
        <div className={`nav-container ${menuOpen ? 'open' : ''}`}>
          <nav className="nav">
            <ul>
              <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
              <li><Link to="/team" onClick={() => setMenuOpen(false)}>Team</Link></li>
              <li><Link to="/careers" onClick={() => setMenuOpen(false)}>Careers</Link></li>
              <li><Link to="/acquisitions" onClick={() => setMenuOpen(false)}>Acquisition</Link></li>
            </ul>
          </nav>
          <div className="cta-button">
            <button>INVESTMENT OPPORTUNITY</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 
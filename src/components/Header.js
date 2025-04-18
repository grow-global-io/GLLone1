import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import LogoMain from '../assets/Secondary.png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className={`logo ${menuOpen ? 'hidden' : ''}`}>
          <Link to="/">
          <img 
              src={LogoMain}
              alt="" 
              className="main-logo-image" 
              style={{ width: '20%', height: '20%', objectFit: 'contain'}}
            />
            {/* <span className="logo-m">G</span>
            <span className="logo-o">L</span>
            <span className="logo-d">L</span>
            <div className="logo-mobile">Ions</div> */}
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
              <li><Link to="https://gll.gitbook.io/growlimitless-whitepaper-gll" onClick={() => setMenuOpen(false)}>WhitePaper</Link></li>
              <li><Link to="/team" onClick={() => setMenuOpen(false)}>Team</Link></li>
              {/* <li><Link to="/careers" onClick={() => setMenuOpen(false)}>Careers</Link></li> */}
              <li><Link to="https://partners.gll.one" onClick={() => setMenuOpen(false)}>Register</Link></li>
              {/* <li><Link to="/acquisitions" onClick={() => setMenuOpen(false)}>Acquisitions</Link></li> */}
            </ul>
          </nav>
          <div className="cta-button">
            <button>JOIN OUR COMMUNITY</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import LogoMain from '../assets/Secondary.png'
import { ConnectButton } from '@rainbow-me/rainbowkit'  
import { useAccount } from 'wagmi'
import toast, {Toaster} from 'react-hot-toast'

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const { address } = useAccount()

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <Toaster position='top-center'/>
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
              <li><Link to="/rewards" onClick={() => setMenuOpen(false)}>Rewards</Link></li>
              <li><Link to="/register" onClick={() => {
                  setMenuOpen(false)
                  // if (address){
                  //   navigate('/register')
                  // }else{
                  //   toast.error("Please Logins First")
                  // }
                }}>Register</Link></li>
              {/* <li><Link to="https://partners.gll.one" onClick={() => setMenuOpen(false)}>Register</Link></li> */}
              {/* <li><Link to="/acquisitions" onClick={() => setMenuOpen(false)}>Acquisitions</Link></li> */}
            </ul>
          </nav>
          <div className="">
            <ConnectButton label="Login" showBalance={false} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
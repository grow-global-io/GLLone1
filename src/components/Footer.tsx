import React from 'react';
import './Footer.css';
// Import icons from react-icons
import { FaFacebook, FaTwitter, FaLinkedin, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import secondaryLogo from '../assets/Secondary.png';

const Footer = () => {
  return (
    <>
      {/* Product Section */}
      <section className="product-section">
        <div className="product-container">
          <div className="product-info">
            <span className="product-label">GLL IONS</span>
            <h2 className="product-title">Learn more about<br />our products</h2>
            <button className="product-button">GET STARTED HERE</button>
          </div>
          
          <div className="product-description">
            <p>
            GLL ions opens business owners access to SaaS subscription based digital tools like e-signing suite, AI agents for finance and even authenticity certificates that are globally verifiable.
            </p>
          </div>
        </div>
      </section>
      
      {/* Footer with Wave */}
      <footer className="footer">
        <div className="footer-wave"></div>
        
        <div className="footer-content">
          <div className="footer-container">
            <div className="footer-top">
              <div className="footer-branding">
                <div className="footer-logo">
                  <img src={secondaryLogo} alt="GLL Logo" className="footer-logo-image" />
                </div>
                
                <p className="footer-tagline">
                  Invest to unlock a global,<br />
                  trillion-dollar opportunity...
                </p>
                
                <button className="footer-cta">
                  JOIN OUR COMMUNITY
                </button>
                
                {/* Social Media Icons */}
                <div className="social-icons">
                  <a href="https://www.facebook.com/growglobalstrategies" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaFacebook />
                  </a>
                  <a href="https://twitter.com/gll_app/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaTwitter />
                  </a>
                  <a href="t.me/GLL_Community" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaTelegram />
                  </a>
                  <a href="https://www.linkedin.com/company/growglobalstrategies/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaLinkedin />
                  </a>
                  <a href="https://chat.whatsapp.com/CroHENW5LkEGBZ9uf2Ge2s" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
              
              <div className="footer-links-container">
                <div className="footer-links-column">
                  <h3 className="footer-column-title">INQUIRIES</h3>
                  <ul className="footer-links">
                    <li><a href="#press">Press</a></li>
                    <li><a href="#legal">Legal</a></li>
                    <li><a href="#support">Support</a></li>
                  </ul>
                </div>
                
                <div className="footer-links-column">
                  <h3 className="footer-column-title">EXTERNAL</h3>
                  <ul className="footer-links">
                    <li><a href="#earnphone">JOIN OUR COMMUNITY</a></li>
                    <li><a href="#earnapp">GrowLimitless.app</a></li>
                  </ul>
                </div>
                
                <div className="footer-links-column">
                  <h3 className="footer-column-title">INFORMATION</h3>
                  <ul className="footer-links">
                    <li><a href="#optout">Notice of Right to Opt Out of<br />Sale Information</a></li>
                    <li><a href="#incentive">Notice of Financial Incentive</a></li>
                    <li><a href="#collection">Notice of Collection of<br />Information</a></li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="footer-divider"></div>
            
            <div className="footer-bottom">
              <p className="footer-copyright">© 2025 Grow Global. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
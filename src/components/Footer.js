import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
      {/* Product Section */}
      <section className="product-section">
        <div className="product-container">
          <div className="product-info">
            <span className="product-label">MODE EARNPHONE</span>
            <h2 className="product-title">Learn more about<br />our products</h2>
            <button className="product-button">MODE EARNPHONE</button>
          </div>
          
          <div className="product-description">
            <p>
              The Mode EarnPhone is not rent-to-own. As long as you
              maintain your subscription you can keep earning up to
              $1,200 or more every year with your Mode Earn Phone.
              Receive a new device after 12 months.
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
                  <span className="logo-text">m<span className="logo-o">o</span>de</span>
                  <span className="logo-sub">mobile</span>
                </div>
                
                <p className="footer-tagline">
                  Invest to unlock a global,<br />
                  trillion-dollar opportunity...
                </p>
                
                <button className="footer-cta">
                  INVESTMENT OPPORTUNITY
                </button>
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
                    <li><a href="#earnphone">Mode EarnPhone</a></li>
                    <li><a href="#earnapp">Mode Earn App</a></li>
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
              <p className="footer-copyright">© 2023 Mode Mobile. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer; 
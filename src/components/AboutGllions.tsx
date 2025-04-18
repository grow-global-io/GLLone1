import React from 'react';
import './AboutGllions.css';
import phoneScreenshot from '../assets/pngwing.com.png'; // You'll need to add this image to your assets

const AboutGllions = () => {
  return (
    <div className="about-gllions">
      <div className="about-gllions-content">
        <div className="phone-showcase">
          <img src={phoneScreenshot} alt="Mode EarnOS App Interface" className="phone-screenshot" />
        </div>
        
        <div className="about-gllions-text">
          <div className="text-container">
            <span className="gllions-label">POWERING YOUR BUSINESS GROWTH</span>
            <h2 className="gllions-title">With GLL Ions</h2>
            
            <p className="gllions-description">
            One can pay for our subscription based ecosystem of tools like our e-signing platform, invoicing platform, AI agents marketplace, access to our global B2B manufacturer database
            </p>
            
            <p className="gllions-stats">
            GLL Ions enables your business growth in a decentralized and globally verifiable manner. We give your business a unique GLL ID that can be compared to a DUNS Number but comes with much more privileges.
            </p>
          </div>
        </div>
      </div>
      
      <div className="gradient-circle"></div>
    </div>
  );
};

export default AboutGllions;
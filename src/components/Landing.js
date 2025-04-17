import React from 'react';
import './Landing.css';
import busStopImage from '../assets/mode.jpeg'; // Using an existing image as placeholder

const Landing = () => {
  return (
    <section className="landing">
      <div className="landing-content">
        <h1 className="landing-title">
          Turning the Smartphone
          <br />
          into the <span className="">EarnPhone</span>
        </h1>
        
        <p className="landing-subtitle">
          We're revolutionizing the smartphone industry with the world's 
          first <span className="highlight">EarnPhone</span> — powered by Mode's proprietary <span className="highlight">EarnOS</span>.
        </p>
      </div>
      
      <div className="landing-image-container">
        <div className="landing-image-wrapper">
          <img 
            src={busStopImage} 
            alt="EarnPhone advertisement at bus stop" 
            className="landing-image"
          />
          <div className="image-overlay"></div>
        </div>
      </div>
      
      <div className="background-dots"></div>
    </section>
  );
};

export default Landing; 
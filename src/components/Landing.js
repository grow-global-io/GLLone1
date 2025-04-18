import React from 'react';
import './Landing.css';
import busStopImage from '../assets/mode.jpeg'; // Using an existing image as placeholder
import landingVideo from '../assets/video.mp4';
const Landing = () => {
  return (
    <section className="landing">
      <div className="landing-content">
        <h1 className="landing-title">
        Earn Rewards by 
          <br />
          Running Business <span className="">on Your Phone. </span>
        </h1>
        
        <p className="landing-subtitle">
        We’re transforming how MSMEs can grow global — rewarding South East Asian business owners for everyday actions like uploading<span className="highlight">invoices, sharing products, and connecting networks </span> — all through one app <span className="highlight">Powered by GLL Ions</span>.
        </p>
      </div>
      
      <div className="landing-image-container">
        <div className="landing-image-wrapper">
        <video 
            src={landingVideo}
            autoPlay
            loop
            muted
            playsInline
            className="landing-image"
            alt="EarnPhone promotional video"
          />
          <div className="image-overlay"></div>
        </div>
      </div>
      
      <div className="background-dots"></div>
    </section>
  );
};

export default Landing; 
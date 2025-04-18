import React, { useEffect, useRef } from 'react';
import './Landing.css';

import landingVideo from '../assets/video1.mp4';
const Landing = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        // Get the position of the video element
        const rect = videoRef.current.getBoundingClientRect();
        const videoTop = rect.top;
        const videoBottom = rect.bottom;
        const windowHeight = window.innerHeight;
        
        // If video is more than 50% out of view, mute it
        if (videoTop > windowHeight || videoBottom < 0) {
          videoRef.current.muted = true;
        } else {
          videoRef.current.muted = false;
        }
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="landing">
      <div className="landing-content">
        <h1 className="landing-title">
        Earn Rewards by 
          <br />
          Running Business <span className="">on Your Phone. </span>
        </h1>
        
        <p className="landing-subtitle">
        We're transforming how MSMEs can grow global — rewarding South East Asian business owners for everyday actions like uploading<span className="highlight">invoices, sharing products, and connecting networks </span> — all through one app <span className="highlight">Powered by GLL Ions</span>.
        </p>
      </div>
      
      <div className="landing-image-container">
        <div className="landing-image-wrapper">
        <video 
            ref={videoRef}
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
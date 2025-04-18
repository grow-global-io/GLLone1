import React, { useEffect, useRef, useState } from 'react';
import './Landing.css';

import landingVideo from '../assets/video1.mp4';
const Landing = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let playAttemptTimeout;
    
    // Initial play attempt with a small delay to let the component fully mount
    if (videoRef.current) {
      playAttemptTimeout = setTimeout(() => {
        videoRef.current.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(error => {
            console.log("Video play failed:", error);
            // If autoplay fails, keep it muted and try again
            videoRef.current.muted = true;
            videoRef.current.play()
              .then(() => setIsPlaying(true))
              .catch(e => console.log("Couldn't play even when muted:", e));
          });
      }, 300);
    }

    const handleScroll = () => {
      if (!videoRef.current || !isPlaying) return;
      
      // Get the position of the video element
      const rect = videoRef.current.getBoundingClientRect();
      const videoTop = rect.top;
      const videoBottom = rect.bottom;
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the video is visible
      const visibleHeight = Math.min(windowHeight, videoBottom) - Math.max(0, videoTop);
      const videoHeight = rect.height;
      const visiblePercentage = (visibleHeight / videoHeight) * 100;
      
      // Only change mute state, don't pause/play
      if (visiblePercentage < 30) {
        videoRef.current.muted = true;
      } else {
        videoRef.current.muted = false;
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(playAttemptTimeout);
    };
  }, [isPlaying]);

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
            playsInline
            preload="auto"
            className="landing-image"
            controls
            onClick={() => {
              if (videoRef.current) {
                videoRef.current.muted = false;
                videoRef.current.play();
              }
            }}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
          <div className="image-overlay"></div>
        </div>
      </div>
      
      <div className="background-dots"></div>
    </section>
  );
};

export default Landing;
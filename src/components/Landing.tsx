import React, { useEffect, useRef, useState } from 'react';
import './Landing.css';
import landingVideo from '../assets/video1.mp4';

const Landing = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    // Ensure video plays on load
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Auto-play was prevented:', error);
        setIsPlaying(false);
        // Add a user interaction listener to play video
        document.addEventListener('click', () => {
          videoRef.current?.play();
          setIsPlaying(true);
        }, { once: true });
      });
    }

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
          videoRef.current.muted = isMuted;
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
  }, [isMuted]);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

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
            className="landing-image"
            muted={isMuted}
          />
          <div className="image-overlay"></div>
          <button 
            className="video-control-btn" 
            onClick={togglePlayPause}
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? "❚❚" : "▶"}
          </button>
          <button 
            className="video-mute-btn" 
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? "🔇" : "🔊"}
          </button>
        </div>
      </div>
      
      <div className="background-dots"></div>
    </section>
  );
};

export default Landing;
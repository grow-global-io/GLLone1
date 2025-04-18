import React, { forwardRef } from 'react';
import './AboutSection.css';
import foundersImage from '../assets/IMG_22851.jpg';

const AboutSection = forwardRef((props, ref) => {
  return (
    <div className="founding-story-section" ref={ref}>
      <div className="founding-story-content">
        <div className="founding-story-text">
          <h3 className="section-subtitle">FOUNDING STORY</h3>
          <h2 className="section-title">How we got started</h2>
          
          <p className="story-paragraph">
          🌱 Our Story: From Hackathon Dream to Global MSME Platform
GLL (GrowLimitless) began as a hackathon-winning idea at the Global Hackerearth 2022, originally envisioned as the “PayPal of Crypto” for South East Asia — a seamless bridge between digital assets and real-world businesses.

          </p>
          
          <p className="story-paragraph">
          As we evolved, we saw a deeper challenge — millions of MSMEs across India and South East Asia lacked access to global visibility, capital, and growth tools. <span className="highlighted-text">That insight became our turning point.
          </span>?"
          </p>
          
          <p className="story-paragraph">
          Today, GLL is building the first all-in-one MSME growth ecosystem powered by blockchain identity, AI agents, and a gamified rewards system — helping business owners go from local to limitless.<br/>

            <span className="highlighted-text"> <br/> 🏆 Winner at the XDC Finternet Accelerator Program <br/>
🚀 Cohorted by T-Hub, Hyderabad <br/>
🤝 Backed by XDC Singapore with our first term sheet signed
<p className="story-paragraph">
<br/>Our mission is simple:
<span className="highlighted-text">Empower 10M+ MSMEs to grow globally, verify digitally, and earn endlessly.
          </span>"
          </p>
</span>
          </p>
        </div>
        
        <div className="founding-story-image">
          <div className="image-container">
            <img src={foundersImage} alt="Mode Mobile founder" />
            <div className="image-caption">
              Anirban Roy, CEO, <br/>
              Tathagat Saha, CTO
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default AboutSection; 
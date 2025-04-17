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
            Mode Mobile (originally Current Rewards) was founded in 2017 as 
            a cross-platform music aggregation service — bringing content 
            from dozens of platforms into a single, centralized app.
          </p>
          
          <p className="story-paragraph">
            As we grew, we asked ourselves, "instead of just offering free 
            music, is it possible to <span className="highlighted-text">solve the root problem and provide 
            people with easy ways to earn more income</span>?"
          </p>
          
          <p className="story-paragraph">
            It was that central question that led us to the creation of the
            <span className="highlighted-text"> Mode EarnPhone — the first smartphone that pays for itself</span>.
          </p>
        </div>
        
        <div className="founding-story-image">
          <div className="image-container">
            <img src={foundersImage} alt="Mode Mobile founder" />
            <div className="image-caption">
              I am No one 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default AboutSection; 
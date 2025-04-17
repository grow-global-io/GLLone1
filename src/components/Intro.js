import React from 'react';
import './Intro.css';

const Intro = ({ scrollToNextSection, title = "Welcome to Mode Mobile", subtitle = "Your next-generation mobile solutions" }) => {
  return (
    <div className="content">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {scrollToNextSection && (
        <div className="scroll-down-arrow" onClick={scrollToNextSection}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="8 12 12 16 16 12" />
            <line x1="12" y1="8" x2="12" y2="16" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Intro; 
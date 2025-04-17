import React from 'react';
import './NetworkStats.css';

const NetworkStats = () => {
  return (
    <section className="network-stats">
      <div className="stats-container">
        <div className="stat-card">
          <h2 className="stat-number">$325M+</h2>
          <p className="stat-description">
            earned and saved by
            <br />
            our users
          </p>
        </div>
        
        <div className="stat-card">
          <h2 className="stat-number">2M+</h2>
          <p className="stat-description">
            5-star reviews in the
            <br />
            <a href="https://play.google.com/store" className="stat-link">Google Play Store</a>
          </p>
        </div>
        
        <div className="stat-card">
          <h2 className="stat-number">$40M</h2>
          <p className="stat-description">
            from investors
            <br />
            around the world
          </p>
        </div>
      </div>
      
      <div className="background-dots"></div>
    </section>
  );
};

export default NetworkStats; 
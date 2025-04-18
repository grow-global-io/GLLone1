import React from 'react';
import './NetworkStats.css';

const NetworkStats = () => {
  return (
    <section className="network-stats">
      <div className="stats-container">
        <div className="stat-card">
          <h2 className="stat-number">~40M+</h2>
          <p className="stat-description">
          All digital creators
            <br />
            & entrepreneurs
          </p>
        </div>
        
        <div className="stat-card">
          <h2 className="stat-number">~12M-15M</h2>
          <p className="stat-description">
          Addressable users in
            <br />
            <a href="" className="stat-link">6 Target Countries</a>
          </p>
        </div>
        
        <div className="stat-card">
          <h2 className="stat-number">~50k-1M</h2>
          <p className="stat-description">
          Realistic user acquisition
            <br />
            in 1-2 years
          </p>
        </div>
      </div>
      
      <div className="background-dots"></div>
    </section>
  );
};

export default NetworkStats; 
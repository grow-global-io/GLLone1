import React from 'react';
import Header2 from '../components/Header2';
import Footer from '../components/Footer';
import './Investment.css';

const Investment = () => {
  return (
    <div className="investment-page">
      <Header2 />
      <div className="investment-content">
        <section className="investment-hero">
          <div className="hero-container">
            <h1>Join Our Journey</h1>
            <h2>Invest in Mode Mobile's Future</h2>
            <p>
              Mode Mobile is revolutionizing the mobile ecosystem by rewarding users for 
              everyday phone activities. Our platform has already generated millions in user 
              earnings, and we're just getting started.
            </p>
            <div className="cta-buttons">
              <a href="#invest" className="primary-button">Invest Now</a>
              <a href="#learn" className="secondary-button">Learn More</a>
            </div>
          </div>
        </section>
        
        <section className="investment-highlights">
          <div className="highlights-container">
            <h2>Investment Highlights</h2>
            <div className="highlights-grid">
              <div className="highlight-card">
                <h3>Market Opportunity</h3>
                <p>Tap into the $100B+ mobile advertising and rewards market with our innovative platform.</p>
              </div>
              <div className="highlight-card">
                <h3>User Growth</h3>
                <p>Over 30 million downloads and counting, with strong user retention and engagement.</p>
              </div>
              <div className="highlight-card">
                <h3>Revenue Model</h3>
                <p>Multiple revenue streams including advertising, subscriptions, and partnerships.</p>
              </div>
              <div className="highlight-card">
                <h3>Global Reach</h3>
                <p>Operating in over 150 countries, with a focused expansion strategy for key markets.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Investment;

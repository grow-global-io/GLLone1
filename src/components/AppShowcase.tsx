import React from 'react';
import './AppShowcase.css';
// import '../pages/Rewards/index.tsx'
import { useNavigate } from 'react-router-dom';
import phoneGif from '../assets/GIFs/GLLHome.gif';

const AppShowcase = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate('/rewards');
  };

  return (
    <div className="app-showcase">
      <div className="app-showcase-content">
        <div className="app-showcase-text">
          <div className="app-showcase-product">
            <span className="product-label">THE BUSINESS APP THAT PAYS YOU</span>
            <h3 className="product-title">GLL IONS PROGRAM</h3>
            <p className="product-description">
              Our state of the art blockchain powered application come with built-in rewards feature. Business owners can earn up to 15000 GLL IONS every month by doing normal business activities like uploading an invoice, completing their onboarding, referring a business owner, sending out email campaigns or even simply connecting their social accounts.
            </p>
            <p className="product-benefits">
              GLL ions opens business owners access to SaaS subscription based digital tools like e-signing suite, AI agents for finance and even authenticity certificates that are globally verifiable.
            </p>
            <button className="learn-more-btn" onClick={handleLearnMoreClick}>LEARN MORE</button>
          </div>
        </div>
        
        <div className="app-showcase-image">
        <img src={phoneGif} alt="GLL IONS App" className="phone-image" />

        </div>
      </div>
      
      <div className="gradient-circle"></div>
    </div>
  );
};

export default AppShowcase;
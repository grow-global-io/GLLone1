import React, { useState } from 'react';

import './Dashboard.css';
import { FaWallet, FaChartLine, FaFileInvoiceDollar, FaBriefcase, FaNetworkWired, FaCopy } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {

  const navigate = useNavigate();
  

  const cards = [
    {
      title: 'My Wallet',
      icon: <FaWallet className="text-purple-600 text-4xl" />,
      description: 'Manage your GLL tokens and transaction history',
      ctaText: 'View Balance',
      color: 'bg-purple-500'
    },
    {
      title: 'MSME Profile',
      icon: <FaBriefcase className="text-pink-500 text-4xl" />,
      description: 'Update your business profile and UCI/KYC information',
      ctaText: 'Edit Profile',
      color: 'bg-pink-500'
    },
    {
      title: 'Invoices & Finance',
      icon: <FaFileInvoiceDollar className="text-blue-500 text-4xl" />,
      description: 'Manage your submitted invoices and financing options',
      ctaText: 'View Invoices',
      color: 'bg-blue-500'
    },
    {
      title: 'Business Network',
      icon: <FaNetworkWired className="text-green-500 text-4xl" />,
      description: 'Connect with other businesses and explore partnerships',
      ctaText: 'Explore Network',
      color: 'bg-green-500'
    },
    {
      title: 'Analytics',
      icon: <FaChartLine className="text-amber-500 text-4xl" />,
      description: 'Track your GLL activity and business performance metrics',
      ctaText: 'View Reports',
      color: 'bg-amber-500'
    }
  ];

  const handleKYBClick = () => {
    // Handle KYB button click
    navigate('/register');
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText('@tatz234gll');
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Your MSME Dashboard</h1>
          <p className="dashboard-subtitle">Manage your business profile, track rewards, and unlock new opportunities</p>
        </div>
        
        <div className="stats-section">
          <div className="stats-grid">
          <div className="">
              <div className="qr-code-container">
                <p className="qr-code-label">Your GVC Code</p>
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=GLL_BUSINESS_ID_123456789" 
                  alt="Business QR Code" 
                  className="qr-code-blur"
                />
                <div className="qr-code-overlay">
                  <button className="kyb-button" onClick={handleKYBClick}>
                    Complete KYB
                  </button>
                </div>
                <div className="qr-code-username">
                  <div>GllTag:</div>
                  @tatz234gll
                  <button className="copy-button" onClick={handleCopyClick} title="Copy to clipboard">
                    <FaCopy size={16} />
                  </button>
                </div>
              </div>
            </div>
            <div className="stat-card">
              <p className="stat-label">GLL Balance</p>
              <p className="stat-value">500 <span className="stat-unit">Ions</span></p>
            </div>
            <div className="stat-card">
              <p className="stat-label">Completed Tasks</p>
              <p className="stat-value">7</p>
            </div>
            <div className="stat-card">
              <p className="stat-label">Business Rating</p>
              <p className="stat-value">4.8/5</p>
            </div>
            
          </div>
        </div>
        
        <div className="cards-grid">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="dashboard-card"
              style={{animationDelay: `${0.2 + index * 0.1}s`, animationName: 'fadeIn', animationDuration: '0.5s', animationFillMode: 'forwards'}}
            >
              <div className="card-header">
                <div className="card-icon-wrapper">
                  {card.icon}
                </div>
                <div className={`status-dot ${index === 0 ? 'pulse' : ''} ${card.color}`}></div>
              </div>
              <h2 className="card-title">{card.title}</h2>
              <p className="card-description">{card.description}</p>
              <button className="card-button">
                {card.ctaText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 
import React, { useEffect, useRef } from 'react';
import './UtilityFramework.css';
import secondaryImage from '../assets/GLLIonsLogo-.png';

const UtilityFramework = () => {
  const sectionRef = useRef(null);
  
  const utilityItems = [
    {
      id: 1,
      title: 'GrowGlobal.Asia',
      description: 'Empowering indigenous south asian merchants with Web 3.0 powers',
      position: 'left-top'
    },
    {
      id: 2,
      title: 'GrowUrja',
      description: 'Empowering EV ecosystem payments',
      position: 'right-top'
    },
    {
      id: 3,
      title: 'BlokZen',
      description: 'Empowering FDI Green Real Estate Investments in India',
      position: 'left-middle'
    },
    {
      id: 4,
      title: 'DrutaSign',
      description: 'Contracts Automation with blockchain',
      position: 'right-middle'
    },
    {
      id: 5,
      title: 'GLL Fintech Payment Gateway',
      description: 'Self custodian solution for trading digital assets directly to email, phone or QR',
      position: 'left-bottom'
    },
    {
      id: 6,
      title: 'TryJewel',
      description: 'Virtual try-on of jewellery using AR',
      position: 'right-bottom'
    },
    {
      id: 7,
      title: 'GrowInvoice',
      description: 'One stop solution for creating invoices payable by fiat/digital assets',
      position: 'none1'
    },
    {
        id: 8,
        title: 'Grow4SaaS ',
        description: 'Complete CRM suite for SaaS based companies. Automated, AI driven and credits payable with GLL Ions.',
        position: 'none2'
      }

  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const wrappers = document.querySelectorAll('.utility-item-wrapper');
    wrappers.forEach(wrapper => {
      observer.observe(wrapper);
    });

    return () => {
      wrappers.forEach(wrapper => {
        observer.unobserve(wrapper);
      });
    };
  }, []);

  return (
    <section className="utility-section" ref={sectionRef}>
      <div className="utility-container">
        <h3 className="utility-subtitle">ECOSYSTEM</h3>
        <h2 className="utility-title">The GLL Utility Framework <br/></h2>
        
        <div className="utility-framework">
          {utilityItems.map((item) => (
            <div 
              className={`utility-item-wrapper ${item.position}`} 
              key={item.id}
            >
              <div className="utility-item">
                <h3 className="utility-item-title">{item.title}</h3>
                <p className="utility-item-description">{item.description}</p>
              </div>
              <div className="connector-line"></div>
            </div>
          ))}
          
          <div className="center-image-container">
            <div className="center-image-wrapper">
              <img src={secondaryImage} alt="GLL utility token" className="center-image" />
              <div className="center-label">GLL utility Framework</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UtilityFramework;
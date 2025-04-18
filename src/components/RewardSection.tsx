import React, { useEffect, useRef } from 'react';
import './RewardSection.css';
import Image1 from '../assets/Rewards/form1.jpg';
import Image2 from '../assets/Rewards/form2.jpg';
import Image3 from '../assets/Rewards/form3.jpg';
import Image4 from '../assets/Rewards/form4.jpg';
import Image5 from '../assets/Rewards/form5.jpg';
import Image6 from '../assets/Rewards/form6.jpg';
import Image7 from '../assets/Rewards/form7.jpg';
import Image8 from '../assets/Rewards/form8.jpg';
import Image9 from '../assets/Rewards/form9.jpg';
// import Image10 from '../assets/Rewards/form10.jpg';

const RewardSection = () => {
  const sectionRef = useRef(null);
  
  const rewardItems = [
    {
      id: 1,
      title: 'Registering And Verifying Their Business ',
      imageUrl: Image1
    },
    {
      id: 2,
      title: 'Uploading Products',
      imageUrl: Image2
    },
    {
      id: 3,
      title: 'Submitting Unpaid Invoices',
      imageUrl: Image3
    },
    {
      id: 4,
      title: 'Connecting Company Socials',
      imageUrl: Image4
    },
    {
      id: 5,
      title: 'Posting Business Stories',
      imageUrl: Image5
    },
    {
      id: 6,
      title: 'Referring A Friend',
      imageUrl: Image6
    },
    {
      id: 7,
      title: 'Reading the Blogs',
      imageUrl: Image7
    },
    {
      id: 8,
      title: 'Completing Tasks',
      imageUrl: Image8
    },
    {
      id: 9,
      title: 'Uploading Financials',
      imageUrl: Image9
    },
    {
      id: 10,
      title: '+ many more...',
      imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
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

    const wrappers = document.querySelectorAll('.reward-card-wrapper');
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
    <section className="reward-section" ref={sectionRef}>
      <div className="reward-container">
        <h3 className="reward-subtitle">WE PAY OUR USERS</h3>
        <h2 className="reward-title">Business Owners/App Users are <br />rewarded with GLL Ions For :</h2>
        
        <div className="reward-grid">
          {rewardItems.map((item, index) => (
            <div 
              className="reward-card-wrapper" 
              key={item.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="reward-card">
                <div className="reward-card-image"
                  style={{ 
                    backgroundImage: `url(${item.imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}>
                </div>
                <div className="reward-card-content">
                  <h3 className="reward-card-title">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RewardSection; 
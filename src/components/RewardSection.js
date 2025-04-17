import React, { useEffect, useRef } from 'react';
import './RewardSection.css';

const RewardSection = () => {
  const sectionRef = useRef(null);
  
  const rewardItems = [
    {
      id: 1,
      title: 'Listening to Music',
      imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 2,
      title: 'Playing Games',
      imageUrl: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 3,
      title: 'Tracking Fitness',
      imageUrl: 'https://images.unsplash.com/photo-1575535468632-345892291673?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 4,
      title: 'Charging Phone',
      imageUrl: 'https://images.unsplash.com/photo-1592890288564-76628a30a657?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 5,
      title: 'Shopping',
      imageUrl: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 6,
      title: 'Surfing the Web',
      imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 7,
      title: 'Reading the News',
      imageUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 8,
      title: 'Completing Tasks',
      imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 9,
      title: 'Watching Videos',
      imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
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
        <h2 className="reward-title">Mode Mobile Users are<br />Rewarded For:</h2>
        
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
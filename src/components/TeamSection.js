import React, { useEffect, useRef } from 'react';
import './TeamSection.css';
import team1 from '../assets/Team Members/team1.jpg';
import team2 from '../assets/Team Members/team2.jpg';
import team3 from '../assets/Team Members/team3.jpg';
import team4 from '../assets/Team Members/team4.jpg';
import team5 from '../assets/Team Members/team5.jpg';
import team6 from '../assets/Team Members/team6.jpg';
import team7 from '../assets/Team Members/team7.jpg';
import team8 from '../assets/Team Members/team8.jpg';
import team9 from '../assets/Team Members/team9.jpg';
import team10 from '../assets/Team Members/team10.jpg';
import team11 from '../assets/Team Members/team11.jpg';
import team12 from '../assets/Team Members/team12.jpg';


const TeamSection = () => {
  // Array of team member images
  // In a real app, you would have more images and possibly name/title information
  const teamMembers = [
    { id: 1, image: team1 },
    { id: 2, image: team2 },
    { id: 3, image: team3 },
    { id: 4, image: team4 },
    { id: 5, image: team5 },
    { id: 6, image: team6 },
    { id: 7, image: team7 },
    { id: 8, image: team8 },
    { id: 9, image: team9 },
    { id: 10, image: team10 },
    { id: 11, image: team11 },
    { id: 12, image: team12 },
    // Duplicate the first set of images to create a seamless loop effect
    { id: 13, image: team1 },
    { id: 14, image: team2 },
    { id: 15, image: team3 },
    { id: 16, image: team4 },
    { id: 17, image: team5 },
    { id: 18, image: team6 },
    { id: 19, image: team7 },
    { id: 20, image: team8 },
    { id: 21, image: team9 },
    { id: 22, image: team10 },
    { id: 23, image: team11 },
    { id: 24, image: team12 },
  ];
  
  const scrollRef = useRef(null);
  
  // Set up the automatic scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    
    // Clone the first set of items and append them to create an infinite loop illusion
    const scroll = () => {
      if (scrollContainer) {
        // If we've scrolled to the duplicated set, reset to the beginning without animation
        if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth - scrollContainer.clientWidth) / 2) {
          scrollContainer.style.transition = 'none';
          scrollContainer.scrollLeft = 0;
          // Force reflow to make the transition reset work
          void scrollContainer.offsetHeight;
          scrollContainer.style.transition = 'scroll-left 0.5s ease';
        }
        
        // Otherwise, keep scrolling
        scrollContainer.scrollLeft += 1;
      }
    };
    
    // Set interval for the scroll
    const scrollInterval = setInterval(scroll, 10); // Faster scroll speed (reduced from 20ms to 10ms)
    
    // Clean up the interval
    return () => clearInterval(scrollInterval);
  }, []);
  
  return (
    <div className="team-section">
      <div className="team-content">
        <h3 className="section-subtitle">INTERNATIONAL COLLABORATION</h3>
        <h2 className="section-title">Our Global Team</h2>
        
        <p className="team-description">
          Our team works remotely around the world 🌎, with members in the ESTONIA, 
          INDIA, and more.
        </p>
      </div>
      
      <div className="team-slider-container">
        <div className="team-slider" ref={scrollRef}>
          {teamMembers.map((member) => (
            <div className="team-member" key={member.id}>
              <div className="team-member-image-container">
                <img src={member.image} alt={`Team member ${member.id}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection; 
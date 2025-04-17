import React, { useRef } from 'react';
import TeamSection from '../components/TeamSection';
import Intro from '../components/Intro';
import AboutSection from '../components/AboutSection';
import ValuesSection from '../components/ValuesSection';
import './Team.css';

const Team = () => {
  const teamSectionRef = useRef(null);

  const scrollToTeamSection = () => {
    teamSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="team-page">
      <div className="page-content">
        <div className="intro-container">
          <Intro 
            title="Meet Our Global Team" 
            subtitle="Dedicated professionals working together across the world" 
          />
          <div className="scroll-down-container">
            <div className="scroll-down-arrow" onClick={scrollToTeamSection}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <AboutSection />
        <div ref={teamSectionRef}>
          <TeamSection />
        </div>
        <ValuesSection />
      </div>
    </div>
  );
};

export default Team; 
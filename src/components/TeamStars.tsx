import React from 'react';
import './TeamStars.css';
import royImage from '../assets/team/roy.jpg';
import tatzImage from '../assets/team/tatz.jpg';
import spImage from '../assets/team/sp.jpg';
import sayanImage from '../assets/team/sayan.jpg';
import sahiraImage from '../assets/team/sahira.jpg';
import shubhamayImage from '../assets/IMG_22851.jpg';

const TeamStars = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Roy',
      title: '(Founder/Director)',
      image: shubhamayImage,
      achievements: [
        '14+ yrs in IT (India & Europe) – Accenture, Tata, CTS & startups',
        '2x Blockchain Hackathon Winner (Ideation & BA)',
        'Salesforce Application Architect | 10 yrs in CRM (Retail, Energy, Fintech)',
        'Keynote Speaker – TBS Show\'24, Singapore',
        'IIM Lucknow Alumni'
      ]
    },
    {
      id: 2,
      name: 'Tatz',
      title: '(CTO)',
      image: shubhamayImage,
      achievements: [
        '14+ yrs in IT – Tata, Accenture & more',
        'MSc, Artificial Intelligence (University of Milan, 2022-24)',
        '2x Global Blockchain Hackathon Winner',
        'Expert in LLM models'
      ]
    },
    {
      id: 3,
      name: 'SP',
      title: '(CFO)',
      image: shubhamayImage,
      achievements: [
        '15+ years of experience in R&D, innovation, product development, startups & project management',
        'PhD – Aarhus University (QS Rank: 113)',
        'Expertise in Tech, Entrepreneurship & Innovation',
        'Passionate about Climate Change, EdTech, Digitalization & AI'
      ]
    },
    {
      id: 4,
      name: 'S Chatterjee',
      title: '(UX and Product)',
      image: shubhamayImage,
      achievements: [
        'Sayan is highly proficient in UX and design skills and is always thinking about ways to ease user experience. He has graduated with a degree in Bsc. in Design and considers himself to be a degen.'
      ]
    },
    {
      id: 5,
      name: 'Sahira Gupta',
      title: '(Digital Marketing)',
      image: shubhamayImage,
      achievements: [
        'Sahira is working as an influencer and is highly enthusiastic about blockchain and bringing benefits back to businesses with digital assets'
      ]
    },
    {
      id: 6,
      name: 'Shubhamay Paria',
      title: '(Video Editor)',
      image: shubhamayImage,
      achievements: [
        'Shubhamoy has a strong acumen to make videos that stand out and bring in virality. He is a content creator from the GenZ times and is a pro crypto'
      ]
    },
    {
        id: 8,
        name: 'Souvik Basu',
        title: '(Software Developer)',
        image: shubhamayImage,
        achievements: [
        'Young Soul passionate about Blockchain and AI',
        'B.Tech, Computer Science And Design (University of Milan, 2022-24)',
        'Expert in LLM models'
        ]
      }
  ];

  return (
    <div className="team-stars-section">
      <div className="team-stars-container">
        <div className="team-stars-header">
          <h2 className="team-stars-title">The Rockstars of GLL</h2>
        </div>
        
        <div className="team-stars-grid">
          {teamMembers.map((member) => (
            <div className="team-member-card" key={member.id}>
              <div className="member-image-container">
                <img src={member.image} alt={member.name} className="member-image" />
              </div>
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-title">{member.title}</p>
              </div>
              <ul className="member-achievements">
                {member.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamStars;
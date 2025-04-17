import React from 'react';
import './GuidingPrinciples.css';
import { FaBullseye, FaHeart, FaHandshake, FaFlag, FaLessThan, FaUsers } from 'react-icons/fa';

const GuidingPrinciples = () => {
  const principles = [
    {
      id: 1,
      icon: <FaBullseye />,
      title: "ALLOW OKRs TO GUIDE US"
    },
    {
      id: 2,
      icon: <FaHeart />,
      title: "ASSUME POSITIVE INTENT"
    },
    {
      id: 3,
      icon: <FaHandshake />,
      title: "AGREE TO DISAGREE & COMMIT"
    },
    {
      id: 4,
      icon: <FaFlag />,
      title: "SET NEW PRECEDENTS"
    },
    {
      id: 5,
      icon: <FaLessThan />,
      title: "ACCOMPLISH MORE WITH LESS"
    },
    {
      id: 6,
      icon: <FaUsers />,
      title: "HOLD YOURSELF & OTHERS TO HIGH STANDARDS"
    },
    {
      id: 6,
      icon: <FaUsers />,
      title: "HOLD YOURSELF & OTHERS TO HIGH STANDARDS"
    },
    {
      id: 6,
      icon: <FaUsers />,
      title: "HOLD YOURSELF & OTHERS TO HIGH STANDARDS"
    },
    {
      id: 6,
      icon: <FaUsers />,
      title: "HOLD YOURSELF & OTHERS TO HIGH STANDARDS"
    }
  ];

  return (
    <section className="principles-section">
      <div className="principles-container">
        <h3 className="principles-subtitle">GUIDING PRINCIPLES</h3>
        <h2 className="principles-title">Our Norms</h2>
        
        <div className="principles-grid">
          {principles.map(principle => (
            <div key={principle.id} className="principle-card">
              <div className="principle-icon-wrapper">
                {principle.icon}
              </div>
              <h3 className="principle-title">{principle.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuidingPrinciples; 
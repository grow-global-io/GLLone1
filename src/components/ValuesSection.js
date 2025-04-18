import React, { useEffect, useRef } from 'react';
import './ValuesSection.css';
import {
  FcKey,
  FcIdea,
  FcWorkflow,
  FcSynchronize,
  FcShipped,
  FcRating
} from 'react-icons/fc';

const ValuesSection = () => {
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const subtitleEl = subtitleRef.current;
    const titleEl = titleRef.current;
    const contentEl = contentRef.current;
    const imageEl = imageRef.current;

    // Example animation classes or manipulations
    subtitleEl?.classList.add('fade-in');
    titleEl?.classList.add('slide-in');
    contentEl?.classList.add('reveal');
    imageEl?.classList.add('float-in');

    return () => {
      subtitleEl?.classList.remove('fade-in');
      titleEl?.classList.remove('slide-in');
      contentEl?.classList.remove('reveal');
      imageEl?.classList.remove('float-in');
    };
  }, []);

  const values = [
    {
      id: 1,
      icon: <FcRating />,
      title: "ACCOUNTABLE",
      subtitle: "We are:",
      points: [
        "Responsible",
        "Trustworthy",
        "Self-disciplined",
        "Consistent",
        "Transparent Communicators"
      ]
    },
    {
      id: 2,
      icon: <FcSynchronize />,
      title: "ACTION-DRIVEN",
      subtitle: "As a team we:",
      points: [
        "Identify what is most important",
        "Agree on scope",
        "Timely execute",
        "Drive the greatest impact"
      ]
    },
    {
      id: 3,
      icon: <FcShipped />,
      title: "CARING",
      subtitle: "We care about:",
      points: [
        "Ourselves and others",
        "Our business & craft",
        "Our Mission & Vision",
        "Being passionate in heart & mind"
      ]
    },
    {
      id: 4,
      icon: <FcIdea />,
      title: "CURIOUS",
      subtitle: "We focus on:",
      points: [
        "The 'why'",
        "Learning and expanding our knowledge",
        "Exploring new ideas",
        "Making things better"
      ]
    },
    {
      id: 5,
      icon: <FcWorkflow />,
      title: "THOROUGH",
      subtitle: "Our work is:",
      points: [
        "Thoughtful",
        "Impactful",
        "Timely",
        "Accurate",
        "Complete"
      ]
    },
    {
      id: 6,
      icon: <FcKey />,
      title: "RESOURCEFUL",
      subtitle: "We thrive by:",
      points: [
        "Solving problems creatively",
        "Maximizing what we have",
        "Helping others succeed",
        "Adapting to change quickly"
      ]
    }
  ];

  return (
    <section className="values-section" ref={contentRef}>
      <div className="values-container">
        <p className="section-subtitle" ref={subtitleRef}>HOW WE WORK</p>
        <h2 className="section-title" ref={titleRef}>Our Values</h2>
        <br /><br />

        <div className="values-grid">
          {values.map((value) => (
            <div className="value-card" key={value.id}>
              <div className="value-icon" ref={imageRef}>{value.icon}</div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-subtitle">{value.subtitle}</p>
              <ul className="value-points">
                {value.points.map((point, index) => (
                  <li key={index}>
                    <span className="bullet">•</span>
                    <span className="point-text">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;

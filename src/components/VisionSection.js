import React, { useEffect, useRef } from 'react';
import './VisionSection.css';
import visionImage from '../assets/IMG_22851.jpg';

const VisionSection = () => {
  const sectionRef = useRef(null);
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  // Handle scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe elements for animation
    if (subtitleRef.current) observer.observe(subtitleRef.current);
    if (titleRef.current) observer.observe(titleRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (subtitleRef.current) observer.unobserve(subtitleRef.current);
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section className="vision-section" ref={sectionRef}>
      <div className="vision-container">
        <div className="vision-content">
          <h3 className="vision-subtitle animate-element" ref={subtitleRef}>OUR VISION</h3>
          
          <h2 className="vision-title animate-element" ref={titleRef}>
            Wealth-building<br />
            opportunities for all
          </h2>
          
          <div className="vision-description animate-element" ref={contentRef}>
            <p>
              On average, people spend 25% of their waking 
              hours on devices — generating huge profits for 
              tech companies worldwide.
            </p>
            
            <p>
              At Mode, we believe users deserve a share of 
              the wealth they help create through their 
              attention and data.
            </p>
          </div>
        </div>
        
        <div className="vision-image-container animate-element" ref={imageRef}>
          <div className="vision-image-wrapper">
            <img 
              src={visionImage} 
              alt="Person using smartphone" 
              className="vision-image" 
            />
          </div>
          <div className="image-decoration"></div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection; 
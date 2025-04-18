import React, { useEffect, useRef } from 'react';
import './VisionSection.css';
import visionImage from '../assets/IMG_22851.jpg';

const VisionSection = () => {
  const sectionRef = useRef(null);
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const secondContentRef = useRef(null);

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

    // Store references to current DOM elements
    const subtitleElement = subtitleRef.current;
    const titleElement = titleRef.current;
    const contentElement = contentRef.current;
    const secondContentElement = secondContentRef.current;

    // Observe elements for animation
    if (subtitleElement) observer.observe(subtitleElement);
    if (titleElement) observer.observe(titleElement);
    if (contentElement) observer.observe(contentElement);
    if (secondContentElement) observer.observe(secondContentElement);

    return () => {
      // Use stored references in cleanup
      if (subtitleElement) observer.unobserve(subtitleElement);
      if (titleElement) observer.unobserve(titleElement);
      if (contentElement) observer.unobserve(contentElement);
      if (secondContentElement) observer.unobserve(secondContentElement);
    };
  }, []);

  return (
    <section className="vision-section" ref={sectionRef}>
      <div className="vision-container">
        <div className="vision-content">
          <h3 className="vision-subtitle animate-element" ref={subtitleRef}>OUR VISION</h3>
          
          <h2 className="vision-title animate-element" ref={titleRef}>
          How You Get Started 
          <br />
          with GLL.one
          </h2>
          
          <div className="vision-description animate-element" ref={contentRef}>
            <p>
            ✅ Step 1: Click "Get Started"
Start your journey by signing up using your email or Metamask wallet — no friction, just options.
<br/>
<br/>
✅ Step 2: Set Up Your Business Profile
Once you're in, complete a quick KYB (Know Your Business) to get verified.
<br/><br/>
✅ Step 3: Get Your GLL ID (On-Chain)
You're issued a unique, globally verifiable GLL ID, secured on the XDC Blockchain — this becomes your passport for global trade.
            <br/><br/>
✅ Step 4: Explore Your Dashboard
Now, you unlock your personalized MSME dashboard with access to the entire GLL ecosystem:
<br/><br/>
🧠 AI Agents for finance, growth, and operational advice
<br/><br/>
🤝 Business Matchmaking to connect with global B2B partners
<br/><br/>
💳 Fintech Gateway to access working capital & digital asset payments
<br/><br/>
🧾 Smart tools like e-signing, invoice creation, and AR product experiences
<br/><br/>
            </p>
            <p>
            ✅ Step 5: Earn GLL Ions as You Work
            Every action you take — uploading invoices, adding products, referring others — earns you GLL Ions, our native rewards currency.
            </p>
          </div>
        </div>
        
        <div className="vision-content second-vision-content animate-element" ref={secondContentRef}>
          <div className="vision-description">
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default VisionSection;
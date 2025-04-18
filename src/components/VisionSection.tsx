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
          How You Get Started 
          <br />
          with GLL.one
          </h2>
          
          <div className="vision-description animate-element" ref={contentRef}>
            <p>
            ✅ Step 1: Click “Get Started”
Start your journey by signing up using your email or Metamask wallet — no friction, just options.
<br/>
<br/>
✅ Step 2: Set Up Your Business Profile
Once you're in, complete a quick KYB (Know Your Business) to get verified.
<br/><br/>
✅ Step 3: Get Your GLL ID (On-Chain)
You’re issued a unique, globally verifiable GLL ID, secured on the XDC Blockchain — this becomes your passport for global trade.
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
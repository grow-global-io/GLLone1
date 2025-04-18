import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header2.css';


const Header2 = () => {
  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 11,
    minutes: 8,
    seconds: 57
  });

  // Update countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { days, hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 23;
              if (days > 0) {
                days -= 1;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="header2">
      {/* Black bar with countdown timer */}
      <div className="timer-bar">
        <div className="countdown-container">
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.days}</span>
            <span className="countdown-label">days</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.hours}</span>
            <span className="countdown-label">hr</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.minutes}</span>
            <span className="countdown-label">min</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.seconds}</span>
            <span className="countdown-label">sec</span>
          </div>
        </div>
        <div className="share-price-btn">
          <button>Share Price Change</button>
        </div>
      </div>
      
      {/* Purple bar with contact info */}
      <div className="contact-bar">
        <div className="contact-container">
          <div className="contact-item">
            <span className="calendar-icon">📅</span>
            <a href="#schedule">Schedule Meeting</a>
          </div>
          <div className="contact-item">
            <span className="phone-icon">📞</span>
            <a href="tel:1-844-300-MODE">1-(844) 300-MODE</a>
          </div>
          <div className="contact-item">
            <span className="email-icon">📧</span>
            <a href="mailto:invest@modemobile.com">invest@modemobile.com</a>
          </div>
        </div>
      </div>
      
      {/* Main navigation bar */}
      <div className="main-nav">
        <div className="nav-container">
          <div className="logo-container">
            <Link to="/">
              <div className="mode-logo">
                <span className="mode-text">m<span className="mode-o">o</span>de</span>
                <span className="mobile-text">mobile</span>
              </div>
            </Link>
          </div>
          
          <nav className="investment-nav">
            <ul>
              <li><Link to="/vision">Vision</Link></li>
              <li><Link to="/traction">Traction</Link></li>
              <li><Link to="/growth">Growth</Link></li>
              <li><Link to="/team">Team</Link></li>
              <li>
                <Link to="/invest" className="invest-now-btn">
                  Invest Now
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header2; 
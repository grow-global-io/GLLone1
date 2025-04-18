import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGll } from "./GLLContext";
import './index.css';

// Import all card components
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import Card3 from './components/Card3';
import Card4 from './components/Card4';
import Card5 from './components/Card5';
import Card6 from './components/Card6';
import Card7 from './components/Card7';
import Card8 from './components/Card8';
import Card9 from './components/Card9';
import MyBalanceQuick from '../../components/registration/MyBalanceQuick';

interface RewardCard {
  title: string;
  description: string;
  reward: number;
  image: string;
  componentName: string;
}

const rewardCards: RewardCard[] = [
  {
    title: 'Provide Your Past Financial History',
    description: 'Upload your P&L, balance sheet or cashflow docs to help unlock financing opportunities.',
    reward: 100,
    image: 'https://cdn-icons-png.flaticon.com/512/3209/3209029.png',
    componentName: 'Card1'
  },
  {
    title: 'Connect Your Amazon/FB Store',
    description: 'Link your store to bring traceability and earn rewards.',
    reward: 500,
    image: 'https://cdn-icons-png.flaticon.com/512/720/720275.png',
    componentName: 'Card2'
  },
  {
    title: 'Upload Your Certificates',
    description: 'Submit ISO, FSSAI, or other business certifications.',
    reward: 800,
    image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    componentName: 'Card3'
  },
  {
    title: 'Register & Verify MSME',
    description: 'Complete your MSME profile with UCI & KYC.',
    reward: 100,
    image: 'https://cdn-icons-png.flaticon.com/512/942/942748.png',
    componentName: 'Card4'
  },
  {
    title: 'Submit Your First Invoice',
    description: 'Upload unpaid invoices to earn GLL and access credit.',
    reward: 100,
    image: 'https://cdn-icons-png.flaticon.com/512/4371/4371855.png',
    componentName: 'Card5'
  },
  {
    title: 'Refer Another MSME',
    description: 'Invite MSMEs and both of you earn GLL Ions.',
    reward: 100,
    image: 'https://cdn-icons-png.flaticon.com/512/10564/10564430.png',
    componentName: 'Card6'
  },
  {
    title: 'Post Business Story',
    description: 'Upload image + 280-char caption to tell your story.',
    reward: 100,
    image: 'https://cdn-icons-png.flaticon.com/512/6817/6817034.png',
    componentName: 'Card7'
  },
  {
    title: 'Add a Traceable Product',
    description: 'Register a product with GTIN/UCI and earn GLL.',
    reward: 90,
    image: 'https://cdn-icons-png.flaticon.com/512/8474/8474021.png',
    componentName: 'Card8'
  },
  {
    title: 'Connect Your Socials',
    description: 'Link Facebook, Instagram and LinkedIn for rewards.',
    reward: 300,
    image: 'https://cdn-icons-png.flaticon.com/512/4922/4922964.png',
    componentName: 'Card9'
  }
];

const RewardsPage: React.FC = () => {
  const navigate = useNavigate();
  const { gllBalance, setGllBalance } = useGll();

  const [selectedTask, setSelectedTask] = useState<RewardCard | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [loginInput, setLoginInput] = useState<{ username: string; password: string }>({ username: '', password: '' });
  const [fadeIn, setFadeIn] = useState<boolean>(false);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 300);
  }, []);

  const handleEngage = (task: RewardCard) => {
    console.log(task);
    setSelectedTask(task);
  };

  const handleStart = () => {
    if (!selectedTask) return;
  
    const { reward, componentName } = selectedTask;
    const newBalance = gllBalance + reward;
  
    setGllBalance(newBalance);
    localStorage.setItem('gll_balance', newBalance.toString());
  
    navigate(`/rewards/${componentName.toLowerCase()}`, {
      state: {
        task: selectedTask,
        componentName
      }
    });
  };

  return (
    <div className="dashboard-container">
      <MyBalanceQuick points={10} />
      {/* <div className="header">
        <img src="https://i.ibb.co/LhgVnSVq/Image-13-4-2025-at-12-33.jpg" alt="GLL Logo" className="logo" />
        <div className="dropdown-container">
          <button
            onClick={() => setShowDropdown(prev => !prev)}
            className="login-button"
          >
            {isLoggedIn ? `🪙 ${gllBalance} GLL` : 'Login'}
          </button>
          {showDropdown && (
            <div className="dropdown-menu">
              {isLoggedIn ? (
                <div className="text-center">
                  <p className="welcome-text">Welcome back, demo!</p>
                  <button
                    onClick={() => {
                      setIsLoggedIn(false);
                      localStorage.removeItem('gll_isLoggedIn');
                      localStorage.removeItem('gll_balance');
                      setGllBalance(0);
                      setShowDropdown(false);
                    }}
                    className="logout-button"
                  >Logout</button>
                </div>
              ) : (
                <>
                  <input
                    placeholder="Username"
                    className="input-field"
                    onChange={(e) => setLoginInput({ ...loginInput, username: e.target.value })}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="input-field"
                    onChange={(e) => setLoginInput({ ...loginInput, password: e.target.value })}
                  />
                  <button
                    onClick={() => {
                      if (loginInput.username === 'demo' && loginInput.password === 'demo') {
                        setIsLoggedIn(true);
                        localStorage.setItem('gll_isLoggedIn', 'true');
                        setShowDropdown(false);
                      }
                    }}
                    className="login-submit-button"
                  >Login</button>
                </>
              )}
            </div>
          )}
        </div>
      </div> */}

      <div className={`hero-section ${fadeIn ? 'fade-in' : 'fade-out'}`}>
        <h1 className="hero-title">Earn GLL Ions. Rewards For MSMEs To Connect, Collaborate And Thrive Globally</h1>
        <p className="hero-description">
          Turn your business into a growth engine with the GLL Ions Program. Earn GLL Ions by doing what you already do—sending invoices, verifying your MSME, sharing your story—and use them to unlock AI tools, smart contracts, and global business connections. It's time to gamify your hustle, grow your network, and turn actions into real rewards. Do business. Earn GLL. Grow limitlessly.
        </p>
        <button className="hero-button">How it Works</button>
      </div>

      <div className="card-grid">
        {rewardCards.map((card, index) => (
          <div key={index} className="card">
            <img src={card.image} alt={card.title} className="card-image" />
            <h2 className="card-title">{card.title}</h2>
            <p className="card-description">{card.description}</p>
            <div className="card-footer">
              <span className="reward-badge">+{card.reward} GLL</span>
              <button onClick={() => handleEngage(card)} className="engage-button">Engage</button>
            </div>
          </div>
        ))}
      </div>

      {selectedTask && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="modal-title">{selectedTask.title}</h2>
            <p className="modal-description">{selectedTask.description}</p>
            <button onClick={() => handleStart()} className="start-button">Start Now</button>
            <button onClick={() => setSelectedTask(null)} className="cancel-button">Cancel</button>
          </div>
        </div>
      )}

      
    </div>
  );
};

export default RewardsPage;



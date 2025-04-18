import React, { useState, useEffect } from 'react';
import './Card1.css';
import { useGll } from '../GLLContext';

interface RewardCard {
  title: string;
  description: string;
  reward: number;
  image: string;
}

const rewardCards: RewardCard[] = [
  {
    title: 'Register & Verify MSME',
    description: 'Complete your MSME profile with UCI & KYC.',
    reward: 100,
    image: 'https://cdn-icons-png.flaticon.com/512/942/942748.png'
  },
  // {
  //   title: 'Submit Your First Invoice',
  //   description: 'Digitize and record your first invoice with traceability.',
  //   reward: 50,
  //   image: 'https://cdn-icons-png.flaticon.com/512/4371/4371855.png'
  // },
  // {
  //   title: 'Refer Another MSME',
  //   description: 'Invite an MSME and help them join the GVC program.',
  //   reward: 75,
  //   image: 'https://cdn-icons-png.flaticon.com/512/10564/10564430.png'
  // }
];

interface FormData {
  businessName: string;
  gstin: string;
  businessType: string;
  city: string;
  state: string;
}

const Card1: React.FC = () => {
  const { gllBalance, setGllBalance } = useGll();
  const [selectedTask, setSelectedTask] = useState<RewardCard | null>(null);
  const [fadeIn, setFadeIn] = useState<boolean>(false);
  const [formProgress, setFormProgress] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>({
    businessName: '',
    gstin: '',
    businessType: '',
    city: '',
    state: ''
  });
  const [showToast, setShowToast] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 300);
  }, []);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleEngage = (task: RewardCard) => {
    setSelectedTask(task);
    setFormProgress(0);
    setFormData({ businessName: '', gstin: '', businessType: '', city: '', state: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      const filledCount = Object.values(updated).filter(Boolean).length;
      setFormProgress(filledCount * 20);
      return updated;
    });
  };

  const handleSubmit = () => {
    if (formProgress === 100 && selectedTask) {
      setGllBalance((prev) => prev + selectedTask.reward);
      setShowToast(true);
      setSelectedTask(null);
    }
  };

  return (
    <div className="card-container">
      {/* <div className="card-header">
        <img src="https://i.ibb.co/LhgVnSVq/Image-13-4-2025-at-12-33.jpg" alt="GLL Logo" className="logo" />
        <div className="balance-badge">
          🪙 GLL Balance: {gllBalance}
        </div>
      </div> */}

      <div className="card-grid">
        {rewardCards.map((card, index) => (
          <div
            key={index}
            className="card-item"
          >
            {/* <img src={card.image} alt={card.title} className="card-image" /> */}
            <h2 className="card-title">Provide Your Past Financial History</h2>
            <p className="card-description">Upload your P&L, balance sheet or cashflow docs to help unlock financing opportunities.</p>
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
            <h2 className="modal-title">Provide Your Past Financial History</h2>
            <p className="modal-description">Upload your P&L, balance sheet or cashflow docs to help unlock financing opportunities.</p>
            <div className="progress-bar-container">
              <span className="progress-text">Progress: {formProgress}%</span>
              <span className="ions-text">GLL Ions</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${formProgress}%` }}></div>
            </div>
            <div className="form-container">
              <input name="businessName" value={formData.businessName} onChange={handleChange} className="input-field" placeholder="Provide History Details" />
              <input name="gstin" value={formData.gstin} onChange={handleChange} className="input-field" placeholder="GSTIN" />
              <input name="businessType" value={formData.businessType} onChange={handleChange} className="input-field" placeholder="Business Type Name" />
              <input name="city" value={formData.city} onChange={handleChange} className="input-field" placeholder="Add Financial History" />
              <input name="state" value={formData.state} onChange={handleChange} className="input-field" placeholder="Review & Submit" />
            </div>
            <div className="modal-footer">
              <button 
                onClick={handleSubmit} 
                disabled={formProgress !== 100} 
                className={`submit-button ${formProgress === 100 ? 'enabled' : 'disabled'}`}
              >
                Mark as Completed
              </button>
              <button onClick={() => setSelectedTask(null)} className="cancel-button">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {showToast && (
        <div className="toast">
          <span className="toast-icon">🎉</span>
          <p className="toast-text">Congrats! 100 GLL Ions added to your balance.</p>
        </div>
      )}

      
    </div>
  );
};

export default Card1;



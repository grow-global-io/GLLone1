import React, { useState, useEffect } from 'react';
import { useGll } from '../GLLContext';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

interface RewardCard {
  title: string;
  description: string;
  reward: number;
}

const rewardCards: RewardCard[] = [
  {
    title: 'Register & Verify MSME',
    description: 'Complete your MSME profile with UCI & KYC.',
    reward: 100,
  }
];

interface FormData {
  businessName: string;
  gstin: string;
  businessType: string;
  city: string;
  state: string;
}

const Card6: React.FC = () => {
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

  const handleSubmit = (): void => {
    if (formProgress === 100 && selectedTask) {
      setGllBalance((prev) => prev + selectedTask.reward);
      setShowToast(true);
      setSelectedTask(null);
    }
  };

  return (
    <div className="p-6 bg-[#f5f3ff] min-h-screen flex flex-col">
      <div className="flex-grow mt-36">
        <div className="flex justify-between items-center mb-6">
          <img src="https://i.ibb.co/LhgVnSVq/Image-13-4-2025-at-12-33.jpg" alt="GLL Logo" className="h-16" />
          <div className="text-purple-800 font-bold text-lg bg-purple-100 px-4 py-2 rounded-full">
            🪙 GLL Balance: {gllBalance}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rewardCards.map((card, index) => (
            <div
              key={index}
              className="bg-purple-100 rounded-xl shadow-md p-4 border border-purple-300"
            >
              <button onClick={() => handleEngage(card)} className="text-xl m-auto px-3 py-1 bg-purple-800 text-white rounded-md font-medium">Click to Confirm</button>
            </div>
          ))}
        </div>

        {selectedTask && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-white w-[90%] max-w-lg rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-purple-800 mb-4">{"Refer Another MSME"}</h2>
              <p className="text-sm text-gray-600 mb-4">Invite MSMEs and both of you earn GLL Ions.</p>
              <div className="mb-2 flex justify-between items-center">
                <span className="text-sm font-medium text-purple-700">Progress: {formProgress}%</span>
                <span className="text-sm text-purple-500 italic">GLL Ions</span>
              </div>
              <div className="mb-4 h-3 bg-purple-100 rounded-full overflow-hidden">
                <div className="bg-purple-600 h-full transition-all" style={{ width: `${formProgress}%` }}></div>
              </div>
              <div className="grid gap-3">
                <input name="businessName" value={formData.businessName} onChange={handleChange} className="border p-2 rounded" placeholder="UCI Number" />
                <input name="gstin" value={formData.gstin} onChange={handleChange} className="border p-2 rounded" placeholder="MSME UCI ID" />
                <input name="businessType" value={formData.businessType} onChange={handleChange} className="border p-2 rounded" placeholder="Unique Customer ID" />
                <input name="city" value={formData.city} onChange={handleChange} className="border p-2 rounded" placeholder="City" />
                <input name="state" value={formData.state} onChange={handleChange} className="border p-2 rounded" placeholder="State" />
              </div>
              <div className="flex justify-between items-center mt-6">
                <button onClick={handleSubmit} disabled={formProgress !== 100} className={`px-4 py-2 rounded text-white ${formProgress === 100 ? 'bg-purple-700 hover:bg-purple-800' : 'bg-gray-400 cursor-not-allowed'}`}>Mark as Completed</button>
                <button onClick={() => setSelectedTask(null)} className="text-sm text-purple-600 underline">Cancel</button>
              </div>
            </div>
          </div>
        )}

        {showToast && (
          <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-white border border-purple-300 px-6 py-4 rounded-xl shadow-xl z-50 flex items-center gap-3 animate-fade-in-up">
            <span className="text-xl">🎉</span>
            <p className="text-purple-800 font-semibold">Congrats! 100 GLL Ions added to your balance.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card6;



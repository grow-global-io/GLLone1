// Full working code with homepage and card 7 - Connect Your Socials
import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { useGll } from '../GLLContext';

interface RewardCard {
  title: string;
  description: string;
  reward: number;
  id: string;
}

interface LoginInput {
  username: string;
  password: string;
}

interface SocialConnections {
  facebook: boolean;
  instagram: boolean;
  linkedin: boolean;
}

const rewardCards: RewardCard[] = [
  {
    title: 'Connect Your Socials',
    description: 'Link your Facebook, Instagram, and LinkedIn to earn GLL Ions.',
    reward: 300,
    id: 'connect-socials',
  }
];

const Card9: React.FC = () => {
  const { gllBalance, setGllBalance } = useGll();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [loginInput, setLoginInput] = useState<LoginInput>({ username: '', password: '' });
  const [pendingSubmission, setPendingSubmission] = useState<boolean>(false);
  const [selectedTask, setSelectedTask] = useState<RewardCard | null>(null);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');

  const [connectedSocials, setConnectedSocials] = useState<SocialConnections>({ 
    facebook: false, 
    instagram: false, 
    linkedin: false 
  });

  const handleLogin = (): void => {
    if (loginInput.username === 'demo' && loginInput.password === 'demo') {
      setIsLoggedIn(true);
      setShowLogin(false);
      if (pendingSubmission) {
        setPendingSubmission(false);
        handleSubmit();
      }
    }
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleEngage = (task: RewardCard): void => {
    setSelectedTask(task);
    setConnectedSocials({ facebook: false, instagram: false, linkedin: false });
  };

  const simulateConnect = (platform: keyof SocialConnections): void => {
    setConnectedSocials((prev) => ({ ...prev, [platform]: true }));
  };

  const handleSubmit = (): void => {
    if (!isLoggedIn) {
      setShowLogin(true);
      setPendingSubmission(true);
      return;
    }
    const allConnected = Object.values(connectedSocials).every(Boolean);
    if (allConnected) {
      setGllBalance((prev) => prev + 300);
      setToastMessage('🔗 All socials connected! +300 GLL Ions');
      setShowToast(true);
      setSelectedTask(null);
    }
  };

  return (
    <div className="p-6 bg-[#f5f3ff] min-h-screen flex flex-col">
      <div className="flex-grow mt-36">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-purple-800">GLL Rewards Dashboard</h1>
          <div className="text-lg font-medium text-purple-700">GLL Ions: {gllBalance}</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rewardCards.map((card, index) => (
            <div key={index} className="bg-purple-100 rounded-xl shadow-md p-4 border border-purple-300">
                <button onClick={() => handleEngage(card)} className="text-xl px-3 py-1 bg-purple-800 text-white rounded-md font-medium">Click to Confirm</button>
              </div>
          ))}
        </div>
      </div>

      {selectedTask && selectedTask.id === 'connect-socials' && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-xl p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-purple-800 mb-3">Connect Your Social Accounts</h3>
            <p className="text-sm text-purple-700 mb-4">Securely connect your social handles to showcase your business and unlock GLL rewards. You'll earn 300 GLL Ions for completing all three.</p>
            <div className="grid gap-4">
              <button onClick={() => simulateConnect('facebook')} className={`flex items-center gap-3 px-4 py-2 border rounded ${connectedSocials.facebook ? 'bg-green-100 border-green-400' : 'bg-purple-50 border-purple-300'}`}>
                <FaFacebookF className="text-blue-600" /> {connectedSocials.facebook ? 'Facebook Connected ✅' : 'Connect Facebook'}
              </button>
              <button onClick={() => simulateConnect('instagram')} className={`flex items-center gap-3 px-4 py-2 border rounded ${connectedSocials.instagram ? 'bg-green-100 border-green-400' : 'bg-purple-50 border-purple-300'}`}>
                <FaInstagram className="text-pink-500" /> {connectedSocials.instagram ? 'Instagram Connected ✅' : 'Connect Instagram'}
              </button>
              <button onClick={() => simulateConnect('linkedin')} className={`flex items-center gap-3 px-4 py-2 border rounded ${connectedSocials.linkedin ? 'bg-green-100 border-green-400' : 'bg-purple-50 border-purple-300'}`}>
                <FaLinkedinIn className="text-blue-700" /> {connectedSocials.linkedin ? 'LinkedIn Connected ✅' : 'Connect LinkedIn'}
              </button>
            </div>
            <div className="flex justify-between mt-6">
              <button className="bg-purple-700 text-white px-4 py-2 rounded disabled:opacity-50" onClick={handleSubmit} disabled={!Object.values(connectedSocials).every(Boolean)}>Submit</button>
              <button className="text-purple-600 underline" onClick={() => setSelectedTask(null)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-[90%] max-w-sm">
            <h2 className="text-xl font-bold text-purple-800 mb-3">Login Required</h2>
            <input name="username" placeholder="Username" className="border p-2 rounded mb-2 w-full" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLoginInput({ ...loginInput, username: e.target.value })} />
            <input name="password" type="password" placeholder="Password" className="border p-2 rounded mb-4 w-full" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLoginInput({ ...loginInput, password: e.target.value })} />
            <button onClick={handleLogin} className="w-full bg-purple-700 hover:bg-purple-800 text-white py-2 rounded mb-3">Login</button>
            <p className="text-sm text-center text-gray-500 mb-2">or login with</p>
            <div className="flex justify-center gap-3 mb-4">
              <button className="text-xs text-white bg-blue-600 rounded px-3 py-1">Google</button>
              <button className="text-xs text-white bg-blue-800 rounded px-3 py-1">LinkedIn</button>
              <button className="text-xs text-white bg-gray-800 rounded px-3 py-1">Facebook</button>
            </div>
            <p className="text-xs text-center text-purple-600 underline cursor-pointer">New here? Register now</p>
          </div>
        </div>
      )}

      {showToast && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-white text-purple-800 font-medium px-6 py-3 border border-purple-400 rounded shadow z-50">
          {toastMessage}
        </div>
      )}

      
      
    </div>
  );
};

export default Card9;



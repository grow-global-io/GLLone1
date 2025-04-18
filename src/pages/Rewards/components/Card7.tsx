// Full working code with homepage and card 6 - Post Business Story
import React, { useState, useEffect } from 'react';
import { FaBuilding, FaBarcode, FaCode, FaTags, FaIndustry, FaGlobe, FaBalanceScale, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
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

interface FormData {
  caption?: string;
  [key: string]: string | undefined;
}

const rewardCards: RewardCard[] = [
  {
    title: 'Post Business Story',
    description: 'Upload image + 280-char caption and share your MSME story.',
    reward: 100,
    id: 'post-story',
  }
];

const Card7: React.FC = () => {
  const { gllBalance, setGllBalance } = useGll();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [loginInput, setLoginInput] = useState<LoginInput>({ username: '', password: '' });
  const [pendingSubmission, setPendingSubmission] = useState<boolean>(false);
  const [selectedTask, setSelectedTask] = useState<RewardCard | null>(null);
  const [formData, setFormData] = useState<FormData>({});
  const [certFile, setCertFile] = useState<File | null>(null);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');

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
    setFormData({});
    setCertFile(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files && e.target.files[0]) {
      setCertFile(e.target.files[0]);
    }
  };

  const handleSubmit = (): void => {
    if (!isLoggedIn) {
      setShowLogin(true);
      setPendingSubmission(true);
      return;
    }
    if (formData.caption && certFile) {
      const earned = 10 + 90;
      setGllBalance((prev) => prev + earned);
      setToastMessage(`📸 Story submitted! Your MSME story is now under review. +${earned} GLL Ions`);
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

        {selectedTask && selectedTask.id === 'post-story' && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-white w-full max-w-xl p-6 rounded-xl shadow-lg overflow-y-auto max-h-[90vh]">
              <h3 className="text-xl font-bold text-purple-800 mb-3">Post Your Business Story</h3>
              <p className="text-sm text-purple-700 mb-4">Tell the world about your MSME journey. Upload a photo and write a 280-character caption to inspire others and get featured. Earn GLL Ions for making your story heard!</p>
              <div className="w-full bg-purple-100 rounded-full h-2.5 mb-4">
                <div className="bg-purple-600 h-2.5 rounded-full transition-all duration-300" style={{ width: `${Math.min(100, Math.floor(((formData.caption ? 10 : 0) + (certFile ? 90 : 0)) / 100 * 100))}%` }}></div>
              </div>
              <div className="grid gap-4">
                <div className="flex flex-col border p-2 rounded">
                  <label className="text-sm text-purple-700 font-medium mb-1">Upload Image</label>
                  <input type="file" accept="image/*" onChange={handleFileUpload} className="text-sm" />
                </div>
                <div className="flex flex-col border p-2 rounded">
                  <label className="text-sm text-purple-700 font-medium mb-1">Your Story (Max 280 characters)</label>
                  <textarea 
                    name="caption" 
                    maxLength={280} 
                    placeholder="Share a short story about your business..." 
                    rows={4} 
                    className="w-full outline-none p-2 border rounded" 
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-between mt-6">
                <button className="bg-purple-700 text-white px-4 py-2 rounded" onClick={handleSubmit}>Submit</button>
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
    </div>
  );
};

export default Card7;



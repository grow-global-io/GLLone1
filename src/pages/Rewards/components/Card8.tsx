import React, { useState, useEffect } from 'react';
import { FaBuilding, FaBarcode, FaCode, FaTags, FaIndustry, FaGlobe, FaBalanceScale, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
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
  productName?: string;
  gtin?: string;
  uci?: string;
  category?: string;
  material?: string;
  origin?: string;
  [key: string]: string | undefined;
}

const rewardCards: RewardCard[] = [
  {
    title: 'Add a Traceable Product',
    description: 'Enter product details with UCI and GTIN to earn GLL Ions.',
    reward: 60,
    id: 'add-product',
  }
];

const Card8: React.FC = () => {
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
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
    if (formData.productName && formData.uci) {
      const gllProductId = 'GLL-' + Math.random().toString(36).substr(2, 6).toUpperCase();
      const earned = Object.values(formData).filter(Boolean).length * 10 + (certFile ? 30 : 0);
      setGllBalance((prev) => prev + earned);
      setToastMessage(`🎉 Product added! GLLProductId: ${gllProductId} | +${earned} GLL Ions`);
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
            <div key={index} className="bg-purple-100 rounded-xl m-auto h-5/6 w-5/6 shadow-md p-4 border border-purple-300">
              <div className="flex justify-between items-center m-auto">
                <button onClick={() => handleEngage(card)} className="m-auto text-xl px-3 py-1 bg-purple-800 text-white rounded-md font-medium">Click to Confirm</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedTask && selectedTask.id === 'add-product' && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-xl p-6 rounded-xl shadow-lg overflow-y-auto max-h-[90vh]">
            <h3 className="text-xl font-bold text-purple-800 mb-3">Add Product Details</h3>
            <p className="text-sm text-purple-700 mb-4">Earn GLL Ions for introducing your product to us. These Ions unlock access to our global manufacturer network and register your product on the XDC blockchain.</p>
            <div className="w-full bg-purple-100 rounded-full h-2.5 mb-4">
              <div className="bg-purple-600 h-2.5 rounded-full transition-all duration-300" style={{ width: `${Math.min(100, Math.floor(((Object.values(formData).filter(Boolean).length * 10 + (certFile ? 30 : 0)) / 90) * 100))}%` }}></div>
            </div>
            <div className="grid gap-4">
              <div className="flex items-center border p-2 rounded"><FaBuilding className="text-purple-700 mr-2" /><input name="productName" placeholder="Product Name" className="w-full outline-none" onChange={handleInputChange} /></div>
              <div className="flex items-center border p-2 rounded"><FaBarcode className="text-purple-700 mr-2" /><input name="gtin" placeholder="GTIN Code (optional)" className="w-full outline-none" onChange={handleInputChange} /></div>
              <div className="flex items-center border p-2 rounded"><FaCode className="text-purple-700 mr-2" /><input name="uci" placeholder="UCI Code (mandatory)" className="w-full outline-none" onChange={handleInputChange} /></div>
              <div className="flex items-center border p-2 rounded"><FaTags className="text-purple-700 mr-2" /><input name="category" placeholder="Category / Segment" className="w-full outline-none" onChange={handleInputChange} /></div>
              <div className="flex items-center border p-2 rounded"><FaIndustry className="text-purple-700 mr-2" /><input name="material" placeholder="Primary Material" className="w-full outline-none" onChange={handleInputChange} /></div>
              <div className="flex items-center border p-2 rounded"><FaGlobe className="text-purple-700 mr-2" /><input name="origin" placeholder="Country of Origin" className="w-full outline-none" onChange={handleInputChange} /></div>
              <div className="flex flex-col border p-2 rounded">
                <label className="text-sm text-purple-700 font-medium mb-1 flex items-center gap-2"><FaBalanceScale className="text-purple-700" />Certifications (PDF)</label>
                <input type="file" accept="application/pdf" onChange={handleFileUpload} className="text-sm" />
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
  );
};

export default Card8;



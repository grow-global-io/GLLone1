import React, { useState, useEffect } from 'react';
import { useGll } from '../GLLContext';

interface RewardCard {
  title: string;
  description: string;
  reward: number;
  id: string;
  image: string;
}

const rewardCards: RewardCard[] = [
  {
    title: 'Refer Another MSME',
    description: 'Invite an MSME and help them join the GVC program.',
    reward: 75,
    id: 'refer-msme',
    image: 'https://cdn-icons-png.flaticon.com/512/10564/10564430.png'
  }
];

const Card2: React.FC = () => {
  const { gllBalance, setGllBalance } = useGll();
  const [selectedTask, setSelectedTask] = useState<RewardCard | null>(null);
  const [fadeIn, setFadeIn] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [fileUploaded, setFileUploaded] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [loginInput, setLoginInput] = useState<{ username: string; password: string }>({ username: '', password: '' });

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
    setFormData({});
    setFileUploaded(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileUploaded(!!e.target.files?.length);
  };

  const isFutureDate = (dateStr: string): boolean => {
    const selectedDate = new Date(dateStr);
    const today = new Date();
    return selectedDate > today;
  };

  const isInvoiceFormValid = (): boolean => {
    return (
      !!formData.invoiceNumber &&
      !!formData.amount &&
      !!formData.date &&
      isFutureDate(formData.date) &&
      fileUploaded
    );
  };

  const handleLogin = (): void => {
    if (loginInput.username === 'demo' && loginInput.password === 'demo') {
      setIsLoggedIn(true);
      setShowLogin(false);
      handleSubmit();
    }
  };

  const handleSubmit = (): void => {
    if (!isLoggedIn) {
      setShowLogin(true);
      return;
    }
    if (selectedTask && selectedTask.id === 'submit-invoice' && isInvoiceFormValid()) {
      setGllBalance((prev) => prev + selectedTask.reward);
      setShowToast(true);
      setSelectedTask(null);
    }
  };

  return (
    <div className="p-6 bg-[#f5f3ff] min-h-screen relative">
      <div className="flex justify-between items-center mb-6">
        <img src="https://i.ibb.co/LhgVnSVq/Image-13-4-2025-at-12-33.jpg" alt="GLL Logo" className="h-16" />
        <div className="text-purple-800 font-bold text-lg bg-purple-100 px-4 py-2 rounded-full">
          🪙 GLL Balance: {gllBalance}
        </div>
      </div>

      

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rewardCards.map((card, index) => (
          <div key={index} className="bg-purple-100 rounded-xl shadow-md p-4 border border-purple-300">
            
              <button className="text-xl px-3 py-1 bg-purple-800 text-white rounded-md font-medium">Click to Connect your Ecommerce</button>
            </div>
        ))}
      </div>

      {selectedTask && selectedTask.id === 'submit-invoice' && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white w-[90%] max-w-md rounded-xl shadow-lg p-6 overflow-y-auto max-h-[90vh]">
            <h2 className="text-xl font-bold text-purple-800 mb-4">{selectedTask.title}</h2>
            <div className="text-sm text-gray-700 mb-4">
              <p className="text-purple-800 font-semibold mb-2">
                Upload your unpaid invoices to earn GLL Ions and get connected to finance partners who can help convert them into working capital.
              </p>
              <div className="flex justify-center items-center gap-4 mt-2">
                <img src="https://upload.wikimedia.org/wikipedia/en/4/4b/SIDBI_logo.png" alt="SIDBI" className="h-8" />
                <img src="https://transbnk.com/wp-content/uploads/2022/06/TransBnk-Logo.png" alt="TransBnk" className="h-8" />
                <img src="https://www.tvsmotor.com/images/tvs-credit-logo.png" alt="TVS Credit" className="h-8" />
              </div>
            </div>
            <div className="grid gap-4">
              <input name="invoiceNumber" onChange={handleInputChange} className="border p-2 rounded" placeholder="Invoice Number" />
              <input name="amount" type="number" onChange={handleInputChange} className="border p-2 rounded" placeholder="Amount (INR)" />
              <input name="date" type="date" onChange={handleInputChange} className="border p-2 rounded" />
              <label className="text-sm text-purple-700">Upload Single Invoice (PDF)</label>
              <input type="file" accept="application/pdf" onChange={handleFileChange} className="border p-2 rounded bg-white" />
              <label className="text-sm text-purple-700">Bulk Upload (multiple PDFs)</label>
              <input type="file" accept="application/pdf" multiple className="border p-2 rounded bg-white" />
            </div>
            <div className="flex justify-between items-center mt-6">
              <button onClick={handleSubmit} disabled={!isInvoiceFormValid()} className={`px-4 py-2 rounded text-white ${isInvoiceFormValid() ? 'bg-purple-700 hover:bg-purple-800' : 'bg-gray-400 cursor-not-allowed'}`}>Submit Invoice</button>
              <button onClick={() => setSelectedTask(null)} className="text-sm text-purple-600 underline">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-[90%] max-w-sm">
            <h2 className="text-xl font-bold text-purple-800 mb-3">Login Required</h2>
            <input name="username" placeholder="Username" className="border p-2 rounded mb-2 w-full" onChange={(e) => setLoginInput({ ...loginInput, username: e.target.value })} />
            <input name="password" type="password" placeholder="Password" className="border p-2 rounded mb-4 w-full" onChange={(e) => setLoginInput({ ...loginInput, password: e.target.value })} />
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
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-white border border-purple-300 px-6 py-4 rounded-xl shadow-xl z-50 flex items-center gap-3 animate-fade-in-up">
          <span className="text-xl">🎉</span>
          <p className="text-purple-800 font-semibold">Congrats! 50 GLL Ions added to your balance.</p>
        </div>
      )}

      
    </div>
  );
}

export default Card2;



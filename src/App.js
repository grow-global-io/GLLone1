import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Team from './pages/Team';
import Investment from './pages/Investment';

// Layout component for routes that need Header and Footer
const MainLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/invest" element={<Investment />} />
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/team" element={<MainLayout><Team /></MainLayout>} />
          {/* Add more routes with MainLayout as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

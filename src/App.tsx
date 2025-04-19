import React, { ReactNode, useEffect, ElementType } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Team from './pages/Team';
import Investment from './pages/Investment';
import { bsc, bscTestnet, xdcTestnet, xdc } from "wagmi/chains";
import '@rainbow-me/rainbowkit/styles.css';
import {getAuthProvider} from "./arcanaAuth";
import { useAccount, useNetwork } from 'wagmi'
import { WagmiConfig, configureChains, createClient } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { connectors } from "./wallet";
import { darkTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

// Import Rewards pages
import { GllProvider } from './pages/Rewards/GLLContext';
import RewardsPage from './pages/Rewards';
import Card1 from './pages/Rewards/components/Card1';
import Card2 from './pages/Rewards/components/Card2';
import Card3 from './pages/Rewards/components/Card3';
import Card4 from './pages/Rewards/components/Card4';
import Card5 from './pages/Rewards/components/Card5';
import Card6 from './pages/Rewards/components/Card6';
import Card7 from './pages/Rewards/components/Card7';
import Card8 from './pages/Rewards/components/Card8';
import Card9 from './pages/Rewards/components/Card9';

// Define prop types for MainLayout
interface MainLayoutProps {
  children: ReactNode;
}

// Layout component for routes that need Header and Footer
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

function App() {
  const { chains, provider } = configureChains([xdc], [publicProvider()])
  
  

  // Define prop types for Disclaimer
  interface DisclaimerProps {
    Text: ElementType;
    Link: ElementType;
  }

  const Disclaimer: React.FC<DisclaimerProps> = ({ Text, Link }) => (
    <Text>
      Powered by GrowLimitless © 2025
    </Text>
  );
  const wagmiClient = createClient({
    autoConnect: true,
    connectors: connectors(chains),
    provider,
  })
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        theme={darkTheme({
          accentColor: '#000000',
          accentColorForeground: 'white',
          borderRadius: 'small',
          fontStack: 'system',
          overlayBlur: 'small',
        })}
        modalSize="compact"
        appInfo={{
          appName: "GrowLimitless",
          disclaimer: Disclaimer,
        }}>
          <GllProvider>
            <Router>
              <div className="App">
                <Routes>
                  <Route path="/invest" element={<Investment />} />
                  <Route path="/" element={<MainLayout><Home /></MainLayout>} />
                  <Route path="/team" element={<MainLayout><Team /></MainLayout>} />
                  <Route path="/register" element={<MainLayout><Register /></MainLayout>} />
                  <Route path='/dashboard' element={<MainLayout><Dashboard /></MainLayout>} />
                  {/* Rewards routes */}
                  <Route path="/rewards" element={<MainLayout><RewardsPage /></MainLayout>} />
                  <Route path="/rewards/card1" element={<MainLayout><Card1 /></MainLayout>} />
                  <Route path="/rewards/card2" element={<MainLayout><Card2 /></MainLayout>} />
                  <Route path="/rewards/card3" element={<MainLayout><Card3 /></MainLayout>} />
                  <Route path="/rewards/card4" element={<MainLayout><Card4 /></MainLayout>} />
                  <Route path="/rewards/card5" element={<MainLayout><Card5 /></MainLayout>} />
                  <Route path="/rewards/card6" element={<MainLayout><Card6 /></MainLayout>} />
                  <Route path="/rewards/card7" element={<MainLayout><Card7 /></MainLayout>} />
                  <Route path="/rewards/card8" element={<MainLayout><Card8 /></MainLayout>} />
                  <Route path="/rewards/card9" element={<MainLayout><Card9 /></MainLayout>} />
                  
                  {/* Add more routes with MainLayout as needed */}
                </Routes>
              </div>
            </Router>
          </GllProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;

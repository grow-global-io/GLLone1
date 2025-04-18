import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Team from './pages/Team';
import Investment from './pages/Investment';
import { bsc, bscTestnet, xdcTestnet, xdc } from "wagmi/chains";
import '@rainbow-me/rainbowkit/styles.css';

import { WagmiConfig, configureChains, createClient } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { connectors } from "./wallet";
import { darkTheme, RainbowKitProvider, DisclaimerComponent } from '@rainbow-me/rainbowkit';

// Layout component for routes that need Header and Footer
const MainLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

function App() {
  const { chains, provider } = configureChains([xdc], [publicProvider()])
  const Disclaimer = ({ Text, Link }) => (
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
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;

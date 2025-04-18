import React from 'react';
import Landing from '../components/Landing';
import NetworkStats from '../components/NetworkStats';
import RewardSection from '../components/RewardSection';
import ValuesSection from '../components/ValuesSection';
// <<<<<<< HEAD
import VisionSection from '../components/VisionSection';
import GuidingPrinciples from '../components/GuidingPrinciples';
import AppShowcase from '../components/AppShowcase';
import AboutGllions from '../components/AboutGllions';
// =======
// >>>>>>> c6de251b320d69e0fe039178ed9d44fda7869f44

const Home = () => {
  return (
    <div className="home-page">
      <Landing />
      <NetworkStats />
      {/* <AboutSection /> */}
      <AppShowcase />
      <RewardSection />
      <AboutGllions />
      {/* <TeamSection /> */} 
      <ValuesSection />
      <VisionSection />
      {/* <GuidingPrinciples /> */}
    </div>
  );
};

export default Home; 
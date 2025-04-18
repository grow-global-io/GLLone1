import React from 'react';
import Landing from '../components/Landing';
import NetworkStats from '../components/NetworkStats';
import RewardSection from '../components/RewardSection';
import ValuesSection from '../components/ValuesSection';
import VisionSection from '../components/VisionSection';
import AppShowcase from '../components/AppShowcase';
import AboutGllions from '../components/AboutGllions';
import UtilityFramework from '../components/UtilityFramework';

const Home = () => {
  return (
    <div className="home-page">
      <Landing />
      <NetworkStats />
      {/* <AboutSection /> */}
      <AppShowcase />
      <RewardSection />
      <AboutGllions />
      <UtilityFramework />
      {/* <TeamSection /> */} 
      <ValuesSection />
      <VisionSection />
      {/* <GuidingPrinciples /> */}
    </div>
  );
};

export default Home;
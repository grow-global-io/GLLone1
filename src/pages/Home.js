import React from 'react';
import Landing from '../components/Landing';
import NetworkStats from '../components/NetworkStats';
import RewardSection from '../components/RewardSection';
import ValuesSection from '../components/ValuesSection';

const Home = () => {
  return (
    <div className="home-page">
      <Landing />
      <NetworkStats />
      {/* <AboutSection /> */}
      <RewardSection />
      {/* <TeamSection /> */}
      <ValuesSection />
      {/* <VisionSection /> */}
      {/* <GuidingPrinciples /> */}
    </div>
  );
};

export default Home; 
import React from 'react';
import Landing from '../components/Landing';
import NetworkStats from '../components/NetworkStats';
import AboutSection from '../components/AboutSection';
import RewardSection from '../components/RewardSection';
import TeamSection from '../components/TeamSection';
import ValuesSection from '../components/ValuesSection';
import VisionSection from '../components/VisionSection';
import GuidingPrinciples from '../components/GuidingPrinciples';

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
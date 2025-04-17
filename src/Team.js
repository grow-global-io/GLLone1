import React, { useRef } from 'react';
import './Team.css';
import Header from './components/Header';
import Intro from './components/Intro';
import AboutSection from './components/AboutSection';
import TeamSection from './components/TeamSection';
import ValuesSection from './components/ValuesSection';
import VisionSection from './components/VisionSection';
import GuidingPrinciples from './components/GuidingPrinciples';
import Footer from './components/Footer';

function App() {
  const nextSectionRef = useRef(null);
  
  const scrollToNextSection = () => {
    nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Header />
      <Intro scrollToNextSection={scrollToNextSection} />
      <AboutSection ref={nextSectionRef} />
      <TeamSection />
      <ValuesSection />
      <VisionSection />
      <GuidingPrinciples />
      <Footer />
    </div>
  );
}

export default App;

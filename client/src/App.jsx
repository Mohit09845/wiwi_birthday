import React, { useRef } from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import AudioControl from './components/AudioControl';
import HeroBanner from './components/HeroBanner';
import WishesFloatingText from './components/WishesFloatingText';
import CuteStoryTimeline from './components/CuteStoryTimeline';
import BalloonPop from './components/BalloonPop';
import SurpriseSection from './components/SurpriseSection';
import OurSecretsSection from './components/OurSecretsSection';
import SecretMessageForm from './components/SecretMessageForm';
import MohitEndingSection from './components/MohitEndingSection';
import Footer from './components/Footer';


function App() {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const balloonsRef = useRef(null);
  const surpriseRef = useRef(null);
  const secretRef = useRef(null);
  const mohitRef = useRef(null);

  const handleNavigate = (target) => {
    if (target === 'hero' && heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (target === 'story' && storyRef.current) {
      storyRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (target === 'balloons' && balloonsRef.current) {
      balloonsRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (target === 'surprise' && surpriseRef.current) {
      surpriseRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (target === 'secret' && secretRef.current) {
      secretRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (target === 'mohit' && mohitRef.current) {
      mohitRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#0b020a] text-white overflow-x-hidden font-sans selection:bg-rose-500 selection:text-white">
      {/* Dynamic Background Particle & Floating Hearts Canvas */}
      <BackgroundCanvas />

      {/* Floating Colorful Text & Kiss/Heart Sticker Animations */}
      <WishesFloatingText />

      {/* Floating Romantic Audio Synthesizer Toggle */}
      <AudioControl />

      {/* Main Content Containers */}
      <main className="relative z-10 space-y-12 sm:space-y-20">
        <div ref={heroRef}>
          <HeroBanner onNavigate={handleNavigate} />
        </div>

        <div ref={storyRef}>
          <CuteStoryTimeline />
        </div>

        <div ref={balloonsRef}>
          <BalloonPop />
        </div>

        <div ref={surpriseRef}>
          <SurpriseSection />
        </div>

        <div>
          <OurSecretsSection />
        </div>

        <div ref={secretRef}>
          <SecretMessageForm />
        </div>


        <div ref={mohitRef}>
          <MohitEndingSection />
        </div>
      </main>

      {/* Romantic Footer */}
      <Footer onScrollTop={handleScrollTop} />
    </div>
  );
}

export default App;

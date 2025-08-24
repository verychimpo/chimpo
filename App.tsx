
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import NewsSection from './components/NewsSection';
import AboutSection from './components/AboutSection';
import RecruitmentSection from './components/RecruitmentSection';
import GeminiAssistant from './components/GeminiAssistant';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 text-slate-800 antialiased">
      <Header />
      <main>
        <Hero />
        <NewsSection />
        <ServicesSection />
        <AboutSection />
        <RecruitmentSection />
        <GeminiAssistant />
      </main>
      <Footer />
    </div>
  );
};

export default App;

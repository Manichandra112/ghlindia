import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import InfoCarousel from './components/InfoCarousel';
import WhatWeDo from './components/WhatWeDo';
import Stats from './components/Stats';
import Achievements from './components/Achievements';
import Media from './components/Media';
import Sectors from './components/Sectors';
import InvestmentPlan from './components/InvestmentPlan';
import HowItWorks from './components/HowItWorks';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import FractionalOwnership from './components/FractionalOwnership';
import DebtFinancing from './components/DebtFinancing';
import ChargeCreation from './components/ChargeCreation';
import WhyUs from './components/WhyUs';
import OurTeam from './components/OurTeam';

function App() {
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/fractional-ownership') {
        setCurrentView('fractional-ownership');
      } else if (hash === '#/debt-financing') {
        setCurrentView('debt-financing');
      } else if (hash === '#/charge-creation') {
        setCurrentView('charge-creation');
      } else if (hash === '#/why-us') {
        setCurrentView('why-us');
      } else if (hash === '#/our-team') {
        setCurrentView('our-team');
      } else {
        setCurrentView('home');
      }
      window.scrollTo(0, 0); // Always scroll to top on hash view changes
    };

    // Initialize on mount
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        {currentView === 'fractional-ownership' && <FractionalOwnership />}
        {currentView === 'debt-financing' && <DebtFinancing />}
        {currentView === 'charge-creation' && <ChargeCreation />}
        {currentView === 'why-us' && <WhyUs />}
        {currentView === 'our-team' && <OurTeam />}
        {currentView === 'home' && (
          <>
            <Hero />
            <About />
            <Products />
            <InfoCarousel />
            <WhatWeDo />
            <Stats />
            <Achievements />
            <Media />
            <Sectors />
            <InvestmentPlan />
            <HowItWorks />
            <Reviews />
            <FAQ />
            <CallToAction />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;


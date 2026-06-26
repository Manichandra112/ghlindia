import React from 'react';
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

function App() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
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
      </main>
      <Footer />
    </>
  );
}

export default App;


import React from 'react';
import {
  ShieldCheck,
  TrendingUp,
  Sparkles,
  ArrowRight,
  Check,
  Building,
  Percent
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './DebtFinancing.css';
import debit from '../assets/debitfunding.png';
import BottomCTA from './BottomCTA';

export default function DebtFinancing() {
  const animOptions = { threshold: 0.05, rootMargin: '0px 0px -50px 0px' };
  const sectionRef1 = useScrollAnimation(animOptions);
  const sectionRef2 = useScrollAnimation(animOptions);
  const sectionRef3 = useScrollAnimation(animOptions);
  const sectionRef4 = useScrollAnimation(animOptions);
  const handleExploreClick = (event) => {
    event.preventDefault();
    sectionRef1.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="debt-page-wrapper">
      {/* Hero Section */}
      {/* <section className="debt-hero-section">
          <picture>
            <source media="(max-width: 768px)" srcSet="/assets/img/debt/debt-funding-mob.jpg" />
            <img 
              src="/assets/img/debt/debt-funding.jpg" 
              alt="GHL Debt Funding & Financing Banner" 
              className="debt-hero-img"
            />
          </picture>
        </section> */}
      {/* Hero Section */}
      <section className="debt-hero">
        <div className="debt-hero-media-wrap">
          <img src={debit} alt="Debt Financing Banner" className="debt-hero-img" />
          <div className="debt-hero-overlay-mask" />
          <div className="debt-container debt-hero-container">
            <div className="debt-content">
              <span className="hero-tag">SMART CAPITAL. STRONGER GROWTH.</span>

              <h1>
                Accelerate your business with
                <span> Debt Funding</span>
              </h1>

              <p>
                Access structured debt solutions built for secure growth, predictable returns, and
                faster expansion without giving up equity.
              </p>

              <div className="hero-features">
                <div className="feature">
                  <div className="icon">
                    <Percent size={20} />
                  </div>
                  <div>
                    <h4>High Yield Plans</h4>
                    <span>Returns up to 24%</span>
                  </div>
                </div>

                <div className="feature">
                  <div className="icon">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4>Secured Structure</h4>
                    <span>Asset-backed protection</span>
                  </div>
                </div>

                <div className="feature">
                  <div className="icon">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <h4>Growth Ready</h4>
                    <span>Built to scale operations</span>
                  </div>
                </div>
              </div>

              <div className="hero-actions">
                <a href="#debt-intro" className="hero-btn" onClick={handleExploreClick}>
                  Explore Debt Financing
                  <ArrowRight size={18} />
                </a>
                {/* <a href="#/contact" className="hero-btn hero-btn-secondary">
                    Talk to Advisor
                  </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. What is Debt Funding Section */}
      <section className="debt-intro section-padding" ref={sectionRef1}>
        <div className="container">
          <div className="section-header" data-animate="fade-up">
            <span className="text-accent uppercase">Finance Basics</span>
            <h2>Do you know what <span className="text-highlight">debt funding is?</span></h2>
          </div>

          <div className="debt-row-flex">
            <div className="debt-col-flex debt-image-container" data-animate="fade-right">
              <img
                src="/assets/img/debt/do-you-know.png"
                alt="What is Debt Funding"
                className="debt-section-img"
              />
            </div>
            <div className="debt-col-flex debt-content-col" data-animate="fade-left" data-stagger-delay="150ms">
              <p>
                <strong>Debt funding</strong> is a method of raising capital for a business or project by borrowing money. Instead of selling equity or ownership in the company, debt funding involves the business taking out loans or issuing bonds that must be repaid over time with interest.
              </p>

              <div className="debt-intro-features">
                <div className="debt-feat-item">
                  <div className="debt-feat-icon-wrapper">
                    <Check size={14} className="debt-feat-icon" />
                  </div>
                  <div className="debt-feat-text">
                    <strong>Asset Protection:</strong> Unlike equity, investors do not lose ownership rights.
                  </div>
                </div>
                <div className="debt-feat-item">
                  <div className="debt-feat-icon-wrapper">
                    <Check size={14} className="debt-feat-icon" />
                  </div>
                  <div className="debt-feat-text">
                    <strong>Structured Yields:</strong> Regular repayments are backed by predefined interest matrices.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. GHL's Approach to Debt Funding */}
      <section className="debt-approach section-padding" ref={sectionRef2}>
        <div className="container">
          <div className="section-header" data-animate="fade-up">
            <span className="text-accent uppercase">Strategic Yields</span>
            <h2>GHL’s Approach to <span className="text-highlight">Debt Funding</span></h2>
          </div>

          <div className="debt-row-flex row-reverse">
            <div className="debt-col-flex debt-image-container" data-animate="fade-left" data-stagger-delay="150ms">
              <img
                src="/assets/img/debt/approaching.png"
                alt="GHL's Approach to Debt Funding"
                className="debt-section-img"
              />
            </div>
            <div className="debt-col-flex debt-content-col" data-animate="fade-right">
              <p>
                At <strong>GHL</strong>, we use a special way of raising money called debt funding. We do this by offering <strong>Secured Non-Convertible Debentures (NCDs)</strong>, which let us gather capital from investors looking for stable returns.
              </p>
              <div className="approach-highlight-box">
                <Sparkles size={16} className="text-gold" />
                <span>NCD capital is directly backed by active charge registrations and secure mortgages.</span>
              </div>
            </div>
          </div>

          {/* Grouped Three Card Matrix Grid */}
          <div className="debt-grid-row" style={{ marginTop: '54px' }}>
            {/* Card 1 */}
            <div className="debt-grid-card glass-panel" data-animate="fade-up" data-stagger-delay="0ms">
              <div className="debt-card-header">
                <div className="card-icon-badge">
                  <Percent size={20} className="card-icon" />
                </div>
                <h3>What We Offer Investors</h3>
              </div>
              <ul className="card-bullet-list">
                <li>
                  <strong>Great Interest Rates:</strong> Investors can earn good returns with our competitive interest rates of up to 24%.
                </li>
                <li>
                  <strong>Added Security:</strong> We protect your investment with floating operating assets, ensuring peace of mind throughout your financial journey.
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="debt-grid-card glass-panel" data-animate="fade-up" data-stagger-delay="150ms">
              <div className="debt-card-header">
                <div className="card-icon-badge">
                  <Building size={20} className="card-icon" />
                </div>
                <h3>Real Estate Investment Focus</h3>
              </div>
              <ul className="card-bullet-list">
                <li>
                  <strong>Investing in Properties:</strong> We invest in distressed properties—commercial and residential lands sold at low prices in foreclosure auctions or short sales.
                </li>
                <li>
                  <strong>Refurbishing and Selling:</strong> These properties are refurbished to increase their value and then sold for profit.
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="debt-grid-card glass-panel" data-animate="fade-up" data-stagger-delay="300ms">
              <div className="debt-card-header">
                <div className="card-icon-badge">
                  <ShieldCheck size={20} className="card-icon" />
                </div>
                <h3>Why GHL Is Different</h3>
              </div>
              <ul className="card-bullet-list">
                <li>
                  <strong>Exclusive Opportunities:</strong> GHL has access to high-quality assets that are usually available only to very wealthy investors.
                </li>
                <li>
                  <strong>Expert Knowledge:</strong> With our experience and skills in real estate, we help investors earn great returns, backed by a solid debt funding strategy.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Invest with Us Section */}
      <section className="debt-why section-padding" ref={sectionRef4}>
        <div className="container">
          <div className="section-header" data-animate="fade-up">
            <span className="text-accent">Partner of Choice</span>
            <h2>Why Invest with Us?</h2>
            <p className="text-muted">At <strong>GHL</strong>, we prioritize the financial success and security of our investors.</p>
          </div>

          <div className="debt-row-flex align-items-center">
            <div className="debt-col-flex debt-image-container" data-animate="fade-right">
              <img
                src="/assets/img/debt/why-us.png"
                alt="Why Invest with GHL"
                className="debt-section-img"
              />
            </div>
            <div className="debt-col-flex debt-content-col" data-animate="fade-left" data-stagger-delay="150ms">
              <p className="why-intro-lead">
                When you choose to invest with us, you enjoy the following benefits:
              </p>

              <div className="why-benefits-stack">
                <div className="benefit-card">
                  <div className="benefit-icon-wrapper">
                    <TrendingUp size={18} className="benefit-icon" />
                  </div>
                  <div className="benefit-details">
                    <h4>Attractive Interest Rates</h4>
                    <p>We offer competitive interest rates of up to 24%, providing stable and reliable returns on your investment over time. Your money works for you, ensuring consistent income.</p>
                  </div>
                </div>

                <div className="benefit-card">
                  <div className="benefit-icon-wrapper">
                    <ShieldCheck size={18} className="benefit-icon" />
                  </div>
                  <div className="benefit-details">
                    <h4>Collateral Security</h4>
                    <p>We ensure your investment is secure with floating operating assets, offering reliable protection.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="partnership-note" data-animate="fade-up">
            <p>
              Investing with <strong>GHL</strong> means more than just financial growth; it’s a partnership built on trust, security, and the potential for significant returns.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA Section */}
      <BottomCTA />
    </div>
  );
}

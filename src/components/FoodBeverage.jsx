import React, { useMemo, useState } from 'react';
import {
  ArrowUpRight,
  ArrowRight,
  ChevronRight,
  Globe2,
  LineChart,
  MapPinned,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UsersRound,
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './FoodBeverage.css';
import foodMidImage from '../assets/food2.png';

const GHL = 'https://www.ghlindia.com';

const highlights = [
  { value: 'US$ 220B', label: 'India FMCG market expected by 2025', Icon: TrendingUp },
  { value: '11%', label: 'e-commerce contribution forecast by 2030', Icon: Globe2 },
  { value: '1B', label: 'internet users likely in India by 2025', Icon: UsersRound },
];

const chartData = [
  { name: "2020", value: 7 },
  { name: "2022", value: 12 },
  { name: "2025", value: 32 },
  { name: "2030", value: 49 },
];

const marketContext = [
  'FMCG is the fourth-largest sector in the Indian economy.',
  'Household and personal care leads with 50% share, followed by healthcare at 31% and food & beverages at 19%.',
  'Growing awareness, easier access and changing lifestyles have been the key growth drivers for the sector.',
  'The number of internet users in India is likely to reach 1 billion by 2025.',
  'Real household spending is projected to increase at 9.1% YoY in 2021.',
];

const opportunities = [
  {
    title: 'Sourcing base',
    summary:
      'Indian and multinational FMCG players can leverage India as a strategic sourcing hub for cost-competitive product development and manufacturing.',
  },
  {
    title: 'Penetration',
    summary:
      'Low penetration levels across consumption categories leave room for expansion, especially as major players deepen rural reach.',
  },
  {
    title: 'Online FMCG',
    summary:
      'The online FMCG market continues to scale as convenience-led retail and digital buying habits reshape distribution.',
  },
  {
    title: 'Premium products',
    summary:
      'Rising disposable incomes are shifting demand toward premium and differentiated products in urban markets.',
  },
  {
    title: 'Innovative products',
    summary:
      'Consumers in India are highly adaptable to new products, giving brands room to test and scale formats quickly.',
  },
  {
    title: 'Rural market',
    summary:
      'Strong distribution networks and better digital logistics are helping branded products reach rural demand pockets faster.',
  },
];

const whyChoose = [
  {
    title: 'Shift to organised market',
    summary:
      'Brand consciousness and modern retail are accelerating the transition away from unorganised distribution.',
    Icon: ShieldCheck,
  },
  {
    title: 'Increase in penetration',
    summary:
      'Low branded-product penetration in categories like instant foods creates room for long-term volume growth.',
    Icon: MapPinned,
  },
  {
    title: 'Rural consumption',
    summary:
      'Higher incomes and aspirations are lifting rural demand for branded products across essential categories.',
    Icon: Sparkles,
  },
  {
    title: 'Easy access',
    summary:
      'Internet access, online retail, and delivery platforms are making products more accessible at the right time and place.',
    Icon: LineChart,
  },
];

export default function FoodBeverage() {
  const [activeOpportunity, setActiveOpportunity] = useState('All');
  const pageRef = useScrollAnimation();

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const visibleOpportunities = useMemo(
    () => (activeOpportunity === 'All' ? opportunities : opportunities.filter((item) => item.title === activeOpportunity)),
    [activeOpportunity]
  );

  return (
    <div className="food-page" ref={pageRef}>
      <section className="food-hero">
        <picture>
          <img
            src={`${GHL}/assets/img/sectors/bennar-desktop/Food-Web.jpg`}
            alt="Food and beverage sector"
            className="food-hero-bg"
          />
        </picture>
        <div className="food-hero-overlay" />
        <div className="food-hero-pattern" />
        <div className="container food-hero-content">
          <div className="food-hero-copy" data-animate="fade-up">
            <span className="real-eyebrow"><MapPinned size={16} /> Sector Focus</span>
            <h1>Food &amp; Beverage</h1>
            <p>
              A redesigned view of India&apos;s FMCG and food economy, built around market scale,
              distribution depth, and the shift toward premium, digital, and rural demand.
            </p>
            <div className="food-hero-actions">
              <button type="button" className="food-btn primary" onClick={() => scrollToSection('food-market')}>
                Explore market size <ArrowRight size={16} />
              </button>
              <button type="button" className="food-btn secondary" onClick={() => scrollToSection('food-opportunities')}>
                View opportunities
              </button>
            </div>
          </div>

          <div className="food-hero-panel" data-animate="fade-left" data-stagger-delay="120ms">
            <span>Market signal</span>
            <strong>US$ 220B</strong>
            <p>The expected size of India&apos;s FMCG market by 2025, with e-commerce adding another layer of scale.</p>
          </div>
        </div>
      </section>

      <nav className="food-breadcrumb">
        <div className="container">
          <ul>
            <li><a href="#/">Home</a></li>
            <ChevronRight size={13} />
            <li>Resources</li>
            <ChevronRight size={13} />
            <li>Sectors</li>
            <ChevronRight size={13} />
            <li className="active">Food &amp; Beverage</li>
          </ul>
        </div>
      </nav>

      <section className="food-market-section" id="food-market">
        <div className="container">
          <div className="food-section-header" data-animate="fade-up">
            <span>Market Signal</span>
            <h2>Market size of Food &amp; Beverage Sector</h2>
            <p>
              FMCG is the fourth-largest sector in India. Household and personal care leads today, while food and beverages
              continue gaining from lifestyle shifts, better access, and stronger digital adoption.
            </p>
          </div>

          <div className="food-market-grid">
            <div className="food-market-shell" data-animate="fade-right">
              <div className="food-market-top">
                <div className="food-market-card-head">
                  {/* <span>Market signal</span>
                  <strong>US$ 220B</strong>
                  <p>The expected size of India&apos;s FMCG market by 2025, with digital commerce accelerating category scale.</p> */}

                  <div className="food-market-top-stats">
                    {highlights.map(({ value, label, Icon }) => (
                      <div key={label} className="food-market-stat-tile">
                        <Icon size={17} />
                        <div>
                          <strong>{value}</strong>
                          <p>{label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="food-market-body">
                <div className="food-growth-panel">
                  <div className="food-growth-head">
                    <span>Online FMCG contribution</span>
                    <h3>Digital channels are becoming a larger growth lane</h3>
                  </div>
                  <div className="food-growth-flow">
                    {chartData.map((item, index) => (
                      <div className="food-growth-step" key={item.name}>
                        <div className="food-growth-node">
                          <strong>{item.value}%</strong>
                          <span>{item.name}</span>
                        </div>
                        <div className="food-growth-track">
                          <div style={{ width: `${item.value * 2}%` }} />
                        </div>
                        {index < chartData.length - 1 && <ArrowUpRight size={18} className="food-growth-arrow" />}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="food-market-side">
                  <div className="food-market-side-head">
                    <h3>Growth narrative</h3>
                    <p>A blend of category leadership, digital adoption and consumption expansion is supporting long-term momentum.</p>
                  </div>

                  <div className="food-market-context">
                    {marketContext.map((item, index) => (
                      <div key={item} className="food-market-context-item">
                        <span>{String(index + 1).padStart(2, '0')}</span>
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="food-opportunities-section" id="food-opportunities">
        <div className="container">
          <div className="food-section-header" data-animate="fade-up">
            <span>Opportunity Map</span>
            <h2>Opportunities in various segments</h2>
            <p>These segments map the strongest demand levers across sourcing, retail penetration, digital commerce, and rural reach.</p>
          </div>

          <div className="food-filter-tabs">
            {['All', ...opportunities.map((item) => item.title)].map((filter) => (
              <button
                key={filter}
                type="button"
                className={`food-filter-tab${activeOpportunity === filter ? ' active' : ''}`}
                onClick={() => setActiveOpportunity(filter)}
              >
                {filter === 'All' && <Sparkles size={15} />}
                {filter}
              </button>
            ))}
          </div>

          <div className="food-card-grid">
            {visibleOpportunities.map((item, index) => (
              <article
                key={item.title}
                className="food-opportunity-card"
                data-animate="fade-up"
                data-stagger-delay={`${index * 80}ms`}
              >
                <div className="food-opportunity-top">
                  <div className="food-opportunity-index">{String(index + 1).padStart(2, '0')}</div>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.summary}</p>

              </article>
            ))}
          </div>
        </div>
      </section>


      <section className="food-image-feature">
        <img
          src={foodMidImage}
          alt="Food & Beverage"
        />
        <div className="food-image-feature-overlay">
          <div className="container">
            <div className="food-feature-insight">
              <span className="food-image-tag">Market Insight</span>
              <h3>India's Online Grocery Market is Accelerating</h3>
              <p>
                The Indian online grocery market is estimated to exceed
                <strong> Rs. 1,310.93 billion (US$ 17.12 billion)</strong> by
                <strong> 2026</strong>, growing at a
                <strong> CAGR of 28.99%</strong>, driven by rising digital
                adoption, changing consumer preferences, and expanding
                e-commerce infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="food-image-insight">
        <span className="food-image-tag">Market Insight</span>

        <h3>India's Online Grocery Market is Accelerating</h3>

        <p>
          The Indian online grocery market is estimated to exceed
          <strong> ₹1,310.93 billion (US$ 17.12 billion)</strong> by
          <strong> 2026</strong>, growing at a
          <strong> CAGR of 28.99%</strong>, driven by rising digital
          adoption, changing consumer preferences, and expanding
          e-commerce infrastructure.
        </p>
      </div>
      <section className="food-image-section">
        <div className="food-image-card">
          <img
            src={foodMidImage}
            alt="Food & Beverage"
          />
        </div>
      </section>


      <section className="food-why-section">
        <div className="container">
          <div className="food-section-header" data-animate="fade-up">
            <span>Why We Choose</span>
            <h2>Why the sector remains compelling</h2>
            <p>The same underlying forces driving the website&apos;s food page are presented here in a cleaner, more investable layout.</p>
          </div>

          <div className="food-why-grid">
            {whyChoose.map(({ title, summary, Icon }) => (
              <article className="food-why-card" key={title} data-animate="fade-up">
                <Icon size={20} />
                <h3>{title}</h3>
                <p>{summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="real-cta-section">
        <div className="container">
          <div className="real-cta-content" data-animate="fade-up">
            <span>Build With GHL India</span>
            <h2>GHL INDIA is here to create a prosperous environment that serves the world at large</h2>
            <p>Let us join together to live an opulent life</p>
            <div className="real-cta-actions">
              <a href="#login" className="real-cta-btn primary">Login <ChevronRight size={16} /></a>
              <a href="#register" className="real-cta-btn secondary">Register <ChevronRight size={16} /></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

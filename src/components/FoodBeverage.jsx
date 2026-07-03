import React, { useMemo, useState } from 'react';
import {
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

const GHL = 'https://www.ghlindia.com';

const highlights = [
  { value: 'US$ 220B', label: 'India FMCG market expected by 2025', Icon: TrendingUp },
  { value: '11%', label: 'e-commerce contribution forecast by 2030', Icon: Globe2 },
  { value: '1B', label: 'internet users likely in India by 2025', Icon: UsersRound },
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
            <span className="food-eyebrow">Sector Focus</span>
            <h1>Food &amp; Beverage</h1>
            <p>
              A redesigned view of India&apos;s FMCG and food economy, built around market scale,
              distribution depth, and the shift toward premium, digital, and rural demand.
            </p>
            <div className="food-hero-actions">
              <button type="button" className="food-btn primary">
                Explore market size <ArrowRight size={16} />
              </button>
              <button type="button" className="food-btn secondary">
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
              FMCG is the fourth-largest sector in the Indian economy. Household and personal care leads the market,
              while food and beverages continue to gain from changing lifestyles, easier access, and stronger digital adoption.
            </p>
          </div>

          <div className="food-market-grid">
            <div className="food-highlight-grid" data-animate="fade-right">
              {highlights.map(({ value, label, Icon }) => (
                <article key={label} className="food-highlight-card">
                  <Icon size={20} />
                  <strong>{value}</strong>
                  <span>{label}</span>
                </article>
              ))}
            </div>

            <div className="food-story-card" data-animate="fade-left" data-stagger-delay="120ms">
              <img
                src={`${GHL}/assets/img/sectors/bennar-desktop/Food-Mid-Web.jpg`}
                alt="Food and beverage market visual"
                className="food-story-image"
              />
              <div className="food-story-copy">
                <p>
                  The market is supported by rising awareness, growing internet access, and evolving consumer habits.
                  E-commerce is projected to contribute meaningfully to FMCG sales by 2030.
                </p>
                <p>
                  Real household spending is projected to rise, creating room for premiumisation, stronger distribution,
                  and more organised market participation.
                </p>
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
                <div className="food-read-link">
                  <span>Read insight</span>
                  <ArrowRight size={14} />
                </div>
              </article>
            ))}
          </div>
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
    </div>
  );
}
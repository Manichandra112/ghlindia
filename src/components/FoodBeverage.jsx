import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  BarChart3,
  ChevronRight,
  Globe2,
  MapPinned,
  ShieldCheck,
  Sparkles,
  Sprout,
  TrendingUp,
  UsersRound,
  UtensilsCrossed,
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './FoodBeverage.css';
import foodMidImage from '../assets/food2.png';

const GHL = 'https://www.ghlindia.com';

const marketFacts = [
  { year: '2020', value: 7 },
  { year: '2022', value: 12 },
  { year: '2025', value: 32 },
  { year: '2030', value: 49 },
];

const highlights = [
  { value: 'US$ 220B', label: 'India FMCG market expected by 2025', Icon: TrendingUp },
  { value: '11%', label: 'e-commerce contribution forecast by 2030', Icon: Globe2 },
  { value: '1B', label: 'internet users likely in India by 2025', Icon: UsersRound },
];

const investmentThesis = [
  'FMCG is the fourth-largest sector in the Indian economy.',
  'Growing awareness, easier access and changing lifestyles are key growth drivers.',
  'Real household spending projected to increase at 9.1% YoY in 2021.',
];

const segments = [
  {
    id: 'sourcing',
    filter: 'Sourcing Base',
    title: 'Sourcing Base',
    Icon: Globe2,
    metric: 'Cost-competitive',
    metricLabel: 'strategic manufacturing hub',
    points: [
      'Indian and multinational FMCG players can leverage India as a strategic sourcing hub.',
      'Cost-competitive product development and manufacturing at scale.',
    ],
  },
  {
    id: 'penetration',
    filter: 'Penetration',
    title: 'Penetration',
    Icon: MapPinned,
    metric: 'Low penetration',
    metricLabel: 'headroom for expansion',
    points: [
      'Low penetration levels across categories leave major room for expansion.',
      'Major players are deepening rural reach to capture unmet demand.',
    ],
  },
  {
    id: 'online',
    filter: 'Online FMCG',
    title: 'Online FMCG',
    Icon: BarChart3,
    metric: '28.99% CAGR',
    metricLabel: 'online grocery growth to 2026',
    points: [
      'Online FMCG market is scaling rapidly as digital buying habits reshape distribution.',
      'Market estimated to exceed US$ 17.12 billion by 2026.',
    ],
  },
  {
    id: 'premium',
    filter: 'Premium Products',
    title: 'Premium Products',
    Icon: Sparkles,
    metric: 'Rising income',
    metricLabel: 'urban premiumisation wave',
    points: [
      'Rising disposable incomes are shifting demand toward premium products in urban markets.',
      'Differentiated products are gaining traction across food and personal care.',
    ],
  },
  {
    id: 'innovation',
    filter: 'Innovative Products',
    title: 'Innovative Products',
    Icon: Sprout,
    metric: 'High adaptability',
    metricLabel: 'consumers ready for new formats',
    points: [
      'Indian consumers are highly adaptable to new products and formats.',
      'Brands can test and scale new formats quickly in this market.',
    ],
  },
  {
    id: 'rural',
    filter: 'Rural Market',
    title: 'Rural Market',
    Icon: TrendingUp,
    metric: 'Faster access',
    metricLabel: 'digital logistics driving reach',
    points: [
      'Strong distribution networks are helping branded products reach rural demand pockets.',
      'Better digital logistics is accelerating last-mile delivery.',
    ],
  },
];

const ALL_FILTERS = ['All', 'Sourcing Base', 'Penetration', 'Online FMCG', 'Premium Products', 'Innovative Products', 'Rural Market'];

const whyChoose = [
  {
    title: 'Shift to Organised Market',
    summary: 'Brand consciousness and modern retail are accelerating the transition away from unorganised distribution.',
    Icon: ShieldCheck,
  },
  {
    title: 'Increase in Penetration',
    summary: 'Low branded-product penetration in categories like instant foods creates room for long-term volume growth.',
    Icon: MapPinned,
  },
  {
    title: 'Rural Consumption',
    summary: 'Higher incomes and aspirations are lifting rural demand for branded products across essential categories.',
    Icon: Sprout,
  },
  {
    title: 'Easy Access',
    summary: 'Internet access, online retail and delivery platforms are making products more accessible at the right place and time.',
    Icon: Globe2,
  },
];

function FoodGrowthChart() {
  const canvasRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.3 }
    );
    if (canvasRef.current) observer.observe(canvasRef.current);
    return () => observer.disconnect();
  }, []);

  const maxVal = 60;

  return (
    <div className="food-chart-wrap" ref={canvasRef}>
      <div className="food-chart-head">
        <div>
          <span>Online FMCG share</span>
          <h3>7% to 49% by 2030</h3>
        </div>
        <BarChart3 size={22} />
      </div>
      <div className="food-chart-bars">
        {marketFacts.map((item, i) => {
          const heightPct = animated ? (item.value / maxVal) * 100 : 0;
          return (
            <div className="food-bar-col" key={item.year}>
              <div className="food-bar-value" style={{ opacity: animated ? 1 : 0 }}>{item.value}%</div>
              <div className="food-bar-track">
                <div
                  className="food-bar-fill"
                  style={{
                    height: `${heightPct}%`,
                    transitionDelay: `${i * 160}ms`,
                  }}
                />
              </div>
              <div className="food-bar-label">{item.year}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function FoodBeverage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const pageRef = useScrollAnimation();

  const visibleSegments =
    activeFilter === 'All'
      ? segments
      : segments.filter((s) => s.filter === activeFilter);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="food-page" ref={pageRef}>
      {/* ─── Hero ─── */}
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
            <span className="food-eyebrow"><UtensilsCrossed size={16} /> Sector Focus</span>
            <h1>Food &amp; Beverage Investment Opportunities</h1>
            <p>
              India&apos;s FMCG and food economy is driven by market scale, distribution depth,
              and the shift toward premium, digital, and rural demand.
            </p>
            <div className="food-hero-actions">
              <button type="button" className="food-btn primary" onClick={() => scrollToSection('food-market')}>
                Explore market size <ArrowRight size={16} />
              </button>
              <button type="button" className="food-btn secondary" onClick={() => scrollToSection('food-segments')}>
                View segments
              </button>
            </div>
          </div>
          <div className="food-hero-panel" data-animate="fade-left" data-stagger-delay="120ms">
            <span>Market Signal</span>
            <strong>US$ 220B</strong>
            <p>Expected size of India&apos;s FMCG market by 2025, with e-commerce adding another layer of scale.</p>
          </div>
        </div>
      </section>

      {/* ─── Breadcrumb ─── */}
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

      {/* ─── Market Signal ─── */}
      <section className="food-market-section" id="food-market">
        <div className="container">
          <div className="food-section-header" data-animate="fade-up">
            <span>Market Signal</span>
            <h2>Market size of Food &amp; Beverage Sector</h2>
            <p>
              FMCG is the fourth-largest sector in India. Household and personal care leads today,
              while food and beverages continue gaining from lifestyle shifts, better access, and digital adoption.
            </p>
          </div>

          <div className="food-market-grid">
            {/* Left: Animated Chart */}
            <div className="food-chart-col" data-animate="fade-right">
              <FoodGrowthChart />
            </div>

            {/* Right: Highlights + Facts */}
            <div className="food-market-story" data-animate="fade-left" data-stagger-delay="120ms">
              <div className="food-highlight-grid">
                {highlights.map(({ value, label, Icon }) => (
                  <div className="food-highlight-card" key={label}>
                    <Icon size={20} />
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
              <ul className="food-fact-list">
                {investmentThesis.map((fact) => (
                  <li key={fact}>{fact}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Opportunity Map ─── */}
      <section className="food-segments-section" id="food-segments">
        <div className="container">
          <div className="food-section-header" data-animate="fade-up">
            <span>Opportunity Map</span>
            <h2>Opportunities in various segments</h2>
            <p>These segments map the strongest demand levers across sourcing, retail penetration, digital commerce, and rural reach.</p>
          </div>

          <div className="food-filter-tabs">
            {ALL_FILTERS.map((f) => (
              <button
                type="button"
                key={f}
                className={`food-filter-tab${activeFilter === f ? ' active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f === 'All' && <Sparkles size={15} />}
                {f}
              </button>
            ))}
          </div>

          <div className="food-segment-grid" key={activeFilter}>
            {visibleSegments.map((seg, index) => (
              <div
                className="food-segment-card"
                key={seg.id}
                data-animate="fade-up"
                data-stagger-delay={`${index * 90}ms`}
              >
                <div className="food-segment-topline">
                  <div className="food-segment-icon"><seg.Icon size={25} /></div>
                  <span>{seg.metric}</span>
                </div>
                <h3>{seg.title}</h3>
                <p className="food-segment-metric">{seg.metricLabel}</p>
                <ul>
                  {seg.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Mid Banner ─── */}
      <section className="food-trend-banner">
        <img src={foodMidImage} alt="Food and Beverage trends" className="food-trend-img" />
        <div className="food-trend-overlay">
          <div className="container">
            <div className="food-trend-content" data-animate="fade-up">
              <span>Market Insight</span>
              <h2>India&apos;s Online Grocery Market is estimated to exceed Rs. 1,310.93 billion (US$ 17.12 billion) by 2026, growing at a CAGR of 28.99%.</h2>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Why We Choose ─── */}
      <section className="food-why-section">
        <div className="container">
          <div className="food-why-heading" data-animate="fade-up">
            <span>Investment Rationale</span>
            <h2>Why We Choose</h2>
          </div>
          <div className="food-why-grid">
            {whyChoose.map(({ title, summary, Icon }) => (
              <article className="food-why-card" key={title} data-animate="fade-up">
                <div className="food-why-icon"><Icon size={24} /></div>
                <h3>{title}</h3>
                <p>{summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="food-cta-section">
        <div className="container">
          <div className="food-cta-content" data-animate="fade-up">
            <span>Build With GHL India</span>
            <h2>GHL INDIA is here to create a prosperous environment that serves the world at large</h2>
            <p>Let us join together to live an opulent life</p>
            <div className="food-cta-actions">
              <a href="#login" className="food-cta-btn primary">Login <ChevronRight size={16} /></a>
              <a href="#register" className="food-cta-btn secondary">Register <ChevronRight size={16} /></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

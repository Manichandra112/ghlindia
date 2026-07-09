import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  BarChart3,
  ChevronRight,
  Factory,
  Leaf,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Sprout,
  Tractor,
  TrendingUp,
  Warehouse,
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './AgriSector.css';
import agriMidImage from '../assets/agri2.png';

const GHL = 'https://www.ghlindia.com';

const marketFacts = [
  { year: '2015', value: 200 },
  { year: '2018', value: 250 },
  { year: '2021', value: 271 },
  { year: '2025*', value: 340 },
];

const highlights = [
  { value: '54.6%', label: "of India's population depends on agriculture", Icon: Sprout },
  { value: '18.8%', label: 'share of GVA from agriculture in FY22', Icon: TrendingUp },
  { value: 'US$ 24B', label: 'predicted sector size by 2025', Icon: ShieldCheck },
];

const investmentThesis = [
  'India can be among the top five exporters of agro-commodities.',
  'Agriculture and allied activities grew at 3.9% in FY 2021-22.',
  'Rs. 1.24 lakh crore allocated to agriculture in Budget 2022-23.',
];

const segments = [
  {
    id: 'supply-chain',
    filter: 'Supply Chain',
    title: 'Supply Chain Infrastructure',
    Icon: Warehouse,
    metric: '45 lakh MT',
    metricLabel: 'cold storage capacity added since 2015',
    points: [
      '1,303 cold storages have been established since 2015.',
      'Private warehouse operators supported by multiple income streams, subsidy and credit.',
      '4% growth in food grain storage capacity expected to restructure agricultural sector.',
    ],
  },
  {
    id: 'outsourcing',
    filter: 'Outsourcing Hubs',
    title: 'Potential Global Outsourcing Hubs',
    Icon: Factory,
    metric: '22 Parks',
    metricLabel: 'mega food parks operational',
    points: [
      'Huge opportunity in agri input segments like seeds and plant growth nutrients.',
      '22 out of 37 approved mega food parks were operational as of January 2021.',
      'World Bank sanctioned Rs. 3,000 crore to finance mini and mega food parks.',
    ],
  },
  {
    id: 'farm-mgmt',
    filter: 'Farm Management',
    title: 'Farm Management Services',
    Icon: Tractor,
    metric: 'New Models',
    metricLabel: 'agri input + advisory businesses',
    points: [
      'New agri business models provide seeds, fertilizers, advice and farmer training.',
      "Government task force created to build a complete national farmers' database.",
    ],
  },
];

const ALL_FILTERS = ['All', 'Supply Chain', 'Outsourcing Hubs', 'Farm Management'];

const whyChoose = [
  {
    title: 'Demand-side Drivers',
    Icon: PackageCheck,
    items: ['Population and income growth', 'Increasing exports', 'Favourable demographics'],
  },
  {
    title: 'Supply-side Drivers',
    Icon: Leaf,
    items: [
      'Hybrid and genetically modified seeds',
      'Favourable climate and wide crop variety',
      'Mechanisation and irrigation',
      'Green revolution in Eastern India',
    ],
  },
  {
    title: 'Policy Support',
    Icon: ShieldCheck,
    items: [
      'Growing institutional credit',
      'Increasing minimum support price (MSP)',
      'New schemes: PKVY, PMGSY, SAGY',
      'Opening exports of wheat and rice',
    ],
  },
];

function AgriGrowthChart() {
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

  const maxVal = 400;

  return (
    <div className="agri-chart-wrap" ref={canvasRef}>
      <div className="agri-chart-head">
        <div>
          <span>Market trajectory</span>
          <h3>US$ 200B to US$ 340B</h3>
        </div>
        <BarChart3 size={22} />
      </div>
      <div className="agri-chart-bars">
        {marketFacts.map((item, i) => {
          const heightPct = animated ? (item.value / maxVal) * 100 : 0;
          return (
            <div className="agri-bar-col" key={item.year}>
              <div className="agri-bar-value" style={{ opacity: animated ? 1 : 0 }}>${item.value}B</div>
              <div className="agri-bar-track">
                <div
                  className="agri-bar-fill"
                  style={{
                    height: `${heightPct}%`,
                    transitionDelay: `${i * 160}ms`,
                  }}
                />
              </div>
              <div className="agri-bar-label">{item.year}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function AgriSector() {
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
    <div className="agri-page" ref={pageRef}>
      {/* ─── Hero ─── */}
      <section className="agri-hero">
        <picture>
          <source media="(max-width: 768px)" srcSet={`${GHL}/assets/img/sectors/bennar-mobile/Agri-Mob.jpg`} />
          <img
            src={`${GHL}/assets/img/sectors/bennar-desktop/AGRI-Web.jpg`}
            alt="Agriculture sector investment"
            className="agri-hero-bg"
          />
        </picture>
        <div className="agri-hero-overlay" />
        <div className="agri-hero-pattern" />
        <div className="container agri-hero-content">
          <div className="agri-hero-copy" data-animate="fade-up">
            <span className="agri-eyebrow"><Leaf size={16} /> Sector Focus</span>
            <h1>Agriculture Investment Opportunities</h1>
            <p>
              India's agricultural sector is predicted to reach US$ 24 billion by 2025.
              A combination of supply-chain reform, technology adoption, and policy support
              creates compelling entry points across the value chain.
            </p>
            <div className="agri-hero-actions">
              <button type="button" className="agri-btn primary" onClick={() => scrollToSection('agri-market')}>
                Explore market size <ArrowRight size={16} />
              </button>
              <button type="button" className="agri-btn secondary" onClick={() => scrollToSection('agri-segments')}>
                View segments
              </button>
            </div>
          </div>
          <div className="agri-hero-panel" data-animate="fade-left" data-stagger-delay="140ms">
            <span>2025 Outlook</span>
            <strong>US$ 24B</strong>
            <p>Predicted market size for India's agricultural sector by 2025.</p>
          </div>
        </div>
      </section>

      {/* ─── Breadcrumb ─── */}
      <nav className="agri-breadcrumb">
        <div className="container">
          <ul>
            <li><a href="#/">Home</a></li>
            <ChevronRight size={13} />
            <li>Resources</li>
            <ChevronRight size={13} />
            <li>Sectors</li>
            <ChevronRight size={13} />
            <li className="active">Agri</li>
          </ul>
        </div>
      </nav>

      {/* ─── Market Signal ─── */}
      <section className="agri-market-section" id="agri-market">
        <div className="container">
          <div className="agri-section-header" data-animate="fade-up">
            <span>Market Signal</span>
            <h2>Market size of Agriculture Sector</h2>
            <p>
              Agriculture is India's backbone, contributing 18.8% of GVA and employing over half
              the population. Government investment and policy reform are accelerating commercial scale.
            </p>
          </div>

          <div className="agri-market-grid">
            {/* Left: Animated Chart */}
            <div className="agri-chart-col" data-animate="fade-right">
              <AgriGrowthChart />
            </div>

            {/* Right: Highlights + Facts */}
            <div className="agri-market-story" data-animate="fade-left" data-stagger-delay="120ms">
              <div className="agri-highlight-grid">
                {highlights.map(({ value, label, Icon }) => (
                  <div className="agri-highlight-card" key={label}>
                    <Icon size={20} />
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
              <ul className="agri-fact-list">
                {investmentThesis.map((fact) => (
                  <li key={fact}>{fact}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Opportunity Map ─── */}
      <section className="agri-segments-section" id="agri-segments">
        <div className="container">
          <div className="agri-section-header" data-animate="fade-up">
            <span>Opportunity Map</span>
            <h2>Opportunities in various segments</h2>
            <p>From supply-chain infrastructure to farm management and global outsourcing, each segment offers scalable entry points.</p>
          </div>

          <div className="agri-filter-tabs">
            {ALL_FILTERS.map((f) => (
              <button
                type="button"
                key={f}
                className={`agri-filter-tab${activeFilter === f ? ' active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f === 'All' && <Sparkles size={15} />}
                {f}
              </button>
            ))}
          </div>

          <div className="agri-segment-grid" key={activeFilter}>
            {visibleSegments.map((seg, index) => (
              <div
                className="agri-segment-card"
                key={seg.id}
                data-animate="fade-up"
                data-stagger-delay={`${index * 90}ms`}
              >
                <div className="agri-segment-topline">
                  <div className="agri-segment-icon"><seg.Icon size={25} /></div>
                  <span>{seg.metric}</span>
                </div>
                <h3>{seg.title}</h3>
                <p className="agri-segment-metric">{seg.metricLabel}</p>
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
      <section className="agri-trend-banner">
        <img src={agriMidImage} alt="Agriculture investment trends" className="agri-trend-img" />
        <div className="agri-trend-overlay">
          <div className="container">
            <div className="agri-trend-content" data-animate="fade-up">
              <span>Market Insight</span>
              <h2>India's comparative advantage lies in its favourable climate, large agriculture sector and livestock base, long coastline and inland water resources.</h2>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Why We Choose ─── */}
      <section className="agri-why-section">
        <div className="container">
          <div className="agri-why-heading" data-animate="fade-up">
            <span>Investment Rationale</span>
            <h2>Why We Choose</h2>
          </div>
          <div className="agri-why-grid">
            {whyChoose.map(({ title, Icon, items }) => (
              <article className="agri-why-card" key={title} data-animate="fade-up">
                <div className="agri-why-icon"><Icon size={24} /></div>
                <h3>{title}</h3>
                <ul>
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="agri-cta-section">
        <div className="container">
          <div className="agri-cta-content" data-animate="fade-up">
            <span>Build With GHL India</span>
            <h2>GHL INDIA is here to create a prosperous environment that serves the world at large</h2>
            <p>Let us join together to live an opulent life</p>
            <div className="agri-cta-actions">
              <a href="#login" className="agri-cta-btn primary">Login <ChevronRight size={16} /></a>
              <a href="#register" className="agri-cta-btn secondary">Register <ChevronRight size={16} /></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import './BiotechSector.css';
import whywechoose from '../assets/biotech1.png'

const GHL = 'https://www.ghlindia.com';

const segments = [
  {
    id: 'bio-services',
    filter: 'BIO-Services',
    title: 'BIO-Services',
    icon: '🔬',
    points: [
      'India has potential for clinical trials due to a large and low-cost market.',
      'Clinical trials in India are regulated by the Central Drug Standard Control Organisation, which has reduced approval time to about 30-60 days, giving opportunity for market growth.',
    ],
  },
  {
    id: 'bio-industrials',
    filter: 'Bio-Industrials',
    title: 'Bio-Industrials',
    icon: '🏭',
    points: [
      'Biofuels and bioenergy are considered alternative resources and are gaining popularity in India.',
      'Rise in energy demand is leading to an increase in dependence on fossil fuel imports.',
    ],
  },
  {
    id: 'bio-pharma',
    filter: 'Bio-Pharma',
    title: 'Bio-Pharma',
    icon: '💊',
    points: [
      'The Indian biologics market is expected to register a CAGR of 22% from 2019 to 2025, to reach US$ 12 billion by 2025.',
      'The Indian biologics market is expected to register a CAGR of 22% from 2019 to 2025.',
    ],
  },
  {
    id: 'bio-agri',
    filter: 'Bio-Agri',
    title: 'Bio-Agri',
    icon: '🌾',
    points: [
      "India's Union budget 2021-22 stated the government's plan to enhance farm productivity and focus on food security.",
      'This increased the importance of bioagriculture, which will enhance efficient food production.',
    ],
  },
  {
    id: 'bio-it',
    filter: 'Bio-IT',
    title: 'Bio-IT',
    icon: '💻',
    points: [
      'Biotechnology has immense growth potential in the Bio-IT segment, given the rising need for technology.',
      "India's IT industry is witnessing substantial growth and has the requisite IT infrastructure to cater to the needs of the global Bio-IT industry.",
    ],
  },
];

const ALL_FILTERS = ['All', 'BIO-Services', 'Bio-Industrials', 'Bio-Pharma', 'Bio-Agri', 'Bio-IT'];

const marketFacts = [
  { year: '2015', value: 10 },
  { year: '2018', value: 41 },
  { year: '2021', value: 80 },
  { year: '2024', value: 130 },
  { year: '2030*', value: 300 },
];

function BioGrowthChart() {
  const canvasRef = useRef(null);
  const [animated, setAnimated] = useState(false);
  const barRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.3 }
    );
    if (canvasRef.current) observer.observe(canvasRef.current);
    return () => observer.disconnect();
  }, []);

  const maxVal = 300;

  return (
    <div className="bio-chart-wrap" ref={canvasRef}>
      <div className="bio-chart-title">India Bioeconomy Growth (US$ Billion)</div>
      <div className="bio-chart-bars">
        {marketFacts.map((item, i) => {
          const heightPct = animated ? (item.value / maxVal) * 100 : 0;
          return (
            <div className="bio-bar-col" key={item.year}>
              <div className="bio-bar-value" style={{ opacity: animated ? 1 : 0 }}>${item.value}B</div>
              <div className="bio-bar-track">
                <div
                  className="bio-bar-fill"
                  style={{
                    height: `${heightPct}%`,
                    transitionDelay: `${i * 0.12}s`,
                  }}
                />
              </div>
              <div className="bio-bar-label">{item.year}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function BiotechSector() {
  const [activeFilter, setActiveFilter] = useState('All');

  const visibleSegments =
    activeFilter === 'All'
      ? segments
      : segments.filter((s) => s.filter === activeFilter);

  return (
    <div className="biotech-page">
      {/* ─── Hero Banner ─── */}
      <section className="biotech-hero">
        <picture>
          <source media="(max-width: 768px)" srcSet={`${GHL}/assets/img/sectors/bennar-mobile/Bio-Mob.jpg`} />
          <img
            src={`${GHL}/assets/img/sectors/bennar-desktop/Bio-Web.jpg`}
            alt="invest in biotech"
            className="biotech-hero-bg"
          />
        </picture>
        <div className="biotech-hero-overlay" />
        <div className="biotech-hero-bottom-bar green-bar" />
      </section>

      {/* ─── Breadcrumb ─── */}
      <nav className="biotech-breadcrumb">
        <div className="container">
          <ul>
            <li><a href="#/">Home</a></li>
            <ChevronRight size={13} />
            <li>Resources</li>
            <ChevronRight size={13} />
            <li>Sectors</li>
            <ChevronRight size={13} />
            <li className="active">Biotech</li>
          </ul>
        </div>
      </nav>

      {/* ─── Market Size Section ─── */}
      <section className="biotech-market-section">
        <div className="container">
          <div className="biotech-section-header">
            <h2>Market size of Bio-Tech Sector</h2>
            <p>
              India's bio-economy industry has grown from US$ 10 billion in 2015 to US$ 130 billion
              in 2024 and is poised to reach US$ 300 billion by 2030.
            </p>
          </div>

          <div className="biotech-market-grid">
            {/* Left: Animated Chart */}
            <div className="biotech-chart-col">
              <BioGrowthChart />
            </div>

            {/* Right: Facts */}
            <div className="biotech-facts-col">
              <ul className="biotech-fact-list">
                <li>The biotechnology sector in India is witnessing a strong growth trajectory and has proved to be highly inventive.</li>
                <li>India is among the top 12 biotechnology destinations in the world and the third-largest in the Asia-Pacific region.</li>
                <li>The Indian biotech industry holds <strong>3%</strong> of the global market share.</li>
                <li>The Indian bioeconomy grew from US$ 70.2 billion in 2020 to US$ 80.12 billion in 2021, growing at <strong>14.13%</strong>.</li>
                <li>A total of <strong>1,128</strong> biotech startups were launched in 2021.</li>
                <li>The Indian biotechnology industry is likely to reach <strong>US$ 150 billion</strong> by 2025.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Diamond Image ─── */}
      {/* <div className="biotech-diamond-img">
        <img src={`${GHL}/assets/img/sectors/dimond_shape.png`} alt="diamond" />
      </div> */}

      {/* ─── Filterable Segments ─── */}
      <section className="biotech-segments-section">
        <div className="biotech-section-header">
          <h2>Opportunities in various segments</h2>
        </div>

        <div className="container">
          {/* Filter Tabs */}
          <div className="biotech-filter-tabs">
            {ALL_FILTERS.map((f) => (
              <button
                key={f}
                className={`biotech-filter-tab${activeFilter === f ? ' active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Segment Cards */}
          <div className="biotech-segment-grid">
            {visibleSegments.map((seg) => (
              <div className="biotech-segment-card" key={seg.id}>
                <div className="biotech-segment-icon">{seg.icon}</div>
                <h3>{seg.title}</h3>
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

      {/* ─── Trend Banner with Marquee ─── */}
      <section className="biotech-trend-banner">
        <picture>
          <source media="(max-width: 768px)" srcSet={`${GHL}/assets/img/sectors/bennar-mobile/Bio-Mob.jpg`} />
          <img
            src={`${GHL}/assets/img/sectors/bennar-desktop/Bio-Mid-Web.jpg`}
            alt="biotech investment trends"
            className="biotech-trend-img"
          />
        </picture>
        <div className="biotech-trend-overlay">
          <div className="biotech-marquee-wrap">
            <div className="biotech-marquee">
              <span>
                India is likely to witness &gt; 100 million diabetics by 2030. With the rising
                number of patients, ~50% are undiagnosed, providing domestic market opportunity
                to the country.&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;India is likely to witness
                &gt; 100 million diabetics by 2030. With the rising number of patients, ~50% are
                undiagnosed, providing domestic market opportunity to the country.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Why We Choose ─── */}
      <section className="biotech-why-section">
        <div className="container">
          <div className="biotech-section-header left-align">
            <h1 className="why-heading">Why We Choose</h1>
          </div>
          <div className="biotech-why-img-wrap">
            <img
              src={whywechoose}
              alt="bio technology industry"
              className="biotech-why-img"
            />
          </div>
        </div>
      </section>

      {/* ─── Login CTA ─── */}
      <section className="biotech-cta-section">
        <div className="container">
          <div className="biotech-cta-content">
            <h2>GHL INDIA is here to create a prosperous environment that serves the world at large</h2>
            <p>Let us join together to live an opulent life</p>
            <div className="biotech-cta-actions">
              <a href="#login" className="biotech-cta-btn primary">Login <ChevronRight size={16} /></a>
              <a href="#register" className="biotech-cta-btn secondary">Register <ChevronRight size={16} /></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

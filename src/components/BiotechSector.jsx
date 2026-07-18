import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  BarChart3,
  Beaker,
  ChevronRight,
  Cpu,
  Factory,
  FlaskConical,
  Leaf,
  Microscope,
  Pill,
  ShieldCheck,
  Sprout,
  TrendingUp,
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './BiotechSector.css';
import BottomCTA from './BottomCTA';
import whywechoose from '../assets/biotech1.png';

const GHL = 'https://www.ghlindia.com';

const segments = [
  {
    id: 'bio-services',
    filter: 'BIO-Services',
    title: 'BIO-Services',
    Icon: Microscope,
    metric: '30-60 days',
    metricLabel: 'shorter approval window',
    points: [
      'India has potential for clinical trials due to a large and low-cost market.',
      'Clinical trials in India are regulated by the Central Drug Standard Control Organisation, which has reduced approval time to about 30-60 days, giving opportunity for market growth.',
    ],
  },
  {
    id: 'bio-industrials',
    filter: 'Bio-Industrials',
    title: 'Bio-Industrials',
    Icon: Factory,
    metric: 'Bioenergy',
    metricLabel: 'alternative resource demand',
    points: [
      'Biofuels and bioenergy are considered alternative resources and are gaining popularity in India.',
      'Rise in energy demand is leading to an increase in dependence on fossil fuel imports.',
    ],
  },
  {
    id: 'bio-pharma',
    filter: 'Bio-Pharma',
    title: 'Bio-Pharma',
    Icon: Pill,
    metric: '22% CAGR',
    metricLabel: 'biologics market outlook',
    points: [
      'The Indian biologics market is expected to register a CAGR of 22% from 2019 to 2025, to reach US$ 12 billion by 2025.',
      'The Indian biologics market is expected to register a CAGR of 22% from 2019 to 2025.',
    ],
  },
  {
    id: 'bio-agri',
    filter: 'Bio-Agri',
    title: 'Bio-Agri',
    Icon: Sprout,
    metric: 'Food security',
    metricLabel: 'productivity-led opportunity',
    points: [
      "India's Union budget 2021-22 stated the government's plan to enhance farm productivity and focus on food security.",
      'This increased the importance of bioagriculture, which will enhance efficient food production.',
    ],
  },
  {
    id: 'bio-it',
    filter: 'Bio-IT',
    title: 'Bio-IT',
    Icon: Cpu,
    metric: 'Bio-IT',
    metricLabel: 'technology infrastructure edge',
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

const highlights = [
  { value: 'Top 12', label: 'global biotech destinations', Icon: ShieldCheck },
  { value: '3rd', label: 'largest in Asia-Pacific', Icon: TrendingUp },
  { value: '1,128', label: 'biotech startups launched in 2021', Icon: FlaskConical },
  { value: 'US$ 300B', label: '2030 Bioeconomy Outlook', Icon: TrendingUp },
];

const investmentThesis = [
  'Inventive domestic biotech ecosystem with global relevance.',
  'Deep demand across diagnostics, biologics, agriculture, and bio-services.',
  'Government productivity and food security focus supporting long-cycle growth.',
];

function BioGrowthChart() {
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

  const maxVal = 300;

  return (
    <div className="bio-chart-wrap" ref={canvasRef}>
      <div className="bio-chart-head">
        <div>
          <span>Bioeconomy trajectory</span>
          <h3>US$ 10B to US$ 300B</h3>
        </div>
        <BarChart3 size={22} />
      </div>
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
      <p className="bio-chart-note">*2030 value is projected.</p>
    </div>
  );
}

export default function BiotechSector() {
  const [activeFilter, setActiveFilter] = useState('All');
  const pageRef = useScrollAnimation();

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const visibleSegments =
    activeFilter === 'All'
      ? segments
      : segments.filter((s) => s.filter === activeFilter);

  return (
    <div className="biotech-page" ref={pageRef}>
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
        <div className="biotech-hero-pattern" />
        <div className="container biotech-hero-content">
          <div className="biotech-hero-copy" data-animate="fade-up">
            <span className="biotech-eyebrow"><Beaker size={16} /> Sector Focus</span>
            <h1>Biotech Investment Opportunities</h1>
            <p>
              India's bioeconomy is moving from research promise to scaled commercial demand,
              creating investable opportunities across healthcare, agriculture, industry, and data-led biology.
            </p>
            <div className="biotech-hero-actions">
              <button
                type="button"
                className="biotech-btn primary"
                onClick={() => scrollToSection('biotech-market')}
              >
                Explore market size <ArrowRight size={17} />
              </button>
              <button
                type="button"
                className="biotech-btn secondary"
                onClick={() => scrollToSection('biotech-segments')}
              >
                View segments
              </button>
            </div>
          </div>
          <div className="biotech-hero-panel" data-animate="fade-left" data-stagger-delay="150ms">
            <span>2030 Bioeconomy Outlook</span>
            <strong>US$ 300B</strong>
            <p>Projected market potential as India's biotech ecosystem scales across public health, food security, and industrial biology.</p>
          </div>
        </div>
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
      <section className="biotech-market-section" id="biotech-market">
        <div className="container">
          <div className="biotech-section-header" data-animate="fade-up">
            <span>Market Signal</span>
            <h2>Market size of Bio-Tech Sector</h2>
            <p>
              India's bio-economy industry has grown from US$ 10 billion in 2015 to US$ 130 billion
              in 2024 and is poised to reach US$ 300 billion by 2030.
            </p>
          </div>

          <div className="biotech-market-grid">
            {/* Left: Animated Chart */}
            <div className="biotech-chart-col" data-animate="fade-right">
              <BioGrowthChart />
            </div>

            <div className="biotech-market-story" data-animate="fade-left" data-stagger-delay="120ms">
              <div className="biotech-highlight-grid">
                {highlights.map(({ value, label, Icon }) => (
                  <div className="biotech-highlight-card" key={label}>
                    <Icon size={20} />
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
              <ul className="biotech-fact-list">
                {investmentThesis.map((fact) => (
                  <li key={fact}>{fact}</li>
                ))}
              </ul>
              <div className="biotech-proof-strip">
                <span>Global market share</span>
                <strong>3%</strong>
                <span>2021 bioeconomy growth</span>
                <strong>14.13%</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Diamond Image ─── */}
      {/* ─── Filterable Segments ─── */}
      <section className="biotech-segments-section" id="biotech-segments">
        <div className="container">
          <div className="biotech-section-header" data-animate="fade-up">
            <span>Opportunity Map</span>
            <h2>Opportunities in various segments</h2>
            <p>Each segment carries a different demand engine, from clinical infrastructure to food productivity and data-driven research.</p>
          </div>

          <div className="biotech-filter-tabs">
            {ALL_FILTERS.map((f) => (
              <button
                type="button"
                key={f}
                className={`biotech-filter-tab${activeFilter === f ? ' active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f === 'All' && <Leaf size={15} />}
                {f}
              </button>
            ))}
          </div>

          <div className="biotech-segment-grid" key={activeFilter}>
            {visibleSegments.map((seg, index) => (
              <div
                className={`biotech-segment-card ${seg.id}`}
                key={seg.id}
                data-animate="fade-up"
                data-stagger-delay={`${index * 90}ms`}
              >
                <div className="biotech-segment-topline">
                  <div className="biotech-segment-icon"><seg.Icon size={25} /></div>
                  <span>{seg.metric}</span>
                </div>
                <h3>{seg.title}</h3>
                <p className="biotech-segment-metric">{seg.metricLabel}</p>
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
          <div className="container">
            <div className="biotech-trend-content" data-animate="fade-up">
              <span>Market Insight</span>
              <h2>More than 100 million diabetics are likely in India by 2030</h2>
              <p>
                With nearly half of patients undiagnosed, diagnostics, preventive care,
                equipment supply, and clinical infrastructure can see meaningful domestic demand.
              </p>
            </div>
          </div>
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
          <div className="biotech-why-heading" data-animate="fade-up">
            <span>Investment Rationale</span>
            <h2>Why We Choose</h2>
          </div>
          <div className="biotech-why-grid">
            <div className="biotech-why-copy" data-animate="fade-right">
              <h3>Biotech sits where necessity, innovation, and scale meet.</h3>
              <p>
                The sector links real-world demand with knowledge-led growth: public health,
                food systems, industrial energy, and Bio-IT all create multiple investment lanes.
              </p>
              <ul>
                <li>Large domestic market for healthcare and clinical services.</li>
                <li>Cross-sector applications reduce dependence on a single demand cycle.</li>
                <li>Policy and infrastructure tailwinds support long-term participation.</li>
              </ul>
            </div>
            <div className="biotech-why-img-wrap">
              <img
                src={whywechoose}
                alt="biotech sector flow chart"
                className="biotech-why-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <BottomCTA />
    </div>
  );
}

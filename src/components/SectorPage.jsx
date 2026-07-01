import React from 'react';
import { ArrowRight, BarChart3, ChevronRight, FlaskConical, Leaf, Building2, Utensils, CheckCircle2 } from 'lucide-react';
import './SectorPage.css';

const sectorPages = {
  biotech: {
    eyebrow: 'Biotech Investments',
    title: 'Biotech',
    subtitle: 'A fast-scaling bio-economy backed by healthcare demand, clinical research, bio-pharma, and technology-led diagnostics.',
    image: '/assets/img/home2026/others/sector/bio.jpeg',
    icon: FlaskConical,
    stats: [
      { value: '$130B', label: 'Bio-economy size in 2024' },
      { value: '$300B', label: 'Projected by 2030' },
      { value: 'Top 12', label: 'Global biotech destination' },
      { value: '3rd', label: 'Largest in Asia-Pacific' }
    ],
    marketTitle: 'Market size of Bio-Tech Sector',
    marketCopy: [
      'India bio-economy industry grew from US$ 10 billion in 2015 to US$ 130 billion in 2024 and is positioned to reach US$ 300 billion by 2030.',
      'India is among the top biotechnology destinations globally and holds a meaningful share in the Asia-Pacific biotechnology market.',
      'The sector creates opportunities across clinical trials, biologics, bioenergy, bio-agri solutions, and Bio-IT infrastructure.'
    ],
    segments: [
      {
        title: 'BIO-Services',
        copy: 'India has strong potential for clinical trials due to its large, cost-efficient market and faster approval timelines.'
      },
      {
        title: 'Bio-Industrials',
        copy: 'Biofuels and bioenergy continue gaining relevance as India balances rising energy demand and fossil-fuel dependence.'
      },
      {
        title: 'Bio-Pharma',
        copy: 'Biologics and biosimilars are expanding rapidly, creating demand for reliable manufacturing and healthcare supply chains.'
      },
      {
        title: 'Bio-Agri',
        copy: 'Bio-agriculture supports higher farm productivity, improved food security, and more efficient crop output.'
      },
      {
        title: 'Bio-IT',
        copy: 'The segment benefits from India technology depth, data infrastructure, and growing need for healthcare-linked platforms.'
      }
    ],
    trend: 'India is expected to see a sharp rise in diabetes cases by 2030. With many patients still undiagnosed, diagnostics, healthcare access, and biotech-led services can unlock strong domestic opportunities.'
  },
  'real-estate': {
    eyebrow: 'Real Estate Investments',
    title: 'Real Estate',
    subtitle: 'Asset-backed opportunities in undervalued commercial and residential properties with clear development and exit pathways.',
    image: '/assets/img/home2026/others/sector/real.jpeg',
    icon: Building2,
    stats: [
      { value: '$1T', label: 'Market target by 2030' },
      { value: 'Asset', label: 'Backed investments' },
      { value: 'SPV', label: 'Structured execution' },
      { value: 'Charge', label: 'Security creation' }
    ],
    marketTitle: 'Real estate opportunity focus',
    marketCopy: [
      'GHL India focuses on demandable distressed properties that can be acquired below market value.',
      'Capital can be deployed into development, improvement, and resale strategies where secondary buyer interest is visible.',
      'Asset-backed structures help align investor security with business execution.'
    ],
    segments: [
      { title: 'Distressed Assets', copy: 'Identifying undervalued properties with measurable resale potential.' },
      { title: 'Commercial Spaces', copy: 'Targeting locations with stronger rental, resale, or operating demand.' },
      { title: 'Residential Pockets', copy: 'Evaluating high-demand areas where value improvement can support exits.' },
      { title: 'SPV Execution', copy: 'Using structured vehicles to manage each project with clearer accountability.' }
    ],
    trend: 'Real estate remains one of the clearest asset-heavy sectors for secured alternative investment when entry price, legal diligence, and exit demand are carefully validated.'
  },
  'food-beverage': {
    eyebrow: 'Food & Beverage Investments',
    title: 'Food & Beverage',
    subtitle: 'Working capital and distribution-led opportunities across essential consumption, supply chains, and wholesale trading.',
    image: '/assets/img/home2026/others/sector/food.jpeg',
    icon: Utensils,
    stats: [
      { value: 'FMCG', label: 'Essential demand' },
      { value: 'B2B', label: 'Wholesale focus' },
      { value: 'Supply', label: 'Chain strength' },
      { value: 'Seasonal', label: 'Cash-flow cycles' }
    ],
    marketTitle: 'Food and beverage opportunity focus',
    marketCopy: [
      'The sector benefits from repeat demand across hotels, canteens, retailers, institutions, and local distribution networks.',
      'GHL India evaluates sole-selling, wholesale, and procurement-led opportunities where buyer demand is already visible.',
      'Structured funding can support inventory purchase, distribution cycles, and margin capture.'
    ],
    segments: [
      { title: 'Wholesale Trading', copy: 'Funding high-volume seasonal consumable goods with identified buyer channels.' },
      { title: 'Institutional Supply', copy: 'Serving hotels, colleges, hospitals, canteens, and recurring commercial buyers.' },
      { title: 'Cold Chain', copy: 'Supporting preservation and distribution where shelf-life discipline improves margins.' },
      { title: 'Direct Procurement', copy: 'Improving pricing by buying closer to producer and farmer networks.' }
    ],
    trend: 'Food and beverage demand tends to be resilient because it is tied to everyday consumption, making diligence around margins and buyer commitments especially valuable.'
  },
  agri: {
    eyebrow: 'Agriculture Investments',
    title: 'Agri',
    subtitle: 'Crop trading, farmer-linked procurement, and warehouse-led opportunities in India essential agriculture economy.',
    image: '/assets/img/home2026/others/sector/agri.jpeg',
    icon: Leaf,
    stats: [
      { value: '500+', label: 'Export product range' },
      { value: 'Bulk', label: 'Contract trading' },
      { value: 'Farm', label: 'Linked sourcing' },
      { value: 'Ware', label: 'House networks' }
    ],
    marketTitle: 'Agriculture opportunity focus',
    marketCopy: [
      'Agriculture offers recurring demand across procurement, storage, logistics, and trading of essential crop yields.',
      'GHL India studies bulk contract trading where farmer collectives and buyer networks can create dependable transaction cycles.',
      'Storage, distribution, and market access are key parts of the opportunity assessment.'
    ],
    segments: [
      { title: 'Crop Trading', copy: 'Structuring liquidity for high-demand seasonal produce and predictable buyer channels.' },
      { title: 'Farmer Networks', copy: 'Supporting procurement models closer to producer groups and collectives.' },
      { title: 'Warehouse Supply', copy: 'Connecting crop output with state and national warehouse demand.' },
      { title: 'Export Potential', copy: 'Evaluating demand for value-added and diversified agricultural products.' }
    ],
    trend: 'Agriculture remains a core sector because demand is fundamental, but successful investment depends on crop selection, buyer visibility, logistics, and disciplined storage management.'
  }
};

export default function SectorPage({ sector = 'biotech' }) {
  const page = sectorPages[sector] || sectorPages.biotech;
  const Icon = page.icon;

  return (
    <div className="sector-page">
      <section className="sector-hero">
        <img src={page.image} alt={page.title} className="sector-hero-img" />
        <div className="sector-hero-overlay">
          <div className="container sector-hero-inner">
            <div className="sector-hero-copy">
              <span className="sector-eyebrow">{page.eyebrow}</span>
              <h1>{page.title}</h1>
              <p>{page.subtitle}</p>
              <div className="sector-hero-actions">
                <a href="#login" className="btn btn-primary">
                  Login
                  <ArrowRight size={16} />
                </a>
                <a href="#footer" className="btn btn-white">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="sector-breadcrumbs">
        <div className="container">
          <ul className="breadcrumbs-list">
            <li><a href="#/">Home</a></li>
            <span className="separator"><ChevronRight size={12} /></span>
            <li>Resources</li>
            <span className="separator"><ChevronRight size={12} /></span>
            <li>Sectors</li>
            <span className="separator"><ChevronRight size={12} /></span>
            <li className="active">{page.title}</li>
          </ul>
        </div>
      </div>

      <section className="sector-stats-band">
        <div className="container">
          <div className="sector-stats-grid">
            {page.stats.map((stat) => (
              <div className="sector-stat-card" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sector-market section-padding">
        <div className="container sector-market-grid">
          <div className="sector-market-copy">
            <span className="sector-section-kicker">Market Snapshot</span>
            <h2>{page.marketTitle}</h2>
            {page.marketCopy.map((copy) => (
              <p key={copy}>{copy}</p>
            ))}
          </div>
          <div className="sector-market-panel glass-panel">
            <Icon size={36} />
            <h3>Why this sector fits GHL</h3>
            <ul>
              <li><CheckCircle2 size={17} /> Strong organic demand</li>
              <li><CheckCircle2 size={17} /> Multiple operating segments</li>
              <li><CheckCircle2 size={17} /> Scope for asset-backed execution</li>
              <li><CheckCircle2 size={17} /> Clear diligence and monitoring paths</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="sector-segments section-padding">
        <div className="container">
          <div className="section-header">
            <span>Opportunity Segments</span>
            <h2>Where We See Investable Demand</h2>
            <p>Each segment is reviewed through market size, operational feasibility, security creation, and demand visibility.</p>
          </div>
          <div className="sector-segment-grid">
            {page.segments.map((segment) => (
              <article className="sector-segment-card glass-panel" key={segment.title}>
                <BarChart3 size={22} />
                <h3>{segment.title}</h3>
                <p>{segment.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sector-trend">
        <div className="container">
          <div className="sector-trend-panel">
            <span>Investment Trend</span>
            <p>{page.trend}</p>
          </div>
        </div>
      </section>

      <section className="sector-cta section-padding">
        <div className="container">
          <div className="sector-cta-inner">
            <h2>GHL INDIA is here to create a prosperous environment that serves the world at large.</h2>
            <p>Let us join together to live an opulent life through transparent, asset-conscious alternative investments.</p>
            <div className="sector-cta-actions">
              <a href="#login" className="btn btn-primary">Login</a>
              <a href="#footer" className="btn btn-secondary">Register Interest</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

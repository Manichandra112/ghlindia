import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  BedDouble,
  BriefcaseBusiness,
  Building2,
  ChevronRight,
  HeartPulse,
  Hotel,
  Landmark,
  LineChart,
  MapPinned,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UsersRound,
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './RealEstateSector.css';
// import realEstateHero from '../assets/real estate-1.png';
import realEstateHero from '../assets/real estate 2.png';

const segments = [
  {
    id: 'flex-space',
    filter: 'Flex Space Segment',
    title: 'Flex Space Segment',
    Icon: BriefcaseBusiness,
    metric: '10-15% YoY',
    points: [
      "India's flexible space stock is likely to expand by 10-15% YoY from the current 36 million sq. ft. in the next three years.",
    ],
  },
  {
    id: 'healthcare',
    filter: 'Healthcare',
    title: 'Healthcare',
    Icon: HeartPulse,
    metric: '2M beds',
    points: [
      'The healthcare market is expected to reach US$ 372 billion.',
      'India needs to add 2 million hospital beds to meet the global average of 2.6 beds per 1,000 people.',
    ],
  },
  {
    id: 'service-apartments',
    filter: 'Service apartments',
    title: 'Service Apartments',
    Icon: BedDouble,
    metric: 'Tourism demand',
    points: [
      'Growth in tourist movement has created demand for service apartments.',
      'This demand is likely to grow and presents opportunities for the unorganised sector.',
    ],
  },
  {
    id: 'senior-housing',
    filter: 'Senior citizen housing',
    title: 'Senior Citizen Housing',
    Icon: UsersRound,
    metric: 'US$ 7.7B',
    points: [
      'Nuclear families and urbanisation have created demand for townships that support elderly living.',
      'The segment can reach US$ 7.7 billion in market size by 2030.',
    ],
  },
  {
    id: 'hotels',
    filter: 'Hotels',
    title: 'Hotels',
    Icon: Hotel,
    metric: '15.3M FTAs',
    points: [
      'Foreign tourist arrivals in India are expected to reach 15.3 million by 2025.',
      'Spiritual tourism remains a major untapped domestic travel market.',
    ],
  },
  {
    id: 'smaller-offices',
    filter: 'Smaller office spaces',
    title: 'Smaller Office Spaces',
    Icon: Building2,
    metric: 'Hybrid work',
    points: [
      'Work from home and office has become the new normal, pushing companies toward smaller workspaces.',
      'This transition is helping revive demand in a changed office economy.',
    ],
  },
];

const filters = ['All', ...segments.map((segment) => segment.filter)];

const marketFacts = [
  { year: '2021', value: 200, label: 'US$ 200B' },
  { year: '2025', value: 650, label: 'US$ 650B' },
  { year: '2030', value: 1000, label: 'US$ 1T' },
];

const realEstatePolicies = [
  'Real Estate Regulatory Act (RERA)',
  'Benami Transactions Act',
  'Boost to affordable housing construction',
  'Interest subsidy to home buyers',
  'Change in arbitration norms',
  'Service tax exemption',
  'Dividend Distribution Tax (DDT) exemption',
  'Goods and Services Tax (GST)',
  'Demonetisation',
  'PR for foreign investors',
];

const cityYields = [
  { city: 'Mumbai', value: 10 },
  { city: 'Kolkata', value: 9 },
  { city: 'Pune', value: 9 },
  { city: 'Hyderabad', value: 8 },
  { city: 'Chennai', value: 8 },
  { city: 'Bengaluru', value: 8 },
  { city: 'Delhi NCR', value: 8 },
];

const urbanPopulation = [
  { year: '2015', urban: 429, total: 880 },
  { year: '2018', urban: 461, total: 893 },
  { year: '2020', urban: 483, total: 900 },
  { year: '2025F', urban: 543, total: 909 },
];

function RealEstateGrowthChart() {
  const chartRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimated(true);
      },
      { threshold: 0.25 }
    );
    if (chartRef.current) observer.observe(chartRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="real-chart-card" ref={chartRef}>
      <div className="real-chart-head">
        <div>
          <span>Market size in India</span>
          <h3>US$ 200B to US$ 1T</h3>
        </div>
        <LineChart size={24} />
      </div>
      <div className="real-chart-bars">
        {marketFacts.map((item, index) => (
          <div className="real-chart-col" key={item.year}>
            <div className="real-chart-value" style={{ opacity: animated ? 1 : 0 }}>
              {item.label}
            </div>
            <div className="real-chart-track">
              <div
                className="real-chart-fill"
                style={{
                  height: animated ? `${(item.value / 1000) * 100}%` : '0%',
                  transitionDelay: `${index * 140}ms`,
                }}
              />
            </div>
            <div className="real-chart-year">{item.year}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function RealEstateSector() {
  const [activeFilter, setActiveFilter] = useState('All');
  const pageRef = useScrollAnimation();

  const visibleSegments =
    activeFilter === 'All'
      ? segments
      : segments.filter((segment) => segment.filter === activeFilter);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="real-page" ref={pageRef}>
      <section className="real-hero" style={{ backgroundImage: `url(${realEstateHero})` }}>
        <div className="real-hero-overlay" />
        <div className="container real-hero-content">
          <div className="real-hero-copy" data-animate="fade-up">
            <span className="real-eyebrow"><MapPinned size={16} /> Sector Focus</span>
            <h1>Real Estate Investment Opportunities</h1>
            <p>
              India&apos;s real estate market is moving toward a trillion-dollar opportunity,
              supported by urbanisation, rising income levels, industrial activity, and policy-led transparency.
            </p>
            <div className="real-hero-actions">
              <button type="button" className="real-btn primary" onClick={() => scrollToSection('real-market')}>
                Explore market size <ArrowRight size={17} />
              </button>
              <button type="button" className="real-btn secondary" onClick={() => scrollToSection('real-segments')}>
                View segments
              </button>
            </div>
          </div>
          <div className="real-hero-panel" data-animate="fade-left" data-stagger-delay="120ms">
            <span>2030 Market Outlook</span>
            <strong>US$ 1T</strong>
            <p>Expected real estate sector market size in India by 2030, up from US$ 200 billion in 2021.</p>
          </div>
        </div>
      </section>

      <nav className="real-breadcrumb">
        <div className="container">
          <ul>
            <li><a href="#/">Home</a></li>
            <ChevronRight size={13} />
            <li>Resources</li>
            <ChevronRight size={13} />
            <li>Sectors</li>
            <ChevronRight size={13} />
            <li className="active">Real Estate</li>
          </ul>
        </div>
      </nav>

      <section className="real-market-section" id="real-market">
        <div className="container">
          <div className="real-section-header" data-animate="fade-up">
            <span>Market Signal</span>
            <h2>Market size of Real Estate Sector</h2>
            <p>
              Real estate sector in India is expected to reach US$ 1 trillion by 2030.
              Rising international real estate development is expected to provide potential growth opportunity to the Indian market.
            </p>
          </div>

          <div className="real-market-grid">
            <div data-animate="fade-right">
              <h3 className="real-chart-title">Market size of real estate in India (US$ billion)</h3>
              <RealEstateGrowthChart />
            </div>

            <div className="real-market-story" data-animate="fade-left" data-stagger-delay="120ms">
              <div className="real-proof-grid">
                <div className="real-proof-card">
                  <TrendingUp size={22} />
                  <strong>19.5%</strong>
                  <span>CAGR estimated during 2017-2028</span>
                </div>
                <div className="real-proof-card">
                  <Landmark size={22} />
                  <strong>13%</strong>
                  <span>of India&apos;s GDP forecast by 2025</span>
                </div>
                <div className="real-proof-card">
                  <ShieldCheck size={22} />
                  <strong>10</strong>
                  <span>government reforms supporting the sector</span>
                </div>
              </div>
              <div className="real-source-context">
                <p>
                  Real estate sector in India is expected to reach US$ 1 trillion in market size by 2030,
                  up from US$ 200 billion in 2021. India&apos;s real estate market is estimated to increase
                  at a CAGR of 19.5% during 2017-2028. The market is forecast to reach US$ 650 billion,
                  representing 13% of India&apos;s GDP by 2025.
                </p>
                <p>
                  Increasing share of real estate in the GDP would be supported by increasing industrial activity,
                  improving income level and urbanisation.
                </p>
                <p>
                  India has an overall 75-80% import dependency on medical devices, with export at Rs. 14,802 crore
                  (US$ 2.1 billion) in 2019 and is expected to rise at CAGR of 29.7% to reach Rs. 70,490
                  (US$ 10 billion) in 2025.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="real-policy-section py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-6 policy-container">
          <div className="policy-stack" data-animate="fade-up">
            <div className="policy-intro">
              <div className="mb-4">
                <div className="policy-accent" />
              </div>
              <h3 className="policy-label">Policy Tailwinds</h3>
              <h2 className="policy-title">Policies accelerating a more investable market</h2>
              <p className="policy-lead">A curated set of government reforms and incentives that improve market transparency, boost liquidity, and unlock foreign and domestic capital across housing, commercial and infrastructure projects.</p>

              <ul className="policy-highlights">
                <li><strong>Transparency:</strong> Regulatory clarity through RERA and GST harmonisation.</li>
                <li><strong>Liquidity:</strong> Incentives for affordable housing &amp; access to finance.</li>
                <li><strong>Investment:</strong> Eased FDI norms and tax reforms to attract global capital.</li>
              </ul>

              
            </div>

            <div className="policy-cards-grid" data-animate="fade-up" data-stagger-delay="120ms" role="list">
              {(() => {
                const summaries = [
                  'Improves buyer protection and project disclosures, increasing market confidence.',
                  'Targets benami transactions to reduce black money in real estate.',
                  'Fiscal incentives and schemes to accelerate affordable housing supply.',
                  'Interest subsidies to lower borrowing costs for homebuyers, boosting demand.',
                  'Faster dispute resolution and investor certainty through arbitration reforms.',
                  'Reduces compliance costs for developers by exempting certain services from tax.',
                  'Tax relief measures encouraging developer reinvestment and dividend flows.',
                  'Streamlines indirect taxes and improves input credit mechanisms for developers.',
                  'Removal of old cash dependencies and move towards formalisation of transactions.',
                  'Measures to attract long-term foreign capital and institutional investors.',
                ];

                return realEstatePolicies.map((policy, index) => (
                  <article key={policy} role="listitem" className="policy-card">
                    <div className="policy-card-inner">
                      <div className="policy-badge">{index + 1}</div>
                      <div className="policy-card-copy">
                        <h4 className="policy-card-title">{policy}</h4>
                        <p className="policy-card-summary">{summaries[index]}</p>
                      </div>
                    </div>

                  </article>
                ));
              })()}
            </div>

            
          </div>
        </div>
      </section>
      

      <section className="real-segments-section" id="real-segments">
        <div className="container">
          <div className="real-section-header" data-animate="fade-up">
            <span>Opportunity Map</span>
            <h2>Opportunities in various segments</h2>
            <p>From flex offices to healthcare, hotels, and senior living, the sector offers multiple demand-led entry points.</p>
          </div>

          <div className="real-filter-tabs">
            {filters.map((filter) => (
              <button
                type="button"
                key={filter}
                className={`real-filter-tab${activeFilter === filter ? ' active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter === 'All' && <Sparkles size={15} />}
                {filter}
              </button>
            ))}
          </div>

          <div className="real-segment-grid">
            {visibleSegments.map((segment, index) => (
              <article
                className="real-segment-card"
                key={segment.id}
                data-animate="fade-up"
                data-stagger-delay={`${index * 80}ms`}
              >
                <div className="real-segment-top">
                  <div className="real-segment-icon"><segment.Icon size={24} /></div>
                  <span>{segment.metric}</span>
                </div>
                <h3>{segment.title}</h3>
                <ul>
                  {segment.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="real-fdi-banner">
        <picture>
          <source media="(max-width: 768px)" srcSet="https://www.ghlindia.com/assets/img/sectors/bennar-mobile/RE-Mid-Mob.jpg" />
          <img
            src="https://www.ghlindia.com/assets/img/sectors/bennar-desktop/RE-Mid-Web.jpg"
            alt="real estate investing"
          />
        </picture>
        <div className="real-fdi-overlay">
          <div className="container">
            <div className="real-fdi-insight">
              <span>Market Insight</span>
              <h2>The Government has allowed 100% FDI for townships and settlements development projects.</h2>
            </div>
          </div>
        </div>
      </section>



      <section className="real-why-section">
        <div className="container">
          <div className="real-why-heading" data-animate="fade-up">
            <span>Investment Rationale</span>
            <h2>Why We Choose</h2>
          </div>
          <div className="real-why-source">
            <div className="real-why-chart-grid">
              <div className="real-why-chart" data-animate="fade-right">
                <div className="real-mini-chart-head">
                  <span>City Yield Signal</span>
                  <h3>Rental yield across key Indian cities</h3>
                </div>
                <div className="real-yield-bars">
                  {cityYields.map((item) => (
                    <div className="real-yield-col" key={item.city}>
                      <span>{item.value}%</span>
                      <div className="real-yield-track">
                        <div className="real-yield-fill" style={{ height: `${item.value * 8}%` }} />
                      </div>
                      <p>{item.city}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="real-why-chart" data-animate="fade-left" data-stagger-delay="120ms">
                <div className="real-mini-chart-head">
                  <span>Urbanisation Growth</span>
                  <h3>Urban population momentum</h3>
                </div>
                <div className="real-pop-chart">
                  {urbanPopulation.map((item) => (
                    <div className="real-pop-group" key={item.year}>
                      <div className="real-pop-bars">
                        <div className="real-pop-bar dark" style={{ height: `${(item.urban / 909) * 100}%` }}>
                          <span>{item.urban}</span>
                        </div>
                        <div className="real-pop-bar light" style={{ height: `${(item.total / 909) * 100}%` }}>
                          <span>{item.total}</span>
                        </div>
                      </div>
                      <p>{item.year}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="real-why-copy" data-animate="fade-up">
              <ul>
                <li>The Indian economy has experienced robust growth in the past decade and is expected to be one of the fastest growing economies in the coming years.</li>
                <li>India&apos;s urban population is expected to reach 525 million by 2025, up from an estimated 463 million in 2020.</li>
                <li>Rising income and employment opportunities have led to more urbanisation and more affordability for real estate in cities.</li>
              </ul>
            </div>
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


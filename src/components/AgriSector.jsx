import React, { useMemo, useState } from 'react';
import {
  ArrowRight,
  ChevronRight,
  Factory,
  Leaf,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Tractor,
  Warehouse,
} from 'lucide-react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './AgriSector.css';
import agriMidImage from '../assets/agri2.png';

const GHL = 'https://www.ghlindia.com';

const chartData = [
  { year: '2016', value: 250.62 },
  { year: '2017', value: 266.48 },
  { year: '2018', value: 283.68 },
  { year: '2019', value: 267.9 },
  { year: '2020', value: 276.37 },
  { year: '2021', value: 271.9 },
];

const opportunities = [
  {
    filter: 'Supply chain infrastructure',
    Icon: Warehouse,
    points: [
      '1,303 cold storages with a capacity of 45 lakh MT have been established since 2015.',
      'Private warehouse operators are supported by multiple income streams, subsidy and availability of credit.',
      'It is expected that 4% growth in the food grain storage capacity would restructure agricultural sector over the next few years.',
    ],
  },
  {
    filter: 'Potential global outsourcing hubs',
    Icon: Factory,
    points: [
      'Huge opportunity exists for agri input segments like seeds and plant growth nutrients.',
      'As of January 2021, out of the 37 approved mega food parks in the country, 22 were operational',
      'In Sept 2019, the World Bank sanctioned Rs. 3,000 crore (US$ 429.25 million) to finance mini and mega food parks in the country',
    ],
  },
  {
    filter: 'Farm management services',
    Icon: Tractor,
    points: [
      'New agri business, which provides inputs such as seeds and fertilizers along with providing advice and training farmers on latest agricultural practices.',
      "In December 2019, the Department of Agriculture, Cooperation and Farmers Welfare created a task force to develop a complete farmers' database for better planning, monitoring, strategy formulation and smooth implementation of schemes for the entire country.",
    ],
  },
];

const whyChoose = [
  {
    title: 'Demand-side drivers',
    Icon: PackageCheck,
    items: ['Population and income growth', 'Increasing exports', 'Favourable demographics'],
  },
  {
    title: 'Supply-side drivers',
    Icon: Leaf,
    items: [
      'Hybrid and genetically modified seeds',
      'Favourable climate for agriculture and wide variety of crops',
      'Mechanisation',
      'Irrigational facilities',
      'Green revolution in Eastern India',
    ],
  },
  {
    title: 'Policy support',
    Icon: ShieldCheck,
    items: [
      'Growing institutional credit',
      'Increasing MSP',
      'Introduction of new schemes like Paramparagat Krishi Vikas Yojana, Pradhanmantri Gram Sinchai Yojana, and Sansad Adarsh Gram Yojana',
      'Opening exports of wheat and rice',
      'Approval of National Mission on Food Processing',
    ],
  },
];

function AgriChart() {
  return (
    <div className="agri-chart-card">
      <div className="agri-chart-head">
        <div>
          <span>US$ billion</span>
          <h3>Market size of real Agriculture in India</h3>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData} margin={{ top: 14, right: 18, left: -12, bottom: 8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(15, 23, 42, 0.12)" />
          <XAxis dataKey="year" tick={{ fill: '#526071', fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis
            domain={[0, 400]}
            ticks={[0, 100, 200, 300, 400]}
            tick={{ fill: '#526071', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            formatter={(value) => [`${value}`, 'US$ billion']}
            labelFormatter={(label) => `Year ${label}`}
            contentStyle={{
              borderRadius: 8,
              border: '1px solid rgba(15, 23, 42, 0.12)',
              boxShadow: '0 12px 28px rgba(15, 23, 42, 0.12)',
            }}
          />
          <Line
            type="linear"
            dataKey="value"
            stroke="#ae0f0f"
            strokeWidth={3}
            dot={{ r: 4, fill: '#ae0f0f', stroke: '#ffffff', strokeWidth: 2 }}
            activeDot={{ r: 6, fill: '#ae0f0f', stroke: '#ffffff', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default function AgriSector() {
  const [activeFilter, setActiveFilter] = useState('All');
  const pageRef = useScrollAnimation();

  const visibleOpportunities = useMemo(
    () =>
      activeFilter === 'All'
        ? opportunities
        : opportunities.filter((opportunity) => opportunity.filter === activeFilter),
    [activeFilter]
  );

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="agri-page" ref={pageRef}>
      <section className="agri-hero">
        <picture>
          <source media="(max-width: 768px)" srcSet={`${GHL}/assets/img/sectors/bennar-mobile/Agri-Mob.jpg`} />
          <img
            src={`${GHL}/assets/img/sectors/bennar-desktop/AGRI-Web.jpg`}
            alt="Asset management company"
            className="agri-hero-bg"
          />
        </picture>
        <div className="agri-hero-overlay" />
        <img
          src={`${GHL}/assets/img/sectors/dimond_shape.png`}
          alt="Image"
          className="agri-diamond"
        />
        <div className="container agri-hero-content">
          <div className="agri-hero-copy" data-animate="fade-up">
            <span className="agri-eyebrow"><Leaf size={16} /> Sector Focus</span>
            <h1>Agriculture Sector</h1>
            <p>
              The Indian agricultural sector is predicted to increase to US$ 24 billion by 2025.
              India can be among the top five exporters of agro-commodities by shifting its focus
              on cultivation and effectively handholding farmers.
            </p>
            <div className="agri-hero-actions">
              <button type="button" className="agri-btn primary" onClick={() => scrollToSection('agri-market')}>
                Explore market size <ArrowRight size={16} />
              </button>
              <button type="button" className="agri-btn secondary" onClick={() => scrollToSection('agri-opportunities')}>
                View opportunities
              </button>
            </div>
          </div>
          <div className="agri-hero-panel" data-animate="fade-left" data-stagger-delay="140ms">
            <span>2025 Outlook</span>
            <strong>US$ 24B</strong>
            <p>Predicted market size for the Indian agricultural sector.</p>
          </div>
        </div>
      </section>

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

      <section className="agri-market-section" id="agri-market">
        <div className="container">
          <div className="agri-section-header" data-animate="fade-up">
            <span>Market Signal</span>
            <h2>Market size of Agriculture Sector</h2>
            <p>
              The Indian agricultural sector is predicted to increase to US$ 24 billion by 2025.
              India can be among the top five exporters of agro-commodities by shifting its focus
              on cultivation and effectively handholding farmers.
            </p>
          </div>

          <div className="agri-market-grid">
            <div data-animate="fade-right">
              <AgriChart />
            </div>
            <div className="agri-market-copy" data-animate="fade-left" data-stagger-delay="120ms">
              <p>In India, agriculture is the primary source of livelihood for ~54.6% of the population.</p>
              <p>As per 1st advance estimates of National Income FY 22, the percentage share of GVA of Agriculture and Allied Sectors (at current prices) is 18.8% of the total GVA.</p>
              <p>Agriculture and allied activities recorded a growth rate of 3.9% in FY 2021-22 (uptil 31 January, 2022)</p>
              <p>Gross Value Added by the agriculture and allied sector is 18.8% in FY 2021-22 (uptil 31 January, 2022)</p>
              <p>As per the Budget 2022-23, Rs. 1.24 lakh crore (US$ 15.9 billion) has been allocated to Department of Agriculture, Cooperation and Farmers' Welfare</p>
            </div>
          </div>
        </div>
      </section>

      <section className="agri-opportunities-section" id="agri-opportunities">
        <div className="container">
          <div className="agri-section-header" data-animate="fade-up">
            <span>Opportunity Map</span>
            <h2>Opportunities in various segments</h2>
          </div>

          <div className="agri-filter-tabs">
            {['All', ...opportunities.map((item) => item.filter)].map((filter) => (
              <button
                key={filter}
                type="button"
                className={`agri-filter-tab${activeFilter === filter ? ' active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter === 'All' && <Sparkles size={15} />}
                {filter}
              </button>
            ))}
          </div>

          <div className="agri-card-grid">
            {visibleOpportunities.map(({ filter, Icon, points }, index) => (
              <article
                className="agri-opportunity-card"
                key={filter}
                data-animate="fade-up"
                data-stagger-delay={`${index * 90}ms`}
              >
                <div className="agri-opportunity-icon"><Icon size={24} /></div>
                <h3>{filter}</h3>
                <ul>
                  {points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="agri-image-section">
        <img
          src={agriMidImage}
          alt="Asset management company"
        />
        <div className="agri-image-overlay">
          <div className="container">
            <div className="agri-image-insight">
              <span>Market Insight</span>
              <h2>India's comparative advantage lies in its favourable climate, large agriculture sector and livestock base, long coastline and inland water resources.</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="agri-why-section">
        <div className="container">
          <div className="agri-section-header" data-animate="fade-up">
            <span>Investment Rationale</span>
            <h2>Why We Choose</h2>
          </div>

          <div className="agri-driver-grid">
            {whyChoose.map(({ title, Icon, items }) => (
              <article className="agri-driver-card" key={title} data-animate="fade-up">
                <Icon size={22} />
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

      <section className="agri-cta-section">
        <div className="container">
          <div className="agri-cta-content" data-animate="fade-up">
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

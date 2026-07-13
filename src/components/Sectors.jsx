import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Sectors.css';

export default function Sectors() {
  const sectionRef = useScrollAnimation();

  const sectors = [
    {
      image: '/assets/img/home2026/others/sector/real.jpeg',
      title: 'Real Estate',
      href: '#/real-estate',
      stat: 'Targeting $1T by 2030',
      description: 'Acquiring highly undervalued distressed commercial and residential spaces. Developing properties with strong secondary buyer agreements for quick exits.',
      accent: 'rgba(228, 31, 38, 0.03)'
    },
    {
      image: '/assets/img/home2026/others/sector/bio.jpeg',
      title: 'Biotech',
      href: '#/biotech',
      stat: '$150B Market Size',
      description: 'Backing healthcare equipment suppliers, diagnostic centers, and certified clinical research facilities showing premium seasonal cash flows.',
      accent: 'rgba(228, 31, 38, 0.03)'
    },
    {
      image: '/assets/img/home2026/others/sector/food.jpeg',
      title: 'Food & Beverage',
      href: '#/food-beverage',
      stat: '5th Largest FMCG',
      description: 'Financing sole-selling distribution assets, cold chain logstics, and food preservation SPVs supplying high-volume retail hotel canteens.',
      accent: 'rgba(228, 31, 38, 0.03)'
    },
    {
      image: '/assets/img/home2026/others/sector/agri.jpeg',
      title: 'Agri',
      href: '#/agri',
      stat: '$24B Growth Rate',
      description: 'Providing liquidity for bulk contract trading of crop yields directly from farmer collectives to state/national warehouse networks.',
      accent: 'rgba(228, 31, 38, 0.03)'
    }
  ];

  return (
    <section className="sectors-section section-padding no-padding" id="sectors" ref={sectionRef}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header" data-animate="fade-up">
          <span>Investment Domains</span>
          <h2>Thriving Sectors We Invest In</h2>
          <p>We choose high-growth, asset-heavy, and recession-proof sectors to ensure investor capital remains safe and highly productive.</p>
        </div>

        {/* Sectors Grid */}
        <div className="sectors-grid">
          {sectors.map((sector, index) => (
            <a
              href={sector.href}
              key={index} 
              className="sector-card glass-panel card-hover-effect"
              style={{ '--hover-accent': sector.accent }}
              data-animate="fade-up"
              data-stagger-delay={`${index * 250}ms`}
            >
              <div className="sector-shimmer-effect"></div>
              
              <div className="sector-image-container">
                <img 
                  src={sector.image} 
                  alt={sector.title} 
                  className="sector-image" 
                />
                <span className="sector-stat-badge">{sector.stat}</span>
              </div>

              <div className="sector-card-content">
                <h3 className="sector-title">{sector.title}</h3>
                <p className="sector-desc">{sector.description}</p>
                
                <div className="sector-card-footer">
                  <span className="sector-footer-action">Read market insights</span>
                  <ArrowRight size={16} className="arrow-icon" />
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

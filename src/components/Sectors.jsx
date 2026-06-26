import React from 'react';
import { Building, Dna, Utensils, Wheat, ArrowRight } from 'lucide-react';
import './Sectors.css';

export default function Sectors() {
  const sectors = [
    {
      icon: <Building size={24} />,
      title: 'Real Estate',
      stat: 'Targeting $1T by 2030',
      description: 'Acquiring highly undervalued distressed commercial and residential spaces. Developing properties with strong secondary buyer agreements for quick exits.',
      accent: 'rgba(228, 31, 38, 0.05)'
    },
    {
      icon: <Dna size={24} />,
      title: 'Biotechnology',
      stat: '$150B Market Size',
      description: 'Backing healthcare equipment suppliers, diagnostic centers, and certified clinical research facilities showing premium seasonal cash flows.',
      accent: 'rgba(212, 175, 55, 0.08)'
    },
    {
      icon: <Utensils size={24} />,
      title: 'Food & Beverage',
      stat: '5th Largest FMCG',
      description: 'Financing sole-selling distribution assets, cold chain logstics, and food preservation SPVs supplying high-volume retail hotel canteens.',
      accent: 'rgba(16, 185, 129, 0.05)'
    },
    {
      icon: <Wheat size={24} />,
      title: 'Agriculture',
      stat: '$24B Growth Rate',
      description: 'Providing liquidity for bulk contract trading of crop yields directly from farmer collectives to state/national warehouse networks.',
      accent: 'rgba(228, 31, 38, 0.05)'
    }
  ];

  return (
    <section className="sectors-section section-padding" id="sectors">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span>Investment Domains</span>
          <h2>Thriving Sectors We Invest In</h2>
          <p>We choose high-growth, asset-heavy, and recession-proof sectors to ensure investor capital remains safe and highly productive.</p>
        </div>

        {/* Sectors Grid */}
        <div className="sectors-grid">
          {sectors.map((sector, index) => (
            <div 
              key={index} 
              className="sector-card glass-panel card-hover-effect"
              style={{ '--hover-accent': sector.accent }}
            >
              <div className="sector-shimmer-effect"></div>
              
              <div className="sector-icon-row">
                <div className="sector-icon-box">
                  {sector.icon}
                </div>
                <span className="sector-stat-badge">{sector.stat}</span>
              </div>

              <h3 className="sector-title">{sector.title}</h3>
              <p className="sector-desc">{sector.description}</p>
              
              <div className="sector-card-footer">
                <span className="sector-footer-action">Read market insights</span>
                <ArrowRight size={16} className="arrow-icon" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import './InfoCarousel.css';

export default function InfoCarousel() {
  const cards = [
    { img: '/assets/img/cc/page-home.jpg', alt: 'GHL Investment Opportunity Cover' },
    { img: '/assets/img/cc/page1.jpg', alt: 'What are Distressed Properties?' },
    { img: '/assets/img/cc/page2.jpg', alt: 'Why consider investing in them?' },
    { img: '/assets/img/cc/page3.jpg', alt: 'Where\'s the opportunity?' },
    { img: '/assets/img/cc/page4.jpg', alt: 'Operational Model Framework' },
    { img: '/assets/img/cc/page5.jpg', alt: 'Where to buy NCDs?' },
    { img: '/assets/img/cc/page6.jpg', alt: 'Earn up to 18% to 24% (p.a) secured by real estate' }
  ];

  return (
    <section className="info-carousel-sec section-padding" id="info-carousel">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <span>Investment Guidelines</span>
          <h2>Distressed Property Portfolios</h2>
          <p>Browse through our visual cards explaining distressed property flipping, NCD yields, and security backing.</p>
        </div>

        {/* CSS Continuous Scroll Marquee */}
        <div className="info-marquee-container">
          <div className="info-marquee-track">
            {/* First Set of Cards */}
            {cards.map((card, idx) => (
              <div key={`card-1-${idx}`} className="info-marquee-item">
                <div className="info-card glass-panel">
                  <img src={card.img} alt={card.alt} className="info-card-img" />
                  <div className="info-card-shimmer"></div>
                </div>
              </div>
            ))}
            {/* Second Set of Cards for Infinite Scroll Loop */}
            {cards.map((card, idx) => (
              <div key={`card-2-${idx}`} className="info-marquee-item">
                <div className="info-card glass-panel">
                  <img src={card.img} alt={card.alt} className="info-card-img" />
                  <div className="info-card-shimmer"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

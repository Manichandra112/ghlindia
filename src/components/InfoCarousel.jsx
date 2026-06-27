import React, { useState, useEffect, useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './InfoCarousel.css';

export default function InfoCarousel() {
  const sectionRef = useScrollAnimation();
  const observerRef = useRef(null);
  const [hasEntered, setHasEntered] = useState(false);
  const [visibleCount, setVisibleCount] = useState(1);

  const cards = [
    { img: '/assets/img/cc/page-home.jpg', alt: 'GHL Investment Opportunity Cover' },
    { img: '/assets/img/cc/page1.jpg', alt: 'What are Distressed Properties?' },
    { img: '/assets/img/cc/page2.jpg', alt: 'Why consider investing in them?' },
    { img: '/assets/img/cc/page3.jpg', alt: 'Where\'s the opportunity?' },
    { img: '/assets/img/cc/page4.jpg', alt: 'Operational Model Framework' },
    { img: '/assets/img/cc/page5.jpg', alt: 'Where to buy NCDs?' },
    { img: '/assets/img/cc/page6.jpg', alt: 'Earn up to 18% to 24% (p.a) secured by real estate' }
  ];

  useEffect(() => {
    const el = observerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (hasEntered && visibleCount < cards.length) {
      const timer = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
      }, 500); // 500ms intervals
      return () => clearTimeout(timer);
    }
  }, [hasEntered, visibleCount, cards.length]);

  return (
    <section className="info-carousel-sec section-padding" id="info-carousel" ref={sectionRef}>
      <div className="container" ref={observerRef}>
        
        {/* Section Header */}
        <div className="section-header text-center" data-animate="fade-up">
          <span>Investment Guidelines</span>
          <h2>Distressed Property Portfolios</h2>
          <p>Browse through our visual cards explaining distressed property flipping, NCD yields, and security backing.</p>
        </div>

        {/* CSS Continuous Scroll Marquee */}
        <div className="info-marquee-container">
          <div className="info-marquee-track">
            {/* First Set of Cards */}
            {cards.map((card, idx) => {
              const isVisible = idx < visibleCount;
              return (
                <div 
                  key={`card-1-${idx}`} 
                  className={`info-marquee-item ${isVisible ? 'revealed' : 'hidden-card'}`}
                >
                  <div className="info-card glass-panel">
                    <img src={card.img} alt={card.alt} className="info-card-img" />
                    <div className="info-card-shimmer"></div>
                  </div>
                </div>
              );
            })}
            {/* Second Set of Cards for Infinite Scroll Loop */}
            {cards.map((card, idx) => {
              const isVisible = visibleCount === cards.length;
              return (
                <div 
                  key={`card-2-${idx}`} 
                  className={`info-marquee-item ${isVisible ? 'revealed' : 'hidden-card'}`}
                >
                  <div className="info-card glass-panel">
                    <img src={card.img} alt={card.alt} className="info-card-img" />
                    <div className="info-card-shimmer"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

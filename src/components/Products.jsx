import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Products.css';

export default function Products() {
  const [activeVideo, setActiveVideo] = useState(null);
  const sectionRef = useScrollAnimation();

  const productsData = [
    {
      id: 1,
      title: 'Alternative Investment Principles',
      cover: '/assets/img/home2026/others/youtube-1st.jpg',
      videoUrl: 'https://www.youtube.com/embed/-d0nKgqRx4o'
    },
    {
      id: 2,
      title: 'Secured Debenture Structures',
      cover: '/assets/img/home2026/others/youtube-2nd.jpg',
      videoUrl: 'https://www.youtube.com/embed/X3l0n_ZRjpg'
    },
    {
      id: 3,
      title: 'Fractional Commercial Assets',
      cover: '/assets/img/home2026/others/youtube-3rd.jpg',
      videoUrl: 'https://www.youtube.com/embed/cV4iIV8Ko4g'
    },
    {
      id: 4,
      title: 'LLP Wholesale Commodities Trading',
      cover: '/assets/img/home2026/others/youtube-4th.jpg',
      videoUrl: 'https://www.youtube.com/embed/6AbOVlNMAlQ'
    }
  ];

  return (
    <section className="products-section section-padding" id="products" ref={sectionRef}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header" data-animate="fade-up">
          <span>Knowledge Bank</span>
          <h2>Understand Our Products</h2>
          <p>Watch these informative videos to learn about alternate yield generation, security structures, and fractional assets.</p>
        </div>

        {/* Video Cards Grid */}
        <div className="products-grid">
          {productsData.map((prod, idx) => {
            const isPlaying = activeVideo === prod.id;
            return (
              <div key={prod.id} className="product-video-card glass-panel card-hover-effect" data-animate="fade-up" data-stagger-delay={`${idx * 300}ms`}>
                <div className="product-media-wrapper">
                  {!isPlaying ? (
                    <div className="product-cover-trigger" onClick={() => setActiveVideo(prod.id)}>
                      <img 
                        src={prod.cover} 
                        alt={prod.title} 
                        className="product-cover-img"
                      />
                      <div className="product-play-overlay">
                        <Play size={20} fill="currentColor" />
                      </div>
                      <div className="product-glass-shine"></div>
                    </div>
                  ) : (
                    <iframe 
                      src={`${prod.videoUrl}?autoplay=1`} 
                      title={prod.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="product-iframe-element"
                    />
                  )}
                </div>
                <div className="product-info-area">
                  <h4>{prod.title}</h4>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

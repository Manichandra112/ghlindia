import React, { useState } from 'react';
import { Play, Plus, X, ShieldCheck } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './WhatWeDo.css';

export default function WhatWeDo() {
  const [playingLeft, setPlayingLeft] = useState(false);
  const [playingRight, setPlayingRight] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const sectionRef = useScrollAnimation();

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setModalType(null);
      setIsClosing(false);
    }, 280); // Wait for the transition to finish
  };

  return (
    <section className="what-we-do-section section-padding" id="what-we-do" ref={sectionRef}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header" data-animate="fade-up">
          <span>Operational Framework</span>
          <h2>What We Do</h2>
          <p>We leverage our structured Special Purpose Vehicles (SPVs) to generate maximum yields from asset flipping and consumable trading.</p>
        </div>

        {/* Video - Circle - Video Row */}
        <div className="operational-row">
          
          {/* LEFT VIDEO */}
          <div className="op-video-box glass-panel" data-animate="fade-right">
            {!playingLeft ? (
              <div className="op-video-trigger" onClick={() => setPlayingLeft(true)}>
                <img 
                  src="/assets/img/Home_23.07.2024/first-video.jpg" 
                  alt="Property Acquisition Video Cover" 
                  className="op-cover-img"
                />
                <div className="op-play-circle">
                  <Play size={24} fill="currentColor" />
                </div>
              </div>
            ) : (
              <iframe 
                src="https://www.youtube.com/embed/1RKTgTK9P24?autoplay=1" 
                title="Property Trading Introduction Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="op-iframe"
              />
            )}
            <span className="op-video-label">SPV Property Flipping Mechanics</span>
          </div>

          {/* CENTER CIRCULAR IMAGE TRIGGER */}
          <div className="op-circle-trigger-col" data-animate="fade-up" data-stagger-delay="100ms" onClick={() => setModalType('trading')} style={{ cursor: 'pointer' }}>
            <div className="circular-thumb-container">
              <img 
                src="/assets/img/home2026/others/PropertyFlipping.jpg" 
                alt="Property Flipping" 
                className="circular-img"
              />
              <div className="plus-badge">
                <Plus size={18} strokeWidth={3} />
              </div>
            </div>
            <h4 className="circle-label">Property Trading Model</h4>
          </div>

          {/* RIGHT VIDEO */}
          <div className="op-video-box glass-panel" data-animate="fade-left" data-stagger-delay="200ms">
            {!playingRight ? (
              <div className="op-video-trigger" onClick={() => setPlayingRight(true)}>
                <img 
                  src="/assets/img/Home_23.07.2024/second-video.jpg" 
                  alt="Asset Management Video Cover" 
                  className="op-cover-img"
                />
                <div className="op-play-circle">
                  <Play size={24} fill="currentColor" />
                </div>
              </div>
            ) : (
              <iframe 
                src="https://www.youtube.com/embed/R2KIHBqBCsU?autoplay=1" 
                title="LLP Trading Introduction Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="op-iframe"
              />
            )}
            <span className="op-video-label">Consumable Wholesale Trading Mechanics</span>
          </div>

        </div>

      </div>

      {/* Property Trading Modal */}
      {modalType === 'trading' && (
        <div className={`modal-backdrop show ${isClosing ? 'backdrop-out' : 'backdrop-in'}`} onClick={handleClose}>
          <div className={`modal-content model-modal glass-panel ${isClosing ? 'modal-out' : 'modal-in'}`} style={{ padding: 0, overflow: 'hidden', maxWidth: '500px', width: '90%' }} onClick={(e) => e.stopPropagation()}>
            <div className="modal-header-area" style={{ background: '#590306', color: '#ffffff', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
              <h3 className="modal-service-title" style={{ margin: 0, fontSize: '20px', fontWeight: 'bold', color: '#ffffff' }}>Property Trading</h3>
              <button className="modal-close" onClick={handleClose} style={{ background: 'transparent', border: 'none', color: '#ffffff', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                <X size={20} />
              </button>
            </div>
            <div className="modal-body-area" style={{ padding: '24px 20px', textAlign: 'center' }}>
              <div className="modal-circle-art-row" style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                <img 
                  src="/assets/img/home2026/others/PropertyFlipping.jpg" 
                  alt="Property Trading" 
                  className="modal-circle-thumbnail"
                  style={{ width: '160px', height: '160px', borderRadius: '50%', objectFit: 'cover' }}
                />
              </div>
              <p style={{ fontSize: '14.5px', color: '#374151', lineHeight: '1.65', textAlign: 'left', margin: 0 }}>
                GHL INDIA identifies the most demandable distressed properties at undervalued price and list the properties in our platform for funding from the investors. Once the required fund is mobilized, properties will be bought, developed, and sold to the ready buyers within a short span for substantial profit.
              </p>
            </div>
            <div className="modal-footer-area" style={{ padding: '15px 20px', display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid #e5e7eb', background: '#ffffff' }}>
              <button className="btn" onClick={handleClose} style={{ background: '#d9383a', color: '#ffffff', border: 'none', padding: '8px 16px', borderRadius: '4px', fontWeight: '600', cursor: 'pointer' }}>Close</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

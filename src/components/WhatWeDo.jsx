import React, { useState } from 'react';
import { Play, Plus, X, ShieldCheck } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './WhatWeDo.css';

export default function WhatWeDo() {
  const [playingLeft, setPlayingLeft] = useState(false);
  const [playingRight, setPlayingRight] = useState(false);
  const [modalType, setModalType] = useState(null);
  const sectionRef = useScrollAnimation();

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
          <div className="op-circle-trigger-col" data-animate="fade-up" data-stagger-delay="100ms">
            <div className="circular-thumb-container" onClick={() => setModalType('trading')}>
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
        <div className="modal-backdrop" onClick={() => setModalType(null)}>
          <div className="modal-content model-modal glass-panel" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header-area">
              <div>
                <span className="badge badge-red">Secured Debentures</span>
                <h3 className="modal-service-title">Property Trading Model</h3>
              </div>
              <button className="modal-close" onClick={() => setModalType(null)}>
                <X size={20} />
              </button>
            </div>
            <div className="modal-body-area">
              <div className="modal-circle-art-row">
                <img 
                  src="/assets/img/home2026/others/PropertyFlipping.jpg" 
                  alt="Property Trading" 
                  className="modal-circle-thumbnail"
                />
              </div>
              <div className="op-steps-timeline theme-red">
                <div className="op-timeline-item">
                  <div className="op-timeline-badge">1</div>
                  <div className="op-timeline-content">
                    <p>
                      <strong>GHL INDIA</strong> identifies the most demandable distressed properties at undervalued prices and lists them on our platform for funding from investors.
                    </p>
                  </div>
                </div>
                <div className="op-timeline-item">
                  <div className="op-timeline-badge">2</div>
                  <div className="op-timeline-content">
                    <p>
                      Once the required funds are mobilized, properties will be bought, developed, and sold to ready buyers within a short span for substantial profit.
                    </p>
                  </div>
                </div>
                <div className="op-timeline-item">
                  <div className="op-timeline-badge">3</div>
                  <div className="op-timeline-content">
                    <p>
                      Since properties are bought lower than market value, they do not require immediate appreciation to generate reasonable profit.
                    </p>
                  </div>
                </div>
                <div className="op-timeline-item">
                  <div className="op-timeline-badge">4</div>
                  <div className="op-timeline-content">
                    <p>
                      The funds are raised as debt through debenture issuance of a Special Purpose Vehicle (SPV). The individuals or entities purchasing debentures are considered lenders or creditors.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="modal-security-highlight theme-red-highlight">
                <ShieldCheck size={24} className="security-icon-check" />
                <div>
                  <h5>Mortgage Asset Protection</h5>
                  <p><strong>The debt from the creditors is secured by way of charge/mortgage/hypothecation of assets.</strong></p>
                </div>
              </div>
            </div>
            <div className="modal-footer-area">
              <div className="modal-footer-actions">
                <button className="btn btn-secondary" onClick={() => setModalType(null)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

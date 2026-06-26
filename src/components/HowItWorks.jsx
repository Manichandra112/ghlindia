import React from 'react';
import './HowItWorks.css';

export default function HowItWorks() {
  const steps = [
    { img: '/assets/img/home2026/others/1YourKYC.png', alt: 'Step 1: Your KYC' },
    { img: '/assets/img/home2026/others/2ActivePlan&Invest.png', alt: 'Step 2: Active Plan & Invest' },
    { img: '/assets/img/home2026/others/3Documentation.png', alt: 'Step 3: Documentation' },
    { img: '/assets/img/home2026/others/4Monitor-Returns.png', alt: 'Step 4: Monitor Returns' }
  ];

  return (
    <section className="how-it-works-sec section-padding" id="how-it-works">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span>Onboarding Guide</span>
          <h2>How Does It Work?</h2>
          <p>Get started on your yield accumulation journey in four simple, secure stages.</p>
        </div>

        {/* Steps Grid */}
        <div className="how-steps-grid">
          {steps.map((step, idx) => (
            <div key={idx} className="step-card-item glass-panel card-hover-effect">
              <div className="step-graphic-wrapper">
                <img src={step.img} alt={step.alt} className="step-img" />
                <div className="step-shimmer"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

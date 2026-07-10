import React from 'react';
import { ArrowRight } from 'lucide-react';
import './BottomCTA.css';

export default function BottomCTA() {
  return (
    <section className="bottom-cta-section">
      <div className="container">
        <div className="bottom-cta-content" data-animate="fade-up">
          <span className="bottom-cta-tag">Build With GHL India</span>
          <h2 className="bottom-cta-heading">GHL INDIA is here to create a prosperous environment that serves the world at large</h2>
          <p className="bottom-cta-text">Let us join together to live an opulent life</p>
          <div className="bottom-cta-actions">
            <a href="#login" className="bottom-cta-btn btn-glass">
              <span>Login</span>
              <ArrowRight size={16} />
            </a>
            <a href="#register" className="bottom-cta-btn btn-solid">
              <span>Register</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

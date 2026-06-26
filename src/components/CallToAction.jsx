import React from 'react';
import { ArrowRight } from 'lucide-react';
import './CallToAction.css';

export default function CallToAction() {
  return (
    <section className="cta-registration-sec" id="cta-registration">
      <div className="container cta-reg-container text-center">
        <h2 className="cta-reg-title">
          GHL INDIA is here to create a prosperous environment that serves the world at large
        </h2>
        <p className="cta-reg-subtitle">
          Let us join together to live an opulent life
        </p>
        <div className="cta-reg-buttons">
          <a href="#login" className="btn btn-pill-white">
            <span>Login</span>
            <ArrowRight size={16} />
          </a>
          <a href="#register" className="btn btn-pill-white">
            <span>Register</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

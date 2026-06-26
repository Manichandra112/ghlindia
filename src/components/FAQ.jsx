import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './FAQ.css';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);
  const sectionRef = useScrollAnimation();

  const faqs = [
    {
      question: 'What is GHL India\'s investment structure?',
      answer: 'We raise capital through Special Purpose Vehicles (SPVs) established as Private Limited companies or LLPs. For Property Trading, capital is raised as debt via debenture issuance. For Wholesale campaigns, capital is pooled via simple partnership contributions in an LLP.'
    },
    {
      question: 'How is my investment principal secured?',
      answer: 'All investor capital is asset-backed. Debt issued under Private Limited SPVs is secured by creating a first charge/mortgage on the tangible property assets. This charge is legally registered with the Ministry of Corporate Affairs (MCA), offering full collateral backing.'
    },
    {
      question: 'What is the role of AXIS Trustee Services?',
      answer: 'AXIS Trustee Services Ltd is a SEBI-registered independent trustee that monitors our SPV accounts, inspects asset portfolios, and ensures that the SPV Private Limited operates strictly in compliance with debenture trust deed covenants, protecting investor capital.'
    },
    {
      question: 'What is the minimum investment requirement?',
      answer: 'The standard minimum threshold for our Secured NCD (Non-Convertible Debenture) plans is ₹10,00,000 (Ten Lakhs). This entry level ensures compliance with debt structures and provides scale to execute property acquisitions efficiently.'
    },
    {
      question: 'When and how are monthly returns paid out?',
      answer: 'Yields are deposited directly to your registered bank account on the 5th day of every calendar month. You receive automated email invoices and transaction slips, and can track all returns live on our client portal.'
    }
  ];

  const toggleFAQ = (idx) => {
    if (openIdx === idx) {
      setOpenIdx(null);
    } else {
      setOpenIdx(idx);
    }
  };

  return (
    <section className="faq-section section-padding" id="faq" ref={sectionRef}>
      <div className="container faq-container">
        
        {/* Left column: FAQ Title & Help Box */}
        <div className="faq-left-col" data-animate="fade-right">
          <span className="faq-subtitle">Support Desk</span>
          <h2 className="faq-main-title">Frequently Asked Questions</h2>
          <p className="faq-main-desc">
            Find immediate answers to standard questions about GHL India’s yield metrics, legal frameworks, and security backing.
          </p>

          <div className="faq-help-box glass-panel">
            <HelpCircle size={28} className="help-box-icon" />
            <div>
              <h4>Have different questions?</h4>
              <p>Get in touch with our relations desk for a one-on-one briefing session.</p>
              <a href="#footer" className="help-box-link">Contact Support &rarr;</a>
            </div>
          </div>
        </div>

        {/* Right column: Accordion List */}
        <div className="faq-right-col" data-animate="fade-left" data-stagger-delay="100ms">
          <div className="faq-accordion-list">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div 
                  key={idx} 
                  className={`faq-item glass-panel ${isOpen ? 'active' : ''}`}
                >
                  <button 
                    className="faq-trigger-btn" 
                    onClick={() => toggleFAQ(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text">{faq.question}</span>
                    <div className="faq-icon-indicator">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>
                  
                  <div className={`faq-answer-collapse ${isOpen ? 'expanded' : ''}`}>
                    <div className="faq-answer-content">
                      <p>{faq.answer}</p>
                    </div>
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

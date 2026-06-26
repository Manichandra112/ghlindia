import React from 'react';
import { ShieldCheck, Layers, Calendar, Landmark } from 'lucide-react';
import './InvestmentPlan.css';

export default function InvestmentPlan() {
  return (
    <section className="investment-plan-section section-padding" id="investment-plan">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span>Active Issuance</span>
          <h2>Primary Investment Plan</h2>
          <p>Subscribe to our active secured debenture issuance monitored by corporate trustees and backed by registered assets.</p>
        </div>

        {/* Product Board Layout */}
        <div className="plan-board-grid">
          
          {/* Left Detail Table */}
          <div className="plan-detail-card glass-panel">
            <div className="plan-card-header">
              <span className="badge badge-gold">Active Plan</span>
              <h3>Secured Debenture - Sequel 11</h3>
              <p>Monitored by <span className="blue-link">SEBI-Registered</span> AXIS Trustee Services Ltd</p>
            </div>

            <table className="plan-metrics-table">
              <tbody>
                <tr>
                  <td>
                    <div className="table-label-cell">
                      <Landmark size={16} className="table-icon" />
                      <span>Minimum Investment</span>
                    </div>
                  </td>
                  <td className="table-val-cell">₹10,00,000</td>
                </tr>
                <tr>
                  <td>
                    <div className="table-label-cell">
                      <Layers size={16} className="table-icon" />
                      <span>Pre Tax Return</span>
                    </div>
                  </td>
                  <td className="table-val-cell highlight-red">18.00% <span className="table-pa">P/A</span></td>
                </tr>
                <tr>
                  <td>
                    <div className="table-label-cell">
                      <Calendar size={16} className="table-icon" />
                      <span>Tenure Duration</span>
                    </div>
                  </td>
                  <td className="table-val-cell">36 Months</td>
                </tr>
                <tr>
                  <td>
                    <div className="table-label-cell">
                      <ShieldCheck size={16} className="table-icon" />
                      <span>Total Fund Required</span>
                    </div>
                  </td>
                  <td className="table-val-cell">₹25,00,00,000</td>
                </tr>
              </tbody>
            </table>

            {/* Repayment Progress Track */}
            <div className="plan-progress-area">
              <div className="progress-labels">
                <span>Fundraising Progress</span>
                <span className="yellow-text">100% Yet to be Funded</span>
              </div>
              <div className="progress-bar-track">
                <div className="progress-bar-fill yet-funded" style={{ width: '100%' }}></div>
              </div>
              <span className="progress-raised-text">Raised: ₹20,00,000 of ₹25 Cr target</span>
            </div>
          </div>

          {/* Right graphic cover */}
          <div className="plan-image-card glass-panel">
            <div className="plan-img-wrapper">
              <img 
                src="/assets/planimages/sd11/Bannersd11.jpeg" 
                alt="Secured Debenture Product Banner" 
                className="plan-banner-img"
              />
              <div className="banner-shine-effect"></div>
            </div>
            <a href="#login" className="btn btn-primary w-full plan-action-btn">
              Login to Invest &rarr;
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

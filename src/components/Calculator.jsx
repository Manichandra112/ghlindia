import React, { useState, useEffect } from 'react';
import { IndianRupee, ShieldAlert, ArrowRight, Check } from 'lucide-react';
import './Calculator.css';

export default function Calculator() {
  const [amount, setAmount] = useState(1000000); // 10 Lakhs default
  const [tenure, setTenure] = useState(36); // 36 months default
  const [payoutType, setPayoutType] = useState('Monthly'); // Monthly default
  const [yieldRate, setYieldRate] = useState(22); // 22% default

  // Dynamically adjust yield rate based on tenure
  useEffect(() => {
    if (tenure <= 12) {
      setYieldRate(18);
    } else if (tenure <= 24) {
      setYieldRate(20);
    } else if (tenure <= 36) {
      setYieldRate(22);
    } else {
      setYieldRate(24);
    }
  }, [tenure]);

  // Calculations
  const totalInterest = (amount * (yieldRate / 100) * (tenure / 12));
  const totalRepayment = amount + totalInterest;
  
  const periodicPayout = payoutType === 'Monthly' 
    ? (amount * (yieldRate / 100)) / 12 
    : payoutType === 'Annual' 
      ? amount * (yieldRate / 100) 
      : totalInterest; // Cumulative

  // Format currency in Indian format
  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section className="calculator-section section-padding" id="calculator">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span>Real-time Yield Estimator</span>
          <h2>Calculate Your Alternate Returns</h2>
          <p>Input your desired principal amount and choose a flexible holding period to estimate your pre-tax returns.</p>
        </div>

        {/* Dual Panel Layout */}
        <div className="calculator-grid">
          
          {/* Left Sliders Panel */}
          <div className="calculator-left glass-panel">
            <h3 className="panel-title">Calculator Parameters</h3>
            
            {/* Amount Slider */}
            <div className="input-group">
              <div className="input-label-row">
                <span className="input-label">Investment Principal</span>
                <span className="input-value-badge">{formatCurrency(amount)}</span>
              </div>
              <input 
                type="range" 
                min="100000" 
                max="10000000" 
                step="50000" 
                value={amount} 
                onChange={(e) => setAmount(Number(e.target.value))}
                className="calc-range-slider"
              />
              <div className="range-limits">
                <span>Min: 1 Lakh</span>
                <span>Max: 1 Crore</span>
              </div>
            </div>

            {/* Tenure Slider */}
            <div className="input-group">
              <div className="input-label-row">
                <span className="input-label">Holding Tenure</span>
                <span className="input-value-badge">{tenure} Months</span>
              </div>
              <input 
                type="range" 
                min="12" 
                max="60" 
                step="12" 
                value={tenure} 
                onChange={(e) => setTenure(Number(e.target.value))}
                className="calc-range-slider"
              />
              <div className="range-limits">
                <span>12 Months</span>
                <span>60 Months</span>
              </div>
            </div>

            {/* Payout Frequency */}
            <div className="input-group">
              <span className="input-label block-label">Payout Frequency</span>
              <div className="payout-toggle-buttons">
                {['Monthly', 'Annual', 'Cumulative'].map((type) => (
                  <button
                    key={type}
                    className={`payout-btn ${payoutType === type ? 'active' : ''}`}
                    onClick={() => setPayoutType(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="sebi-disclaimer">
              <ShieldAlert size={16} className="disclaimer-icon" />
              <span>Yield rates are pre-tax and backed by registered SPV corporate mortgage assets. Minimum NCD threshold is ₹10 Lakhs.</span>
            </div>
          </div>

          {/* Right Results Panel */}
          <div className="calculator-right glass-panel">
            <div className="calculator-glow"></div>
            
            <h3 className="panel-title text-white">Estimated Returns</h3>

            <div className="results-metrics-list">
              
              <div className="result-metric-item">
                <span className="result-metric-label">Yield Rate</span>
                <h4 className="result-metric-val rate-val">{yieldRate}.00% <span className="pa-lbl">P/A</span></h4>
              </div>

              <div className="result-metric-item">
                <span className="result-metric-label">
                  {payoutType} Distribution
                </span>
                <h4 className="result-metric-val payout-val">{formatCurrency(periodicPayout)}</h4>
              </div>

              <div className="result-sub-metrics-row">
                <div className="sub-metric">
                  <span className="sub-metric-lbl">Total Interest Earned</span>
                  <span className="sub-metric-val">{formatCurrency(totalInterest)}</span>
                </div>
                <div className="sub-metric text-right">
                  <span className="sub-metric-lbl">Maturity Repayment</span>
                  <span className="sub-metric-val highlight-val">{formatCurrency(totalRepayment)}</span>
                </div>
              </div>

            </div>

            {/* List of security checks */}
            <ul className="calculator-security-list">
              <li>
                <div className="check-bullet"><Check size={12} /></div>
                <span>Axis Trustee Monitored Debentures</span>
              </li>
              <li>
                <div className="check-bullet"><Check size={12} /></div>
                <span>Charge Created on SPV Real Estate / LLP Assets</span>
              </li>
              <li>
                <div className="check-bullet"><Check size={12} /></div>
                <span>Interest distributions paid on the 5th of every month</span>
              </li>
            </ul>

            <a href="#login" className="btn btn-white w-full start-invest-btn">
              <span>Proceed to Onboarding</span>
              <ArrowRight size={16} />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

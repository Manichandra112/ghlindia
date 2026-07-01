import React from 'react';
import { ArrowRight, ShieldCheck, Target, Award, CheckCircle2, ChevronRight } from 'lucide-react';
import './AboutUs.css';

export default function AboutUs() {
  const steps = [
    { num: '01', title: 'Market Size Analysis', desc: 'We analyze the target business\'s market size historically and currently.' },
    { num: '02', title: 'Risk & Opportunity Evaluation', desc: 'We conduct rigorous stress-testing to highlight risks and uncover value.' },
    { num: '03', title: 'Target Range Assessment', desc: 'We verify if we can successfully meet our investment yield projections.' },
    { num: '04', title: 'Sector Demand Selection', desc: 'We select sectors with high organic demand, low volatility, and large scale.' },
    { num: '05', title: 'Holistic Analysis Execution', desc: 'We run structured PESTLE, micro-economic, and macro-economic evaluations.' }
  ];

  const pestleFactors = [
    { letter: 'P', name: 'Political', desc: 'Evaluating government policies, trade frameworks, tax changes, and policy stability.' },
    { letter: 'E', name: 'Economic', desc: 'Analyzing fiscal trends, inflation indices, interest cycles, and GDP growth forecasts.' },
    { letter: 'S', name: 'Social', desc: 'Studying demographic changes, consumer behavior shifts, and investment attitude trends.' },
    { letter: 'T', name: 'Technological', desc: 'Reviewing automation incentives, fintech integration, and tech security systems.' },
    { letter: 'L', name: 'Legal', desc: 'Adhering to regulatory mandates, health and safety standards, and employment compliance.' },
    { letter: 'E', name: 'Environmental', desc: 'Focusing on green policies, climate impact, energy consumption, and ESG guidelines.' }
  ];

  return (
    <div className="about-us-page">
      {/* 1. Cinematic Hero Banner */}
      <div className="about-hero-section">
        <div className="about-hero-wrapper">
          <picture>
            <source media="(max-width: 768px)" srcSet="https://www.ghlindia.com/assets/img/about/About-us-Mob.jpg" />
            <img 
              src="https://www.ghlindia.com/assets/img/about/About-us.jpg" 
              alt="About Us Banner" 
              className="about-hero-img"
            />
          </picture>
          <div className="about-hero-overlay">
            <div className="container">
              <div className="about-hero-content">
                <span className="badge-tag">Our Journey & Mission</span>
                <h1>Who We Are & What We Stand For</h1>
                <p>Establishing security and transparency in alternate investments to help investors build wealth confidently.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Breadcrumbs */}
      <div className="about-breadcrumbs">
        <div className="container">
          <ul className="breadcrumbs-list">
            <li><a href="#/">Home</a></li>
            <span className="separator"><ChevronRight size={12} /></span>
            <li>Resources</li>
            <span className="separator"><ChevronRight size={12} /></span>
            <li className="active">About Us</li>
          </ul>
        </div>
      </div>

      {/* 3. Core Narrative & Journey Section */}
      <section className="about-narrative-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Our Journey from <span className="red-highlight">2019</span> to <span className="red-highlight">2024</span></h2>
            <p className="section-subtitle">
              Beyond basic financial returns, we strive to build platforms that bring happiness, financial freedom, and peace of mind to investors.
            </p>
          </div>

          {/* Timeline road Graphic container */}
          <div className="about-road-map-container">
            <picture>
              <source media="(max-width: 768px)" srcSet="https://www.ghlindia.com/assets/img/about/mobile-image.png" />
              <img 
                src="https://www.ghlindia.com/assets/img/about/Road-Desktop.png" 
                alt="GHL Timeline Road Map" 
                className="roadmap-graphic"
              />
            </picture>
          </div>

          {/* Split layout: A Day to Remember */}
          <div className="about-split-row">
            <div className="about-split-col text-content-col">
              <div className="about-card-badge">Founded on Value</div>
              <h3>A Day to Remember</h3>
              <p>
                GHL India was born from the vision of passionate venture builders determined to support young entrepreneurs and potential alternate investors. 
                Our mission is to unlock value, balance risk, and secure consistent profits to ensure a stress-free investment journey.
              </p>
              <p>
                On <strong>October 8, 2021</strong>, GHL India officially launched, introducing our pioneered fractional investment model and secured alternate debt products to the market.
              </p>
            </div>
            <div className="about-split-col image-content-col">
              <div className="journey-artwork-card">
                <img 
                  src="https://www.ghlindia.com/assets/img/about/Sapling.png" 
                  alt="Nurturing Growth Sapling" 
                  className="sapling-artwork"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Steps & Process Section (Grey background) */}
      <section className="about-process-section">
        <div className="container">
          <div className="process-grid-layout">
            <div className="process-left-narrative">
              <span className="badge-tag tag-red">Our Methodology</span>
              <h2>Transparent & Systematic Operations</h2>
              <p>
                We operate with absolute transparency, maintaining a rigorously audited pipeline. Every opportunity we offer goes through five core verification gates.
              </p>
              
              <div className="efficiency-card">
                <div className="efficiency-metric">99%</div>
                <div className="efficiency-text">
                  <h4>Risk Management Efficiency</h4>
                  <p>Our systematic vetting and asset-backed charge creation models ensure industry-leading stability.</p>
                </div>
              </div>
            </div>

            <div className="process-steps-list">
              {steps.map((step, idx) => (
                <div key={idx} className="process-step-item">
                  <div className="step-number-circle">{step.num}</div>
                  <div className="step-details">
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Analytical Framework Section */}
      <section className="about-analytics-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Understanding Our Analytical Methods</h2>
            <p className="section-subtitle">We employ micro-market, macroeconomic, and political-economic frameworks to validate our deals.</p>
          </div>

          <div className="analysis-split-grid">
            <div className="analysis-card">
              <div className="analysis-card-top">
                <div className="analysis-icon-box">
                  <img src="https://www.ghlindia.com/assets/img/about/Micro-analysis.png" alt="Micro Analysis icon" />
                </div>
                <div className="analysis-card-content">
                  <h3>Micro Market Analysis</h3>
                  <p>
                    We examine individual sectors, product demands, and asset margins. By evaluating competitor dynamics and user demographics, we identify target yields that are sustainable.
                  </p>
                </div>
              </div>
              <div className="diagram-legend">
                <span className="legend-title">Diagram Details:</span>
                <ul>
                  <li>
                    <div className="legend-label">
                      <span className="bullet red-dot"></span>
                      <strong>Immense Need of the People:</strong>
                    </div>
                    <div className="legend-desc">Understanding deep consumer demand.</div>
                  </li>
                  <li>
                    <div className="legend-label">
                      <span className="bullet yellow-dot"></span>
                      <strong>Consumer Behavior:</strong>
                    </div>
                    <div className="legend-desc">Analyzing buyer choices and patterns.</div>
                  </li>
                  <li>
                    <div className="legend-label">
                      <span className="bullet orange-dot"></span>
                      <strong>Supply, Demand & Competitors:</strong>
                    </div>
                    <div className="legend-desc">Assessing market saturation and competition.</div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="analysis-card">
              <div className="analysis-card-top">
                <div className="analysis-icon-box">
                  <img src="https://www.ghlindia.com/assets/img/about/Macro-analysis.png" alt="Macro Analysis icon" />
                </div>
                <div className="analysis-card-content">
                  <h3>Macroeconomic Analysis</h3>
                  <p>
                    We study country-specific regulations, fiscal policy changes, and international asset classes. This positions our portfolios to buffer against inflation and market cycles.
                  </p>
                </div>
              </div>
              <div className="diagram-legend">
                <span className="legend-title">Diagram Details:</span>
                <ul>
                  <li>
                    <div className="legend-label">
                      <span className="bullet yellow-dot"></span>
                      <strong>Regulations of Business:</strong>
                    </div>
                    <div className="legend-desc">Understanding local and national policy compliance.</div>
                  </li>
                  <li>
                    <div className="legend-label">
                      <span className="bullet orange-dot"></span>
                      <strong>Fiscal Policies of Nation:</strong>
                    </div>
                    <div className="legend-desc">Monitoring tax structures and government spend.</div>
                  </li>
                  <li>
                    <div className="legend-label">
                      <span className="bullet red-dot"></span>
                      <strong>Global Financial System:</strong>
                    </div>
                    <div className="legend-desc">Evaluating international asset classes and currency cycles.</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* PESTLE Grid Title */}
          <div className="pestle-header-box text-center">
            <div className="pestle-icon-box">
              <img src="https://www.ghlindia.com/assets/img/about/PESTLE-analysis.png" alt="PESTLE Framework" />
            </div>
            <h3>PESTLE Analysis Framework</h3>
            <p>Our PESTLE analysis provides a holistic assessment of all external macro environmental factors before deploying capital.</p>
          </div>

          {/* PESTLE Interactive Grid */}
          <div className="pestle-interactive-grid">
            {pestleFactors.map((factor, idx) => (
              <div key={idx} className="pestle-card">
                <div className="pestle-letter">{factor.letter}</div>
                <div className="pestle-body">
                  <h4>{factor.name} Factors</h4>
                  <p>{factor.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Vision & Mission Section */}
      <section className="about-vision-mission-section">
        <div className="container">
          <div className="vision-mission-row">
            {/* Vision Card */}
            <div className="vision-mission-card">
              <div className="card-top-icon">
                <img src="https://www.ghlindia.com/assets/img/about/vision_3724582.png" alt="Vision icon" />
              </div>
              <div className="card-info">
                <h3>Our Vision</h3>
                <p>
                  Success isn't just a destination—it's the constant standard. We believe true achievement lies in launching investments securely, managing them with transparency, and continually pioneering new asset sectors to foster mutual prosperity.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="vision-mission-card">
              <div className="card-top-icon">
                <img src="https://www.ghlindia.com/assets/img/about/target_16877588.png" alt="Mission icon" />
              </div>
              <div className="card-info">
                <h3>Our Mission</h3>
                <p>
                  To launch asset-backed alternate business models that consistently grow investor wealth. We protect what protects you, operating with absolute empathy, legal safety, and trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Bottom Login & Register CTA Section */}
      <section className="about-login-cta-section">
        <div className="container">
          <div className="about-login-cta-content">
            <h2>GHL INDIA is here to create a prosperous environment that serves the world at large</h2>
            <p>Let us join together to live an opulent life</p>
            <div className="about-login-cta-actions">
              <a href="#login" className="cta-btn btn-white-glass">
                <span>Login</span>
                <ArrowRight size={16} />
              </a>
              <a href="#register" className="cta-btn btn-white-solid">
                <span>Register</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

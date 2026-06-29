import React from 'react';
import { Shield, Building, Users, FileText, CheckCircle, Lock, Play, Layers, ShieldCheck } from 'lucide-react';
import './ChargeCreation.css';

export default function ChargeCreation() {
  const debentureSteps = [
    {
      num: "01",
      content: <>Appointment of <strong>debenture trustee</strong></>
    },
    {
      num: "02",
      content: <>Fund mobilization in the bank account of the <strong>special purpose vehicle (SPV)</strong> through debentures issuance</>
    },
    {
      num: "03",
      content: <>Purchasing the asset in the <strong>SPV's</strong> name</>
    },
    {
      num: "04",
      content: <>Mortgaging the purchased asset in the name of the <strong>debenture trustee</strong></>
    },
    {
      num: "05",
      content: <>Registering the mortgage deed with <strong>MCA</strong> through charge creation form <strong>CHG-9</strong></>
    }
  ];

  const llpSteps = [
    {
      num: "01",
      title: "Fund Mobilization",
      desc: "Funds are raised directly in the bank account of the Special Purpose Vehicle (SPV) to launch the financing process."
    },
    {
      num: "02",
      title: "Hypothecation Agreement",
      desc: "A hypothecation agreement is executed on the floating assets, granting the lender a formal security charge."
    },
    {
      num: "03",
      title: "MCA Registration (Form 8)",
      desc: "The hypothecation agreement is registered with the Ministry of Corporate Affairs (MCA) via Form 8 for legal binding."
    }
  ];

  return (
    <div className="charge-creation-page">
      {/* Hero Header Banner */}
      <section className="charge-hero-banner">
        <img 
          src="/assets/img/ownership/charge-creation.png" 
          alt="Charge Creation Banner" 
          className="charge-banner-img" 
        />
      </section>

      {/* Introduction Container */}
      <section className="charge-intro section-padding">
        <div className="container">
          <div className="charge-intro-card">
            <div className="charge-intro-text">
              <h2>What is Charge Creation?</h2>
              <div className="heading-line"></div>
              <p>
                Charge creation is a legal process where a borrower pledges specific assets as security to guarantee debt repayment. This gives lenders and investors absolute legal confidence that their capital is protected. 
              </p>
              <p>
                Even in the event of default or bankruptcy, the registered charge gives the trustee direct rights to liquidate or manage the pledged asset to recoup investor principal, making it one of the safest mechanisms in structured finance.
              </p>
            </div>
            <div className="charge-intro-graphics">
              <div className="graphics-circle">
                <Lock size={48} className="lock-icon-glow" />
                <span>100% Asset Backed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Debenture Section */}
      <section className="charge-debenture section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span>Security Framework</span>
            <h2>How is the charge creation process done for debenture plan?</h2>
            <div className="heading-line mx-auto"></div>
            <p>
              Follow the official process of securing capital using physical land assets, verified by independent trustees and registered under federal guidelines.
            </p>
          </div>

          {/* Custom Interactive Flowchart Tree */}
          <div className="debenture-flowchart-interactive">
            {/* Top Node */}
            <div className="flowchart-top-node-wrapper">
              <div className="flowchart-top-circle">
                <span>CHARGE</span>
                <span>CREATION</span>
              </div>
            </div>

            {/* Branching Connection Lines */}
            <div className="flowchart-branches">
              <div className="flowchart-main-branch-line"></div>
            </div>

            {/* Flowchart Steps Grid */}
            <div className="flowchart-steps-grid">
              {debentureSteps.map((step, idx) => (
                <div key={idx} className="flowchart-step-column">
                  {/* Vertical dashed drop line */}
                  <div className="flowchart-drop-line"></div>

                  {/* Flowchart Step Card */}
                  <div className="flowchart-step-card">
                    <span className="flowchart-card-tab">{step.num}</span>
                    <div className="flowchart-card-content">
                      <p>{step.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* YouTube Video Section Header */}
          <div className="video-section-header text-center">
            <h2>Ever wondered how charge creation works in debenture plans?</h2>
            <div className="heading-line mx-auto"></div>
          </div>

          {/* YouTube Video Section */}
          <div className="debenture-video-box">
            <div className="video-info">
              <h3>DEBENTURE PLAN</h3>
              <p>
                A group of entrepreneurs wants to build a warehouse and needs money. They decide to raise funds by issuing debentures and put the money into their Special Purpose Vehicle (SPV) account.
              </p>
              <p>
                With the money ready, they use it to buy land for the warehouse, with the land owned by the SPV. They then appoint a debenture trustee, a person or organization that will manage the loan and ensure everything runs smoothly. To protect the loan, they mortgage the land in the trustee's name, making sure the land can be used to pay back the loan if needed. Finally, they register the mortgage deed with the Ministry of Corporate Affairs (MCA), securing the deal through the CHG-9 charge creation form.
              </p>
              <p className="video-summary-highlight">
                Now they have the funds, the land, and the proper legal steps to move forward.
              </p>
              <a 
                href="https://youtu.be/fMzRx4kVkfw" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary play-btn-link"
              >
                <Play size={18} fill="white" />
                <span>Watch on YouTube</span>
              </a>
            </div>
            <div className="video-thumbnail-container">
              <a href="https://youtu.be/fMzRx4kVkfw" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/assets/img/debt/debenture-plan.png" 
                  alt="Debenture Plan Video Thumbnail" 
                  className="video-thumb-img" 
                />
                <div className="play-button-overlay">
                  <Play size={44} fill="currentColor" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LLP Plan Section */}
      <section className="charge-llp section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span>Alternative Strategy</span>
            <h2>How is the charge creation process done for LLP plan?</h2>
            <div className="heading-line mx-auto"></div>
          </div>

          {/* Flowchart Image */}
          <div className="llp-flowchart-box text-center">
            <img 
              src="/assets/img/debt/LLP-plan.png" 
              alt="LLP Plan Flowchart" 
              className="llp-flowchart-img img-fluid" 
            />
          </div>

          {/* LLP Process Heading */}
          <div className="section-header text-center mt-5">
            <h2>LLP Fund Mobilization and Hypothecation Agreement Process</h2>
            <div className="heading-line mx-auto"></div>
            <p>
              Under our Limited Liability Partnership plans, we execute strict asset hypothecation agreements registered directly with the Ministry of Corporate Affairs (MCA).
            </p>
          </div>

          {/* LLP Cards Grid */}
          <div className="llp-grid">
            {llpSteps.map((step, idx) => (
              <div key={idx} className="llp-card">
                <div className="llp-card-header">
                  <span className="llp-card-num">{step.num}</span>
                  <Layers size={24} className="llp-icon" />
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GHL Safety Callout */}
      <section className="charge-safety section-padding">
        <div className="container">
          <div className="safety-card">
            <div className="safety-text">
              <div className="safety-badge">
                <ShieldCheck size={20} />
                <span>GHL Asset Protection</span>
              </div>
              <h2>How GHL Secures Your Capital</h2>
              <p>
                Once a charge is officially registered on an asset, it becomes legally locked and cannot be sold, transferred, or leveraged without the express consent of the trustee. 
              </p>
              <p>
                In the rare case of asset liquidation, all proceeds are legally prioritised to refund investors. Additionally, GHL has policies in place to replace any assets with equivalent value properties if changes occur, ensuring your investment remains continuously protected.
              </p>
            </div>
            <div className="safety-img-container">
              <img 
                src="/assets/img/debt/secures-your-assets.png" 
                alt="GHL Asset Protection Graphic" 
                className="safety-img" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Login/Register CTA Section */}
      <section className="login-sec text-center">
        <div className="container">
          <h5>GHL INDIA is here to create a prosperous environment that serves the world at large</h5>
          <p>Let us join together to live an opulent life</p>
          <div className="login-sec-buttons">
            <a href="#login" className="login-sec-btn-login">Login</a>
            <a href="#register" className="login-sec-btn-register">Register</a>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { ArrowRight, Layers, Lock, Play } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './ChargeCreation.css';
import BottomCTA from './BottomCTA';
import chargeHero from '../assets/charge creation.png';
// import llpStepsDesktop from '../assets/charge creation steps.png';
import llpStepsDesktop from '../assets/charge steps1.png';
import llpStepsMobile from '../assets/charge steps mobile.png';

export default function ChargeCreation() {
  const animOptions = { threshold: 0.15, rootMargin: '0px 0px -150px 0px' };
  const introRef = useScrollAnimation(animOptions);
  const debentureRef = useScrollAnimation(animOptions);
  const llpRef = useScrollAnimation(animOptions);
  const safetyRef = useScrollAnimation(animOptions);

  const handleExploreClick = (event) => {
    event.preventDefault();
    const target = introRef.current;
    if (target) {
      const header = document.querySelector('.header-main');
      const headerHeight = header ? header.offsetHeight : 80;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = targetPosition - headerHeight - 20;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const debentureSteps = [
    {
      num: '01',
      content: <>Appointment of <strong>debenture trustee</strong></>
    },
    {
      num: '02',
      content: <>Fund mobilization in the bank account of the <strong>special purpose vehicle (SPV)</strong> through debentures issuance</>
    },
    {
      num: '03',
      content: <>Purchasing the asset in the <strong>SPV&apos;s</strong> name</>
    },
    {
      num: '04',
      content: <>Mortgaging the purchased asset in the name of the <strong>debenture trustee</strong></>
    },
    {
      num: '05',
      content: <>Registering the mortgage deed with <strong>MCA</strong> through charge creation form <strong>CHG-9</strong></>
    }
  ];

  const llpSteps = [
    {
      num: '01',
      title: 'Fund Mobilization',
      desc: 'Funds are raised directly in the bank account of the Special Purpose Vehicle (SPV) to launch the financing process.'
    },
    {
      num: '02',
      title: 'Hypothecation Agreement',
      desc: 'A hypothecation agreement is executed on the floating assets, granting the lender a formal security charge.'
    },
    {
      num: '03',
      title: 'MCA Registration (Form 8)',
      desc: 'The hypothecation agreement is registered with the Ministry of Corporate Affairs (MCA) via Form 8 for legal binding.'
    }
  ];



  return (
    <div className="charge-creation-page">
      <section className="charge-hero-banner">
        <div className="charge-hero-media-wrap">
          <img src={chargeHero} alt="Charge Creation Banner" className="charge-hero-img" />
          <div className="charge-hero-overlay-mask" />
          <div className="charge-hero-content-wrap container">
            <div className="charge-hero-content">
              <span className="charge-hero-tag">SECURED STRUCTURE. LEGAL PROTECTION.</span>
              <h1>
                <span className="charge-mob-line1">Charge Creation that</span> <br className="charge-mob-br" />
                <span className="charge-mob-line2">protects every investment</span>
              </h1>
              <p>
                Understand how legally registered charges secure assets, protect investor capital,
                and create a transparent repayment framework.
              </p>
              <div className="charge-hero-actions">
                <a href="#charge-intro" className="charge-hero-btn" onClick={handleExploreClick}>
                  Explore Charge Creation
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="charge-intro section-padding" id="charge-intro" ref={introRef}>
        <div className="container">
          <div className="charge-row-flex">
            <div className="charge-col-flex intro-content-col" data-animate="fade-left">
              <span className="intro-badge">Security Basics</span>
              <h2>What is <span className="text-highlight">Charge Creation?</span></h2>
              <p>
                Charge creation is a legal process where a borrower pledges specific assets as security to guarantee debt repayment. This gives lenders and investors absolute legal confidence that their capital is protected.
              </p>
              <p>
                Even in the event of default or bankruptcy, the registered charge gives the trustee direct rights to liquidate or manage the pledged asset to recoup investor principal, making it one of the safest mechanisms in structured finance.
              </p>
            </div>

            <div className="charge-col-flex intro-image-container" data-animate="fade-right">
              <div className="charge-intro-graphics">
                <div className="graphics-circle">
                  <Lock size={48} className="lock-icon-glow" />
                  <span>100% Asset Backed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="charge-debenture section-padding" ref={debentureRef}>
        <div className="container">
          <div className="section-header text-center">
            <span>Security Framework</span>
            <h2>How is the charge creation process <br className="mobile-br" /> done for debenture plan?</h2>
            <p>
              Follow the official process of securing capital using physical land assets, verified by independent trustees and registered under federal guidelines.
            </p>
          </div>

          <div className="debenture-flowchart-interactive">
            <div className="flowchart-top-node-wrapper">
              <div className="flowchart-top-circle">
                <span>CHARGE</span>
                <span>CREATION</span>
              </div>
            </div>

            <div className="flowchart-branches">
              <div className="flowchart-main-branch-line"></div>
            </div>

            <div className="flowchart-steps-grid">
              {debentureSteps.map((step, idx) => (
                <div key={idx} className="flowchart-step-column">
                  <div className="flowchart-drop-line"></div>
                  <div className="flowchart-step-card" data-animate="fade-up" data-stagger-delay={`${idx * 150}ms`}>
                    <span className="flowchart-card-tab">{step.num}</span>
                    <div className="flowchart-card-content">
                      <p>{step.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="video-section-header text-center">
            <h3>
              <span className="debenture-mob-line1">Ever wondered how charge creation</span> <br className="debenture-mob-br" />
              <span className="debenture-mob-line2">works in debenture plans?</span>
            </h3>
          </div>

          <div className="debenture-video-box" data-animate="fade-up">
            <div className="video-info">
              <h3>DEBENTURE PLAN</h3>
              <p>
                A group of entrepreneurs wants to build a warehouse and needs money. They decide to raise funds by issuing debentures and put the money into their Special Purpose Vehicle (SPV) account.
              </p>
              <p>
                With the money ready, they use it to buy land for the warehouse, with the land owned by the SPV. They then appoint a debenture trustee, a person or organization that will manage the loan and ensure everything runs smoothly. To protect the loan, they mortgage the land in the trustee&apos;s name, making sure the land can be used to pay back the loan if needed. Finally, they register the mortgage deed with the Ministry of Corporate Affairs (MCA), securing the deal through the CHG-9 charge creation form.
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

      <section className="charge-llp section-padding" ref={llpRef}>
        <div className="container">
          <div className="section-header text-center">
            <span>Alternative Strategy</span>
            <h2>How is the charge creation process <br className="mobile-br" /> done for LLP plan?</h2>
          </div>
        </div>

        <figure className="llp-reference-figure">
          <picture>
            <source media="(max-width: 768px)" srcSet={llpStepsMobile} />
            <img
              src={llpStepsDesktop}
              alt="LLP Charge Creation Steps"
              className="llp-reference-img"
            />
          </picture>
        </figure>

        <div className="container mt-5">
          <div className="video-section-header text-center">
            <h3>LLP Fund Mobilization and <br className="mobile-br" /> Hypothecation Agreement Process</h3>
            <p className="text-muted" style={{ maxWidth: '800px', margin: '12px auto 0', fontSize: '16px', lineHeight: '1.6' }}>
              Under our Limited Liability Partnership plans, we execute strict asset hypothecation agreements registered directly with the Ministry of Corporate Affairs (MCA).
            </p>
          </div>

          <div className="llp-grid">
            {llpSteps.map((step, idx) => (
              <div key={idx} className="llp-card" data-animate="fade-up" data-stagger-delay={`${idx * 150}ms`}>
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

      <section className="charge-safety section-padding" ref={safetyRef}>
        <div className="container">
          <div className="charge-row-flex row-reverse">
            <div className="charge-col-flex intro-image-container" data-animate="fade-left">
              <img
                src="/assets/img/debt/secures-your-assets.png"
                alt="GHL Asset Protection Graphic"
                className="safety-img"
              />
            </div>
            <div className="charge-col-flex intro-content-col" data-animate="fade-right">
              <span className="intro-badge">Asset Protection</span>
              <h2>How GHL <span className="text-highlight">Secures Your Capital</span></h2>
              <p>
                Once a charge is officially registered on an asset, it becomes legally locked and cannot be sold, transferred, or leveraged without the express consent of the trustee.
              </p>
              <p>
                In the rare case of asset liquidation, all proceeds are legally prioritised to refund investors. Additionally, GHL has policies in place to replace any assets with equivalent value properties if changes occur, ensuring your investment remains continuously protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BottomCTA />
    </div>
  );
}

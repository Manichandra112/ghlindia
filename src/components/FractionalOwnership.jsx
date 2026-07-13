import React from 'react';
import {
  Coins,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  Activity,
  FileText,
  CheckCircle,
  BarChart3,
  Users,
  ArrowRight,
  Percent,
  Search,
  UserCheck,
  Check
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './FractionalOwnership.css';
import BottomCTA from './BottomCTA';
import fractionalInvestment from '../assets/fractional invesment.png';

export default function FractionalOwnership() {
  const animOptions = { threshold: 0.15, rootMargin: '0px 0px -150px 0px' };
  const sectionRef1 = useScrollAnimation(animOptions);
  const sectionRef2 = useScrollAnimation(animOptions);
  const sectionRef3 = useScrollAnimation(animOptions);
  const sectionRef4 = useScrollAnimation(animOptions);
  const sectionRef5 = useScrollAnimation(animOptions);
  const sectionRef6 = useScrollAnimation(animOptions);
  const handleLearnMoreClick = (event) => {
    event.preventDefault();
    sectionRef1.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const whyFractional = [
    {
      icon: <Coins className="feat-icon" />,
      title: "Invest Smartly, Start Small",
      desc: "Get access to high-value assets with a small investment."
    },
    {
      icon: <ShieldCheck className="feat-icon" />,
      title: "Grow Without Risk",
      desc: "Spread your investment across various opportunities for better security."
    },
    {
      icon: <TrendingUp className="feat-icon" />,
      title: "Watch Your Investment Grow",
      desc: "Just like owning the whole asset, your share grows in value as the asset does!"
    },
    {
      icon: <Activity className="feat-icon" />,
      title: "Sit Back, Relax",
      desc: "Let professionals handle your investments, especially in real estate, so you don’t have to worry about the details."
    },
    {
      icon: <Percent className="feat-icon" />,
      title: "Earn While You Sleep",
      desc: "Enjoy regular payouts, like interest on debentures, without lifting a finger."
    }
  ];

  const whyChooseGhl = [
    { id: 1, title: "Invest Small, Own Big", text: "GHL lets you invest in high-value assets with a smaller upfront cost." },
    { id: 2, title: "Earn Passively", text: "Get regular income from our NCD, no effort needed." },
    { id: 3, title: "Expertly Selected", text: "Only the best investment opportunities, handpicked by professionals." },
    { id: 4, title: "Diversification", text: "GHL helps you spread your investments across different areas to reduce risk and boost your returns." },
    { id: 5, title: "Tax Benefits", text: "GHL offers ways to save on taxes, helping you keep more of your investment returns." },
    { id: 6, title: "Access to Big Opportunities", text: "With fractional investing, you can invest in high-value things like real estate, even with small amounts of money." },
    { id: 7, title: "Risk Reduction", text: "GHL reduces risks by spreading investments and doing research, helping protect your money from market changes." },
    { id: 8, title: "Wealth Building", text: "GHL helps you grow your wealth over time by offering great investment opportunities and steady income options." },
    { id: 9, title: "Always Supported", text: "Get expert advice and guidance throughout your investment journey." }
  ];

  const timelineSteps = [
    {
      step: "01",
      icon: <UserCheck size={20} />,
      title: "Sign Up & Verify",
      desc: "Create your GHL account and complete a seamless online KYC verification in minutes."
    },
    {
      step: "02",
      icon: <Search size={20} />,
      title: "Pick Your Plan",
      desc: "Browse our active SPV listings and select the investment plan that matches your financial goals."
    },
    {
      step: "03",
      icon: <FileText size={20} />,
      title: "Get Digital Details",
      desc: "Receive comprehensive document packages, debenture trust deeds, and security filings."
    },
    {
      step: "04",
      icon: <Coins size={20} />,
      title: "Earn Regular Income",
      desc: "Sit back and watch fixed interest payouts transfer directly into your registered bank account."
    },
    {
      step: "05",
      icon: <BarChart3 size={20} />,
      title: "Track Your Portfolio",
      desc: "Monitor yields, tax certificates, and progress report logs via your unified dashboard."
    },
    {
      step: "06",
      icon: <TrendingUp size={20} />,
      title: "Maturity Payout",
      desc: "Retrieve your full principal capital automatically upon the completion of the investment term."
    },
    {
      step: "07",
      icon: <Users size={20} />,
      title: "Reinvest & Compound",
      desc: "Roll over your capital into newer high-yield projects to compound your financial freedom."
    }
  ];

  return (
    <div className="fractional-page-wrapper">
      <section className="fractional-hero">
        <div className="fractional-hero-media-wrap">
          <img src={fractionalInvestment} alt="Fractional Investment Banner" className="fractional-hero-img" />
          <div className="fractional-hero-overlay-mask" />
          <div className="fractional-hero-content-wrap container">
            <div className="fractional-hero-content">
              <span className="fractional-hero-tag">SMART ACCESS. BIG OPPORTUNITIES.</span>
              <h1>
                Small Investments,
                <span> Big Opportunities</span>
              </h1>
              <p>
                Start with affordable capital and co-own high-value assets through fractional
                investing built for secure, long-term wealth growth.
              </p>

              <div className="fractional-hero-points">
                <span>Low Entry Barrier</span>
                <span>Premium Asset Access</span>
                <span>Diversified Growth</span>
              </div>

              <div className="fractional-hero-actions">
                <a href="#learn-more" className="fractional-hero-btn" onClick={handleLearnMoreClick}>
                  Explore Fractional Investment
                  <ArrowRight size={18} />
                </a>
                {/* <a href="#/contact" className="fractional-hero-btn fractional-hero-btn-secondary">
                  Talk to Advisor
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Concept Section */}
      <section className="fractional-intro section-padding" id="learn-more" ref={sectionRef1}>
        <div className="container">
          <div className="fractional-row-flex">
            <div className="fractional-col-flex intro-image-container" data-animate="fade-right">
              <img
                src="/assets/img/debt/about-fractional-investment_.png"
                alt="About Fractional Investment"
                className="fractional-intro-img"
              />
            </div>
            <div className="fractional-col-flex intro-content-col" data-animate="fade-left" data-stagger-delay="150ms">
              <span className="intro-badge">Smart Finance</span>
              <h2>Interested in learning about <br className="mobile-br" /> <span className="text-highlight">fractional investment?</span></h2>
              <p>
                <strong>Fractional investment</strong> refers to the practice of investing in a part or fraction of an asset or investment, rather than purchasing it in full. This allows individuals to invest smaller amounts in expensive assets, such as real estate or stocks without needing the full amount to buy the entire asset.
              </p>

              <div className="intro-features">
                <div className="intro-feat-item">
                  <div className="intro-feat-icon-wrapper">
                    <Check size={14} className="intro-feat-icon" />
                  </div>
                  <div className="intro-feat-text">
                    <strong>Low Entry Barrier:</strong> Start co-ownership with a small fraction of the capital.
                  </div>
                </div>
                <div className="intro-feat-item">
                  <div className="intro-feat-icon-wrapper">
                    <Check size={14} className="intro-feat-icon" />
                  </div>
                  <div className="intro-feat-text">
                    <strong>Secured Returns:</strong> Earn high-yield debenture interest backed by charge creations.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Estate Example Section */}
      <section className="fractional-example" ref={sectionRef2}>
        <div className="container">
          <div className="example-glass-card glass-panel" data-animate="zoom-in">
            <div className="ribbon-gold">Example</div>
            <div className="example-content">
              <h3>Real Estate Co-Ownership</h3>
              <p>
                Instead of deploying ₹5 Crores to purchase a premium commercial building yourself, GHL structures the asset through a Special Purpose Vehicle (SPV). You can buy a fractional share of this SPV for a fraction of the cost, earning your exact proportional share of rent, capital appreciation, and debenture interest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Fractional Grid */}
      <section className="why-fractional-grid section-padding" ref={sectionRef3}>
        <div className="container">
          <div className="section-header" data-animate="fade-up">
            <span>Core Advantages</span>
            <h2>Why Fractional Investing?</h2>
            <p>Traditional asset acquisition requires heavy capital. Fractional investing lowers barriers, offering security and liquidity.</p>
          </div>

          <div className="fractional-grid-row">
            {whyFractional.map((feat, idx) => (
              <div
                className="fractional-feat-card glass-panel"
                key={idx}
                data-animate="fade-up"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="feat-icon-badge">{feat.icon}</div>
                <h4>{feat.title}</h4>
                <p>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose GHL list */}
      <section className="why-ghl-details section-padding" ref={sectionRef4}>
        <div className="container">
          <div className="section-header" data-animate="fade-up">
            <span className="text-accent">Differentiators</span>
            <h2>Why Fractional Investing with GHL?</h2>
            <p className="text-muted">We combine institutional-grade asset analysis, active legal charges, and robust co-ownership systems to protect your hard-earned wealth.</p>
          </div>

          <div className="ghl-reasons-matrix">
            {whyChooseGhl.map((reason) => (
              <div
                className="reason-card"
                key={reason.id}
                data-animate="fade-up"
              >
                <div className="reason-header">
                  <CheckCircle className="check-icon-gold" size={18} />
                  <h5>{reason.title}</h5>
                </div>
                <p>{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise: Property Flipping */}
      <section className="property-flipping-expertise section-padding" ref={sectionRef5}>
        <div className="container">
          <div className="fractional-row-flex">
            <div className="fractional-col-flex" data-animate="fade-right">
              <img
                src="/assets/img/debt/our-expertise.png"
                alt="Property Flipping Expertise"
                className="fractional-intro-img"
              />
            </div>
            <div className="fractional-col-flex intro-content-col" data-animate="fade-left" data-stagger-delay="150ms">
              <span className="intro-badge">Our Core Engine</span>
              <h2>Our Primary Expertise: <span className="text-highlight">Property Flipping</span></h2>
              <p>
                At GHL, we specialize in high-return **Property Flipping**. Our deal origination team identifies highly demandable, distressed properties at undervalued prices—often through auction closures, bank debt settlements, or short sales.
              </p>
              <p>
                Once acquired, these assets are developed, renovated, and flipped to ready buyers. By financing these flips through Special Purpose Vehicles (SPVs) funded by co-investors in exchange for secured Non-Convertible Debentures (NCDs), we deliver consistent, asset-backed returns back to our fractional co-owners.
              </p>
              <div className="expertise-accent-bar">
                <Sparkles size={16} className="text-gold" />
                <span>Invest in high-potential real estate flipping without large capital.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="process-timeline-section section-padding" ref={sectionRef6}>
        <div className="container">
          <div className="section-header" data-animate="fade-up">
            <span className="text-accent">Roadmap</span>
            <h2>How the Process Works</h2>
            <p className="text-muted">Start fractional co-ownership in 7 simple, transparent steps.</p>
          </div>

          <div className="timeline-block">
            <div className="timeline-connector-line"></div>
            {timelineSteps.map((step, idx) => (
              <div
                className={`timeline-step-row ${idx % 2 === 0 ? 'left-align' : 'right-align'}`}
                key={idx}
                data-animate="fade-up"
              >
                <div className="timeline-step-badge">
                  {step.icon}
                </div>
                <div className="timeline-card-wrapper">
                  <h4><span className="step-number-prefix">{step.step}</span> {step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action CTA Section */}
      <BottomCTA />
    </div>
  );
}

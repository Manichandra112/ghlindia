import React, { useState, useRef } from 'react';
import { TrendingUp, Users, Award, Globe, Coins, ShieldCheck, ArrowRight } from 'lucide-react';
import './WhyUs.css';
import whyHero from '../assets/whyghl.png';

export default function WhyUs() {
  const [activeIdx, setActiveIdx] = useState(0);
  const introRef = useRef(null);

  const criteriaList = [
    {
      title: "Demand for Product",
      desc: "Strong and consistent market demand drives long-term business growth.",
      icon: <TrendingUp size={28} />
    },
    {
      title: "Team Expertise",
      desc: "Experienced professionals with proven operational excellence.",
      icon: <Users size={28} />
    },
    {
      title: "Unique Product & Team",
      desc: "Innovative products backed by a highly skilled and adaptable team.",
      icon: <Award size={28} />
    },
    {
      title: "Exclusive Network",
      desc: "Strategic partnerships and an exclusive global business network.",
      icon: <Globe size={28} />
    },
    {
      title: "Monetary Benefits",
      desc: "Direct investment opportunities with transparent and attractive returns.",
      icon: <Coins size={28} />
    },
    {
      title: "Capital Protection",
      desc: "Investments secured through legally enforceable tangible asset backing.",
      icon: <ShieldCheck size={28} />
    }
  ];

  const cardsData = [
    {
      img: "/assets/img/why/01_01.png",
      alt: "Best investment company",
      title: <>Demand of the <span className="text-highlight">Product</span></>,
      desc: "The amount of money a company can earn is determined by the demand for its product. Our company's products, which include Property Trading and Wholesale Trading of Consumable Goods, are in high demand, ensuring consistent profits. As a result, we offer substantial returns of up to 24% per annum."
    },
    {
      img: "/assets/img/why/02_02.png",
      alt: "Best investment company",
      title: <>Ability of the <span className="text-highlight">Team</span></>,
      desc: "Demand of a product can be monetized fully only with help of a committed and capable team. Our team of experts is dedicated and skilled in their fields, making things happen effectively. So, as a team, we are capable of running a business smoothly and successfully."
    },
    {
      img: "/assets/img/why/03_03.png",
      alt: "Best investment company",
      title: <>Difficulty in replacing the <span className="text-highlight">Product & Team</span></>,
      desc: "When a team consistently upgrades their skills to match current technology trends for selling the company's product, they become irreplaceable in the market. Our company’s team always learns new technology to upgrade themselves to sell our product. So, both our product and team can never be replaced."
    },
    {
      img: "/assets/img/why/04_04.png",
      alt: "Alternative investment platform",
      title: <>Exclusive <span className="text-highlight">Network</span></>,
      desc: "A strong network is crucial for long-term business success. Our company has an extensive global network, allowing us to run our business successfully for the long term, regardless of the economic situation."
    },
    {
      img: "/assets/img/why/05_05.png",
      alt: "Alternative investment platform",
      title: <>Monetary benefits for your <span className="text-highlight">capital contribution</span></>,
      desc: "A company that doesn't act as a middleman between investors and entrepreneurs can offer significant returns. Because GHL INDIA conducts its own business without intermediaries, we can provide returns of up to 24% p.a.,"
    },
    {
      img: "/assets/img/why/06_06.png",
      alt: "Alternative investment platform",
      title: <>Safety of your <span className="text-highlight">capital</span></>,
      desc: "Don't risk losing your hard-earned money to greedy schemes. Invest in a company that ensures capital security. GHL India secures investors capital with tangible assets through the charge creation process, making us the safest option for your investment."
    }
  ];

  const cardRefs = useRef([]);
  const handleExploreClick = (event) => {
    event.preventDefault();
    introRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleItemClick = (idx) => {
    setActiveIdx(idx);
    const cardEl = cardRefs.current[idx];
    if (cardEl) {
      cardEl.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  return (
    <div className="why-us-page">
      {/* Hero Header Banner */}
      <section className="why-hero-banner">
        <div className="why-hero-media-wrap">
          <img src={whyHero} alt="Why GHL Banner" className="why-hero-img" />
          <div className="why-hero-overlay-mask" />
          <div className="why-hero-content-wrap container">
            <div className="why-hero-content">
              <span className="why-hero-tag">TRUST. TRANSPARENCY. CONSISTENCY.</span>
              <h1>
                Why GHL is
                <span> built for long-term investors</span>
              </h1>
              <p>
                Discover the key pillars behind our model: strong market demand, experienced
                execution, secured capital structures, and consistent wealth-building opportunities.
              </p>
              <div className="why-hero-actions">
                <a href="#why-intro" className="why-hero-btn" onClick={handleExploreClick}>
                  Explore Why GHL
                  <ArrowRight size={18} />
                </a>
                {/* <a href="#/contact" className="why-hero-btn why-hero-btn-secondary">
                  Talk to Advisor
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Description */}
      <section className="why-intro section-padding" id="why-intro" ref={introRef}>
        <div className="container">
          <div className="why-intro-card">
            <p>
              While the decision to invest is yours, explaining why GHL is your best choice is our responsibility, because your trust and peace of mind in investing with us are invaluable to us. As a wise investor, you should first analyze the company and the following criteria before making your investment:
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Premium Fintech Timeline Section */}
      <section className="why-timeline-section">
        <div className="container">

          {/* Premium Section Header */}
          <div className="timeline-section-header text-center">
            <h2 className="timeline-section-title">Why Choose Us</h2>
            <p className="timeline-section-subtitle">
              Six key pillars that make our investment opportunities secure, transparent, and built for long-term growth.
            </p>
          </div>

          <div className="why-timeline-wrapper">
            {/* Horizontal Line behind timeline items */}
            <div className="timeline-horizontal-bar">
              {/* Dynamic red progress segment based on selection */}
              <div
                className="timeline-progress-bar"
                style={{ width: `${(activeIdx / 5) * 100}%` }}
              ></div>
            </div>

            <ul className="why-timeline-list">
              {criteriaList.map((item, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <li
                    key={idx}
                    className={`timeline-item ${isActive ? 'active' : ''}`}
                    onClick={() => handleItemClick(idx)}
                  >
                    {/* Circle Icon Box */}
                    <div className="timeline-icon-box">
                      <div className="timeline-icon-wrapper">
                        {item.icon}
                      </div>
                    </div>

                    {/* Feature Info */}
                    <div className="timeline-item-info">
                      <h3 className="timeline-item-title">{item.title}</h3>
                      <p className="timeline-item-desc">{item.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* Detailed Cards Section explaining each detail */}
      <section className="why-cards-section section-padding">
        <div className="container">
          <div className="why-cards-grid">
            {cardsData.map((card, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={idx}
                  className={`why-detail-card ${isActive ? 'highlight-focus' : ''}`}
                  ref={(el) => (cardRefs.current[idx] = el)}
                >
                  <div className="why-card-image-box">
                    <img src={card.img} alt={card.alt} className="why-card-img" />
                  </div>
                  <div className="why-card-content">
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom Path CTA Banner */}
      <section className="why-bottom-cta section-padding text-center">
        <div className="container">
          <div className="why-cta-card">
            <p>
              Sometimes, the right path can lead our life to the right destination! And now, the choice is yours!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

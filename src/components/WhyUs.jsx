import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Users, Award, Globe, Coins, ShieldCheck } from 'lucide-react';
import './WhyUs.css';

export default function WhyUs() {
  const [activeIdx, setActiveIdx] = useState(0);

  const criteriaList = [
    {
      title: "Demand for Product",
      shortDesc: "High market demand in property & consumable goods.",
      icon: <TrendingUp size={28} />,
      img: "/assets/img/why/01_01.png",
      fullDesc: "The amount of money a company can earn is determined by the demand for its product. Our company's products, which include Property Trading and Wholesale Trading of Consumable Goods, are in high demand, ensuring consistent profits. As a result, we offer substantial returns of up to 24% per annum."
    },
    {
      title: "Team Expertise",
      shortDesc: "Skilled experts dedicated to running operations smoothly.",
      icon: <Users size={28} />,
      img: "/assets/img/why/02_02.png",
      fullDesc: "Demand of a product can be monetized fully only with help of a committed and capable team. Our team of experts is dedicated and skilled in their fields, making things happen effectively. So, as a team, we are capable of running a business smoothly and successfully."
    },
    {
      title: "Unique Product & Team",
      shortDesc: "Consistently upgrading skills to remain irreplaceable.",
      icon: <Award size={28} />,
      img: "/assets/img/why/03_03.png",
      fullDesc: "When a team consistently upgrades their skills to match current technology trends for selling the company's product, they become irreplaceable in the market. Our company’s team always learns new technology to upgrade themselves to sell our product. So, both our product and team can never be replaced."
    },
    {
      title: "Exclusive Network",
      shortDesc: "Extensive global network for long-term business success.",
      icon: <Globe size={28} />,
      img: "/assets/img/why/04_04.png",
      fullDesc: "A strong network is crucial for long-term business success. Our company has an extensive global network, allowing us to run our business successfully for the long term, regardless of the economic situation."
    },
    {
      title: "Monetary Benefits",
      shortDesc: "Direct investments without middlemen for up to 24% returns.",
      icon: <Coins size={28} />,
      img: "/assets/img/why/05_05.png",
      fullDesc: "A company that doesn't act as a middleman between investors and entrepreneurs can offer significant returns. Because GHL INDIA conducts its own business without intermediaries, we can provide returns of up to 24% p.a."
    },
    {
      title: "Capital Protection",
      shortDesc: "Capital secured with tangible assets via charge creation.",
      icon: <ShieldCheck size={28} />,
      img: "/assets/img/why/06_06.png",
      fullDesc: "Don't risk losing your hard-earned money to greedy schemes. Invest in a company that ensures capital security. GHL India secures investors capital with tangible assets through the charge creation process, making us the safest option for your investment."
    }
  ];

  // Ref to all detail cards to scroll to them
  const cardRefs = useRef([]);

  const handleItemClick = (idx) => {
    setActiveIdx(idx);
    // Smooth scroll to the corresponding details card below
    const cardEl = cardRefs.current[idx];
    if (cardEl) {
      const headerOffset = 120;
      const elementPosition = cardEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };



  return (
    <div className="why-us-page">
      {/* Hero Header Banner */}
      <section className="why-hero-banner">
        <img 
          src="/assets/img/home/Why-Us.jpg" 
          alt="Why GHL India Banner" 
          className="why-banner-img" 
        />
      </section>

      {/* Intro Description */}
      <section className="why-intro section-padding">
        <div className="container">
          <div className="why-intro-card">
            <p>
              While the decision to invest is yours, explaining why GHL is your best choice is our responsibility, because your trust and peace of mind in investing with us are invaluable to us. As a wise investor, you should first analyze the company and the following criteria before making your investment:
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Fintech Stepper Section */}
      <section className="why-timeline-section">
        <div className="container">
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
                    <div className="timeline-icon-box">
                      {item.icon}
                    </div>
                    <div className="timeline-item-info">
                      <h4 className="timeline-item-title">{item.title}</h4>
                      <p className="timeline-item-desc">{item.shortDesc}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* Grid Cards Section explaining each detail */}
      <section className="why-cards-section section-padding">
        <div className="container">
          <div className="why-cards-grid">
            {criteriaList.map((card, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div 
                  key={idx} 
                  className={`why-detail-card ${isActive ? 'highlight-focus' : ''}`}
                  ref={(el) => (cardRefs.current[idx] = el)}
                  data-index={idx}
                >
                  <div className="why-card-image-box">
                    <img src={card.img} alt={card.title} className="why-card-img" />
                  </div>
                  <div className="why-card-content">
                    <h3>
                      {card.title}
                    </h3>
                    <p>{card.fullDesc}</p>
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

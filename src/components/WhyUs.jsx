import React from 'react';
import { TrendingUp, Users, Award, Globe, Coins, ShieldCheck } from 'lucide-react';
import './WhyUs.css';

export default function WhyUs() {
  const criteriaList = [
    {
      num: "01",
      title: "Demand of the Product",
      icon: <TrendingUp size={28} />
    },
    {
      num: "02",
      title: "Ability of the Team",
      icon: <Users size={28} />
    },
    {
      num: "03",
      title: "Irreplaceable Product & Team",
      icon: <Award size={28} />
    },
    {
      num: "04",
      title: "Exclusive Network",
      icon: <Globe size={28} />
    },
    {
      num: "05",
      title: "Monetary Benefits",
      icon: <Coins size={28} />
    },
    {
      num: "06",
      title: "Safety of your capital",
      icon: <ShieldCheck size={28} />
    }
  ];

  const cardsData = [
    {
      img: "/assets/img/why/01_01.png",
      title: <>Demand of the <span className="text-highlight">Product</span></>,
      desc: "The amount of money a company can earn is determined by the demand for its product. Our company's products, which include Property Trading and Wholesale Trading of Consumable Goods, are in high demand, ensuring consistent profits. As a result, we offer substantial returns of up to 24% per annum."
    },
    {
      img: "/assets/img/why/02_02.png",
      title: <>Ability of the <span className="text-highlight">Team</span></>,
      desc: "Demand of a product can be monetized fully only with help of a committed and capable team. Our team of experts is dedicated and skilled in their fields, making things happen effectively. So, as a team, we are capable of running a business smoothly and successfully."
    },
    {
      img: "/assets/img/why/03_03.png",
      title: <>Difficulty in replacing the <span className="text-highlight">Product & Team</span></>,
      desc: "When a team consistently upgrades their skills to match current technology trends for selling the company's product, they become irreplaceable in the market. Our company’s team always learns new technology to upgrade themselves to sell our product. So, both our product and team can never be replaced."
    },
    {
      img: "/assets/img/why/04_04.png",
      title: <>Exclusive <span className="text-highlight">Network</span></>,
      desc: "A strong network is crucial for long-term business success. Our company has an extensive global network, allowing us to run our business successfully for the long term, regardless of the economic situation."
    },
    {
      img: "/assets/img/why/05_05.png",
      title: <>Monetary benefits for your <span className="text-highlight">capital contribution</span></>,
      desc: "A company that doesn't act as a middleman between investors and entrepreneurs can offer significant returns. Because GHL INDIA conducts its own business without intermediaries, we can provide returns of up to 24% p.a."
    },
    {
      img: "/assets/img/why/06_06.png",
      title: <>Safety of your <span className="text-highlight">capital</span></>,
      desc: "Don't risk losing your hard-earned money to greedy schemes. Invest in a company that ensures capital security. GHL India secures investors capital with tangible assets through the charge creation process, making us the safest option for your investment."
    }
  ];

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

      {/* Interactive Timeline list */}
      <section className="why-timeline-section">
        <div className="container">
          <div className="why-timeline-wrapper">
            {/* Horizontal Line behind timeline items */}
            <div className="timeline-horizontal-bar"></div>

            <ul className="why-timeline-list">
              {criteriaList.map((item, idx) => (
                <li key={idx} className="timeline-item">
                  <div className="timeline-icon-box">
                    {item.icon}
                  </div>
                  <div className="timeline-connector-dot"></div>
                  <span className="timeline-item-title">{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Grid Cards Section */}
      <section className="why-cards-section section-padding">
        <div className="container">
          <div className="why-cards-grid">
            {cardsData.map((card, idx) => (
              <div key={idx} className="why-detail-card">
                <div className="why-card-image-box">
                  <img src={card.img} alt={card.title} className="why-card-img" />
                </div>
                <div className="why-card-content">
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              </div>
            ))}
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

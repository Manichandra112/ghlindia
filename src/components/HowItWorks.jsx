// import React from 'react';
// import { useScrollAnimation } from '../hooks/useScrollAnimation';
// import './HowItWorks.css';

// export default function HowItWorks() {
//   const sectionRef = useScrollAnimation();
//   const steps = [
//     {
//       number: 1,
//       topText: "Register & complete",
//       bottomText: "Your KYC",
//       iconSrc: "/assets/img/home2026/others/1YourKYC.png"
//     },
//     {
//       number: 2,
//       topText: "Choose Your",
//       bottomText: "ACTIVE PLAN & INVEST",
//       iconSrc: "/assets/img/home2026/others/2ActivePlan&Invest.png"
//     },
//     {
//       number: 3,
//       topText: "",
//       bottomText: "INVESTMENT DOCUMENTATION",
//       iconSrc: "/assets/img/home2026/others/3Documentation.png"
//     },
//     {
//       number: 4,
//       topText: "",
//       bottomText: "MONITOR & ENJOY YOUR RETURNS",
//       iconSrc: "/assets/img/home2026/others/4Monitor-Returns.png"
//     }
//   ];

//   return (
//     <section className="how-it-works-sec section-padding" id="how-it-works" ref={sectionRef}>
//       <div className="container">

//         {/* Section Header */}
//         <div className="section-header" data-animate="fade-up">
//           <span>Onboarding Guide</span>
//           <h2>How Does It Work?</h2>
//           <p>Get started on your yield accumulation journey in four simple, secure stages.</p>
//         </div>

//         {/* Steps Grid */}
//         <div className="how-steps-grid">
//           <div className="how-connecting-line"></div>
//           {steps.map((step, idx) => (
//             <div key={idx} className="step-card-wrapper" data-animate="zoom-in" data-stagger-delay={`${idx * 350}ms`}>

//               {/* Top small circle on the line */}
//               <div className="step-line-node">
//                 <span>{step.number}</span>
//               </div>

//               {/* Inner content card */}
//               <div className="step-content-card">
//                 <div className="step-text-area">
//                   {step.topText && <span className="step-text-top">{step.topText}</span>}
//                   <span className="step-text-bottom">{step.bottomText}</span>
//                 </div>
//                 <div className="step-icon-wrapper">
//                   <img src={step.iconSrc} alt={`Step ${step.number} Icon`} className="step-icon-img" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }


import React from "react";
import {
  ShieldCheck,
  TrendingUp,
  FileText,
  Wallet,
  ArrowRight,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "./HowItWorks.css";

export default function HowItWorks() {
  const sectionRef = useScrollAnimation();

  const steps = [
    {
      id: "01",
      title: "Complete KYC",
      description: "Register with us and finish your KYC to activate your investor account securely.",
      icon: ShieldCheck,
      color: "#ef4444",
    },
    {
      id: "02",
      title: "Choose Plan",
      description:
        "Select an active investment plan that matches your financial goals.",
      icon: TrendingUp,
      color: "#f59e0b",
    },
    {
      id: "03",
      title: "Documentation",
      description:
        "Digitally sign all investment agreements and supporting documents.",
      icon: FileText,
      color: "#3b82f6",
    },
    {
      id: "04",
      title: "Earn Returns",
      description:
        "Track your investment performance and receive returns seamlessly.",
      icon: Wallet,
      color: "#10b981",
    },
  ];

  return (
    <section
      className="how-section section-padding"
      id="how-it-works"
      ref={sectionRef}
    >
      <div className="container">
        <div className="section-header" data-animate="fade-up">
          <span>Simple Investment Journey</span>
          <h2>How It Works</h2>
          <p>
            Begin your investment journey in four simple and secure steps.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                className="step-card"
                key={step.id}
                data-animate="zoom-in"
                data-stagger-delay={`${index * 150}ms`}
              >
                <div
                  className="step-top"
                  style={{ borderColor: step.color }}
                >
                  <span className="step-number">{step.id}</span>

                  <div
                    className="step-icon"
                    style={{ background: step.color }}
                  >
                    <Icon size={30} />
                  </div>
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>

                <button className="step-btn">
                  Continue
                  <ArrowRight size={18} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
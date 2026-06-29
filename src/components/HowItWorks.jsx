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
import { UserCheck, PieChart, FileText, TrendingUp, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "./HowItWorks.css";

export default function HowItWorks() {
  const sectionRef = useScrollAnimation();

  const steps = [
    {
      id: "01",
      title: "Register & Complete Your KYC",
      description: "Create your GHL account and complete a seamless online KYC verification in just a few minutes.",
      icon: UserCheck,
      color: "var(--primary-red)"
    },
    {
      id: "02",
      title: "Choose Active Plan & Invest",
      description: "Browse our active high-yield investment plans and choose the SPV listing that matches your goals.",
      icon: PieChart,
      color: "var(--gold-accent)"
    },
    {
      id: "03",
      title: "Investment Documentation",
      description: "Receive comprehensive document packages, debenture trust deeds, and security certificates.",
      icon: FileText,
      color: "var(--primary-red)"
    },
    {
      id: "04",
      title: "Monitor & Enjoy Returns",
      description: "Track your yields via your dashboard and receive fixed interest payouts directly to your bank account.",
      icon: TrendingUp,
      color: "var(--gold-accent)"
    }
  ];

  return (
    <section className="how-it-works-sec section-padding" id="how-it-works" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="how-header" data-animate="fade-up">
          <span>Simple Onboarding</span>
          <h2>How Does It Work?</h2>
          <div className="how-header-line"></div>
          <p className="how-header-desc">
            Get started on your yield accumulation journey in four simple, secure stages.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="how-steps-grid">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={idx} 
                className="how-step-card" 
                data-animate="zoom-in" 
                data-stagger-delay={`${idx * 150}ms`}
              >
                {/* Floating Card Step Number */}
                <span className="how-step-badge">{step.id}</span>

                {/* Card Icon Container */}
                <div className="how-step-icon-wrapper" style={{ "--step-theme-color": step.color }}>
                  <IconComponent className="how-step-icon" size={28} />
                </div>

                {/* Card Content */}
                <div className="how-step-info">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>

                {/* Card Footer Flow Indicator */}
                {idx < steps.length - 1 && (
                  <div className="how-step-connector">
                    <ArrowRight size={20} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

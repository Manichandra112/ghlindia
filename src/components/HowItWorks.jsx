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
  UserCheck,
  ListChecks,
  FileText,
  Wallet,
  BarChart3,
  CircleDollarSign,
  Repeat,
  ArrowRight,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "./HowItWorks.css";

export default function HowItWorks() {
  const sectionRef = useScrollAnimation();

  const steps = [
    {
      id: "01",
      title: "Sign Up & Verify",
      description: "Create your GHL account and complete a seamless online KYC verification in minutes.",
      icon: UserCheck,
      color: "#ef4444",
    },
    {
      id: "02",
      title: "Pick Your Plan",
      description: "Browse our active SPV listings and select the investment plan that matches your financial goals.",
      icon: ListChecks,
      color: "#f59e0b",
    },
    {
      id: "03",
      title: "Get Digital Details",
      description: "Receive comprehensive document packages, debenture trust deeds, and security filings.",
      icon: FileText,
      color: "#3b82f6",
    },
    {
      id: "04",
      title: "Earn Regular Income",
      description: "Sit back and watch fixed interest payouts transfer directly into your registered bank account.",
      icon: Wallet,
      color: "#10b981",
    },
    {
      id: "05",
      title: "Track Your Portfolio",
      description: "Monitor yields, tax certificates, and progress report logs via your unified dashboard.",
      icon: BarChart3,
      color: "#8b5cf6",
    },
    {
      id: "06",
      title: "Maturity Payout",
      description: "Retrieve your full principal capital automatically upon the completion of the investment term.",
      icon: CircleDollarSign,
      color: "#14b8a6",
    },
    {
      id: "07",
      title: "Reinvest & Compound",
      description: "Roll over your capital into newer high-yield projects to compound your financial freedom.",
      icon: Repeat,
      color: "#d4af37",
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
            Begin your investment journey through a simple, secure, and transparent process.
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
                <div className="step-top">
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

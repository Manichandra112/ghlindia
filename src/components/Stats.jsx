import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import { IndianRupee, Check, Users, Users2, ArrowLeftRight, Percent, ShieldCheck } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

import 'swiper/css';
import 'swiper/css/free-mode';
import './Stats.css';

export default function Stats() {
  const sectionRef = useScrollAnimation();
  const stats = [
    {
      icon: <IndianRupee size={22} />,
      value: '₹235+ Cr',
      label: 'Asset Under Management',
      desc: 'USD $28.5M+ Portfolio'
    },
    {
      icon: <Check size={22} />,
      value: '18+',
      label: 'Completed Projects',
      desc: 'Zero project delays'
    },
    {
      icon: <Users size={22} />,
      value: '2500+',
      label: 'Satisfied Clients',
      desc: 'Retail & Institutional'
    },
    {
      icon: <Users2 size={22} />,
      value: '10+',
      label: 'Assistance Team',
      desc: '24/7 dedicated support'
    },
    {
      icon: <ArrowLeftRight size={22} />,
      value: '₹31.5+ Cr',
      label: 'Repayments Made',
      desc: 'USD $3.8M+ on-time payouts'
    },
    {
      icon: <Percent size={22} />,
      value: '18% - 24%',
      label: 'Avg Returns Distribution',
      desc: 'Per Annum payouts'
    },
    {
      icon: <ShieldCheck size={22} />,
      value: '0%',
      label: 'Default Rate',
      desc: '100% principal safety'
    }
  ];

  return (
    <section className="stats-section section-padding no-padding" id="stats" ref={sectionRef}>
      <div className="container">
        
        {/* Intro Header */}
        <div className="stats-header-area" data-animate="fade-up">
          <span className="stats-micro-title">Performance Metrics</span>
          <h2>GHL India in Numbers</h2>
          <p>
            Our alternate investment platform provides transparency and security that back our rapid growth trajectory.
          </p>
        </div>

        {/* Continuous Loop Swiper Ticker */}
        <div className="stats-ticker-container" data-animate="zoom-in" data-stagger-delay="200ms">
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={24}
            loop={true}
            speed={6000}
            freeMode={true}
            allowTouchMove={false}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false
            }}
            modules={[Autoplay, FreeMode]}
            className="stats-ticker-swiper"
          >
            {stats.map((stat, idx) => (
              <SwiperSlide key={idx} className="stats-ticker-slide">
                <div className="stats-ticker-card glass-panel">
                  <div className="ticker-card-top">
                    <div className="ticker-icon-box">{stat.icon}</div>
                    <span className="ticker-value">{stat.value}</span>
                  </div>
                  <div className="ticker-card-bottom">
                    <span className="ticker-label">{stat.label}</span>
                    <span className="ticker-desc">{stat.desc}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}

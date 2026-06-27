import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import { Award, ZoomIn, X } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import './Achievements.css';

export default function Achievements() {
  const [lightboxImg, setLightboxImg] = useState(null);
  const sectionRef = useScrollAnimation();

  const awards = [
    {
      img: '/assets/img/home2026/others/award-accolades.jpg',
      title: 'Awards & Accolades Portfolio',
      subtitle: 'Recognizing Financial Leadership'
    },
    {
      img: '/assets/img/home2026/others/Awards.jpg',
      title: 'Times Business Awards',
      subtitle: 'Company Of The Year'
    },
    {
      img: '/assets/img/home2026/others/Finance-Outlook-India-Certficate.jpg',
      title: 'Finance Outlook India',
      subtitle: 'Certificate of Achievement'
    },
    {
      img: '/assets/img/home2026/others/Finance-Outlook-India.jpg',
      title: 'Finance Outlook Cover',
      subtitle: 'Financial Leaders Circle'
    },
    {
      img: '/assets/img/home2026/others/Forbes-India.jpg',
      title: 'FORBES India Feature',
      subtitle: 'Asset Management Innovations'
    },
    {
      img: '/assets/img/home2026/others/Fortune-India.jpg',
      title: 'Fortune India Exchange',
      subtitle: 'Corporate Investment Leaders'
    },
    {
      isThankYou: true,
      title: 'Thank You',
      subtitle: '~ GHL INDIA ASSET'
    }
  ];

  return (
    <section className="achievements-section section-padding" id="achievements" ref={sectionRef}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header" data-animate="fade-up">
          <span>Our Credentials</span>
          <h2>Awards & Achievements</h2>
          <p>We are consistently recognized by leading global publications and national business forums for our secure returns and transparent operations.</p>
        </div>

        {/* Coverflow 3D Carousel */}
        <div className="achievements-carousel-container" data-animate="zoom-in" data-stagger-delay="300ms">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            speed={600}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
            className="achievements-swiper"
          >
            {awards.map((award, index) => (
              <SwiperSlide key={index} className={`achievement-slide ${award.isThankYou ? 'thank-you-slide' : ''}`}>
                {award.isThankYou ? (
                  <div className="thank-you-card-wrapper">
                    <div className="thank-you-content">
                      <div className="thank-you-badge">
                        <Award size={48} className="thank-you-icon" />
                      </div>
                      <h3>Thank You</h3>
                      <span>~ GHL INDIA ASSET</span>
                    </div>
                  </div>
                ) : (
                  <div className="award-card-wrapper" onClick={() => setLightboxImg(award)}>
                    <div className="award-image-box">
                      <img src={award.img} alt={award.title} className="award-cert-img" />
                      <div className="zoom-hover-overlay">
                        <ZoomIn size={24} className="zoom-icon-glow" />
                        <span>Zoom Document</span>
                      </div>
                    </div>
                    <div className="award-card-info">
                      <h4>{award.title}</h4>
                      <span>{award.subtitle}</span>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>

      {/* Lightbox / Zoom Overlay Modal */}
      {lightboxImg && (
        <div className="lightbox-backdrop" onClick={() => setLightboxImg(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close-btn" onClick={() => setLightboxImg(null)}>
              <X size={24} />
            </button>
            <img 
              src={lightboxImg.img} 
              alt={lightboxImg.title} 
              className="lightbox-img" 
            />
            <div className="lightbox-caption">
              <h3>{lightboxImg.title}</h3>
              <p>{lightboxImg.subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Hero.css';

import hero1 from '../assets/hero1.png';
import hero2 from '../assets/home-hero2.png';
import hero3 from '../assets/home-hero3.png';
import hero4 from '../assets/home-hero4.png';
import hero5 from '../assets/home-hero5.png';
import hero6 from '../assets/home-hero6.png';
import hero7 from '../assets/home-hero7.png';

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  const desktopSlides = [
    { img: hero1 },
    { img: hero2 },
    { img: hero3 },
    { img: hero4 },
    { img: hero5 },
    { img: hero6 },
    { img: hero7 }
  ];

  const mobileSlides = [
    { img: hero1 },
    { img: hero2 },
    { img: hero3 },
    { img: hero4 },
    { img: hero5 },
    { img: hero6 },
    { img: hero7 }
  ];

  const activeSlides = isMobile ? mobileSlides : desktopSlides;

  return (
    <section className="hero-section" id="hero">
      <div className="container hero-container">
        <Swiper
          key={isMobile ? 'mobile' : 'desktop'}
          spaceBetween={0}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="hero-swiper"
        >
          {activeSlides.map((slide, index) => {
            const slideContent = (
              <div className="hero-slide-img-wrapper">
                <img
                  src={slide.img}
                  alt={`GHL Alternate Investment Banner ${index + 1}`}
                  className="hero-slide-img"
                />
                {index === 0 && (
                  <div className="hero-slide-overlay-content">
                    <div className="hero-slide-text-container">
                      <h1 className="hero-slide-title-custom">
                        Building Wealth<br />
                        Through <span className="gold-text">Strategic</span><br />
                        <span className="gold-text">Investments</span>
                      </h1>
                      <div className="hero-slide-gold-line" />
                      <p className="hero-slide-desc-custom">
                        Trusted investment solutions in Real Estate, Asset Management<br />
                        and Alternative Investments.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );

            return (
              <SwiperSlide key={index}>
                <div className="hero-slide-no-link">
                  {slideContent}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

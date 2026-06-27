import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Hero.css';

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
    { img: '/assets/img/Home_23.07.2024/ET_now.jpg', link: 'https://www.youtube.com/watch?v=bMJHxlPS78A' },
    { img: '/assets/img/Home_23.07.2024/june/5th-Year-Anniversary-Web.jpg', link: '#stats' },
    { img: '/assets/img/home2026/web/Share.jpg', link: '#login' },
    { img: '/assets/img/home2026/web/18.jpg', link: '#login' },
    { img: '/assets/img/home2026/web/Secured-NCD.jpg', link: '#login' },
    { img: '/assets/img/home2026/web/NCDss.jpg', link: '#login' },
    { img: '/assets/img/home2026/web/Recession-or-inflation-.jpg', link: '#login' }
  ];

  const mobileSlides = [
    { img: '/assets/img/Home_23.07.2024/ET_now-mob.jpg', link: 'https://www.youtube.com/watch?v=bMJHxlPS78A' },
    { img: '/assets/img/Home_23.07.2024/june/5th-Year-Anniversary-Mob-Web.jpg', link: '#stats' },
    { img: '/assets/img/home2026/mob/Share-Mob.jpg', link: '#login' },
    { img: '/assets/img/home2026/mob/18Mob.jpg', link: '#login' },
    { img: '/assets/img/home2026/mob/NCDs-Mob.jpg', link: '#login' },
    { img: '/assets/img/home2026/mob/Secured-NCD-Mob.jpg', link: '#login' },
    { img: '/assets/img/home2026/mob/Recession-or-inflation--Mob.jpg', link: '#login' }
  ];

  const activeSlides = isMobile ? mobileSlides : desktopSlides;

  return (
    <section className="hero-section" id="hero">
      <div className="container hero-container">
        <Swiper
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
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="hero-swiper"
        >
          {activeSlides.map((slide, index) => {
            const isExternal = slide.link.startsWith('http');
            const slideContent = (
              <div className="hero-slide-img-wrapper">
                <img 
                  src={slide.img} 
                  alt={`GHL Alternate Investment Banner ${index + 1}`} 
                  className="hero-slide-img" 
                />
              </div>
            );

            return (
              <SwiperSlide key={index}>
                {isExternal ? (
                  <a href={slide.link} target="_blank" rel="noopener noreferrer" className="hero-slide-link">
                    {slideContent}
                  </a>
                ) : (
                  <a href={slide.link} className="hero-slide-link">
                    {slideContent}
                  </a>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

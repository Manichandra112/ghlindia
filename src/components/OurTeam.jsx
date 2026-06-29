import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './OurTeam.css';

// Inline SVG for LinkedIn Icon
const LinkedinIcon = ({ size = 20, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={`linkedin-svg ${className}`}
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export default function OurTeam() {
  const [activeTab, setActiveTab] = useState('all');

  // Slider divisions (mockup placeholders)
  const deptSlides = [
    { name: "SALES TEAM", colorClass: "bg-sales" },
    { name: "IT TEAM", colorClass: "bg-it" },
    { name: "MARKETING TEAM", colorClass: "bg-marketing" },
    { name: "ACCOUNTS TEAM", colorClass: "bg-accounts" }
  ];

  // Founders & Directors - Verbatim Context
  const coFounders = [
    {
      name: "Mr. Senthil",
      role: "Co-founder",
      subRole: "Legal head",
      img: "/assets/img/team/Legal-head.jpg",
      linkedin: "https://www.linkedin.com/in/senthil-kumar-advocate/"
    },
    {
      name: "Mr. Rajkumar",
      role: "Co-founder",
      subRole: "Business analyzing head",
      img: "/assets/img/team/Business-analyzing-head.jpg",
      linkedin: "https://www.linkedin.com/in/raj-kumar-v-12191036/"
    }
  ];

  const director = {
    name: "Mr. Karthikeyan Dhayalan (aka) Guhan",
    role: "Director",
    subRole: "Business operation head",
    img: "/assets/img/team/Business-operation-head-A.jpg",
    linkedin: "https://www.linkedin.com/in/karthikeyan-dhayalan-724454285/"
  };

  // Department Heads - Verbatim Context
  const deptHeads = [
    { name: "Mr. Sivaraj", role: "Accounts Head", subRole: "Financial governance", img: "/assets/img/team/Accounts-head.jpg", linkedin: "#" },
    { name: "Mrs. Teena", role: "Marketing Head", subRole: "Acquisitions & Outreach", img: "/assets/img/team/teena.jpg", linkedin: "https://www.linkedin.com/in/teena-kg/" },
    { name: "Mr. Arul Saravanan", role: "IT Head", subRole: "Platform technology", img: "/assets/img/team/ITteam.jpg", linkedin: "https://www.linkedin.com/in/arul-saravanan-344a35252/" },
    { name: "Mr. Robin", role: "Creative Head", subRole: "Visual design & UI", img: "/assets/img/team/Creative-Head.jpg", linkedin: "https://www.linkedin.com/in/robin-john-9b0482284/" },
    { name: "Ms. Sumitha", role: "Content Strategist", subRole: "Investor communications", img: "/assets/img/team/Content-Strategist.jpg", linkedin: "https://www.linkedin.com/in/sumitha-pb/" }
  ];

  // Investor Relations & Sales - Verbatim Context
  const relationManagers = [
    { name: "Mrs. Rafia", role: "Sales Head", subRole: "Investor Relations", img: "/assets/img/team/Marketing-head-D.jpg", linkedin: "https://www.linkedin.com/in/rafia-tabassum-a71bb3281/" },
    { name: "Mrs. Saira Banu", role: "Relationship Manager", subRole: "Investor relations", img: "/assets/img/team/Saira-IRM.jpg", linkedin: "https://www.linkedin.com/in/saira-a-424621285/" },
    { name: "Ms. Vani Maheswari", role: "Relationship Manager", subRole: "Investor relations", img: "/assets/img/team/Vani-IRM-A.jpeg", linkedin: "https://www.linkedin.com/in/vani-maheswari-22b619231/" },
    { name: "Ms. Aditi Anand", role: "Relationship Manager", subRole: "Investor relations", img: "/assets/img/team/Aditi-Anand.jpg", linkedin: "https://www.linkedin.com/in/aditi-anand-2637431b9" },
    { name: "Mr. Farhan", role: "Relationship Manager", subRole: "Investor relations", img: "/assets/img/team/Farhan-IRM.jpeg", linkedin: "#" },
    { name: "Mr. Nunavath Tirupathi", role: "Relationship Manager", subRole: "Investor relations", img: "/assets/img/team/ruanunavath-Tirupati.jpg", linkedin: "https://www.linkedin.com/in/nunavath-tirupathi/" }
  ];

  // Office Photos Gallery URLs
  const officePhotos = [
    "https://www.ghlindia.com/assets/img/hero/gallery/g8.JPG",
    "https://www.ghlindia.com/assets/img/hero/gallery/g7.JPG",
    "https://www.ghlindia.com/assets/img/hero/gallery/g4.JPG",
    "https://www.ghlindia.com/assets/img/hero/gallery/g8.JPG",
    "https://www.ghlindia.com/assets/img/hero/gallery/g7.JPG",
    "https://www.ghlindia.com/assets/img/hero/gallery/g4.JPG"
  ];

  // Handle Tab Filtering
  const renderLeadership = activeTab === 'all' || activeTab === 'leadership';
  const renderHeads = activeTab === 'all' || activeTab === 'heads';
  const renderRelations = activeTab === 'all' || activeTab === 'relations';
  const renderGallery = activeTab === 'all' || activeTab === 'gallery';

  return (
    <div className="team-page-efficient">
      
      {/* 1. HERO HEADER AREA */}
      <section className="efficient-hero-section">
        <div className="container text-center">
          <h1 className="efficient-hero-title">Founders & Directors</h1>
        </div>
      </section>

      {/* 2. DYNAMIC DEPARTMENT SLIDER (CAROUSEL BANNER) */}
      <section className="efficient-slider-section">
        <div className="container">
          <Swiper
            key="efficient-swiper"
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            className="efficient-swiper-container"
          >
            {deptSlides.map((slide, idx) => (
              <SwiperSlide key={idx}>
                <div className={`efficient-slide-card ${slide.colorClass}`}>
                  <h3 className="slide-card-title">{slide.name} Image Space</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* 3. INTERACTIVE SECTION FILTER BAR (TABS) */}
      <section className="efficient-filter-section">
        <div className="container">
          <div className="filter-tab-bar">
            <button 
              className={`filter-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Teams
            </button>
            <button 
              className={`filter-tab-btn ${activeTab === 'leadership' ? 'active' : ''}`}
              onClick={() => setActiveTab('leadership')}
            >
              Founders & Directors
            </button>
            <button 
              className={`filter-tab-btn ${activeTab === 'heads' ? 'active' : ''}`}
              onClick={() => setActiveTab('heads')}
            >
              Department Heads
            </button>
            <button 
              className={`filter-tab-btn ${activeTab === 'relations' ? 'active' : ''}`}
              onClick={() => setActiveTab('relations')}
            >
              Investor Relations & Sales
            </button>
            <button 
              className={`filter-tab-btn ${activeTab === 'gallery' ? 'active' : ''}`}
              onClick={() => setActiveTab('gallery')}
            >
              Office Photos
            </button>
          </div>
        </div>
      </section>

      {/* 4. CONTENT SECTIONS */}
      <div className="efficient-content-container">
        
        {/* EXECUTIVE LEADERSHIP */}
        {renderLeadership && (
          <section className="efficient-team-block fade-in-up">
            <div className="container">
              <div className="block-header">
                <h2>Founders & Directors</h2>
              </div>
              
              {/* Co-Founders Layout */}
              <div className="founders-showcase-grid">
                {coFounders.map((founder, idx) => (
                  <div key={idx} className="founder-executive-card">
                    <div className="founder-img-wrapper">
                      <img src={founder.img} alt={founder.name} className="founder-avatar" />
                    </div>
                    <div className="founder-info-block">
                      <div className="founder-title-meta">
                        <h3>{founder.name}</h3>
                        <span className="founder-role">{founder.role}</span>
                      </div>
                      <p className="founder-subrole-badge">{founder.subRole}</p>
                      {founder.linkedin !== '#' && (
                        <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="founder-linkedin">
                          <LinkedinIcon size={18} />
                          <span>LinkedIn</span>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Director Landscape Centered Row */}
              <div className="director-showcase-row">
                <div className="director-executive-card">
                  <div className="director-img-wrapper">
                    <img src={director.img} alt={director.name} className="director-avatar" />
                  </div>
                  <div className="director-info-block">
                    <div className="director-title-meta">
                      <h3>{director.name}</h3>
                      <span className="director-role">{director.role}</span>
                    </div>
                    <p className="director-subrole-badge">{director.subRole}</p>
                    {director.linkedin !== '#' && (
                      <a href={director.linkedin} target="_blank" rel="noopener noreferrer" className="director-linkedin">
                        <LinkedinIcon size={18} />
                        <span>LinkedIn</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

            </div>
          </section>
        )}

        {/* DEPARTMENT HEADS */}
        {renderHeads && (
          <section className="efficient-team-block fade-in-up">
            <div className="container">
              <div className="block-header">
                <h2>Department Heads</h2>
              </div>

              <div className="team-unified-grid">
                {deptHeads.map((head, idx) => (
                  <div key={idx} className="team-profile-card">
                    <div className="profile-img-frame">
                      <img src={head.img} alt={head.name} className="profile-avatar" />
                    </div>
                    <div className="profile-details">
                      <div className="profile-title-row">
                        <h4>{head.name}</h4>
                        <span className="profile-badge">{head.role}</span>
                      </div>
                      <p className="profile-desc">{head.subRole}</p>
                      {head.linkedin !== '#' && (
                        <a href={head.linkedin} target="_blank" rel="noopener noreferrer" className="profile-linkedin-btn">
                          <LinkedinIcon size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* INVESTOR RELATIONSHIP MANAGERS */}
        {renderRelations && (
          <section className="efficient-team-block fade-in-up">
            <div className="container">
              <div className="block-header">
                <h2>Investor Relations & Sales</h2>
              </div>

              <div className="team-unified-grid">
                {relationManagers.map((rm, idx) => (
                  <div key={idx} className="team-profile-card relation-manager-card">
                    <div className="profile-img-frame">
                      <img src={rm.img} alt={rm.name} className="profile-avatar" />
                    </div>
                    <div className="profile-details">
                      <div className="profile-title-row">
                        <h4>{rm.name}</h4>
                        <span className="profile-badge">{rm.role}</span>
                      </div>
                      <p className="profile-desc">{rm.subRole}</p>
                      {rm.linkedin !== '#' && (
                        <a href={rm.linkedin} target="_blank" rel="noopener noreferrer" className="profile-linkedin-btn">
                          <LinkedinIcon size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* OFFICE GALLERY */}
        {renderGallery && (
          <section className="efficient-team-block fade-in-up pb-5">
            <div className="container">
              <div className="block-header">
                <h2>Office Photos</h2>
              </div>

              <div className="gallery-masonry-container">
                {officePhotos.map((photo, idx) => (
                  <div key={idx} className="gallery-masonry-card">
                    <img src={photo} alt={`Office work area ${idx + 1}`} className="gallery-photo" />
                    <div className="gallery-overlay">
                      <span>Office Photo</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

      </div>
    </div>
  );
}

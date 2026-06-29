import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './OurTeam.css';

// Inline SVG for LinkedIn Icon in standard brand blue matching the XD design
const LinkedinBlueIcon = ({ size = 22, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="#0077B5"
    className={className}
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export default function OurTeam() {

  // Slider sections (Sales Team / IT / Marketing etc) - acting as mockup placeholders
  const deptSlides = [
    { name: "SALES TEAM", colorClass: "bg-sales" },
    { name: "IT TEAM", colorClass: "bg-it" },
    { name: "MARKETING TEAM", colorClass: "bg-marketing" },
    { name: "ACCOUNTS TEAM", colorClass: "bg-accounts" }
  ];

  // Founders & Directors
  const coFounders = [
    {
      name: "MR. SENTHIL",
      role: "Co-founder",
      subRole: "Legal head",
      img: "/assets/img/team/Legal-head.jpg",
      linkedin: "https://www.linkedin.com/in/senthil-kumar-advocate/"
    },
    {
      name: "MR. RAJKUMAR",
      role: "Co-founder",
      subRole: "Business analyzing head",
      img: "/assets/img/team/Business-analyzing-head.jpg",
      linkedin: "https://www.linkedin.com/in/raj-kumar-v-12191036/"
    }
  ];

  const director = {
    name: "MR. KARTHIKEYAN DHAYALAN",
    aka: "(AKA) GUHAN",
    role: "Director",
    subRole: "Business Operation head",
    img: "/assets/img/team/Business-operation-head-A.jpg",
    linkedin: "https://www.linkedin.com/in/karthikeyan-dhayalan-724454285/"
  };

  // Meet Our Team - Department Heads
  const deptHeads = [
    { name: "Mr. Sivaraj", role: "Accounts head", img: "/assets/img/team/Accounts-head.jpg", linkedin: "#" },
    { name: "Mrs. Teena", role: "Marketing head", img: "/assets/img/team/teena.jpg", linkedin: "https://www.linkedin.com/in/teena-kg/" },
    { name: "Mr. Arul Saravanan", role: "IT head", img: "/assets/img/team/ITteam.jpg", linkedin: "https://www.linkedin.com/in/arul-saravanan-344a35252/" },
    { name: "Mr. Robin", role: "Creative head", img: "/assets/img/team/Creative-Head.jpg", linkedin: "https://www.linkedin.com/in/robin-john-9b0482284/" },
    { name: "Ms. Sumitha", role: "Content Strategist", img: "/assets/img/team/Content-Strategist.jpg", linkedin: "https://www.linkedin.com/in/sumitha-pb/" }
  ];

  // Investor Relationship Managers
  const relationManagers = [
    { name: "Mrs. Rafia", img: "/assets/img/team/Marketing-head-D.jpg", linkedin: "https://www.linkedin.com/in/rafia-tabassum-a71bb3281/" },
    { name: "Mrs. Saira Banu", img: "/assets/img/team/Saira-IRM.jpg", linkedin: "https://www.linkedin.com/in/saira-a-424621285/" },
    { name: "Ms. Vani Maheswari", img: "/assets/img/team/Vani-IRM-A.jpeg", linkedin: "https://www.linkedin.com/in/vani-maheswari-22b619231/" },
    { name: "Ms. Aditi Anand", img: "/assets/img/team/Aditi-Anand.jpg", linkedin: "https://www.linkedin.com/in/aditi-anand-2637431b9" },
    { name: "Mr. Farhan", img: "/assets/img/team/Farhan-IRM.jpeg", linkedin: "#" },
    { name: "Mr. Nunavath Tirupathi", img: "/assets/img/team/ruanunavath-Tirupati.jpg", linkedin: "https://www.linkedin.com/in/nunavath-tirupathi/" }
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

  return (
    <div className="team-page-xd">

      {/* 1. TOP DYNAMIC DEPARTMENT SLIDER (ACTING AS BANNER) */}
      <section className="xd-slider-section">
        <div className="container-fluid p-0">
          <Swiper
            key="xd-dept-swiper"
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            className="xd-swiper"
          >
            {deptSlides.map((slide, idx) => (
              <SwiperSlide key={idx}>
                <div className={`xd-slide-container ${slide.colorClass}`}>
                  <div className="xd-slide-inner">
                    <h1 className="xd-slide-title">{slide.name}</h1>
                    <div className="xd-placeholder-text">Dummy Image Space - Upload Portrait Later</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* 2. MEDIUM GREY INTRO SECTION */}
      <section className="xd-intro-section">
        <div className="container">
          <div className="xd-intro-grid">
            <div className="xd-intro-left">
              <p>
                Great things in business are never done by one person. They are done by a team of people who are committed and capable. See the key people of our company here.
              </p>
            </div>
            <div className="xd-intro-right">
              <div className="xd-brand-stack">
                <span className="stack-word">GHL</span>
                <span className="stack-word">INDIA</span>
                <span className="stack-word font-muted">ASSET</span>
              </div>
              <div className="xd-pill-placeholder"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUNDERS AND DIRECTORS SECTION */}
      <section className="xd-founders-section">
        <div className="container">
          {/* Top Row: Co-Founders (Photo on Right, Text Block on Left) */}
          <div className="xd-founders-row">
            {coFounders.map((founder, idx) => (
              <div key={idx} className="xd-founder-card-wrapper">
                <div className="xd-founder-card">
                  {/* Left Block: Dark Grey with white text */}
                  <div className="xd-founder-details-block">
                    <div className="xd-founder-meta">
                      <h3 className="xd-founder-name">{founder.name}</h3>
                      <span className="xd-founder-role">{founder.role}</span>
                    </div>
                    {founder.linkedin !== '#' && (
                      <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="xd-linkedin-link">
                        <LinkedinBlueIcon />
                      </a>
                    )}
                  </div>
                  {/* Right Block: Image */}
                  <div className="xd-founder-image-block">
                    <img src={founder.img} alt={founder.name} className="xd-founder-img" />
                  </div>
                </div>
                {/* Subrole text written underneath the card */}
                <p className="xd-founder-subrole">{founder.subRole}</p>
              </div>
            ))}
          </div>

          {/* Bottom Row: Director (Centered Landscape Card) */}
          <div className="xd-director-row">
            <div className="xd-director-card-wrapper">
              <div className="xd-director-card">
                {/* Left Block: Image */}
                <div className="xd-director-image-block">
                  <img src={director.img} alt={director.name} className="xd-director-img" />
                </div>
                {/* Right Block: Blue-grey gradient details */}
                <div className="xd-director-details-block">
                  <div className="xd-director-meta">
                    <h3 className="xd-director-name">{director.name}</h3>
                    <span className="xd-director-aka">{director.aka}</span>
                  </div>
                  {director.linkedin !== '#' && (
                    <a href={director.linkedin} target="_blank" rel="noopener noreferrer" className="xd-linkedin-link">
                      <LinkedinBlueIcon />
                    </a>
                  )}
                </div>
              </div>
              {/* Sub-role and title underneath the card */}
              <div className="xd-director-subrole-block">
                <h4 className="xd-director-title-under">{director.role}</h4>
                <p className="xd-director-subrole-under">{director.subRole}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MEET OUR TEAM (DEPARTMENT HEADS) */}
      <section className="xd-team-grid-section">
        <div className="container">
          <div className="xd-section-header">
            <span className="xd-red-pill-badge">MEET OUR TEAM</span>
          </div>

          {/* Row 1: 3 Cards */}
          <div className="xd-cards-grid-3">
            {deptHeads.slice(0, 3).map((head, idx) => (
              <div key={idx} className="xd-team-card">
                <div className="xd-card-image-area">
                  <img src={head.img} alt={head.name} className="xd-card-avatar" />
                </div>
                <div className="xd-card-details-area">
                  <div className="xd-card-info">
                    <h4 className="xd-card-name">{head.name}</h4>
                    <p className="xd-card-role">{head.role}</p>
                  </div>
                  {head.linkedin !== '#' && (
                    <a href={head.linkedin} target="_blank" rel="noopener noreferrer" className="xd-card-linkedin">
                      <LinkedinBlueIcon size={20} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: 2 Cards Centered */}
          <div className="xd-cards-grid-2">
            {deptHeads.slice(3, 5).map((head, idx) => (
              <div key={idx} className="xd-team-card">
                <div className="xd-card-image-area">
                  <img src={head.img} alt={head.name} className="xd-card-avatar" />
                </div>
                <div className="xd-card-details-area">
                  <div className="xd-card-info">
                    <h4 className="xd-card-name">{head.name}</h4>
                    <p className="xd-card-role">{head.role}</p>
                  </div>
                  {head.linkedin !== '#' && (
                    <a href={head.linkedin} target="_blank" rel="noopener noreferrer" className="xd-card-linkedin">
                      <LinkedinBlueIcon size={20} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INVESTOR RELATIONSHIP MANAGERS */}
      <section className="xd-team-grid-section pt-0">
        <div className="container">
          <div className="xd-section-header">
            <span className="xd-red-pill-badge">INVESTOR RELATIONSHIP MANAGERS</span>
          </div>

          {/* Grid Layout: Rows of 3 Cards */}
          <div className="xd-cards-grid-3">
            {relationManagers.map((rm, idx) => (
              <div key={idx} className="xd-team-card xd-rm-card">
                <div className="xd-card-image-area">
                  <img src={rm.img} alt={rm.name} className="xd-card-avatar" />
                </div>
                <div className="xd-card-details-area">
                  <div className="xd-card-info">
                    <h4 className="xd-card-name">{rm.name}</h4>
                  </div>
                  {rm.linkedin !== '#' && (
                    <a href={rm.linkedin} target="_blank" rel="noopener noreferrer" className="xd-card-linkedin">
                      <LinkedinBlueIcon size={20} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OFFICE PHOTOS */}
      <section className="xd-gallery-section">
        <div className="container">
          <div className="xd-section-header">
            <span className="xd-red-pill-badge">OFFICE PHOTOS</span>
          </div>

          {/* 2 Photos Per Row Grid */}
          <div className="xd-gallery-grid-2">
            {officePhotos.map((photo, idx) => (
              <div key={idx} className="xd-gallery-card">
                <img src={photo} alt={`Office scene ${idx + 1}`} className="xd-gallery-img" />
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}

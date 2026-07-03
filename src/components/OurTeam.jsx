import React, { useState, useEffect } from 'react';
import { Users, ShieldCheck, Cpu, Code, Megaphone, FileText, Landmark, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import './OurTeam.css';
import galleryImage1 from '../assets/gallery image 1.png';
import galleryImage2 from '../assets/gallery image 2.png';
import galleryImage3 from '../assets/gallery image 3.png';
import galleryImage4 from '../assets/gallery image 4.png';
import galleryImage5 from '../assets/gallery image 5.png';
import galleryImage6 from '../assets/gallery image 6.png';
import accountsTeamImage from '../assets/Team-Photos-Web/Accounts Team.png';
import creativeTeamImage from '../assets/Team-Photos-Web/Creative Team.png';
import itDocumentationTeamImage from '../assets/Team-Photos-Web/IT & Documentation team.png';
import salesTeamImage from '../assets/Team-Photos-Web/Sales team.png';

// Inline SVG to avoid lucide version conflict
const LinkedinIcon = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function OurTeam() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isCarouselPlaying, setIsCarouselPlaying] = useState(true);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(0);

  const departmentSlides = [
    { id: "accounts", title: "Accounts Team", role: "Accounts Team", img: accountsTeamImage },
    { id: "creative", title: "Creative Team", role: "Creative Team", img: creativeTeamImage },
    { id: "it-documentation", title: "IT & Documentation Team", role: "IT & Documentation Team", img: itDocumentationTeamImage },
    { id: "sales", title: "Sales Team", role: "Sales Team", img: salesTeamImage }
  ];

  const renderAnimatedWords = (text) => (
    text.split(" ").map((word, wordIndex) => (
      <span
        className="team-slide-word"
        style={{ '--word-delay': `${wordIndex * 120}ms` }}
        key={`${word}-${wordIndex}`}
      >
        {word}
      </span>
    ))
  );

  useEffect(() => {
    if (!isCarouselPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % departmentSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isCarouselPlaying, departmentSlides.length]);

  const teamMembers = [
    {
      name: "Mr. Rajkumar",
      role: "Co-founder",
      subRole: "Business analyzing head",
      img: "/assets/img/team/Business-analyzing-head.jpg",
      linkedin: "https://www.linkedin.com/in/raj-kumar-v-12191036/",
      category: "founders",
      icon: <Landmark size={20} />
    },
    {
      name: "Mr. Senthil",
      role: "Co-founder",
      subRole: "Legal head",
      img: "/assets/img/team/Legal-head.jpg",
      linkedin: "https://www.linkedin.com/in/senthil-kumar-advocate/",
      category: "founders",
      icon: <ShieldCheck size={20} />
    },
    {
      name: "Mr. Karthikeyan Dhayalan (aka) Guhan",
      role: "Director",
      subRole: "Business operation head",
      img: "/assets/img/team/Business-operation-head-A.jpg",
      linkedin: "https://www.linkedin.com/in/karthikeyan-dhayalan-724454285/",
      category: "founders",
      icon: <Landmark size={20} />
    },
    {
      name: "Mr. Sivaraj",
      role: "Accounts Head",
      subRole: "Financial governance",
      img: "/assets/img/team/Accounts-head.jpg",
      linkedin: "#",
      category: "heads",
      icon: <FileText size={20} />
    },
    {
      name: "Mrs. Teena",
      role: "Marketing Head",
      subRole: "Acquisitions & Outreach",
      img: "/assets/img/team/teena.jpg",
      linkedin: "https://www.linkedin.com/in/teena-kg/",
      category: "heads",
      icon: <Megaphone size={20} />
    },
    {
      name: "Mr. Arul Saravanan",
      role: "IT Head",
      subRole: "Platform technology",
      img: "/assets/img/team/ITteam.jpg",
      linkedin: "https://www.linkedin.com/in/arul-saravanan-344a35252/",
      category: "heads",
      icon: <Code size={20} />
    },
    {
      name: "Mr. Robin",
      role: "Creative Head",
      subRole: "Visual design & UI",
      img: "/assets/img/team/Creative-Head.jpg",
      linkedin: "https://www.linkedin.com/in/robin-john-9b0482284/",
      category: "heads",
      icon: <Cpu size={20} />
    },
    {
      name: "Ms. Sumitha",
      role: "Content Strategist",
      subRole: "Investor communications",
      img: "/assets/img/team/Content-Strategist.jpg",
      linkedin: "https://www.linkedin.com/in/sumitha-pb/",
      category: "heads",
      icon: <Cpu size={20} />
    },
    {
      name: "Mrs. Rafia",
      role: "Sales Head",
      subRole: "Investor Relations",
      img: "/assets/img/team/Marketing-head-D.jpg",
      linkedin: "https://www.linkedin.com/in/rafia-tabassum-a71bb3281/",
      category: "sales",
      icon: <Users size={20} />
    },
    {
      name: "Mrs. Saira Banu",
      role: "Relationship Manager",
      subRole: "Investor relations",
      img: "/assets/img/team/Saira-IRM.jpg",
      linkedin: "https://www.linkedin.com/in/saira-a-424621285/",
      category: "sales",
      icon: <Users size={20} />
    },
    {
      name: "Ms. Vani Maheswari",
      role: "Relationship Manager",
      subRole: "Investor relations",
      img: "/assets/img/team/Vani-IRM-A.jpeg",
      linkedin: "https://www.linkedin.com/in/vani-maheswari-22b619231/",
      category: "sales",
      icon: <Users size={20} />
    },
    {
      name: "Ms. Aditi Anand",
      role: "Relationship Manager",
      subRole: "Investor relations",
      img: "/assets/img/team/Aditi-Anand.jpg",
      linkedin: "https://www.linkedin.com/in/aditi-anand-2637431b9",
      category: "sales",
      icon: <Users size={20} />
    },
    {
      name: "Mr. Farhan",
      role: "Relationship Manager",
      subRole: "Investor relations",
      img: "/assets/img/team/Farhan-IRM.jpeg",
      linkedin: "#",
      category: "sales",
      icon: <Users size={20} />
    },
    {
      name: "Mr. Nunavath Tirupathi",
      role: "Relationship Manager",
      subRole: "Investor relations",
      img: "/assets/img/team/ruanunavath-Tirupati.jpg",
      linkedin: "https://www.linkedin.com/in/nunavath-tirupathi/",
      category: "sales",
      icon: <Users size={20} />
    }
  ];

  const gallerySlides = [
    [
      {
        src: galleryImage1,
        alt: "GHL India office floor with team members working",
        caption: "Team Floor"
      },
      {
        src: galleryImage2,
        alt: "GHL India team working at desktop systems",
        caption: "Investor Support Desk"
      }
    ],
    [
      {
        src: galleryImage3,
        alt: "GHL India open office workspace",
        caption: "Corporate Workspace"
      },
      {
        src: galleryImage4,
        alt: "GHL India office team working with laptops",
        caption: "Client Coordination"
      }
    ],
    [
      {
        src: galleryImage5,
        alt: "GHL India team members working at office desks",
        caption: "Daily Operations"
      },
      {
        src: galleryImage6,
        alt: "GHL India operations team at work",
        caption: "Focused Operations"
      }
    ]
  ];

  return (
    <div className="team-page">
      {/* <section className="team-hero-section team-carousel-section section-padding">
        <div className="container">
           
          <div
            className="dept-carousel-widget"
            onMouseEnter={() => setIsCarouselPlaying(false)}
            onMouseLeave={() => setIsCarouselPlaying(true)}
          >

            <div className="dept-carousel-track-wrapper">
              {departmentSlides.map((slide, idx) => {
                let positionClass = "next-slide";
                if (idx === currentSlide) {
                  positionClass = "active-slide";
                } else if (idx === (currentSlide - 1 + departmentSlides.length) % departmentSlides.length) {
                  positionClass = "prev-slide";
                }

                return (
                  <div
                    key={slide.id}
                    className={`dept-carousel-slide ${positionClass} ${slide.id}-slide`}
                  >
                    <div className="dept-image-only-pane">
                      <img src={slide.img} alt={slide.title} className="dept-group-img-only" />
                      <div className="team-slide-overlay">
                        <span className="team-slide-role">{slide.role}</span>
                        <h2 className="team-slide-title" key={`${slide.id}-${currentSlide}`}>
                          {renderAnimatedWords(slide.title)}
                        </h2>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="dept-carousel-controls">
              <button
                className="carousel-play-pause-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsCarouselPlaying(!isCarouselPlaying);
                }}
                title={isCarouselPlaying ? "Pause Autoplay" : "Play Autoplay"}
              >
                {isCarouselPlaying ? <Pause size={16} /> : <Play size={16} />}
              </button>

              <div className="dept-carousel-dots">
                {departmentSlides.map((_, idx) => (
                  <button
                    key={idx}
                    className={`dept-carousel-dot ${currentSlide === idx ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section> */}
      <section className="team-hero-section team-carousel-section">

  <div
    className="dept-carousel-widget"
    onMouseEnter={() => setIsCarouselPlaying(false)}
    onMouseLeave={() => setIsCarouselPlaying(true)}
  >

    <div className="dept-carousel-track-wrapper">

      {departmentSlides.map((slide, idx) => {

        let positionClass = "next-slide";

        if (idx === currentSlide) {
          positionClass = "active-slide";
        } else if (
          idx ===
          (currentSlide - 1 + departmentSlides.length) %
            departmentSlides.length
        ) {
          positionClass = "prev-slide";
        }

        return (

          <div
            key={slide.id}
            className={`dept-carousel-slide ${positionClass}`}
          >

            <div className="dept-image-only-pane">

              <img
                src={slide.img}
                alt={slide.title}
                className="dept-group-img-only"
              />

              <div className="team-slide-overlay">

                <span className="team-slide-role">
                  {slide.role}
                </span>

                {/* <h2
                  className="team-slide-title"
                  key={`${slide.id}-${currentSlide}`}
                >
                  {renderAnimatedWords(slide.title)}
                </h2> */}

              </div>

            </div>

          </div>

        );

      })}

    </div>

    <div className="dept-carousel-controls">

      <button
        className="carousel-play-pause-btn"
        onClick={(e) => {
          e.stopPropagation();
          setIsCarouselPlaying(!isCarouselPlaying);
        }}
      >
        {isCarouselPlaying ? (
          <Pause size={16} />
        ) : (
          <Play size={16} />
        )}
      </button>

      <div className="dept-carousel-dots">

        {departmentSlides.map((_, idx) => (

          <button
            key={idx}
            className={`dept-carousel-dot ${
              currentSlide === idx ? "active" : ""
            }`}
            onClick={() => setCurrentSlide(idx)}
          />

        ))}

      </div>

    </div>

  </div>

</section>

      {/* Main Corporate Team Section */}
      <section className="team-directory-section section-padding">
        <div className="container">
          <div className="leadership-showcase-xd">
            <div className="team-section-header-xd">
              <div className="header-left-col-xd">
                <p className="header-desc-xd">
                  Great things in business are never done by one person. They are done by a team of people who are committed and capable. See the key people of our company here
                </p>
              </div>
              <div className="header-right-col-xd">
                <h2 className="header-title-xd">
                  GHL<br />
                  INDIA<br />
                  ASSET
                </h2>
                <div className="header-pill-xd"></div>
              </div>
            </div>

            {/* Top Row: Co-founders (Mr. Senthil and Mr. Rajkumar) */}
            <div className="founders-top-row">
              {teamMembers
                .filter(m => m.category === 'founders' && m.role === 'Co-founder')
                .sort((a, b) => a.name.includes("Senthil") ? -1 : 1)
                .map((member, idx) => {
                  const cutoutImg = member.name.includes("Senthil")
                    ? "/assets/img/team/Senthil-cover.png"
                    : "/assets/img/team/Rajkumar_photo-removebg-preview.png";

                  const nameParts = member.name.split(" ");
                  const lastName = nameParts[1] ? nameParts[1].toUpperCase() : "";

                  return (
                    <div key={idx} className="founder-card-xd-container">
                      <div className="founder-card-xd">
                        <div className="founder-card-header-xd">
                          <div className="founder-header-info-xd">
                            <h4 className="founder-name-xd">
                              MR.<br />
                              {lastName}
                            </h4>
                            <span className="founder-role-xd">{member.role}</span>
                          </div>
                          <img src={cutoutImg} alt={member.name} className="founder-avatar-xd" />
                        </div>
                        <div className="founder-card-body-xd">
                          {member.linkedin !== '#' && (
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="founder-linkedin-xd">
                              <LinkedinIcon size={20} />
                            </a>
                          )}
                        </div>
                      </div>
                      <p className="founder-designation-xd">{member.subRole}</p>
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="team-band-xd director-band-xd">
            {/* Section Break / Our Team Heading */}
            <div className="team-section-divider-xd text-center">
              <span className="section-badge-red-xd">Our Team</span>
            </div>

            {/* Director Row: Mr. Karthikeyan (Guhan) centered */}
            <div className="director-section-row-xd">
              {teamMembers.filter(m => m.category === 'founders' && m.role === 'Director').map((member, idx) => (
                <div key={idx} className="director-card-xd-container">
                  <div className="director-card-xd">
                    <div className="director-card-header-xd">
                      <div className="director-avatar-wrapper-xd">
                        <img src={member.img} alt={member.name} className="director-avatar-xd" />
                      </div>
                      <div className="director-header-info-xd">
                        <h4 className="director-name-xd">
                          MR.<br />
                          KARTHIKEYAN<br />
                          DHAYALAN<br />
                          <span className="director-aka-xd">(AKA) GUHAN</span>
                        </h4>
                        {member.linkedin !== '#' && (
                          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="director-linkedin-xd">
                            <LinkedinIcon size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="director-card-body-xd">
                      <h5 className="director-role-xd">{member.role}</h5>
                      <p className="director-subrole-xd">{member.subRole}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="team-band-xd meet-team-band-xd">
            {/* Section Break / Meet Our Team Heading */}
            <div className="team-section-divider-xd text-center">
              <span className="section-badge-red-xd">Meet Our Team</span>
            </div>

            {/* Employee Directory Section */}
            <div className="employee-directory-block-xd">
              {/* Department Heads Block */}
              <div className="team-category-block-clean-xd">
                
                {/* Top Row: Sivaraj, Teena, Arul Saravanan */}
                <div className="heads-top-row-xd">
                  {teamMembers
                    .filter(m => m.category === 'heads' && ['Mr. Sivaraj', 'Mrs. Teena', 'Mr. Arul Saravanan'].includes(m.name))
                    .map((member, idx) => (
                      <div key={idx} className="member-card-xd">
                        <div className="member-avatar-wrapper-xd">
                          <img src={member.img} alt={member.name} className="member-avatar-xd" />
                        </div>
                        <div className="member-details-xd">
                          <h4 className="member-name-xd">{member.name}</h4>
                          <p className="member-role-xd">{member.role}</p>
                          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="member-linkedin-xd">
                            <LinkedinIcon size={16} />
                          </a>
                        </div>
                      </div>
                    ))}
                </div>

                {/* Bottom Row: Robin, Sumitha */}
                <div className="heads-bottom-row-xd">
                  {teamMembers
                    .filter(m => m.category === 'heads' && ['Mr. Robin', 'Ms. Sumitha'].includes(m.name))
                    .map((member, idx) => (
                      <div key={idx} className="member-card-xd">
                        <div className="member-avatar-wrapper-xd">
                          <img src={member.img} alt={member.name} className="member-avatar-xd" />
                        </div>
                        <div className="member-details-xd">
                          <h4 className="member-name-xd">{member.name}</h4>
                          <p className="member-role-xd">{member.role}</p>
                          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="member-linkedin-xd">
                            <LinkedinIcon size={16} />
                          </a>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>

          <div className="team-band-xd investor-band-xd">
            {/* Section Break / Investor Relationship Managers Heading */}
            <div className="team-section-divider-xd text-center">
              <span className="section-badge-red-xd">Investor Relationship Managers</span>
            </div>

            {/* Investor Relations & Sales Block */}
            <div className="team-category-block-clean-xd sales-section-block-xd">
              <div className="team-members-grid">
                {teamMembers.filter(m => m.category === 'sales').map((member, idx) => (
                  <div key={idx} className="member-card-xd">
                    <div className="member-avatar-wrapper-xd">
                      <img src={member.img} alt={member.name} className="member-avatar-xd" />
                    </div>
                    <div className="member-details-xd">
                      <h4 className="member-name-xd">{member.name}</h4>
                      <p className="member-role-xd">{member.role}</p>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="member-linkedin-xd">
                        <LinkedinIcon size={16} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Gallery Section */}
      <section className="team-gallery-section section-padding">
        <div className="container">
          <div className="team-section-header text-center">
            <h2 className="team-section-title">Gallery</h2>
            <p className="team-section-subtitle">A glimpse of GHL India operations and team milestones.</p>
          </div>

          <div className="gallery-showcase-xd">
            <div className="gallery-stage-xd">
              <button
                type="button"
                className="gallery-nav-xd prev"
                onClick={() => setSelectedGalleryImage((prev) => (prev === 0 ? gallerySlides.length - 1 : prev - 1))}
                aria-label="Previous gallery image"
              >
                <ChevronLeft size={22} />
              </button>

              {gallerySlides.map((slide, idx) => (
                <div
                  key={idx}
                  className={`gallery-slide-xd ${
                    idx === selectedGalleryImage
                      ? "active"
                      : idx === (selectedGalleryImage - 1 + gallerySlides.length) % gallerySlides.length
                        ? "prev"
                        : idx === (selectedGalleryImage + 1) % gallerySlides.length
                          ? "next"
                          : "hidden"
                  }`}
                >
                  <div className="gallery-slide-grid">
                    {slide.map((image, imageIdx) => (
                      <div className="gallery-image-card" key={`${image.caption}-${imageIdx}`}>
                        <img src={image.src} alt={image.alt} />
                        <div className="gallery-image-caption">
                          <span>{image.caption}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <button
                type="button"
                className="gallery-nav-xd next"
                onClick={() => setSelectedGalleryImage((prev) => (prev + 1) % gallerySlides.length)}
                aria-label="Next gallery image"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            <div className="gallery-dots-xd" aria-label="Gallery image selector">
              {gallerySlides.map((slide, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={selectedGalleryImage === idx ? "active" : ""}
                  onClick={() => setSelectedGalleryImage(idx)}
                  aria-label={`Show gallery set ${idx + 1}`}
                >
                  {String(idx + 1).padStart(2, "0")}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import './OurTeam.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const LinkedinIcon = ({ size = 16, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
  </svg>
);

const heroSlides = [
  {
    label: 'Sales Team',
    description: 'Relationship-first communication, onboarding support, and investor confidence at every step.',
    image: 'https://www.ghlindia.com/assestteam/img/back/newimages/team/Sales%20team.png',
    slideClass: 'sales-slide'
  },
  {
    label: 'IT and Documentation Team',
    description: 'Process systems, compliant workflows, and the documentation backbone that keeps delivery stable.',
    image: 'https://www.ghlindia.com/assestteam/img/back/newimages/team/IT%20%26%20Documentation%20team.png',
    slideClass: 'it-slide'
  },
  {
    label: 'Accounts Team',
    description: 'Financial structure, reporting clarity, and disciplined execution behind every transaction.',
    image: 'https://www.ghlindia.com/assestteam/img/back/newimages/team/Accounts%20Team.png',
    slideClass: 'accounts-slide'
  },
  {
    label: 'Creative Team',
    description: 'Brand storytelling, campaign visuals, and communication assets that shape the GHL identity.',
    image: 'https://www.ghlindia.com/assestteam/img/back/newimages/team/Creative%20Team.png',
    slideClass: 'creative-slide'
  }
];

const leadershipCards = [
  {
    name: 'Mr. Senthil',
    role: 'Co-founder',
    caption: 'Legal head',
    image: 'https://www.ghlindia.com/assestteam/img/back/newimages/Senthil-cover.png',
    linkedin: 'https://www.linkedin.com/in/senthil-kumar-advocate/'
  },
  {
    name: 'Mr. Rajkumar',
    role: 'Co-founder',
    caption: 'Business analyzing head',
    image: 'https://www.ghlindia.com/assestteam/img/back/newimages/Raj%20Kumar%20sir.png',
    linkedin: 'https://www.linkedin.com/in/raj-kumar-v-12191036/'
  }
];

const peopleCards = [
  {
    name: 'Mr. Sivaraj',
    role: 'Accounts head',
    image: '/assets/img/team/Shivaraj-remote.png',
    linkedin: '#'
  },
  {
    name: 'Mrs. Teena',
    role: 'Marketing head',
    image: '/assets/img/team/Teena-head-remote.png',
    linkedin: 'https://www.linkedin.com/in/teena-kg/'
  },
  {
    name: 'Mr. Arul Saravanan',
    role: 'IT head',
    image: '/assets/img/team/Saravanan-remote.png',
    linkedin: 'https://www.linkedin.com/in/arul-saravanan-344a35252/'
  },
  {
    name: 'Mr. Robin',
    role: 'Creative head',
    image: '/assets/img/team/Robin-remote.png',
    linkedin: 'https://www.linkedin.com/in/robin-john-9b0482284/'
  },
  {
    name: 'Ms. Sumitha',
    role: 'Content Strategist',
    image: '/assets/img/team/Sumitha-remote.png',
    linkedin: 'https://www.linkedin.com/in/sumitha-pb/'
  }
];

const irmCards = [
  {
    name: 'Mrs. Rafia',
    role: 'Investor Relationship Manager',
    image: '/assets/img/team/Rafia-remote.png',
    linkedin: 'https://www.linkedin.com/in/rafia-tabassum-a71bb3281/'
  },
  {
    name: 'Mrs. Saira Banu',
    role: 'Investor Relationship Manager',
    image: '/assets/img/team/Saira-remote.png',
    linkedin: 'https://www.linkedin.com/in/saira-a-424621285/'
  },
  {
    name: 'Mr. Farhan',
    role: 'Investor Relationship Manager',
    image: '/assets/img/team/Farhan-remote.png',
    linkedin: '#'
  },
  {
    name: 'Ms. Vani Maheswari',
    role: 'Investor Relationship Manager',
    image: '/assets/img/team/Vani-remote.png',
    linkedin: 'https://www.linkedin.com/in/vani-maheswari-22b619231/'
  },
  {
    name: 'Ms. Aditi Anand',
    role: 'Investor Relationship Manager',
    image: '/assets/img/team/Aditi-remote.png',
    linkedin: 'https://www.linkedin.com/in/aditi-anand-2637431b9'
  },
  {
    name: 'Mr. Nunavath Tirupathi',
    role: 'Investor Relationship Manager',
    image: '/assets/img/team/Tirupati-remote.png',
    linkedin: 'https://www.linkedin.com/in/nunavath-tirupathi/'
  }
];

const galleryImages = [
  'https://www.ghlindia.com/assestteam/img/back/newimages/gallery/DSC08954.JPG',
  'https://www.ghlindia.com/assestteam/img/back/newimages/gallery/DSC08967.JPG',
  'https://www.ghlindia.com/assestteam/img/back/newimages/gallery/DSC08988.JPG',
  'https://www.ghlindia.com/assestteam/img/back/newimages/gallery/DSC09039.JPG',
  'https://www.ghlindia.com/assestteam/img/back/newimages/gallery/DSC08966.JPG',
  'https://www.ghlindia.com/assestteam/img/back/newimages/gallery/DSC08979.JPG',
  'https://www.ghlindia.com/assestteam/img/back/newimages/gallery/DSC09019.JPG',
  'https://www.ghlindia.com/assestteam/img/back/newimages/gallery/DSC09086.JPG'
].map((src, index) => ({ src, label: `Picture ${index + 1}` }));

function PeopleCard({ person }) {
  return (
    <div className="person-card-shell">
      <div className="person-card-frame">
        <div className="person-image-stage">
          <img src={person.image} alt={person.name} />
        </div>
        <div className="person-card-box">
          <div className="person-card-info">
            <div className="person-card-name">{person.name}</div>
            <div className="person-card-role">{person.role}</div>
          </div>
          {person.linkedin !== '#' ? (
            <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="person-linkedin" aria-label={`${person.name} LinkedIn`}>
              <LinkedinIcon size={16} />
            </a>
          ) : (
            <span className="person-linkedin disabled" aria-hidden="true">
              <LinkedinIcon size={16} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function OurTeam() {
  const sectionRef = useScrollAnimation();
  const [currentHero, setCurrentHero] = useState(0);
  const [isHeroPaused, setIsHeroPaused] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentGallery, setCurrentGallery] = useState(0);

  useEffect(() => {
    if (isHeroPaused) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setCurrentHero((prev) => (prev + 1) % heroSlides.length);
    }, 3000);

    return () => window.clearTimeout(timer);
  }, [currentHero, isHeroPaused]);

  const currentSlide = heroSlides[currentHero];
  const currentGalleryImage = galleryImages[currentGallery];
  const videoSrc = isVideoPlaying
    ? 'https://www.youtube.com/embed/J7dU_nZKKm0?autoplay=1&mute=0&rel=0&modestbranding=1&playsinline=1&controls=1'
    : 'https://www.youtube.com/embed/J7dU_nZKKm0?rel=0&modestbranding=1&playsinline=1&controls=1&mute=1';

  return (
    <div className="team-page-redesign" ref={sectionRef}>
      <section className="team-hero-redesign">
        <div
          className="team-hero-fullbleed"
          onMouseEnter={() => setIsHeroPaused(true)}
          onMouseLeave={() => setIsHeroPaused(false)}
        >
          {heroSlides.map((slide, index) => {
            const slideClass = slide.label.toLowerCase().includes('sales')
              ? 'sales-slide'
              : slide.label.toLowerCase().includes('accounts')
                ? 'accounts-slide'
                : slide.label.toLowerCase().includes('it')
                  ? 'it-slide'
                  : slide.label.toLowerCase().includes('creative')
                    ? 'creative-slide'
                    : '';

            let positionClass = 'next';
            if (index === currentHero) {
              positionClass = 'active';
            } else if (index === (currentHero - 1 + heroSlides.length) % heroSlides.length) {
              positionClass = 'prev';
            }

            return (
              <div key={slide.label} className={`team-hero-slide ${positionClass} ${slideClass}`}>
                <img src={slide.image} alt={slide.label} />
              </div>
            );
          })}

          <div className="team-hero-overlay">
            <div className="team-hero-title-block">
              <h1 key={currentHero}>{currentSlide.label}</h1>
            </div>

            <div className="team-hero-controls">
              <div className="team-hero-dots">
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.label}
                    type="button"
                    className={index === currentHero ? 'active' : ''}
                    onClick={() => setCurrentHero(index)}
                    aria-label={`Show ${slide.label}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-story-section">
        <div className="team-shell">
          <div className="team-story-card">
            <div className="team-video-wrap">
              <div className="team-video-card">
                <iframe
                  src={videoSrc}
                  title="GHL India Asset team"
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                  loading="lazy"
                />
                {!isVideoPlaying && (
                  <button type="button" className="team-video-poster" onClick={() => setIsVideoPlaying(true)}>
                    <span className="team-video-play">
                      <Play size={16} fill="currentColor" />
                    </span>
                  </button>
                )}
              </div>
            </div>

            <div className="team-story-copy">
              <p className="team-section-tag">Who We Are</p>
              <p className="team-story-text">
                Great things in business are never done by one person. They are done by a team of people who are committed and capable. See the key people of our company here.
              </p>
              <div className="team-logo-card">
                <img src="https://www.ghlindia.com/assets/img/logo.webp" alt="GHL India logo" width="150" height="60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-block-section">
        <div className="team-shell">
          <div className="section-header" data-animate="fade-up">
            <span>Leadership</span>
            <h2>Our Management Team</h2>
            <p>Meet the visionary minds driving GHL India's success and financial stewardship.</p>
          </div>

          <div className="leadership-grid-redesign">
            {leadershipCards.map((card) => (
              <article className="leader-card-container" key={card.name}>
                <div className="leader-card-main">
                  <div className="leader-card-copy">
                    <h3>{card.name}</h3>
                    <p>{card.role}</p>
                  </div>
                  <div className="leader-card-image-wrap">
                    <img src={card.image} alt={card.name} />
                  </div>
                  <a href={card.linkedin} target="_blank" rel="noopener noreferrer" className="leader-linkedin" aria-label={`${card.name} LinkedIn`}>
                    <LinkedinIcon size={18} />
                  </a>
                </div>
                <div className="leader-card-caption">
                  {card.caption}
                </div>
              </article>
            ))}
          </div>

          <div className="director-showcase-redesign">
            <div className="director-stage-redesign">
              <div className="director-image-box">
                <picture>
                  <source media="(max-width: 767px)" srcSet="https://www.ghlindia.com/assestteam/img/back/newimages/Karthi-anna.png" />
                  <img src="https://www.ghlindia.com/assestteam/img/back/newimages/Karhi-Anna-XD.jpg" alt="Mr. Karthikeyan Dhayalan" />
                </picture>
              </div>
              <div className="director-copy-redesign">
                <div>
                  <h3>Mr. Karthikeyan Dhayalan</h3>
                  <p>(aka) Guhan</p>
                </div>
                <a
                  href="https://www.linkedin.com/in/karthikeyan-dhayalan-724454285/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leader-linkedin director-linkedin-redesign"
                  aria-label="Mr. Karthikeyan Dhayalan LinkedIn"
                >
                  <LinkedinIcon size={18} />
                </a>
              </div>
            </div>
            <div className="director-footer-redesign">
              <strong>Director</strong>
              <span>Business Operation head</span>
            </div>
          </div>
        </div>
      </section>

      <section className="team-block-section soft">
        <div className="team-shell">
          <div className="section-header" data-animate="fade-up">
            <span>Experts</span>
            <h2>Meet Our Team</h2>
            <p>Our dedicated professionals spanning Sales, IT, Accounts, and Creative divisions.</p>
          </div>
          <div className="people-grid-redesign">
            {peopleCards.map((person) => (
              <PeopleCard key={person.name} person={person} />
            ))}
          </div>
        </div>
      </section>

      <section className="team-block-section">
        <div className="team-shell">
          <div className="section-header" data-animate="fade-up">
            <span>Support</span>
            <h2>Investor Relationship Managers</h2>
            <p>Your primary points of contact, ensuring a seamless and transparent onboarding experience.</p>
          </div>
          <div className="people-grid-redesign">
            {irmCards.map((person) => (
              <PeopleCard key={person.name} person={person} />
            ))}
          </div>
        </div>
      </section>

      <section className="gallery-section-redesign">
        <div className="team-shell">
          <div className="section-header" data-animate="fade-up">
            <span>Visuals</span>
            <h2>GHL India Gallery</h2>
            <p className="team-gallery-note">A wider look at the people and environment behind GHL India.</p>
          </div>

          <div className="gallery-main-redesign">
            <div className="gallery-main-image-stage">
              <img src={currentGalleryImage.src} alt={currentGalleryImage.label} />
            </div>
            <div className="gallery-main-meta">
              <span>{currentGalleryImage.label}</span>
              <div className="gallery-main-arrows">
                <button
                  type="button"
                  className="team-arrow"
                  onClick={() => setCurrentGallery((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))}
                  aria-label="Previous gallery image"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  className="team-arrow"
                  onClick={() => setCurrentGallery((prev) => (prev + 1) % galleryImages.length)}
                  aria-label="Next gallery image"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className="gallery-thumbs-redesign">
            {galleryImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                className={`gallery-thumb-redesign ${index === currentGallery ? 'active' : ''}`}
                onClick={() => setCurrentGallery(index)}
              >
                <span className="gallery-thumb-image-stage">
                  <img src={image.src} alt={`Gallery thumbnail ${index + 1}`} />
                </span>
                <span className="gallery-thumb-label">{image.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}



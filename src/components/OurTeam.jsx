import React, { useState, useEffect } from 'react';
import { Users, ShieldCheck, Cpu, Code, Megaphone, FileText, Landmark } from 'lucide-react';
import './OurTeam.css';

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
  const [activeLeaderIdx, setActiveLeaderIdx] = useState(0);

  const leaders = [
    {
      name: "Mr. Rajkumar",
      role: "Co-founder & Business Analyzing Head",
      img: "/assets/img/team/Rajkumar_photo-removebg-preview.png",
      desc: "Experienced co-founder specializing in core market analysis, risk evaluation, and product demand validation.",
      linkedin: "https://www.linkedin.com/in/raj-kumar-v-12191036/"
    },
    {
      name: "Mr. Senthil",
      role: "Co-founder & Legal Head",
      img: "/assets/img/team/Senthil-cover.png",
      desc: "Advocate and legal head governing charge creations, debenture security, and compliance protocols.",
      linkedin: "https://www.linkedin.com/in/senthil-kumar-advocate/"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveLeaderIdx((prev) => (prev === 0 ? 1 : 0));
    }, 4500);
    return () => clearInterval(timer);
  }, []);

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

  return (
    <div className="team-page">
      {/* Intro Leaders Showcase Hero */}
      <section className="team-hero-section section-padding">
        <div className="container">
          <div className="team-hero-grid">
            {/* Left Content Column */}
            <div className="team-hero-content">
              <span className="team-hero-badge">Executive leadership</span>
              <h1 className="team-hero-title">GHL INDIA Leaders</h1>
              <p className="team-hero-text">
                Great things in business are never done by one person. They are done by a team of people who are committed, capable, and united under a common vision. Meet the architects of our secure investment platform.
              </p>
              
              <div className="leader-bullets">
                {leaders.map((leader, idx) => (
                  <div 
                    key={idx} 
                    className={`leader-bullet-item ${activeLeaderIdx === idx ? 'active' : ''}`}
                    onClick={() => setActiveLeaderIdx(idx)}
                  >
                    <h4>{leader.name}</h4>
                    <p>{leader.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Display Column */}
            <div className="team-hero-display-box">
              <div className="leader-showcase-container">
                {leaders.map((leader, idx) => {
                  const isActive = activeLeaderIdx === idx;
                  return (
                    <div 
                      key={idx} 
                      className={`leader-slide-card ${isActive ? 'active' : ''}`}
                    >
                      <div className="leader-img-frame">
                        <img src={leader.img} alt={leader.name} className="leader-showcase-img" />
                      </div>
                      <div className="leader-info-card">
                        <h3>{leader.name}</h3>
                        <span className="leader-role-tag">{leader.role}</span>
                        <p>{leader.desc}</p>
                        {leader.linkedin !== '#' && (
                          <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="leader-linkedin-btn">
                            <LinkedinIcon size={18} />
                            <span>Connect on LinkedIn</span>
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Corporate Team Section */}
      <section className="team-directory-section section-padding">
        <div className="container">
          <div className="team-section-header text-center">
            <h2 className="team-section-title">Our Team</h2>
            <p className="team-section-subtitle">
              Professional experts managing our legal, financial, and operational frameworks to keep your capital safe.
            </p>
          </div>

          {/* Founders Block */}
          <div className="team-category-block">
            <h3 className="category-title">Founders & Directors</h3>
            <div className="team-members-grid">
              {teamMembers.filter(m => m.category === 'founders').map((member, idx) => (
                <div key={idx} className="member-card">
                  <div className="member-image-frame">
                    <img src={member.img} alt={member.name} className="member-avatar" />
                  </div>
                  <div className="member-details">
                    <div className="member-badge-row">
                      <span className="member-role-badge">
                        {member.icon}
                        {member.role}
                      </span>
                    </div>
                    <h4 className="member-name">{member.name}</h4>
                    <p className="member-sub-role">{member.subRole}</p>
                    {member.linkedin !== '#' && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="member-linkedin-link">
                        <LinkedinIcon size={16} />
                        <span>LinkedIn</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Department Heads Block */}
          <div className="team-category-block">
            <h3 className="category-title">Department Heads</h3>
            <div className="team-members-grid">
              {teamMembers.filter(m => m.category === 'heads').map((member, idx) => (
                <div key={idx} className="member-card">
                  <div className="member-image-frame">
                    <img src={member.img} alt={member.name} className="member-avatar" />
                  </div>
                  <div className="member-details">
                    <div className="member-badge-row">
                      <span className="member-role-badge">
                        {member.icon}
                        {member.role}
                      </span>
                    </div>
                    <h4 className="member-name">{member.name}</h4>
                    <p className="member-sub-role">{member.subRole}</p>
                    {member.linkedin !== '#' && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="member-linkedin-link">
                        <LinkedinIcon size={16} />
                        <span>LinkedIn</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Investor Relations Block */}
          <div className="team-category-block">
            <h3 className="category-title">Investor Relations & Sales</h3>
            <div className="team-members-grid">
              {teamMembers.filter(m => m.category === 'sales').map((member, idx) => (
                <div key={idx} className="member-card">
                  <div className="member-image-frame">
                    <img src={member.img} alt={member.name} className="member-avatar" />
                  </div>
                  <div className="member-details">
                    <div className="member-badge-row">
                      <span className="member-role-badge">
                        {member.icon}
                        {member.role}
                      </span>
                    </div>
                    <h4 className="member-name">{member.name}</h4>
                    <p className="member-sub-role">{member.subRole}</p>
                    {member.linkedin !== '#' && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="member-linkedin-link">
                        <LinkedinIcon size={16} />
                        <span>LinkedIn</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
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
          
          <div className="gallery-mosaic-grid">
            <div className="gallery-item-wrapper large">
              <img src="https://www.ghlindia.com/assets/img/hero/gallery/g8.JPG" alt="GHL India Team Meeting" />
              <div className="gallery-caption">Strategic Planning Session</div>
            </div>
            <div className="gallery-item-wrapper">
              <img src="https://www.ghlindia.com/assets/img/hero/gallery/g7.JPG" alt="GHL India Team Discussion" />
              <div className="gallery-caption">Operations Alignment</div>
            </div>
            <div className="gallery-item-wrapper wide">
              <img src="https://www.ghlindia.com/assets/img/hero/gallery/g4.JPG" alt="GHL India Main Office" />
              <div className="gallery-caption">GHL Corporate Office</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

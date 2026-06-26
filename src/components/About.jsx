import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './About.css';

export default function About() {
  const [playingLeft, setPlayingLeft] = useState(false);
  const [playingRight, setPlayingRight] = useState(false);
  const sectionRef = useScrollAnimation();

  return (
    <section className="about-section section-padding" id="about" ref={sectionRef}>
      <div className="container">
        
        {/* Established in 2021 Statement Block */}
        <div className="established-box glass-panel" data-animate="fade-up">
          <div className="est-left">
            <h2>Established in <span className="red-accent">2021</span></h2>
          </div>
          <div className="est-right">
            <p>
              As a premier investment and asset management company, we're playing a key role in the global economy. 
              Our innovative fintech alternate investment platform helps create steady income, even during tough times, 
              and provides investors with opportunities to achieve financial independence. Through our fractional 
              investment model, we offer reliable business ideas in fast-growing markets, helping investors make smart decisions.
            </p>
          </div>
        </div>

        {/* Reels & Middle Card Row */}
        <div className="about-reels-row">
          
          {/* LEFT REEL */}
          <div className="reel-card-item" data-animate="fade-right">
            {!playingLeft ? (
              <div className="reel-thumbnail-wrapper" onClick={() => setPlayingLeft(true)}>
                <img 
                  src="/videos/Karthi-Anna-Thumbnail.jpg" 
                  alt="GHL Client Review Thumbnail" 
                  className="reel-thumb-img"
                />
                <div className="play-button-overlay">
                  <Play size={24} fill="currentColor" />
                </div>
              </div>
            ) : (
              <video 
                src="https://www.ghlindia.com/videos/reel1.mp4" 
                controls 
                autoplay 
                playsinline 
                className="reel-video-element"
              />
            )}
            <span className="reel-caption">Investor Testimonial - Structure & Safety</span>
          </div>

          {/* MIDDLE CONTENT CARD */}
          <div className="about-middle-card glass-panel" data-animate="fade-up" data-stagger-delay="100ms">
            <h3 className="middle-card-title">
              <span className="red-accent">GHL‘s</span> Business-Alternative Investment Platform
            </h3>
            
            <div className="middle-image-wrapper">
              <img 
                src="/assets/img/home2026/others/com.jpeg" 
                alt="Alternative Investment Concept" 
                className="middle-img"
              />
              <div className="card-glass-shine"></div>
            </div>

            <p className="middle-card-text">
              <strong>Gladden HelpLine India (GHL India)</strong> firmly believes in collective growth. 
              Our fractional investment model provides opportunities for everyone to lead a stress-free life. 
              Our growth experts always take actions that make our nation and people flourish.
            </p>
          </div>

          {/* RIGHT REEL */}
          <div className="reel-card-item" data-animate="fade-left" data-stagger-delay="200ms">
            {!playingRight ? (
              <div className="reel-thumbnail-wrapper" onClick={() => setPlayingRight(true)}>
                <img 
                  src="/videos/Teena-Thumbnail.jpg" 
                  alt="GHL Onboarding Manager Review" 
                  className="reel-thumb-img"
                />
                <div className="play-button-overlay">
                  <Play size={24} fill="currentColor" />
                </div>
              </div>
            ) : (
              <video 
                src="https://www.ghlindia.com/videos/reels2.mp4" 
                controls 
                autoplay 
                playsinline 
                className="reel-video-element"
              />
            )}
            <span className="reel-caption">Relationship Manager Onboarding Briefing</span>
          </div>

        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Media.css';

export default function Media() {
  const [playingVideo, setPlayingVideo] = useState(null);
  const sectionRef = useScrollAnimation();

  const mainMedia = [
    {
      id: 'etnow',
      title: 'ET Now Special Broadcast',
      cover: '/assets/img/home2026/others/ET-NOW-21-12-Thumbnail.jpg',
      videoUrl: 'https://www.youtube.com/embed/bMJHxlPS78A'
    },
    {
      id: 'podcast',
      title: 'BTB Entrepreneurship Podcast',
      cover: '/assets/img/home2026/others/BTB-Podcast-Thumbnail.jpg',
      videoUrl: 'https://www.youtube.com/embed/bzXMtcAwfj4'
    }
  ];

  const interviews = [
    {
      id: 'interview1',
      title: 'Business Leader Interview - Part 1',
      cover: '/assets/img/Home_23.07.2024/interview3.jpg',
      videoUrl: 'https://www.youtube.com/embed/MnwnCTBDs_w'
    },
    {
      id: 'interview2',
      title: 'Wealth Management Dialogue - Part 2',
      cover: '/assets/img/Home_23.07.2024/interview-2.jpg',
      videoUrl: 'https://www.youtube.com/embed/zcty4Aug0Ro'
    },
    {
      id: 'interview3',
      title: 'Alternative Investments Overview - Part 3',
      cover: '/assets/img/Home_23.07.2024/interview11.jpg',
      videoUrl: 'https://www.youtube.com/embed/gqHP0xDFhMY'
    }
  ];

  return (
    <section className="media-section section-padding" id="media" ref={sectionRef}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header" data-animate="fade-up">
          <span>Public Outreach</span>
          <h2>Media Presence</h2>
          <p>We share insights, transparency standards, and market summaries across national news channels and podcasts.</p>
        </div>

        {/* Featured Pods (Two Big Cards) */}
        <div className="media-main-grid">
          {mainMedia.map((media) => {
            const isPlaying = playingVideo === media.id;
            return (
              <div key={media.id} className="media-main-card glass-panel card-hover-effect" data-animate="fade-up" data-stagger-delay={`${mainMedia.indexOf(media) * 250}ms`}>
                <div className="media-player-wrapper">
                  {!isPlaying ? (
                    <div className="media-trigger" onClick={() => setPlayingVideo(media.id)}>
                      <img src={media.cover} alt={media.title} className="media-cover-img" />
                      <div className="media-play-circle large-play">
                        <Play size={28} fill="currentColor" />
                      </div>
                      <div className="media-glass-shine"></div>
                    </div>
                  ) : (
                    <iframe 
                      src={`${media.videoUrl}?autoplay=1`} 
                      title={media.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="media-iframe"
                    />
                  )}
                </div>
                <div className="media-info-row">
                  <h3>{media.title}</h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Intervews (Three Small Grid Cards) */}
        <div className="media-interviews-grid">
          {interviews.map((inter) => {
            const isPlaying = playingVideo === inter.id;
            return (
              <div key={inter.id} className="media-interview-card glass-panel card-hover-effect">
                <div className="media-player-wrapper interview-wrapper">
                  {!isPlaying ? (
                    <div className="media-trigger" onClick={() => setPlayingVideo(inter.id)}>
                      <img src={inter.cover} alt={inter.title} className="media-cover-img" />
                      <div className="media-play-circle">
                        <Play size={20} fill="currentColor" />
                      </div>
                      <div className="media-glass-shine"></div>
                    </div>
                  ) : (
                    <iframe 
                      src={`${inter.videoUrl}?autoplay=1`} 
                      title={inter.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="media-iframe"
                    />
                  )}
                </div>
                <div className="media-info-row interview-info">
                  <h4>{inter.title}</h4>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

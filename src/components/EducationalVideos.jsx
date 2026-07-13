import React, { useState, useEffect, useMemo } from 'react';
import { Play, ArrowLeft, ArrowRight, Video, Search, X, Film, Info } from 'lucide-react';
import localVideos from '../data/educational_videos_data.json';
import './EducationalVideos.css';
import BottomCTA from './BottomCTA';

const YoutubeIcon = ({ size = 16, className }) => (
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
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.252 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
  </svg>
);

export default function EducationalVideos() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [playingVideoUrl, setPlayingVideoUrl] = useState(null); // For inline play
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const videosPerPage = 9;

  // Reset inline player when transitioning views/pages
  useEffect(() => {
    setPlayingVideoUrl(null);
  }, [currentPage, activeCategory, searchQuery]);

  // Categorization logic based on title keywords
  const getCategory = (title) => {
    const t = title.toLowerCase();
    if (t.includes('structure') || t.includes('corporate') || t.includes('explained')) {
      return 'Structure';
    }
    if (t.includes('real estate') || t.includes('profit') || t.includes('invest') || t.includes('deal') || t.includes('exit') || t.includes('price')) {
      return 'Strategy';
    }
    if (t.includes('protect') || t.includes('support') || t.includes('capital') || t.includes('faq')) {
      return 'Protection';
    }
    if (t.includes('sunday') || t.includes('reel') || t.includes('short')) {
      return 'Shorts';
    }
    return 'General';
  };

  useEffect(() => {
    loadVideos();
  }, []);

  const loadVideos = async () => {
    setLoading(true);
    let loadedVideos = [];
    let success = false;

    try {
      // Fetch live HTML from server to parse live list
      const response = await fetch('/educational-videos');
      if (response.ok) {
        const htmlText = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlText, 'text/html');
        const videoPosts = doc.querySelectorAll('.video-post');

        if (videoPosts.length > 0) {
          videoPosts.forEach((post) => {
            const img = post.querySelector('img');
            const playBtn = post.querySelector('.play-btn');
            const watchLink = post.querySelector('.Watch-video');
            const hasRibbon = !!post.querySelector('.ribbon');

            const title = img ? (img.getAttribute('alt') || '') : '';
            const thumbnail = img ? (img.getAttribute('src') || '') : '';

            let videoUrl = '';
            if (playBtn) {
              const onClickText = playBtn.getAttribute('onclick') || '';
              const match = onClickText.match(/playVideo\('([^']+)'/);
              if (match) videoUrl = match[1];
            }
            if (!videoUrl && watchLink) {
              videoUrl = watchLink.getAttribute('href') || '';
            }

            if (title || videoUrl) {
              loadedVideos.push({
                title: title.trim(),
                thumbnail: thumbnail.trim(),
                videoUrl: videoUrl.trim(),
                isNew: hasRibbon,
                category: getCategory(title)
              });
            }
          });
          if (loadedVideos.length > 0) {
            setVideos(loadedVideos);
            success = true;
          }
        }
      }
    } catch (err) {
      console.warn('Live dynamic video parse failed, using fallback database:', err);
    }

    if (!success) {
      // Fallback with categorized fields
      const fallbackCategorized = localVideos.map(video => ({
        ...video,
        category: getCategory(video.title)
      }));
      setVideos(fallbackCategorized);
    }
    setLoading(false);
  };

  const getThumbnailUrl = (src) => {
    if (!src) return '';
    if (src.startsWith('http')) return src;
    return `https://www.ghlindia.com/${src}`;
  };

  const extractYouTubeID = (url) => {
    if (!url) return '';
    let videoId = '';
    if (url.includes('watch?v=')) {
      videoId = url.split('v=')[1]?.split('&')[0];
    } else if (url.includes('/shorts/')) {
      videoId = url.split('/shorts/')[1]?.split('?')[0];
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1]?.split('?')[0];
    }
    return videoId;
  };

  // Real-time Filtering & Search
  const filteredVideos = useMemo(() => {
    return videos.filter((video) => {
      const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || video.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [videos, searchQuery, activeCategory]);

  // Reset pagination when search query or category filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, activeCategory]);

  // Slice list for current page
  const paginatedVideos = useMemo(() => {
    const startIndex = (currentPage - 1) * videosPerPage;
    return filteredVideos.slice(startIndex, startIndex + videosPerPage);
  }, [filteredVideos, currentPage]);

  const totalPages = Math.ceil(filteredVideos.length / videosPerPage);

  const handlePageChange = (pageNo) => {
    if (pageNo >= 1 && pageNo <= totalPages) {
      setCurrentPage(pageNo);
      // Scroll to filters bar to keep them visible at the top of the viewport
      const controlPanel = document.querySelector('.edu-control-panel-bar');
      if (controlPanel) {
        const headerHeight = 80;
        const topOffset = controlPanel.getBoundingClientRect().top + window.pageYOffset - headerHeight + 20;
        window.scrollTo({ top: topOffset, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const categories = ['All', 'Strategy', 'Structure', 'Protection', 'Shorts'];

  return (
    <div className="edu-videos-page">
      {/* Cinematic Banner Header */}
      <div className="edu-banner-section">
        <div className="edu-banner-wrapper">
          <img
            src="https://www.ghlindia.com/assets/img/Edu-Video-Banner.jpg"
            alt="Educational Videos Desktop Banner"
            className="edu-banner-img desktop-banner"
          />
          <img
            src="https://www.ghlindia.com/assets/img/Edu-Video-MOB-Banner.jpg"
            alt="Educational Videos Mobile Banner"
            className="edu-banner-img mobile-banner"
          />
          <div className="banner-overlay-content">
            <span className="badge-tag">GHL Academy</span>
            <h1>Educational Video Resources</h1>
            <p>Smart structural insights, real estate architecture, and capital protection strategies.</p>
          </div>
        </div>
      </div>

      {/* Control Panel Bar (Filters + Search) */}
      <div className="edu-control-panel-bar">
        <div className="container panel-inner">
          <div className="categories-filter-wrapper">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`category-pill ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="search-bar-wrapper">
            <Search className="search-icon" size={18} />
            <input
              type="text"
              placeholder="Search videos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button className="clear-search-btn" onClick={() => setSearchQuery('')}>
                <X size={16} />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="edu-content-anchor"></div>

      {/* Video Content Grid */}
      <section className="edu-videos-section">
        <div className="container">
          {loading ? (
            <div className="edu-loading-container">
              <div className="edu-spinner"></div>
              <p>Fetching resources...</p>
            </div>
          ) : filteredVideos.length === 0 ? (
            <div className="edu-empty-state">
              <Info size={40} className="empty-icon" />
              <h3>No videos found</h3>
              <p>We couldn't find any videos matching your filter or search query. Try clearing them.</p>
              <button
                className="btn-reset-filters"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <>
              <div className="edu-videos-grid">
                {paginatedVideos.map((video, idx) => {
                  const index = (currentPage - 1) * videosPerPage + idx;
                  return (
                    <div key={index} className="edu-video-card">
                      <div className="video-card-inner">
                        <div className="video-media-wrapper">
                          {playingVideoUrl === video.videoUrl ? (
                            <iframe
                              className="video-inline-iframe"
                              src={`https://www.youtube.com/embed/${extractYouTubeID(video.videoUrl)}?autoplay=1`}
                              title={video.title}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              style={{ width: '100%', height: '100%', border: 'none', position: 'absolute', top: 0, left: 0 }}
                            ></iframe>
                          ) : (
                            <>
                              <img
                                src={getThumbnailUrl(video.thumbnail)}
                                alt={video.title}
                                className="video-thumbnail"
                                loading="lazy"
                              />
                              <div className="category-label-tag">{video.category}</div>
                              {video.isNew && (
                                <div className="video-card-ribbon">
                                  <span>New</span>
                                </div>
                              )}
                              <button
                                className="video-play-overlay-btn"
                                onClick={() => setPlayingVideoUrl(video.videoUrl)}
                                aria-label="Play video"
                              >
                                <div className="btn-circle-ripple">
                                  <Play size={20} fill="#ffffff" stroke="none" />
                                </div>
                              </button>
                            </>
                          )}
                        </div>
                        <div className="video-content-body">
                          <h3 className="video-title">{video.title}</h3>
                        </div>
                        <div className="video-card-actions">
                          <a
                            href="https://www.youtube.com/@ghlindiaasset"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="video-action-btn subscribe-btn"
                          >
                            <YoutubeIcon size={14} className="btn-icon" />
                            Subscribe
                          </a>
                          <button
                            onClick={() => setPlayingVideoUrl(video.videoUrl)}
                            className="video-action-btn watch-btn"
                          >
                            <Video size={14} className="btn-icon" />
                            Watch Video
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="edu-pagination">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="pagination-arrow"
                    aria-label="Previous Page"
                  >
                    <ArrowLeft size={18} />
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNo) => (
                    <button
                      key={pageNo}
                      onClick={() => handlePageChange(pageNo)}
                      className={`pagination-num ${currentPage === pageNo ? 'active' : ''}`}
                    >
                      {pageNo}
                    </button>
                  ))}

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="pagination-arrow"
                    aria-label="Next Page"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Login & Register CTA Section */}
      <BottomCTA />

    </div>
  );
}

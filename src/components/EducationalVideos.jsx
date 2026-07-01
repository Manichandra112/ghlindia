import React, { useState, useEffect } from 'react';
import { Play, ArrowLeft, ArrowRight, Video } from 'lucide-react';
import localVideos from '../data/educational_videos_data.json';
import './EducationalVideos.css';

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
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [playingId, setPlayingId] = useState(null); // stores index of playing video
  const [totalVideos, setTotalVideos] = useState(localVideos.length);

  const videosPerPage = 9;

  useEffect(() => {
    // Scroll to top when view loads or page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
    loadVideos(currentPage);
  }, [currentPage]);

  const loadVideos = async (page) => {
    setLoading(true);
    setPlayingId(null);
    let loadedVideos = [];
    let success = false;

    try {
      // Try to fetch live content dynamically on production
      const pageQuery = page === 1 ? '' : `?page_no=${page}`;
      const response = await fetch(`/educational-videos${pageQuery}`);
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
                isNew: hasRibbon
              });
            }
          });

          if (loadedVideos.length > 0) {
            setVideos(loadedVideos);
            // Dynamic count estimation based on pagination count
            const paginationItems = doc.querySelectorAll('.blog-pagination li');
            let maxPage = 8;
            paginationItems.forEach(item => {
              const num = parseInt(item.textContent);
              if (!isNaN(num) && num > maxPage) {
                maxPage = num;
              }
            });
            setTotalVideos(maxPage * videosPerPage);
            success = true;
          }
        }
      }
    } catch (err) {
      console.warn('Live video fetch failed, using local database:', err);
    }

    // Local Fallback slice
    if (!success) {
      const startIndex = (page - 1) * videosPerPage;
      const endIndex = startIndex + videosPerPage;
      setVideos(localVideos.slice(startIndex, endIndex));
      setTotalVideos(localVideos.length);
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

  const handlePageChange = (pageNo) => {
    if (pageNo >= 1 && pageNo <= Math.ceil(totalVideos / videosPerPage)) {
      setCurrentPage(pageNo);
    }
  };

  const totalPages = Math.ceil(totalVideos / videosPerPage);

  return (
    <div className="edu-videos-page">
      {/* Banner Section */}
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
        </div>
      </div>

      {/* Breadcrumbs Navigation */}
      <div className="edu-breadcrumbs">
        <div className="container">
          <ol className="breadcrumbs-list">
            <li><a href="#/">Home</a></li>
            <li className="separator">/</li>
            <li>Intelligence</li>
            <li className="separator">/</li>
            <li className="active">Educational Videos</li>
          </ol>
        </div>
      </div>

      {/* Video Content Grid */}
      <section className="edu-videos-section">
        <div className="container">
          {loading ? (
            <div className="edu-loading-container">
              <div className="edu-spinner"></div>
              <p>Loading Videos...</p>
            </div>
          ) : (
            <>
              <div className="edu-videos-grid">
                {videos.map((video, index) => {
                  const isPlaying = playingId === index;
                  const videoId = extractYouTubeID(video.videoUrl);

                  return (
                    <div key={index} className="edu-video-card">
                      <div className="video-card-inner">
                        <div className="video-media-wrapper">
                          {isPlaying && videoId ? (
                            <iframe
                              className="video-iframe"
                              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                              title={video.title}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></iframe>
                          ) : (
                            <>
                              <img
                                src={getThumbnailUrl(video.thumbnail)}
                                alt={video.title}
                                className="video-thumbnail"
                              />
                              {video.isNew && (
                                <div className="video-card-ribbon">
                                  <span>New</span>
                                </div>
                              )}
                              <button
                                className="video-play-btn"
                                onClick={() => setPlayingId(index)}
                                aria-label="Play video"
                              >
                                <Play size={24} fill="#ffffff" stroke="none" />
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
                            <Youtube size={16} className="btn-icon" />
                            Subscribe
                          </a>
                          <a
                            href={video.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="video-action-btn watch-btn"
                          >
                            <Video size={16} className="btn-icon" />
                            Watch Video
                          </a>
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
    </div>
  );
}

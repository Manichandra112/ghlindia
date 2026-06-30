import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowLeft, Calendar, FileText, Loader2 } from 'lucide-react';
import newsData from '../data/news_data.json';
import './EconomyInsight.css';
import CallToAction from './CallToAction';

export default function EconomyInsight() {
  const [tabs, setTabs] = useState([]);
  const [news, setNews] = useState({});
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('Today');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [loadingDetail, setLoadingDetail] = useState(false);
  const tabsRef = useRef(null);

  // Load news dynamically from live site with local JSON fallback
  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        // Try fetching live page. Will work on production (same origin)
        const response = await fetch('/economy-insight');
        if (!response.ok) {
          throw new Error('Failed to fetch from live endpoint, status: ' + response.status);
        }
        
        const htmlText = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlText, 'text/html');
        
        // Find all tab buttons
        const tabBtns = Array.from(doc.querySelectorAll('.date-selector-wrapper button[data-tab]'));
        if (tabBtns.length === 0) {
          throw new Error('No tabs found in live HTML structure');
        }
        
        const parsedTabs = tabBtns.map(btn => ({
          id: btn.getAttribute('id') || btn.getAttribute('data-tab'),
          date: btn.textContent.trim()
        }));
        
        const parsedNews = {};
        parsedTabs.forEach(tab => {
          const section = doc.getElementById(tab.id);
          if (section) {
            const cards = Array.from(section.querySelectorAll('.card')).map(card => {
              const img = card.querySelector('.card-img-top');
              const titleEl = card.querySelector('.card-title b') || card.querySelector('.card-title');
              const readMoreBtn = card.querySelector('a[href*="news-details"]');
              
              let slug = '';
              if (readMoreBtn) {
                const href = readMoreBtn.getAttribute('href');
                const qIndex = href.indexOf('?');
                slug = qIndex !== -1 ? href.substring(qIndex + 1) : href;
              }
              
              return {
                image: img ? img.getAttribute('src') : '',
                title: titleEl ? titleEl.textContent.trim() : '',
                slug: slug
              };
            });
            parsedNews[tab.date] = cards;
          }
        });
        
        setTabs(parsedTabs);
        setNews(parsedNews);
        if (parsedTabs.length > 0) {
          setActiveTab(parsedTabs[0].date);
        }
      } catch (err) {
        console.warn('Falling back to local offline news archive:', err.message);
        // Serve offline archive data
        setTabs(newsData.tabs);
        setNews(newsData.news);
        if (newsData.tabs.length > 0) {
          setActiveTab(newsData.tabs[0].date);
        }
      } finally {
        setLoading(false);
      }
    }
    
    loadData();
  }, []);

  // Fetch article details dynamically in real time
  const handleReadMore = async (item) => {
    setSelectedArticle({ ...item, date: activeTab, content: null });
    setLoadingDetail(true);
    
    try {
      const response = await fetch(`/news-details?${item.slug}`);
      if (!response.ok) {
        throw new Error('Failed to fetch article details');
      }
      
      const htmlText = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlText, 'text/html');
      
      // Attempt to find the GHL entry-content container
      const entryContent = doc.querySelector('.entry-content') || doc.querySelector('.post-item') || doc.querySelector('main');
      if (entryContent) {
        let contentHtml = entryContent.innerHTML;
        // Clean empty wrappers or useless elements
        contentHtml = contentHtml.replace(/<center>\s*<\/center>/gi, '');
        setSelectedArticle(prev => prev ? { ...prev, content: contentHtml } : null);
      } else {
        throw new Error('Could not parse content body');
      }
    } catch (err) {
      console.warn('Using local fallback content for article:', err.message);
      // Fallback: search local archive database
      const localDayNews = newsData.news[activeTab] || [];
      const match = localDayNews.find(x => x.title === item.title || x.slug === item.slug);
      if (match && match.content) {
        setSelectedArticle(prev => prev ? { ...prev, content: match.content } : null);
      } else {
        setSelectedArticle(prev => prev ? {
          ...prev,
          content: `
            <p><strong>Summary:</strong></p>
            <p>This article summary could not be loaded dynamically. Please visit the official GHL website to read the full summary.</p>
            <p><strong>Source:</strong> <a href="https://www.ghlindia.com/news-details?${item.slug}" target="_blank" rel="noopener noreferrer">GHL India News Details</a></p>
          `
        } : null);
      }
    } finally {
      setLoadingDetail(false);
    }
  };

  // Scroll handler for horizontal date tabs
  const scroll = (direction) => {
    if (tabsRef.current) {
      const scrollAmount = 250;
      tabsRef.current.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
    }
  };

  // Resolve images from GHL production domain
  const getImageUrl = (imagePath) => {
    if (!imagePath) return '';
    if (imagePath.startsWith('http')) return imagePath;
    return `https://www.ghlindia.com/${imagePath}`;
  };

  const handleTabChange = (date) => {
    if (date === activeTab) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(date);
      setIsTransitioning(false);
    }, 200);
  };

  // Scroll to top when changing views (only when entering/exiting an article)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedArticle]);

  const activeNewsList = news[activeTab] || [];

  // RENDER: Detailed Reading View
  if (selectedArticle) {
    return (
      <div className="economy-insight-container animate-fade-in">
        <div className="breadcrumbs">
          <div className="container">
            <span className="section-subtitle">Market Intelligence</span>
            <h1 className="page-title">Indian Economy <span className="highlight">News</span></h1>
            <nav>
              <ol>
                <li><a href="#/" onClick={() => setSelectedArticle(null)}>Home</a></li>
                <li><a href="#/economy-insight" onClick={() => setSelectedArticle(null)}>News</a></li>
                <li>{selectedArticle.title}</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="container detail-view">
          <div className="back-nav">
            <button className="back-btn" onClick={() => setSelectedArticle(null)}>
              <ArrowLeft size={16} />
              <span>Back to News list</span>
            </button>
          </div>

          <div className="article-body-wrapper">
            <div className="article-header">
              <h1>{selectedArticle.title}</h1>
              <div className="article-meta">
                <span className="meta-item">
                  <Calendar size={14} />
                  <span>{selectedArticle.date || activeTab}</span>
                </span>
                <span className="meta-item">
                  <FileText size={14} />
                  <span>Economy Policy</span>
                </span>
              </div>
            </div>

            {selectedArticle.image && (
              <div className="detail-img-wrapper">
                <img 
                  src={getImageUrl(selectedArticle.image)} 
                  alt={selectedArticle.title} 
                  className="detail-img"
                />
              </div>
            )}

            <div className="article-content">
              {loadingDetail ? (
                <div className="flex-center" style={{ minHeight: '150px', flexDirection: 'column', gap: '15px' }}>
                  <Loader2 className="animate-spin" size={32} color="#e41f26" />
                  <p style={{ color: '#64748b', fontSize: '14px' }}>Fetching article details...</p>
                </div>
              ) : selectedArticle.content ? (
                <div dangerouslySetInnerHTML={{ 
                  __html: selectedArticle.content
                    .replace(/^<center>\s*<\/center>\s*<br\s*\/?>\s*/gi, '')
                    .replace(/^\s*<p>\s*<p>/gi, '<p>')
                    .replace(/<\/p>\s*<\/p>$/gi, '</p>')
                    .trim() 
                }} />
              ) : (
                <p>No content available.</p>
              )}
            </div>
          </div>
        </div>
        <CallToAction />
      </div>
    );
  }

  // RENDER: Grid News List View
  return (
    <div className="economy-insight-container">
      <div className="breadcrumbs">
        <div className="container">
          <span className="section-subtitle">Market Intelligence</span>
          <h1 className="page-title">Indian Economy <span className="highlight">News</span></h1>
          <nav>
            <ol>
              <li><a href="#/">Home</a></li>
              <li>News</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container">
        {loading ? (
          /* Loading Skeleton / Spinner State */
          <div className="flex-center" style={{ minHeight: '300px', flexDirection: 'column', gap: '20px' }}>
            <Loader2 className="animate-spin" size={48} color="#e41f26" />
            <p style={{ color: '#64748b', fontSize: '15px', fontWeight: '500' }}>
              Loading latest news from GHL India...
            </p>
          </div>
        ) : (
          <>
            {/* Horizontal Scrollable Tabs Selector */}
            <div className="date-selector-wrapper">
              <button className="scroll-btn left" onClick={() => scroll('left')}>
                <ChevronLeft size={20} />
              </button>
              <div className="date-tabs-container" ref={tabsRef}>
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`date-tab ${activeTab === tab.date ? 'active' : ''}`}
                    onClick={() => handleTabChange(tab.date)}
                  >
                    {tab.date}
                  </button>
                ))}
              </div>
              <button className="scroll-btn right" onClick={() => scroll('right')}>
                <ChevronRight size={20} />
              </button>
            </div>

            {/* News Items Grid */}
            <div className={`news-grid ${isTransitioning ? 'fade-out' : ''}`}>
              {activeNewsList.length > 0 ? (
                activeNewsList.map((item, index) => (
                  <div key={index} className="news-card">
                    <div className="card-img-wrapper">
                      <img
                        src={getImageUrl(item.image)}
                        alt={item.title}
                        className="card-img"
                        loading="lazy"
                      />
                    </div>
                    <div className="card-content">
                      <h3 className="card-title">{item.title}</h3>
                      <button
                        className="read-more-btn"
                        onClick={() => handleReadMore(item)}
                      >
                        <span>Read More</span>
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="empty-state col-span-full">
                  <p>No news articles found for this date.</p>
                </div>
              )}
            </div>
          </>
        )}
      </div>
      <CallToAction />
    </div>
  );
}

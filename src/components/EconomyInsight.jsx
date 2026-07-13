import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowLeft, Calendar, FileText, Loader2, ArrowRight } from 'lucide-react';
import newsData from '../data/news_data.json';
import newsContent from '../data/news_content.json';
import './EconomyInsight.css';
import CallToAction from './CallToAction';
import economyInsightHero from '../assets/economy-insight.png';

export default function EconomyInsight() {
  const [tabs, setTabs] = useState([]);
  const [news, setNews] = useState({});
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [loadingDetail, setLoadingDetail] = useState(false);
  const tabsRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    if (newsData && newsData.tabs && newsData.news) {
      setTabs(newsData.tabs);
      setNews(newsData.news);
      if (newsData.tabs.length > 0) {
        setActiveTab(newsData.tabs[0].date);
      }
    }
    setLoading(false);
  }, []);

  const handleExploreClick = (e) => {
    e.preventDefault();
    const target = document.getElementById('economy-content');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scroll = (direction) => {
    if (tabsRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      tabsRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleTabChange = (tabDate) => {
    if (tabDate === activeTab) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(tabDate);
      setIsTransitioning(false);
    }, 200);
  };

  const getImageUrl = (path) => {
    if (!path) return '';
    if (path.startsWith('http://') || path.startsWith('https://')) return path;
    if (path.startsWith('/')) return path;
    return `/newsimg/${path}`;
  };

  const handleReadMore = (article) => {
    setSelectedArticle(article);
    if (!article.content) {
      setLoadingDetail(true);
      const contentHtml = newsContent[article.slug] || '<p>Content temporarily unavailable.</p>';
      
      const updatedArticle = { ...article, content: contentHtml };
      setSelectedArticle(updatedArticle);

      setNews(prev => {
        const updated = { ...prev };
        Object.keys(updated).forEach(dateTab => {
          updated[dateTab] = updated[dateTab].map(art =>
            art.slug === article.slug ? { ...art, content: contentHtml } : art
          );
        });
        return updated;
      });
      setLoadingDetail(false);
    }
  };


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedArticle]);

  const activeNewsList = news[activeTab] || [];

  if (selectedArticle) {
    return (
      <div className="economy-insight-container economy-insight-detail-view">
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
            </div>
            {selectedArticle.image && (
              <div className="detail-img-wrapper">
                <img src={getImageUrl(selectedArticle.image)} alt={selectedArticle.title} className="detail-img" />
              </div>
            )}
            <div className="article-content">
              {loadingDetail ? (
                <div className="flex-center" style={{ minHeight: '150px' }}><Loader2 className="animate-spin" size={32} /></div>
              ) : (
                <div dangerouslySetInnerHTML={{ __html: selectedArticle.content }} />
              )}
            </div>
          </div>
        </div>
        <CallToAction />
      </div>
    );
  }

  return (
    <div className="economy-insight-container">
      <section className="economy-hero">
        <div className="economy-hero-media-wrap">
          <img
            src={economyInsightHero}
            alt="Economic Insights Banner"
            className="economy-hero-img"
          />
          <div className="economy-hero-overlay-mask"></div>
          <div className="economy-hero-content-wrap container">
            <div className="economy-hero-content">
              <span className="economy-hero-tag">Market Intelligence. Expert Analysis.</span>
              <h1>Economic Insights<span> &amp; Market Intelligence</span></h1>
              <p>Stay updated with real-time news, expert analyses, policy changes, and comprehensive insights shaping the Indian economic landscape.</p>
              <div className="economy-hero-actions">
                <a href="#economy-content" className="economy-hero-btn" onClick={handleExploreClick}>
                  Explore News <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="economy-content-section" id="economy-content">
        <div className="breadcrumbs">
          <div className="container">
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
      </div>
      <CallToAction />
    </div>
  );
}

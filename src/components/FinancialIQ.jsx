import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowLeft, Calendar, FileText, Loader2, Clock } from 'lucide-react';
import localData from '../data/financial_iq_data.json';
import CallToAction from './CallToAction';
import './FinancialIQ.css';

export default function FinancialIQ() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [loadingDetail, setLoadingDetail] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch Financial IQ articles list for active page
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const pageQuery = currentPage === 1 ? '' : `?page_no=${currentPage}`;
        const response = await fetch(`/financial-iq${pageQuery}`);
        if (!response.ok) throw new Error('Network response error');

        const htmlText = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlText, 'text/html');

        const articleElements = doc.querySelectorAll('.posts-list article');
        if (articleElements.length === 0) throw new Error('No articles found');

        const parsedArticles = [];
        articleElements.forEach((el) => {
          const imgEl = el.querySelector('.post-img img');
          const titleLink = el.querySelector('.title a');

          if (titleLink) {
            const href = titleLink.getAttribute('href') || '';
            const slug = href.split('?')[1] || '';
            const title = titleLink.textContent.trim();
            const imagePath = imgEl ? imgEl.getAttribute('src') : '';
            const imageUrl = imagePath.startsWith('http') ? imagePath : `https://www.ghlindia.com/${imagePath}`;

            // Look up exact date from local fallback list to sync perfectly
            let date = '15/04/2026';
            const matchedLocal = localData.find(x => x.slug === slug);
            if (matchedLocal) {
              date = matchedLocal.date;
            }

            parsedArticles.push({
              title,
              slug,
              image: imageUrl,
              date,
              category: 'Financial Literacy',
              readTime: '8 min read',
              excerpt: `Learn wealth-building strategies from Robert Kiyosaki's Cashflow Quadrant models.`
            });
          }
        });

        setArticles(parsedArticles);
      } catch (err) {
        console.warn('Fallback to local database for page ' + currentPage + ':', err);
        // Take the 9 articles corresponding to the active page
        const indexOfLastCard = currentPage * 9;
        const indexOfFirstCard = indexOfLastCard - 9;
        setArticles(localData.slice(indexOfFirstCard, indexOfLastCard));
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [currentPage]);

  // Scroll to top when opening or returning from an article
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedArticle]);

  // Handle page navigation
  const handlePageChange = (pageNo) => {
    setCurrentPage(pageNo);
    // Smooth scroll to the content section start
    const contentSec = document.querySelector('.fiq-content-section');
    if (contentSec) {
      contentSec.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Shared helper: fix all relative image paths in article HTML content
  const fixContentImageUrls = (html) => {
    let fixed = html;
    // Fix all known relative image path patterns to absolute GHL India URLs
    fixed = fixed.replace(/src="superadmin\/admin\/courses\/iqimages\//g, 'src="https://www.ghlindia.com/superadmin/admin/courses/iqimages/');
    fixed = fixed.replace(/src="financial%20iq%20images/g, 'src="https://www.ghlindia.com/financial%20iq%20images');
    fixed = fixed.replace(/src="financial iq images/gi, 'src="https://www.ghlindia.com/financial iq images');
    fixed = fixed.replace(/src="iqimg\//g, 'src="https://www.ghlindia.com/iqimg/');
    // Catch any remaining relative src paths (not starting with http/data/blob/#)
    fixed = fixed.replace(/src="(?!https?:\/\/|data:|blob:|#)([^"]+)"/g, 'src="https://www.ghlindia.com/$1"');
    // Encode spaces in all image URLs
    fixed = fixed.replace(/src="(https?:\/\/[^"]+)"/g, (match, url) => {
      return `src="${url.replace(/ /g, '%20')}"`;
    });
    return fixed;
  };

  // Load article detail body content
  const handleReadMore = async (article) => {
    setSelectedArticle(article);
    if (!article.content) {
      let contentSet = false;
      try {
        setLoadingDetail(true);
        const response = await fetch(`/financial-iqdetails?${article.slug}`);
        if (!response.ok) throw new Error('Detail fetch error');

        const htmlText = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlText, 'text/html');

        const detailArticle = doc.querySelector('.blog-details article');
        if (detailArticle) {
          const imgBlock = detailArticle.querySelector('.post-img');
          if (imgBlock) imgBlock.remove();

          let contentHtml = detailArticle.innerHTML;
          // Strip empty tags to measure real content length
          const stripped = contentHtml.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, '').trim();

          if (stripped.length > 50) {
            // Live page has real content — fix image URLs and use it
            contentHtml = fixContentImageUrls(contentHtml);
            setSelectedArticle(prev => ({
              ...prev,
              content: contentHtml
            }));
            contentSet = true;
          }
        }
      } catch (err) {
        console.warn('Live fetch error, using local fallback:', err);
      }

      // If live content was empty or fetch failed, use local database
      if (!contentSet) {
        const localMatch = localData.find(x => x.slug === article.slug);
        if (localMatch && localMatch.content) {
          const fixedContent = fixContentImageUrls(localMatch.content);
          setSelectedArticle(prev => ({
            ...prev,
            content: fixedContent
          }));
        }
      }
      setLoadingDetail(false);
    }
  };

  // Helper to ensure correct live URLs for images, with space encoding
  const getImageUrl = (imageSrc) => {
    if (!imageSrc) return '';
    let url = imageSrc.startsWith('http')
      ? imageSrc
      : `https://www.ghlindia.com/${imageSrc}`;
    return url.replace(/ /g, '%20');
  };

  // Get 3 related articles for 'Latest IQ' section (excluding the current one)
  const getLatestIQ = (currentSlug) => {
    return localData
      .filter(a => a.slug !== currentSlug)
      .slice(0, 3);
  };

  // RENDER: Detailed Reading View
  if (selectedArticle) {
    return (
      <div className="financial-iq-container animate-fade-in">
        <div className="breadcrumbs">
          <div className="container">
            <span className="section-subtitle">Financial Education</span>
            <h1 className="page-title">Financial <span className="highlight">IQ</span></h1>
            <nav>
              <ol>
                <li><a href="#/" onClick={() => setSelectedArticle(null)}>Home</a></li>
                <li><a href="#/financial-iq" onClick={() => setSelectedArticle(null)}>Financial IQ</a></li>
                <li>{selectedArticle.title}</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="container detail-view">
          <div className="back-nav">
            <button className="back-btn" onClick={() => setSelectedArticle(null)}>
              <ArrowLeft size={16} />
              <span>Back to Articles list</span>
            </button>
          </div>

          <div className="article-body-wrapper">
            <div className="article-header">
              <h1>{selectedArticle.title}</h1>
              <div className="article-meta">
                <span className="meta-item">
                  <Calendar size={14} />
                  <span>{selectedArticle.date}</span>
                </span>
                <span className="meta-item">
                  <Clock size={14} />
                  <span>{selectedArticle.readTime || '8 min read'}</span>
                </span>
                <span className="meta-item">
                  <FileText size={14} />
                  <span>Financial Literacy</span>
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
              ) : (
                <div dangerouslySetInnerHTML={{ __html: selectedArticle.content }} />
              )}
            </div>
          </div>
        </div>

        {/* Latest IQ Section — 3 related articles below content */}
        {!loadingDetail && (
          <div className="latest-iq-section">
            <div className="container">
              <div className="latest-iq-header">
                <h2 className="latest-iq-title">Latest <span className="highlight">IQ</span></h2>
              </div>
              <div className="news-grid">
                {getLatestIQ(selectedArticle.slug).map((item, idx) => (
                  <div key={idx} className="news-card animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
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
                ))}
              </div>
            </div>
          </div>
        )}

        <CallToAction />
      </div>
    );
  }

  // RENDER: Main Grid Articles List View
  return (
    <div className="financial-iq-container">
      <div className="fiq-banner-section">
        <div className="fiq-banner-wrapper">
          <img
            src="https://www.ghlindia.com/assets/img/financial-iq-A.jpg"
            alt="Financial IQ Desktop Banner"
            className="fiq-banner-img desktop-banner"
          />
          <img
            src="https://www.ghlindia.com/assets/img/financial-IQ-MOB.jpg"
            alt="Financial IQ Mobile Banner"
            className="fiq-banner-img mobile-banner"
          />
        </div>
      </div>

      {/* Downside section containing breadcrumbs, cards and pagination */}
      <div className="fiq-content-section">
        {/* Page Header & Breadcrumbs */}
        <div className="breadcrumbs">
          <div className="container">
            <span className="section-subtitle">Financial Education</span>
            <h1 className="page-title">Financial <span className="highlight">IQ</span></h1>
            <nav>
              <ol>
                <li><a href="#/">Home</a></li>
                <li>Financial IQ</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="container">
          {loading ? (
            /* Loading Skeleton Spinner */
            <div className="flex-center" style={{ minHeight: '300px', flexDirection: 'column', gap: '20px' }}>
              <Loader2 className="animate-spin" size={48} color="#e41f26" />
              <p style={{ color: '#64748b', fontWeight: 600 }}>Loading Financial IQ articles...</p>
            </div>
          ) : (
            <>
              <div className="news-grid">
                {articles.map((item, index) => (
                  <div key={index} className="news-card animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
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
                ))}
              </div>

              {/* Dynamic Pagination Controls */}
              <div className="blog-pagination flex-center">
                <ul className="justify-content-center">
                  <li className={currentPage === 1 ? 'disabled' : ''}>
                    <button
                      onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      &lt;
                    </button>
                  </li>

                  {/* Dynamic page numbers (pages 1 to 11) */}
                  {Array.from({ length: 11 }, (_, i) => i + 1).map((pageNo) => (
                    <li key={pageNo} className={currentPage === pageNo ? 'active' : ''}>
                      <button onClick={() => handlePageChange(pageNo)}>
                        {pageNo}
                      </button>
                    </li>
                  ))}

                  <li className={currentPage === 11 ? 'disabled' : ''}>
                    <button
                      onClick={() => currentPage < 11 && handlePageChange(currentPage + 1)}
                      disabled={currentPage === 11}
                    >
                      &gt;
                    </button>
                  </li>

                  <li>
                    <button onClick={() => handlePageChange(11)}>
                      &gt;&gt;
                    </button>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
      <CallToAction />
    </div>
  );
}


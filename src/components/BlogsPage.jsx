import React, { useState, useMemo } from 'react';
import { Search, Calendar, User, ChevronRight, ArrowLeft, ArrowRight, Share2, MessageSquare, Clock, BookOpen } from 'lucide-react';
import './BlogsPage.css';

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const categories = ['All', 'Property Flipping', 'NCDs & Debt', 'Fractional Ownership', 'Wealth Strategy'];

  const blogs = [
    {
      id: 1,
      title: 'Property Flipping vs Rental Income: Which Creates Wealth Faster?',
      date: '26/06/2026',
      author: 'Sumitha',
      category: 'Property Flipping',
      readTime: '6 min read',
      summary: 'An analytical comparison between quick capital turnaround through property flipping and passive long-term cash flow from rental yields.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
      content: `
        <p>For decades, real estate has been a cornerstone of wealth creation. However, the strategies deployed by successful investors differ wildly. Two of the most popular strategies are <strong>Property Flipping</strong> and <strong>Rental Income</strong>. While both have their merits, they cater to different financial goals and risk tolerances.</p>
        
        <h3>The Velocity of Wealth: Property Flipping</h3>
        <p>Property flipping focuses on capital appreciation in the shortest time possible. The lifecycle is simple: find an undervalued asset, acquire it, perform strategic value-add renovations, and exit at market value. This strategy relies on the compounding effect of velocity.</p>
        <p>If you flip a property and generate a 20% return in 6 months, you can deploy that larger capital pool into a subsequent project. Over a 3-year period, compounding these returns can create substantial capital far faster than traditional rental yields which hover around 3% to 5% annually in India.</p>
        
        <h3>The Stability of Cash Flow: Rental Income</h3>
        <p>Conversely, rental income offers peace of mind. It provides steady, predictable monthly cash flows and long-term equity growth. However, the timeline to double your capital is significantly longer. Rental yields rarely exceed inflation in fast-developing markets like India, meaning rental assets are primarily an inflation hedge rather than a wealth accelerator.</p>
        
        <h3>Conclusion</h3>
        <p>If your objective is rapid capital expansion, property flipping is the clear winner. By utilizing structured SPVs like GHL India's models, retail investors can access these high-velocity flips without managing construction themselves.</p>
      `
    },
    {
      id: 2,
      title: 'How Professional Investors Identify Undervalued Real Estate Opportunities',
      date: '26/06/2026',
      author: 'Sumitha',
      category: 'Wealth Strategy',
      readTime: '7 min read',
      summary: 'Unlocking the criteria and diligence frameworks institutional real estate funds use to find mispriced residential assets.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      content: `
        <p>Successful real estate investing isn't about luck—it's about applying rigorous, data-driven frameworks to identify mispriced opportunities. Professional investment managers rely on specific markers to source under-valued deals before the general public notices them.</p>
        
        <h3>1. Micro-Market Demographic Shifts</h3>
        <p>Institutions look at micro-demographics: localized employment opportunities, infrastructural completions (like new metro lines or expressways), and population inflows. A property located 500 meters from a major tech park under construction is often undervalued during the initial excavation phase.</p>
        
        <h3>2. Distress Sourcing</h3>
        <p>Properties owned by developers facing liquidity crunches, or individual sellers needing urgent capital, offer high bargaining power. Professional firms maintain active networks of bankers, brokers, and developers to access these non-public distressed inventories at 20-30% discounts.</p>
        
        <h3>3. Structural & Cosmetic Arbitrage</h3>
        <p>Identifying assets with sound foundations but outdated layouts or cosmetics allows investors to perform arbitrage. Simple layout upgrades can dramatically increase the property's market value far exceeding the renovation cost.</p>
      `
    },
    {
      id: 3,
      title: 'NCDs Explained: How They Work and Who Should Invest',
      date: '26/06/2026',
      author: 'Sumitha',
      category: 'NCDs & Debt',
      readTime: '5 min read',
      summary: 'Demystifying Non-Convertible Debentures, asset-backed security charges, and fixed interest structures for alternate finance.',
      image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80',
      content: `
        <p>For investors seeking fixed income yields higher than traditional bank fixed deposits, <strong>Non-Convertible Debentures (NCDs)</strong> represent a powerful alternate vehicle. But what exactly are they, and how do they secure your capital?</p>
        
        <h3>What is an NCD?</h3>
        <p>An NCD is a debt instrument issued by corporations to raise long-term capital. Unlike convertible bonds, NCDs cannot be converted into company equity. In exchange, they offer higher interest rates (coupon yields) to reward debenture holders.</p>
        
        <h3>The Importance of Secured Charges</h3>
        <p>Secured NCDs are backed by the tangible assets of the company. When you invest in a secured NCD via an SPV, a legal mortgage/charge is registered in favor of an independent Debenture Trustee (such as Axis Trustee Services Ltd). This charge is filed with the Ministry of Corporate Affairs (MCA), ensuring that in the event of default, the land assets are liquidated to repay the debenture holders first.</p>
        
        <h3>Who Should Invest?</h3>
        <p>Secured NCDs are ideal for conservative to moderate investors seeking consistent monthly income, protection from stock market volatility, and legal safety backed by physical real estate assets.</p>
      `
    },
    {
      id: 4,
      title: 'Fractional Real Estate vs Buying an Entire Property: Which Is Right for You?',
      date: '26/06/2026',
      author: 'Sumitha',
      category: 'Fractional Ownership',
      readTime: '8 min read',
      summary: 'A head-to-head comparison of capital allocation, management overhead, and liquidity between full ownership and fractional investments.',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80',
      content: `
        <p>Owning physical property has historically meant writing massive cheques, securing high-interest home loans, and taking on the role of a landlord. Today, the rise of <strong>Fractional Ownership</strong> has democratized this landscape. Let's compare the two models.</p>
        
        <h3>Capital Allocation & Diversification</h3>
        <p>Buying an entire property concentrates your capital in a single asset. If you have ₹50 Lakhs, buying one apartment exposes you to 100% of that asset's vacancy risks. With fractional investing, you can distribute that ₹50 Lakhs across five different institutional-grade SPVs, achieving instant diversification across geographies and asset classes.</p>
        
        <h3>Management & Landlord Stress</h3>
        <p>Full ownership requires listing properties, dealing with tenants, fixing leaks, and navigating local legalities. Fractional ownership is entirely hands-free. A professional management company handles maintenance, rent collection, and legal compliance, distributing yields directly to your account.</p>
      `
    },
    {
      id: 5,
      title: 'Five Benefits of Fractional Investing Beyond Affordability',
      date: '26/06/2026',
      author: 'Sumitha',
      category: 'Fractional Ownership',
      readTime: '5 min read',
      summary: 'Discovering how fractional models enable risk diversification, professional management, high yields, and institutional-grade deal flow.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      content: `
        <p>While the lower entry ticket is the most obvious benefit of fractional real estate investing, the model offers several advanced strategic benefits that institutional investors have leveraged for decades.</p>
        
        <h3>1. Access to Premium Asset Sectors</h3>
        <p>Individual retail buyers are usually locked out of Grade-A commercial buildings, tech parks, and luxury warehousing hubs due to ₹10 Crore+ pricing. Fractional investing lets you participate in these high-performing assets for a fraction of the price.</p>
        
        <h3>2. Professional Due Diligence</h3>
        <p>SPV sponsors perform rigorous legal searches, title clearances, and environmental audits before presenting a property. This mitigates title dispute risks which affect over 25% of properties in India.</p>
        
        <h3>3. Institutional Tenant Quality</h3>
        <p>Grade-A properties attract corporate MNCs, banks, and established retailers with 5-10 year lease contracts and annual escalation clauses, guaranteeing yield security.</p>
      `
    },
    {
      id: 6,
      title: '5 Common Myths About Property Flipping in India',
      date: '26/06/2026',
      author: 'Sumitha',
      category: 'Property Flipping',
      readTime: '6 min read',
      summary: 'Dispelling misconceptions around high capital entry barriers, regulatory compliance, legal timelines, and market volatility in property flipping.',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      content: `
        <p>Property flipping has exploded in popularity in metropolitan India, yet many traditional investors avoid it due to persistent myths. Let's debunk the top five misconceptions.</p>
        
        <h3>Myth 1: You Need Crores of Capital</h3>
        <p><strong>Reality:</strong> While full acquisitions require massive capital, fractional SPV co-ownership models allow investors to pool resources, making property flipping accessible from ₹5 Lakhs onwards.</p>
        
        <h3>Myth 2: It is Too Risky Due to RERA</h3>
        <p><strong>Reality:</strong> RERA has actually cleaned up the industry. By working exclusively with RERA-registered projects and fully complete assets, flipping SPVs eliminate construction delay risks.</p>
        
        <h3>Myth 3: Flipping Is Just Cosmetic Renovation</h3>
        <p><strong>Reality:</strong> Real value creation lies in legal remediation (solving title disputes), structural enhancements, and zoning shifts rather than just a fresh coat of paint.</p>
      `
    },
    {
      id: 7,
      title: 'The Property Flipping Lifecycle: From Acquisition to Exit. 5 Steps You Need to Follow',
      date: '26/06/2026',
      author: 'Sumitha',
      category: 'Property Flipping',
      readTime: '7 min read',
      summary: 'A walkthrough from legal due diligence, title inspections, purchase, structural enhancement, to finding the ultimate buyer.',
      image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80',
      content: `
        <p>Successful property flipping is a structured, linear process. To generate consistent 18-24% yields, GHL India and other professional flippers follow a strict five-stage operational framework.</p>
        
        <h3>Step 1: Sourcing & Value Diligence</h3>
        <p>This phase involves analyzing local micro-markets and identifying distressed inventories, unfinished developer stock, or properties with complex legal titles that can be cleared.</p>
        
        <h3>Step 2: Legal Remediation & Title Clearance</h3>
        <p>Clearing pending structural approvals, tax liabilities, or minor litigation instantly unlocks the property's intrinsic value.</p>
        
        <h3>Step 3: Tactical Refurbishment</h3>
        <p>Investing in high-ROI improvements (e.g. modular kitchens, modern layouts, exterior upgrades) that increase visual appeal and market value.</p>
        
        <h3>Step 4: Marketing & Positioning</h3>
        <p>Staging the property and launching high-visibility digital campaigns targeting qualified end-user buyers.</p>
        
        <h3>Step 5: Capital Exit & Distribution</h3>
        <p>Executing the registry sale, closing the SPV accounts, and distributing the principal and accumulated yields back to co-investors.</p>
      `
    },
    {
      id: 8,
      title: 'How AIFs Are Opening New Opportunities in Alternate Investing',
      date: '26/06/2026',
      author: 'Sumitha',
      category: 'Wealth Strategy',
      readTime: '6 min read',
      summary: 'Exploring Alternative Investment Funds, regulatory safety parameters, and institutional capital access in property flipping.',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
      content: `
        <p>Alternative Investment Funds (AIFs) are reshaping the investment landscape in India, providing wealthy investors and HNIs with regulated pathways to access high-yielding assets outside public equity markets.</p>
        
        <h3>The Rise of AIFs in India</h3>
        <p>An AIF is a privately pooled investment vehicle established in India to collect capital from sophisticated domestic and foreign investors. These funds deploy capital into specialized strategies like venture debt, private equity, real estate SPVs, and hedge funds.</p>
        
        <h3>Regulatory Standards</h3>
        <p>AIFs operate under SEBI guidelines, which mandate strict transparency, reporting standards, and manager fiduciary duties. This structural oversight ensures that capital is deployed strictly as outlined in the Private Placement Memorandum (PPM).</p>
      `
    },
    {
      id: 9,
      title: 'Why Property Flipping Is Becoming Popular in India?',
      date: '19/06/2026',
      author: 'Sumitha',
      category: 'Property Flipping',
      readTime: '6 min read',
      summary: 'Analyzing macroeconomic factors, urban expansion demand, and regulatory safety under RERA boosting property flipping yields.',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
      content: `
        <p>Historically, property flipping was associated with unregulated real estate markets. Today, India is seeing a massive institutional surge in property flipping. Let's look at why.</p>
        
        <h3>RERA and MCA Formalization</h3>
        <p>The introduction of the Real Estate (Regulation and Development) Act (RERA) has driven out fraudulent players, creating transparent title tracing registries. This makes it safe for alternate investment platforms to execute short-term flipping strategies.</p>
        
        <h3>Rapid Urban Infrastructure expansion</h3>
        <p>Cities like Bengaluru, Hyderabad, and Mumbai are expanding outward rapidly. New ring roads and transit systems create pockets of sudden real estate demand, allowing flippers to buy cheap peripheral land and exit at premium prices within 24 to 36 months.</p>
      `
    },
    {
      id: 10,
      title: 'How to Start Property Flipping in India With Low Capital: A Complete Guide',
      date: '12/06/2026',
      author: 'Sumitha',
      category: 'Property Flipping',
      readTime: '5 min read',
      summary: 'Practical steps for retail investors to participate in high-yield acquisitions through fractional SPVs and alternate debt.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
      content: `
        <p>Think you need crores in the bank to flip properties in India? Not anymore. The landscape has changed, and co-investment models are making short-term real estate arbitrage accessible to individual salaried professionals.</p>
        
        <h3>The Fractional co-ownership Path</h3>
        <p>By investing in a project-specific Special Purpose Vehicle (SPV) alongside other like-minded investors, you can participate in a property purchase for as little as ₹5 Lakhs to ₹10 Lakhs. The SPV buys the property, manages the refurbishment, clears the legal details, and splits the final profits proportionally.</p>
        
        <h3>Step-by-Step Action Plan</h3>
        <p>1. **Choose a Regulated Sponsor Platform:** Research platforms with a proven track record, independent trustees, and MCA-registered SPVs.<br/>
        2. **Evaluate Project Financials:** Look at the targeted acquisition discount, refurb costs, and conservative exit assumptions.<br/>
        3. **Complete e-KYC & Sign Agreements:** Fund the SPV through bank transfer and receive your digital share certificates or NCD deeds.</p>
      `
    },
    {
      id: 11,
      title: 'How to Invest Money Outside the Stock Market Safely',
      date: '05/06/2026',
      author: 'Sumitha',
      category: 'Wealth Strategy',
      readTime: '6 min read',
      summary: 'Diversifying your portfolio with secure land-backed assets, debt debentures, and real estate SPVs outside equity market volatility.',
      image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80',
      content: `
        <p>While the stock market offers high liquidity, it is highly sensitive to geopolitical issues, inflation spikes, and global monetary policy cycles. For a truly resilient wealth structure, investors must diversify into alternate assets that are uncorrelated with the stock market.</p>
        
        <h3>The Power of Non-Correlated Assets</h3>
        <p>Real estate, structured debt, and agricultural trade flows operate on different microeconomic cycles than the Nifty or Sensex. When stocks correction occurs, a physical commercial building still collects corporate rent, and an asset-backed NCD continues paying monthly interest yields.</p>
        
        <h3>Secured Debentures as a FD Replacement</h3>
        <p>Secured NCDs issued by SPVs offer yields of 18-24% annually while providing land-backed collateral, making them a premium addition to balance your mutual fund and stock allocations.</p>
      `
    },
    {
      id: 12,
      title: 'Why Is Property Flipping Gaining Popularity in Recent Times?',
      date: '01/06/2026',
      author: 'Sumitha',
      category: 'Property Flipping',
      readTime: '6 min read',
      summary: 'Looking at how low mortgage interest cycles and inflation-hedging properties make short-term real estate investments attractive.',
      image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80',
      content: `
        <p>Over the past 24 months, real estate transaction volumes in India have broken records. In this booming market, property flipping has emerged as a preferred strategy for private wealth managers. Here is what is driving this trend.</p>
        
        <h3>1. The Inflation Arbitrage</h3>
        <p>With high wholesale price indices, holding cash is a losing game. Investors are turning to real estate because raw land values and construction prices naturally adjust upward with inflation, preserving real purchasing power.</p>
        
        <h3>2. Speed of Return</h3>
        <p>Traditional property developers wait 5 to 7 years to see project completion. Flippers target ready-to-move-in or near-completion inventory, renovating and selling within 12 to 24 months, unlocking high capital turnover and mitigation of cycle risks.</p>
      `
    }
  ];

  const itemsPerPage = 6;

  const filteredBlogs = useMemo(() => {
    return blogs.filter(blog => {
      const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            blog.summary.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);

  const currentBlogs = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredBlogs.slice(start, start + itemsPerPage);
  }, [filteredBlogs, currentPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 250, behavior: 'smooth' });
    }
  };

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const getRecentBlogs = (currentBlogId) => {
    return blogs.filter(b => b.id !== currentBlogId).slice(0, 3);
  };

  return (
    <div className="blogs-page-view">
      {selectedBlog ? (
        /* Blog Detail View */
        <div className="blog-details-view">
          {/* Breadcrumbs inside Detail */}
          <div className="blog-breadcrumbs">
            <div className="container">
              <button className="back-to-blogs-btn" onClick={() => setSelectedBlog(null)}>
                <ArrowLeft size={16} />
                <span>Back to Articles</span>
              </button>
            </div>
          </div>

          <article className="blog-full-article">
            <div className="container-small">
              <header className="article-header">
                <span className="badge-tag">{selectedBlog.category}</span>
                <h1>{selectedBlog.title}</h1>
                <div className="article-meta">
                  <div className="meta-item">
                    <User size={16} />
                    <span>By {selectedBlog.author}</span>
                  </div>
                  <div className="meta-item">
                    <Calendar size={16} />
                    <span>{selectedBlog.date}</span>
                  </div>
                  <div className="meta-item">
                    <Clock size={16} />
                    <span>{selectedBlog.readTime}</span>
                  </div>
                </div>
              </header>

              <div className="article-featured-image">
                <img src={selectedBlog.image} alt={selectedBlog.title} />
              </div>

              {/* Long-form Content */}
              <div 
                className="article-body-content"
                dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
              />

              <div className="article-footer-actions">
                <button className="action-pill-btn" onClick={() => alert('Article link copied to clipboard!')}>
                  <Share2 size={16} />
                  <span>Share Article</span>
                </button>
                <div className="flex-grow"></div>
                <div className="article-comments-count">
                  <MessageSquare size={16} />
                  <span>0 Comments</span>
                </div>
              </div>
            </div>
          </article>

          {/* Related/Recent Posts Footer */}
          <section className="related-blogs-section">
            <div className="container-small">
              <h3 className="related-title">Recent Articles</h3>
              <div className="blogs-grid">
                {getRecentBlogs(selectedBlog.id).map(blog => (
                  <div key={blog.id} className="blog-card glass-panel">
                    <div className="blog-card-img-box">
                      <img src={blog.image} alt={blog.title} />
                      <span className="category-label">{blog.category}</span>
                    </div>
                    <div className="blog-card-body">
                      <div className="blog-card-meta">
                        <span>{blog.date}</span>
                        <span>&bull;</span>
                        <span>{blog.readTime}</span>
                      </div>
                      <h4 className="blog-card-title">{blog.title}</h4>
                      <p className="blog-card-desc">{blog.summary}</p>
                      <button className="read-more-btn" onClick={() => { setSelectedBlog(blog); window.scrollTo(0, 0); }}>
                        <span>Read Article</span>
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      ) : (
        /* Blog List View */
        <>
          {/* 1. Cinematic Header Banner */}
          <div className="blogs-hero-section">
            <div className="blogs-hero-wrapper">
              <div className="blogs-hero-overlay text-center">
                <span className="badge-tag">Knowledge Center</span>
                <h1>GHL India Blogs & Insights</h1>
                <p>Stay updated with expert real estate analyses, structured debt resources, and fractional investment guides.</p>
                
                {/* Search Bar */}
                <div className="blogs-search-box-container">
                  <Search className="blogs-search-icon" size={20} />
                  <input 
                    type="text" 
                    placeholder="Search articles, keywords, or guides..." 
                    value={searchQuery}
                    onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                    className="blogs-search-input"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 2. Breadcrumbs */}
          <div className="blogs-breadcrumbs">
            <div className="container">
              <ul className="breadcrumbs-list">
                <li><a href="#/">Home</a></li>
                <span className="separator"><ChevronRight size={12} /></span>
                <li>Resources</li>
                <span className="separator"><ChevronRight size={12} /></span>
                <li className="active">Blogs</li>
              </ul>
            </div>
          </div>

          {/* 3. Categories Navigation Bar */}
          <div className="blogs-filter-bar">
            <div className="container">
              <div className="category-pills-list">
                {categories.map((cat, idx) => {
                  const isActive = selectedCategory === cat;
                  return (
                    <button
                      key={idx}
                      className={`category-pill ${isActive ? 'active' : ''}`}
                      onClick={() => handleCategorySelect(cat)}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 4. Blog Post Cards Grid */}
          <section className="blogs-grid-section">
            <div className="container">
              {filteredBlogs.length === 0 ? (
                <div className="blogs-no-results text-center">
                  <BookOpen size={48} className="no-results-icon" />
                  <h3>No articles found</h3>
                  <p>We couldn't find any articles matching "{searchQuery}" in category "{selectedCategory}".</p>
                  <button 
                    onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                    className="btn btn-primary reset-btn"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <>
                  <div className="blogs-grid">
                    {currentBlogs.map(blog => (
                      <div key={blog.id} className="blog-card glass-panel">
                        <div className="blog-card-img-box">
                          <img src={blog.image} alt={blog.title} />
                          <span className="category-label">{blog.category}</span>
                        </div>
                        <div className="blog-card-body">
                          <div className="blog-card-meta">
                            <span>{blog.date}</span>
                            <span>&bull;</span>
                            <span>{blog.readTime}</span>
                          </div>
                          <h4 className="blog-card-title">{blog.title}</h4>
                          <p className="blog-card-desc">{blog.summary}</p>
                          <button className="read-more-btn" onClick={() => { setSelectedBlog(blog); window.scrollTo(0, 0); }}>
                            <span>Read Article</span>
                            <ChevronRight size={14} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* 5. Pagination */}
                  {totalPages > 1 && (
                    <div className="blogs-pagination">
                      <button 
                        className="page-nav-btn"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                      >
                        <ArrowLeft size={16} />
                        <span>Prev</span>
                      </button>
                      
                      <div className="page-numbers">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => (
                          <button
                            key={pageNum}
                            className={`page-num-btn ${currentPage === pageNum ? 'active' : ''}`}
                            onClick={() => handlePageChange(pageNum)}
                          >
                            {pageNum}
                          </button>
                        ))}
                      </div>

                      <button 
                        className="page-nav-btn"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                      >
                        <span>Next</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </section>

          {/* 6. Newsletter Subscription Banner */}
          <section className="blogs-newsletter-section">
            <div className="container">
              <div className="newsletter-card glass-panel">
                <span className="badge-tag">Newsletter</span>
                <h2>Get Real Estate Insights Delivered Weekly</h2>
                <p>Join over 10,000+ smart investors receiving our analytical market write-ups and campaign alerts.</p>
                <div className="newsletter-form">
                  <input type="email" placeholder="Enter your email address" className="newsletter-input" />
                  <button className="btn btn-primary submit-btn">Subscribe Now</button>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}

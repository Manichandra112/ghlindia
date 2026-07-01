import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronRight, HelpCircle, Phone, Globe, HelpCircle as HelpIcon, Plus, Minus } from 'lucide-react';
import './FAQPage.css';

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [openIds, setOpenIds] = useState({});

  const faqData = [
    {
      category: 'Registration & KYC',
      questions: [
        {
          id: 'kyc-1',
          q: 'How do I complete my KYC on GHL India Asset?',
          a: 'Log in to your account, go to the KYC section, provide the required personal, nominee, and bank details, upload the required documents, and submit the application.'
        },
        {
          id: 'kyc-2',
          q: 'What documents are required for KYC?',
          a: 'You need to upload your PAN Card, Aadhaar Card, bank proof (cancelled cheque/e-statement/passbook), CDSL Demat proof (optional), and nominee identity proof (PAN card).'
        },
        {
          id: 'kyc-3',
          q: 'How can I check my KYC status?',
          a: 'You can check your KYC status at any time by logging into your GHL India Asset user dashboard.'
        }
      ]
    },
    {
      category: 'Investment',
      questions: [
        {
          id: 'inv-1',
          q: 'What investment opportunities does GHL India Asset offer?',
          a: 'GHL India Asset offers investment opportunities through Secured Non-Convertible Debentures (NCDs) issued through project-specific Special Purpose Vehicles (SPVs).'
        },
        {
          id: 'inv-2',
          q: 'Who can invest with GHL India?',
          a: 'Individuals and entities who meet the eligibility criteria can invest with GHL India, subject to applicable regulations and GHL India’s investment policies.'
        },
        {
          id: 'inv-3',
          q: 'How is my investment made?',
          a: 'Your investment is made through a registered SPV, a dedicated company created to hold and manage the investment assets.'
        },
        {
          id: 'inv-4',
          q: 'Is my investment secured?',
          a: 'Yes. The investment is backed by land assets, with security maintained through a mortgage/charge in favour of the Debenture Trustee and a charge registered with the MCA.'
        },
        {
          id: 'inv-5',
          q: 'How long does it take to create the charge on the property?',
          a: 'The charge creation process generally takes 60 to 90 days (subject to any delays in obtaining approvals from the MCA) from the total fund mobilization date after the property acquisition and mortgage/charge process.'
        },
        {
          id: 'inv-6',
          q: 'How does GHL India Asset select and verify properties?',
          a: 'Every property undergoes detailed legal and technical due diligence, including ownership verification, zoning checks, authority approvals, and regulatory clearances.'
        },
        {
          id: 'inv-7',
          q: 'How does GHL India Asset’s investment model work?',
          a: 'GHL India Asset follows a property flipping model, where selected residential and commercial properties are acquired, improved, and sold to generate profits. Investment decisions are supported by detailed real estate market cycle analysis and PESTLE analysis.'
        },
        {
          id: 'inv-8',
          q: 'What is the investment period?',
          a: 'The investment has a fixed tenure of 3 years (36 months).'
        },
        {
          id: 'inv-9',
          q: 'What returns can I expect?',
          a: 'Depending on the selected investment plan, investors can earn annual returns ranging from 18% to 24%.'
        },
        {
          id: 'inv-10',
          q: 'When will I receive my monthly returns?',
          a: 'Monthly return payouts are processed between the 5th and 10th of every month.'
        },
        {
          id: 'inv-11',
          q: 'Can I withdraw my investment before 3 years?',
          a: 'No. These are unlisted redeemable NCDs with a fixed tenure of 36 months. Early redemption before maturity is not available as no such option has been provided under the terms of the issue.'
        },
        {
          id: 'inv-12',
          q: 'What happens when my investment matures?',
          a: 'You need to submit the original Debenture Agreement and Debenture Certificate at least 20 days before maturity. After verification, the principal repayment will be processed within 20 days after maturity.'
        },
        {
          id: 'inv-13',
          q: 'What happens in case of delay or default?',
          a: 'In the unlikely event of a default, the Debenture Trustee can enforce the security over the property and initiate recovery actions as per applicable laws and debenture terms.'
        },
        {
          id: 'inv-14',
          q: 'Under which law are the NCDs issued?',
          a: 'The NCDs are issued through private placement under Section 42 of the Companies Act, 2013 to eligible investors.'
        },
        {
          id: 'inv-15',
          q: 'What documents will I receive after investing?',
          a: 'Investors will receive a Debenture Certificate, Debenture Agreement, Debenture Allotment Letter, and an Acknowledgement Letter for the funds received.'
        },
        {
          id: 'inv-16',
          q: 'How does the SPV and Debenture Trustee structure protect investors?',
          a: 'Investor protection is supported through the SPV structure, which incorporates a ring-fenced capital management model, land-backed security, a mortgage/charge created in favour of the Debenture Trustee, and trustee monitoring rights.'
        },
        {
          id: 'inv-17',
          q: 'Can NRIs invest with GHL India Asset?',
          a: 'No, NRIs are currently not permitted to invest with GHL India Asset.'
        }
      ]
    },
    {
      category: 'Taxation',
      questions: [
        {
          id: 'tax-1',
          q: 'Is TDS applicable on returns?',
          a: 'Yes. TDS will be deducted on applicable interest payments as per Section 393 of the Income Tax Act, 2026 and applicable tax regulations.'
        },
        {
          id: 'tax-2',
          q: 'Can I claim a refund for TDS deducted?',
          a: 'Yes. Investors can claim TDS while filing their Income Tax Return (ITR). Form 16A will be provided by GHL India Asset every quarter.'
        },
        {
          id: 'tax-3',
          q: 'Will investing with GHL India Asset change my ITR filing process?',
          a: 'No. Eligible salaried individuals can continue filing ITR-1 as per applicable tax rules.'
        }
      ]
    },
    {
      category: 'Channel Partner Program',
      questions: [
        {
          id: 'cp-1',
          q: 'What is the role of a Channel Partner?',
          a: 'Channel Partners help GHL India Asset promote its investment products and expand its investor network.'
        },
        {
          id: 'cp-2',
          q: 'Who can become a Channel Partner?',
          a: 'A user can become a Channel Partner by registering on the platform, achieving ₹25 lakhs in sales, and executing an agreement with GHL India Asset.'
        },
        {
          id: 'cp-3',
          q: 'What is the duration of the Channel Partner agreement?',
          a: 'The Channel Partner agreement is valid for 3 years and may be extended based on performance review.'
        }
      ]
    },
    {
      category: 'Data Security & Privacy',
      questions: [
        {
          id: 'sec-1',
          q: 'How does GHL India Asset protect user information?',
          a: 'GHL India Asset follows strict security measures, secure data practices, and applicable guidelines to protect user information and privacy.'
        },
        {
          id: 'sec-2',
          q: 'What does GHL India Asset’s Privacy Policy cover?',
          a: 'The Privacy Policy covers the collection, storage, usage, processing, disclosure, transfer, and protection of users\' personal information.'
        }
      ]
    },
    {
      category: 'Regulatory Body',
      questions: [
        {
          id: 'reg-1',
          q: 'Is GHL India regulated by SEBI?',
          a: 'No. GHL India issues investments through private placement under Section 42 of the Companies Act, 2013, which does not require SEBI regulation for public issues. It also does not fall under SEBI’s Collective Investment Scheme (CIS) regulations as its SPVs do not raise more than ₹100 crore.'
        },
        {
          id: 'reg-2',
          q: 'Does GHL India require RBI approval?',
          a: 'No. GHL India’s business activities do not fall under RBI-regulated categories, so RBI approval is not required for its operations.'
        },
        {
          id: 'reg-3',
          q: 'Who is the regulatory authority for GHL India?',
          a: 'GHL India complies with the Companies Act, 2013 and LLP Act, 2008. Its filings are made with the Ministry of Corporate Affairs (MCA), which is its current regulatory authority.'
        }
      ]
    }
  ];

  const categories = useMemo(() => {
    const list = ['All'];
    faqData.forEach(item => {
      list.push(item.category);
    });
    return list;
  }, []);

  const getQuestionCount = (category) => {
    if (category === 'All') {
      return faqData.reduce((acc, cat) => acc + cat.questions.length, 0);
    }
    const catData = faqData.find(cat => cat.category === category);
    return catData ? catData.questions.length : 0;
  };

  const filteredFAQs = useMemo(() => {
    let result = [];
    
    faqData.forEach(cat => {
      if (activeCategory === 'All' || cat.category === activeCategory) {
        const matchingQuestions = cat.questions.filter(qItem => {
          const matchQuery = searchQuery.trim().toLowerCase();
          return (
            qItem.q.toLowerCase().includes(matchQuery) ||
            qItem.a.toLowerCase().includes(matchQuery)
          );
        });

        if (matchingQuestions.length > 0) {
          result.push({
            category: cat.category,
            questions: matchingQuestions
          });
        }
      }
    });

    return result;
  }, [searchQuery, activeCategory]);

  const toggleAccordion = (id) => {
    setOpenIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="faq-page-view">
      {/* 1. Cinematic Header Banner */}
      <div className="faq-hero-section">
        <div className="faq-hero-wrapper">
          <div className="faq-hero-overlay text-center">
            <span className="badge-tag">Help Center</span>
            <h1>Frequently Asked Questions</h1>
            <p>Search our comprehensive knowledge base for questions about KYC, investments, taxation, and security.</p>
            
            {/* Central Search Bar */}
            <div className="faq-search-box-container">
              <Search className="faq-search-icon" size={20} />
              <input 
                type="text" 
                placeholder="Search questions, keywords, or topics..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="faq-search-input"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2. Breadcrumbs */}
      <div className="faq-breadcrumbs">
        <div className="container">
          <ul className="breadcrumbs-list">
            <li><a href="#/">Home</a></li>
            <span className="separator"><ChevronRight size={12} /></span>
            <li>Resources</li>
            <span className="separator"><ChevronRight size={12} /></span>
            <li className="active">FAQ</li>
          </ul>
        </div>
      </div>

      {/* 3. Main Split Content Area */}
      <section className="faq-main-content">
        <div className="container">
          <div className="faq-split-layout">
            
            {/* Left Sidebar Categories */}
            <div className="faq-sidebar">
              <h3 className="sidebar-title">Categories</h3>
              <div className="category-menu-list">
                {categories.map((cat, idx) => {
                  const isActive = activeCategory === cat;
                  return (
                    <button 
                      key={idx} 
                      className={`category-menu-item ${isActive ? 'active' : ''}`}
                      onClick={() => { setActiveCategory(cat); setOpenIds({}); }}
                    >
                      <span className="category-name">{cat}</span>
                      <span className="category-count">{getQuestionCount(cat)}</span>
                    </button>
                  );
                })}
              </div>

              <div className="sidebar-contact-card">
                <HelpCircle size={28} className="contact-card-icon" />
                <h4>Need Personal Assistance?</h4>
                <p>Speak to our relations officer to clarify specific investment parameters.</p>
                <a href="#footer" className="contact-card-btn">Contact Us</a>
              </div>
            </div>

            {/* Right Accordion Panel */}
            <div className="faq-accordion-panel">
              {filteredFAQs.length === 0 ? (
                <div className="faq-no-results">
                  <HelpIcon size={48} className="no-results-icon" />
                  <h3>No matches found</h3>
                  <p>We couldn't find any questions matching "{searchQuery}". Try using other terms or check all categories.</p>
                  <button 
                    onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                    className="btn btn-secondary reset-btn"
                  >
                    Reset Filter
                  </button>
                </div>
              ) : (
                filteredFAQs.map((catGroup, groupIdx) => (
                  <div key={groupIdx} className="faq-group-block">
                    <h3 className="faq-group-title">{catGroup.category}</h3>
                    <div className="faq-accordion-list">
                      {catGroup.questions.map((faq) => {
                        const isOpen = !!openIds[faq.id];
                        return (
                          <div 
                            key={faq.id} 
                            className={`faq-accordion-item ${isOpen ? 'open' : ''}`}
                          >
                            <button 
                              className="faq-accordion-trigger"
                              onClick={() => toggleAccordion(faq.id)}
                            >
                              <span className="faq-question-text">{faq.q}</span>
                              <span className="faq-accordion-indicator">
                                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                              </span>
                            </button>
                            <div className={`faq-accordion-answer ${isOpen ? 'expanded' : ''}`}>
                              <div className="faq-answer-inner">
                                <p>{faq.a}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 4. Bottom Support Call CTA Section */}
      <section className="faq-bottom-cta">
        <div className="container">
          <div className="faq-bottom-cta-content">
            <h2>Didn't find the answers you were looking for?</h2>
            <p>Our global relationship desk is active across multiple languages to guide you.</p>
            <div className="faq-bottom-cta-actions">
              <a href="#footer" className="cta-btn btn-white-glass">
                <span>Support Line</span>
                <Phone size={16} />
              </a>
              <a href="mailto:support@ghlindia.com" className="cta-btn btn-white-solid">
                <span>Email Support</span>
                <Globe size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

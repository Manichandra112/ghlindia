import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, Globe } from 'lucide-react';
import './Header.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [langModalOpen, setLangModalOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('English');
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  // Phone numbers configuration from original site
  const phoneNumbers = {
    English: ['+91 9962099339', '+91 9043335670'],
    Hindi: ['+91 7358114491', '+91 9962099339'],
    Telugu: ['+91 9962099339', '+91 7358114491'],
    Kannada: ['+91 9962099339']
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const isActiveLink = (hash) => {
    if (hash === '#/' && (currentPath === '#/' || currentPath === '')) {
      return true;
    }
    return currentPath === hash;
  };

  const toggleDropdown = (name) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <>
      {/* Top Bar Contact Details */}
      <div className="topbar">
        <div className="container topbar-container">
          <div className="topbar-left">
            <a href="mailto:sales@ghlindia.com" className="contact-link">
              <Mail size={14} />
              <span>sales@ghlindia.com</span>
            </a>
          </div>
          <div className="topbar-right">
            <Globe size={14} />
            <span className="lang-label">Support Helpline:</span>
            <div className="lang-buttons">
              {Object.keys(phoneNumbers).map((lang) => (
                <button
                  key={lang}
                  className={`lang-btn ${selectedLang === lang ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedLang(lang);
                    setLangModalOpen(true);
                  }}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Header */}
      <header className={`header-main ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="container header-container">
          {/* Logo with clean styling */}
          <a href="#/" className="logo-area">
            <div className="logo-symbol">G</div>
            <div className="logo-text">
              <span className="logo-highlight">GHL</span>
              <span className="logo-sub">INDIA</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-navbar">
            <ul className="nav-links">
              <li><a href="#/" className={`nav-item ${isActiveLink('#/') ? 'active' : ''}`}>Home</a></li>
              <li>
                <a href="https://ghlindiaventures.com/" target="_blank" rel="noopener noreferrer" className="nav-item nav-aif">
                  AIF <span className="animated-dot"></span>
                </a>
              </li>

              {/* Strategy Dropdown */}
              <li className="dropdown-parent">
                <button className={`nav-item dropdown-toggle ${isActiveLink('#/fractional-ownership') || isActiveLink('#/debt-financing') ? 'active' : ''}`} onClick={() => toggleDropdown('strategy')}>
                  <span>Strategy</span>
                  <ChevronDown size={14} className={activeDropdown === 'strategy' ? 'rotate-180' : ''} />
                </button>
                <ul className={`dropdown-menu ${activeDropdown === 'strategy' ? 'show-menu' : ''}`}>
                  <li><a href="#/fractional-ownership" className={isActiveLink('#/fractional-ownership') ? 'active' : ''} onClick={() => setActiveDropdown(null)}>Fractional Investment</a></li>
                  <li><a href="#/debt-financing" className={isActiveLink('#/debt-financing') ? 'active' : ''} onClick={() => setActiveDropdown(null)}>Debt Funding</a></li>
                </ul>
              </li>

              {/* Security Dropdown */}
              <li className="dropdown-parent">
                <button className={`nav-item dropdown-toggle ${isActiveLink('#/charge-creation') ? 'active' : ''}`} onClick={() => toggleDropdown('security')}>
                  <span>Security</span>
                  <ChevronDown size={14} className={activeDropdown === 'security' ? 'rotate-180' : ''} />
                </button>
                <ul className={`dropdown-menu ${activeDropdown === 'security' ? 'show-menu' : ''}`}>
                  <li><a href="#/charge-creation" className={isActiveLink('#/charge-creation') ? 'active' : ''} onClick={() => setActiveDropdown(null)}>Charge Creation</a></li>
                </ul>
              </li>

              <li><a href="#/why-us" className={`nav-item ${isActiveLink('#/why-us') ? 'active' : ''}`}>Why Us</a></li>
              <li><a href="#/our-team" className={`nav-item ${isActiveLink('#/our-team') ? 'active' : ''}`}>Our Team</a></li>

              {/* Intelligence Dropdown */}
              <li className="dropdown-parent">
                <button className={`nav-item dropdown-toggle ${isActiveLink('#/financial-iq') || isActiveLink('#/economy-insight') || isActiveLink('#/educational-videos') ? 'active' : ''}`} onClick={() => toggleDropdown('intelligence')}>
                  <span>Intelligence</span>
                  <ChevronDown size={14} className={activeDropdown === 'intelligence' ? 'rotate-180' : ''} />
                </button>
                <ul className={`dropdown-menu ${activeDropdown === 'intelligence' ? 'show-menu' : ''}`}>
                  <li><a href="#/economy-insight" className={isActiveLink('#/economy-insight') ? 'active' : ''} onClick={() => setActiveDropdown(null)}>Economy Insight</a></li>
                  <li><a href="#/financial-iq" className={isActiveLink('#/financial-iq') ? 'active' : ''} onClick={() => setActiveDropdown(null)}>Financial IQ</a></li>
                  <li><a href="#/educational-videos" className={isActiveLink('#/educational-videos') ? 'active' : ''} onClick={() => setActiveDropdown(null)}>Educational Videos</a></li>
                </ul>
              </li>

              {/* Resources Dropdown */}
              <li className="dropdown-parent">
                <button className="nav-item dropdown-toggle" onClick={() => toggleDropdown('resources')}>
                  <span>Resources</span>
                  <ChevronDown size={14} className={activeDropdown === 'resources' ? 'rotate-180' : ''} />
                </button>
                <ul className={`dropdown-menu ${activeDropdown === 'resources' ? 'show-menu' : ''}`}>
                  <li><a href="#/about-us" onClick={() => setActiveDropdown(null)}>About Us</a></li>
                  <li><a href="#faq" onClick={() => setActiveDropdown(null)}>FAQ</a></li>
                  <li><a href="#reviews" onClick={() => setActiveDropdown(null)}>Blog & News</a></li>
                  <li><a href="#footer" onClick={() => setActiveDropdown(null)}>Contact Us</a></li>
                </ul>
              </li>
            </ul>
          </nav>

          {/* Action CTA Button */}
          <div className="header-actions">
            <a href="#login" className="btn btn-primary login-btn">
              Login
            </a>
            <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu Drawer */}
        <div className={`mobile-navbar ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-links">
            <li><a href="#/" className="mobile-item" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
            <li>
              <a href="https://ghlindiaventures.com/" target="_blank" rel="noopener noreferrer" className="mobile-item mobile-aif" onClick={() => setMobileMenuOpen(false)}>
                AIF <span className="animated-dot"></span>
              </a>
            </li>

            <li className="mobile-dropdown-parent">
              <button className="mobile-item" onClick={() => toggleDropdown('mob-strategy')}>
                <span>Strategy</span>
                <ChevronDown size={16} />
              </button>
              <ul className={`mobile-submenu ${activeDropdown === 'mob-strategy' ? 'open' : ''}`}>
                <li><a href="#/fractional-ownership" onClick={() => setMobileMenuOpen(false)}>Fractional Investment</a></li>
                <li><a href="#/debt-financing" onClick={() => setMobileMenuOpen(false)}>Debt Funding</a></li>
              </ul>
            </li>

            <li className="mobile-dropdown-parent">
              <button className="mobile-item" onClick={() => toggleDropdown('mob-security')}>
                <span>Security</span>
                <ChevronDown size={16} />
              </button>
              <ul className={`mobile-submenu ${activeDropdown === 'mob-security' ? 'open' : ''}`}>
                <li><a href="#/charge-creation" onClick={() => setMobileMenuOpen(false)}>Charge Creation</a></li>
              </ul>
            </li>

            <li className="mobile-dropdown-parent">
              <button className="mobile-item" onClick={() => toggleDropdown('mob-intelligence')}>
                <span>Intelligence</span>
                <ChevronDown size={16} />
              </button>
              <ul className={`mobile-submenu ${activeDropdown === 'mob-intelligence' ? 'open' : ''}`}>
                <li><a href="#/economy-insight" onClick={() => setMobileMenuOpen(false)}>Economy Insight</a></li>
                <li><a href="#/financial-iq" onClick={() => setMobileMenuOpen(false)}>Financial IQ</a></li>
                <li><a href="#/educational-videos" onClick={() => setMobileMenuOpen(false)}>Educational Videos</a></li>
              </ul>
            </li>

            <li><a href="#/why-us" className={`mobile-item ${isActiveLink('#/why-us') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Why Us</a></li>
            <li><a href="#/our-team" className={`mobile-item ${isActiveLink('#/our-team') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Our Team</a></li>
            <li><a href="#/about-us" className={`mobile-item ${isActiveLink('#/about-us') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>About Us</a></li>
            <li><a href="#faq" className="mobile-item" onClick={() => setMobileMenuOpen(false)}>FAQ</a></li>
            <li>
              <button className="mobile-item mobile-lang-trigger" onClick={() => { setMobileMenuOpen(false); setLangModalOpen(true); }}>
                <Globe size={16} />
                <span>Support Line ({selectedLang})</span>
              </button>
            </li>
            <li className="mobile-login-li">
              <a href="#login" className="btn btn-primary w-full" onClick={() => setMobileMenuOpen(false)}>
                Login
              </a>
            </li>
          </ul>
        </div>
      </header>

      {/* Language Help Modal Popup */}
      <div className={`modal-backdrop ${langModalOpen ? 'show' : ''}`} onClick={() => setLangModalOpen(false)}>
        <div className="modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header-area">
            <h3>{selectedLang} Support</h3>
            <button className="modal-close" onClick={() => setLangModalOpen(false)}>
              <X size={20} />
            </button>
          </div>
          <div className="modal-body-area">
            <div className="modal-info-box">
              <Globe size={32} className="modal-globe-icon" />
              <p>Connect instantly with our GHL representatives speaking your preferred language.</p>
            </div>
            <div className="phone-numbers-list">
              {phoneNumbers[selectedLang] && phoneNumbers[selectedLang].map((number, idx) => (
                <div key={idx} className="phone-row">
                  <Phone size={18} className="phone-icon" />
                  <span className="phone-num-text">{number}</span>
                  <a href={`tel:${number.replace(/\s+/g, '')}`} className="btn btn-primary call-btn">
                    Call Now
                  </a>
                </div>
              ))}
            </div>
          </div>
          {/* <div className="modal-footer-area">
            <button className="btn btn-secondary w-full" onClick={() => setLangModalOpen(false)}>
              Close Window
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
}

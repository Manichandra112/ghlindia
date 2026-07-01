import React from 'react';
import { Mail, MapPin, ArrowUp } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const socialLinks = [
    { 
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>, 
      href: 'https://twitter.com/ghlindiaasset' 
    },
    { 
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/></svg>, 
      href: 'https://www.facebook.com/profile.php?id=61564191766299' 
    },
    { 
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>, 
      href: 'https://www.instagram.com/ghlindiaasset/' 
    },
    { 
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>, 
      href: 'https://www.linkedin.com/company/ghlindiaasset/' 
    },
    { 
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-2c.46-1.72.46-5.33.46-5.33a29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>, 
      href: 'https://www.youtube.com/@ghlindiaasset' 
    }
  ];

  const companyLinks = [
    { label: 'About Us', href: '#/about-us' },
    { label: 'Blog & Insights', href: '#reviews' },
    { label: 'Operational Model', href: '#what-we-do' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'FAQ', href: '#/faq' }
  ];

  const serviceLinks = [
    { label: 'Real Estate SPV', href: '#sectors' },
    { label: 'Biotechnology Funding', href: '#sectors' },
    { label: 'Food & Beverage', href: '#sectors' },
    { label: 'Agricultural Trading', href: '#sectors' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-main" id="footer">

      {/* Main Links Area */}
      <div className="footer-links-area">
        <div className="container footer-grid">
          
          {/* Brand/Contact column */}
          <div className="footer-col brand-col">
            <a href="#/" className="logo-area logo-footer">
              <div className="logo-symbol">G</div>
              <div className="logo-text text-white">
                <span className="logo-highlight text-white">GHL</span>
                <span className="logo-sub text-white-muted">INDIA</span>
              </div>
            </a>
            <p className="brand-pitch">
              Gladden HelpLine India is a premier alternate investment asset management platform dedicated to generating reliable, asset-backed yields.
            </p>
            <div className="contact-details-list">
              <div className="contact-item">
                <MapPin size={24} className="contact-icon" />
                <span className="contact-text">
                  2D, Queens Court, No.6, Montieth Road, Egmore, Chennai, Tamil Nadu - 600008, India.
                </span>
              </div>
              <div className="contact-item">
                <Mail size={16} className="contact-icon" />
                <a href="mailto:investorservice@ghlindia.com" className="contact-text email-link">
                  investorservice@ghlindia.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-menu">
              {companyLinks.map((link, idx) => (
                <li key={idx}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Our Sectors</h4>
            <ul className="footer-menu">
              {serviceLinks.map((link, idx) => (
                <li key={idx}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Social / Newsletter Column */}
          <div className="footer-col social-col">
            <h4 className="footer-col-title">Follow GHL India</h4>
            <p className="social-pitch">Get real-time updates about raw crop pricing, property sales, and new debenture releases.</p>
            <div className="social-links-row">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-circle"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal / Copyright Bar */}
      <div className="footer-bottom-bar">
        <div className="container bottom-bar-container">
          <p className="copyright-text">
            &copy; 2026 GHL India. All Rights Reserved. All alternate investments and debentures carry risk. Please read trust deeds carefully before subscribing.
          </p>
          <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll back to top">
            <ArrowUp size={16} />
            <span>Top</span>
          </button>
        </div>
      </div>

    </footer>
  );
}

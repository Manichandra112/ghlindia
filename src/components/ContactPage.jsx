import React, { useState } from 'react';
import {
  AtSign,
  Building,
  ChevronRight,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  User,
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './ContactPage.css';

const contactCards = [
  {
    title: 'MAIL & PHONE',
    Icon: Mail,
    lines: ['sales@ghlindia.com', '+91 91503 94446'],
    links: ['mailto:sales@ghlindia.com', 'tel:+919150394446'],
  },
  {
    title: 'BRANCH ADDRESS',
    Icon: Building,
    lines: ['I-Thum Tower,Tower B', 'Unit no.317, 3rd Floor', 'Plot no. A-40, Sector-62', 'Noida 201301, Delhi NCR'],
  },
  {
    title: 'ADDRESS',
    Icon: MapPin,
    lines: ['Queens Court, 2D, 2nd Floor,', 'No. 6 Montieth Road Egmore, Chennai - 600008,', 'Tamil Nadu, India'],
  },
];

export default function ContactPage() {
  const pageRef = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page" ref={pageRef}>
      <section className="contact-hero">
        <div className="container contact-hero-content" data-animate="fade-up">
          <span className="contact-eyebrow"><MessageSquare size={16} /> Contact Us</span>
          <h1>Need assistance? Please fill the form</h1>
          <p>Reach the GHL India team for enquiries, support, and branch information.</p>
        </div>
      </section>

      <nav className="contact-breadcrumb">
        <div className="container">
          <ul>
            <li><a href="#/">Home</a></li>
            <ChevronRight size={13} />
            <li>Resources</li>
            <ChevronRight size={13} />
            <li className="active">Contact Us</li>
          </ul>
        </div>
      </nav>

      <section className="contact-main-section">
        <div className="container contact-main-grid">
          <form className="contact-form-panel" onSubmit={handleSubmit} data-animate="fade-right">
            <div className="contact-form-head">
              <span>Enquiry Form</span>
              <h2>Send Message</h2>
            </div>

            <label className="contact-field">
              <span>Name</span>
              <div className="contact-input-wrap">
                <User size={17} />
                <input name="name" type="text" placeholder="Name" required />
              </div>
            </label>

            <label className="contact-field">
              <span>Email address</span>
              <div className="contact-input-wrap">
                <AtSign size={17} />
                <input name="email" type="email" placeholder="Email address" required />
              </div>
            </label>

            <div className="contact-phone-row">
              <label className="contact-field">
                <span>Code</span>
                <select name="countryCode" defaultValue="+91" aria-label="Country code">
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+971">+971</option>
                  <option value="+65">+65</option>
                </select>
              </label>
              <label className="contact-field">
                <span>Phone</span>
                <div className="contact-input-wrap">
                  <Phone size={17} />
                  <input name="phone" type="tel" placeholder="Phone" required />
                </div>
              </label>
            </div>

            <label className="contact-field">
              <span>Write something</span>
              <textarea name="message" placeholder="Write something" rows="5" required />
            </label>

            <button type="submit" className="contact-submit">
              Send Message <Send size={16} />
            </button>

            {submitted && (
              <p className="contact-submit-note">Thanks. Your message is ready for the GHL India team.</p>
            )}
          </form>

          <aside className="contact-info-panel" data-animate="fade-left" data-stagger-delay="100ms">
            <div className="contact-map">
              <iframe
                title="GHL India Chennai address map"
                src="https://www.google.com/maps?q=Queens%20Court%20Egmore%20Chennai&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="contact-card-stack">
              {contactCards.map(({ title, Icon, lines, links }) => (
                <article className="contact-info-card" key={title}>
                  <div className="contact-card-icon"><Icon size={20} /></div>
                  <div>
                    <h3>{title}</h3>
                    {lines.map((line, index) => (
                      links?.[index] ? (
                        <a key={line} href={links[index]}>{line}</a>
                      ) : (
                        <p key={line}>{line}</p>
                      )
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="about-login-cta-section">
        <div className="container">
          <div className="about-login-cta-content">
            <h2>GHL INDIA is here to create a prosperous environment that serves the world at large</h2>
            <p>Let us join together to live an opulent life</p>
            <div className="about-login-cta-actions">
              <a href="#login" className="cta-btn btn-white-glass">
                <span>Login</span>
              </a>
              <a href="#register" className="cta-btn btn-white-solid">
                <span>Register</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

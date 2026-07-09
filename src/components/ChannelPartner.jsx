import React from 'react';
import {
  ArrowRight,
  ChevronRight,
  Handshake,
  Mail,
  Megaphone,
  Phone,
  PlayCircle,
  ShieldCheck,
  UsersRound,
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './ChannelPartner.css';
import channelPartnerHero from '../assets/channelpartner.png';

const GHL = 'https://www.ghlindia.com';

const partnerHighlights = [
  {
    title: 'Promote GHL products',
    text: 'Help showcase GHL India financial products to the right investor network.',
    Icon: Megaphone,
  },
  {
    title: 'Build relationship-led growth',
    text: 'Support a healthy partnership model built around trust, clarity, and long-term association.',
    Icon: Handshake,
  },
  {
    title: 'Get clear partnership terms',
    text: 'Understand responsibilities, remuneration, agreement duration, and the next steps directly with the GHL team.',
    Icon: ShieldCheck,
  },
];

export default function ChannelPartner() {
  const pageRef = useScrollAnimation();

  const scrollToDetails = () => {
    document.getElementById('channel-details')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="channel-page" ref={pageRef}>
      <section className="channel-hero">
        <img
          src={channelPartnerHero}
          alt="Become a GHL India channel partner"
          className="channel-hero-img"
        />
        <div className="channel-hero-overlay" />
        <div className="channel-hero-content-wrap">
          <div className="container channel-hero-content">
            <div className="channel-hero-copy" data-animate="fade-up">
              <span className="channel-eyebrow"><UsersRound size={16} /> Partnership Program</span>
              <h1>Become A Channel Partner</h1>
              <p>
                A partner is someone who supports us, fostering a healthy relationship.
                Similarly, a channel partner&apos;s support is crucial in promoting our products.
              </p>
              <div className="channel-hero-actions">
                <button type="button" className="channel-btn primary" onClick={scrollToDetails}>
                  Explore program <ArrowRight size={16} />
                </button>
                <a href="mailto:sales@ghlindia.com" className="channel-btn secondary">
                  Contact sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <nav className="channel-breadcrumb">
        <div className="container">
          <ul>
            <li><a href="#/">Home</a></li>
            <ChevronRight size={13} />
            <li>Resources</li>
            <ChevronRight size={13} />
            <li className="active">Channel Partner</li>
          </ul>
        </div>
      </nav>

      <section className="channel-intro-section" id="channel-details">
        <div className="container">
          <div className="channel-intro-grid">
            <div className="channel-copy-stack" data-animate="fade-right">
              <span className="channel-section-kicker">Partner With GHL India</span>
              <h2>Help us grow while showcasing financial products with clarity.</h2>
              <div className="channel-body-copy">
                <p>
                  Welcome to GHL India&apos;s Channel Partner Program! We&apos;re excited to have you with us.
                  As a Channel Partner, you&apos;re instrumental in helping us grow and showcasing our financial products.
                </p>
                <p>
                  To learn more about the terms and conditions of our partnership, including your responsibilities,
                  remuneration, and the duration of our agreement, kindly call us at 91503 94446 or e-mail us at sales@ghlindia.com.
                </p>
                <p><strong>Want the scoop? Get in touch with us.</strong></p>
              </div>

              <div className="channel-contact-row">
                <a href="tel:+919150394446" className="channel-contact-link">
                  <Phone size={18} />
                  <span>91503 94446</span>
                </a>
                <a href="mailto:sales@ghlindia.com" className="channel-contact-link">
                  <Mail size={18} />
                  <span>sales@ghlindia.com</span>
                </a>
              </div>
            </div>

            <div className="channel-video-wrap" data-animate="fade-left" data-stagger-delay="120ms">
              <div className="channel-video-head">
                <PlayCircle size={20} />
                <span>Program video</span>
              </div>
              <iframe
                title="GHL India Channel Partner Program"
                src="https://www.youtube.com/embed/81GRT8Q4MtQ"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <section className="channel-highlights-section">
        <div className="container">
          <div className="channel-section-header" data-animate="fade-up">
            <span>How Partners Support GHL</span>
            <h2>A relationship-led growth program</h2>
          </div>

          <div className="channel-highlight-grid">
            {partnerHighlights.map(({ title, text, Icon }, index) => (
              <article
                className="channel-highlight-card"
                key={title}
                data-animate="fade-up"
                data-stagger-delay={`${index * 90}ms`}
              >
                <Icon size={22} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="channel-cta-section">
        <div className="container">
          <div className="channel-cta-content" data-animate="fade-up">
            <span>Get In Touch</span>
            <h2>Ready to understand the Channel Partner terms?</h2>
            <p>Speak with the GHL India team to learn about responsibilities, remuneration, and agreement details.</p>
            <div className="channel-cta-actions">
              <a href="tel:+919150394446" className="channel-cta-btn primary">Call Now <Phone size={16} /></a>
              <a href="mailto:sales@ghlindia.com" className="channel-cta-btn secondary">Email Us <Mail size={16} /></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Star, ShieldAlert, BadgeCheck, ChevronRight, MessageSquareQuote } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Reviews.css';

export default function Reviews() {
  const reviews = [
    {
      name: 'Deepak',
      avatarLetter: 'D',
      time: '7 months ago',
      rating: 5,
      text: 'I invested on GHL India asset recently along with my dad. We are happy with the entire process right from start to finish. Teena was very helpful and proactive in answering all my questions during the onboarding process and afterwards, keeping me updated about the documents to sign and upload etc.'
    },
    {
      name: 'Srinija G',
      avatarLetter: 'S',
      time: '8 months ago',
      rating: 5,
      text: 'Best platform to invest money and get fixed returns with high securities and timely monthly returns. I enjoyed the cash back offer too. Smooth on board process and good relationship managers with good knowledge and transparent business structure. Highly recommend GHL india.'
    },
    {
      name: 'K Reetika',
      avatarLetter: 'K',
      time: 'a year ago',
      rating: 5,
      text: 'GHL India is a great investment platform and excellent service is provided by the client support team. I have invested in the platform and received the payment on time. Their process is making sure the guarantee for the investment amount in terms of Debentures and providing the Bank Guarantee for the interest which grabbed by trust towards the company.'
    },
    {
      name: 'Rafia Qadir',
      avatarLetter: 'R',
      time: 'a year ago',
      rating: 5,
      text: 'I am delighted to share my positive experience with your services. The team demonstrated exceptional expertise, guiding me through strategic investment decisions. Their dedication to client success is truly commendable. I highly recommend GHL India for their professionalism and commitment to excellence.'
    },
    {
      name: 'Varun Arora',
      avatarLetter: 'V',
      time: 'a year ago',
      rating: 5,
      text: 'Just writing to say how excited I am to be going into investment with GHL India. Ms Razia (Business Development Manager) is always available to resolve my queries. I hope to do much more investment again soon!'
    },
    {
      name: 'Swathi Kiran',
      avatarLetter: 'S',
      time: '9 months ago',
      rating: 5,
      text: 'I recently got to know about GHL India company through my close friend and I have invested in debentures and wholesale trading. Will observe for more time before investing more amount and I recommend this company to invest your money too.'
    }
  ];

  return (
    <section className="reviews-section section-padding" id="reviews">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span>Investor Feedback</span>
          <h2>What Our Customers Say</h2>
          <p>Read about the experiences of our retail and corporate investors who grow their wealth through our platform.</p>
        </div>

        {/* Google Aggregator Panel */}
        <div className="google-aggregator-panel glass-panel">
          <div className="aggregator-left">
            <div className="google-badge-brand">
              <span className="g-blue">G</span>
              <span className="g-red">o</span>
              <span className="g-yellow">o</span>
              <span className="g-blue">g</span>
              <span className="g-green">l</span>
              <span className="g-red">e</span>
              <span className="brand-reviews-text">Reviews</span>
            </div>
            <div className="aggregator-metrics">
              <span className="aggregator-rating">4.6</span>
              <div className="aggregator-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className={i < 4 ? 'star-filled' : 'star-half'} fill={i < 4 ? 'currentColor' : 'none'} />
                ))}
              </div>
              <span className="aggregator-count">(117 verified submissions)</span>
            </div>
          </div>
          <div className="aggregator-right">
            <a 
              href="https://www.google.com/search?hl=en-IN&gl=in&q=GHL+India+Asset" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary google-direct-btn"
            >
              <span>Review us on Google</span>
              <ChevronRight size={16} />
            </a>
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="reviews-slider-container">
          <Swiper
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="reviews-swiper"
          >
            {reviews.map((review, idx) => (
              <SwiperSlide key={idx}>
                <ReviewCard review={review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}

// Sub-component review card for managing show more/less state
function ReviewCard({ review }) {
  const [showFull, setShowFull] = useState(false);
  const maxLen = 120;
  const isLong = review.text.length > maxLen;

  const displayText = showFull 
    ? review.text 
    : isLong 
      ? review.text.substring(0, maxLen) + '...' 
      : review.text;

  return (
    <div className="review-card-item glass-panel">
      <MessageSquareQuote size={32} className="quote-icon" />
      
      <div className="reviewer-info">
        <div className="avatar-circle">
          {review.avatarLetter}
        </div>
        <div className="reviewer-name-col">
          <div className="name-row">
            <h4>{review.name}</h4>
            <div className="verified-wrapper">
              <BadgeCheck size={14} className="verified-icon" />
              <span className="tooltip-verified">Verified Investor</span>
            </div>
          </div>
          <span className="review-time">{review.time}</span>
        </div>
      </div>

      <div className="stars-row">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} size={14} className="star-filled" fill="currentColor" />
        ))}
      </div>

      <p className="review-card-text">
        "{displayText}"
        {isLong && (
          <button className="read-more-btn" onClick={() => setShowFull(!showFull)}>
            {showFull ? ' Show Less' : ' Read More'}
          </button>
        )}
      </p>
    </div>
  );
}

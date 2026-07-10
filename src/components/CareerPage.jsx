import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  ChevronRight,
  DollarSign,
  Loader2,
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { fallbackCareerJobs, loadCareerJobs } from './careerJobs';
import './CareerPage.css';
import BottomCTA from './BottomCTA';

export default function CareerPage() {
  const pageRef = useScrollAnimation();
  const [jobs, setJobs] = useState(fallbackCareerJobs);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    loadCareerJobs()
      .then((loadedJobs) => {
        if (mounted) setJobs(loadedJobs);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="career-page" ref={pageRef}>
      <section className="career-hero">
        <div className="career-hero-wrapper">
          <div className="career-hero-overlay text-center" data-animate="fade-up">
            <span className="career-badge-tag">Career</span>
            <h1>career</h1>
            <p>Explore current openings and apply with GHL India.</p>
          </div>
        </div>
      </section>

      <nav className="career-breadcrumb">
        <div className="container">
          <ul>
            <li><a href="#/">Home</a></li>
            <ChevronRight size={13} />
            <li>Resources</li>
            <ChevronRight size={13} />
            <li className="active">Career</li>
          </ul>
        </div>
      </nav>

      <section className="career-openings-section" id="career-openings">
        <div className="container">
          <div className="career-section-head" data-animate="fade-up">
            <span>Current Openings</span>
            <h2>Roles currently listed by GHL India</h2>
            <p>
              GHL INDIA is here to create a prosperous environment that serves the world at large.
              Let us join together to live an opulent life.
            </p>
          </div>

          {loading ? (
            <div className="career-loading-state" role="status">
              <Loader2 size={34} />
              <span>Loading current openings...</span>
            </div>
          ) : (
            <div className="career-job-grid">
              {jobs.map((job, index) => (
                <article
                  className="career-job-card"
                  key={job.id}
                >
                  <div className="career-job-image">
                    <img src={job.image} alt={`${job.title} hiring poster`} loading={index === 0 ? 'eager' : 'lazy'} />
                  </div>
                  <div className="career-job-content">
                    <span className="career-job-label">Job Title</span>
                    <h3>{job.title}</h3>
                    <div className="career-salary">
                      <DollarSign size={17} />
                      <span>{job.salary}</span>
                    </div>
                    <p>{job.description}</p>
                    <a href={job.route} className="career-read-more">
                      Read More <ArrowRight size={15} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

     

      <BottomCTA />
    </div>
  );
}

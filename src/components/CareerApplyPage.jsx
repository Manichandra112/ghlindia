import React, { useEffect, useState } from 'react';
import {
  ChevronRight,
  DollarSign,
  FileText,
  Loader2,
  Mail,
  Phone,
  Send,
  User,
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { fallbackCareerJobs, loadCareerJobDetail } from './careerJobs';
import './CareerApplyPage.css';

export default function CareerApplyPage() {
  const pageRef = useScrollAnimation();
  const initialJob = window.location.hash === '#/apply_now1' ? fallbackCareerJobs[1] : fallbackCareerJobs[0];
  const [job, setJob] = useState(initialJob);
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    let mounted = true;

    loadCareerJobDetail(window.location.hash)
      .then((loadedJob) => {
        if (mounted) setJob(loadedJob);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="career-apply-page" ref={pageRef}>
      <section className="career-apply-hero">
        <div className="career-apply-hero-wrapper">
          <div className="career-apply-hero-overlay" data-animate="fade-up">
            <span>Apply Now</span>
            <h1>{job.title}</h1>
            <p>Submit your details for the selected GHL India career opening.</p>
          </div>
        </div>
      </section>

      <nav className="career-apply-breadcrumb">
        <div className="container">
          <ul>
            <li><a href="#/">Home</a></li>
            <ChevronRight size={13} />
            <li><a href="#/career">Career</a></li>
            <ChevronRight size={13} />
            <li className="active">{job.title}</li>
          </ul>
        </div>
      </nav>

      <section className="career-apply-main">
        <div className="container career-apply-layout">
          <article className="career-apply-job" data-animate="fade-up">
            {loading ? (
              <div className="career-apply-loading" role="status">
                <Loader2 size={34} />
                <span>Loading job details...</span>
              </div>
            ) : (
              <>
                <div className="career-apply-image">
                  <img src={job.image} alt={`${job.title} hiring poster`} />
                </div>
                <div className="career-apply-copy">
                  <div className="career-apply-summary">
                    <span>Job Title</span>
                    <h2>{job.title}</h2>
                    <div className="career-apply-salary">
                      <DollarSign size={17} />
                      <strong>{job.salary}</strong>
                    </div>

                    {job.details.intro.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="career-detail-columns">
                    <div className="career-detail-column">
                      {job.details.salary.length > 0 && (
                        <div className="career-detail-block">
                          <h3>Salary</h3>
                          <ul>
                            {job.details.salary.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {job.details.qualifications.length > 0 && (
                        <div className="career-detail-block">
                          <h3>{job.id === 'content-writer' ? "What we're looking for" : 'Qualifications'}</h3>
                          <ul>
                            {job.details.qualifications.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <div className="career-detail-column">
                      {job.details.responsibilities.length > 0 && (
                        <div className="career-detail-block">
                          <h3>{job.id === 'content-writer' ? 'Responsibilities' : 'Job Description'}</h3>
                          <ul>
                            {job.details.responsibilities.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="career-detail-closing">
                    {job.details.closing.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}

                    {job.details.email && (
                      <p className="career-apply-email">
                        Send your resume to: <a href={`mailto:${job.details.email}`}>{job.details.email}</a>
                      </p>
                    )}
                  </div>
                </div>
              </>
            )}
          </article>

          <form
            className="career-apply-form-panel"
            action={job.applyPostUrl}
            method="post"
            encType="multipart/form-data"
            data-animate="fade-left"
            data-stagger-delay="100ms"
            onSubmit={handleSubmit}
          >
            <div className="career-apply-form-head">
              <span>Application Form</span>
              <h2>Apply Now</h2>
            </div>

            <label>
              <span>Your Name</span>
              <div className="career-apply-input">
                <User size={17} />
                <input name="name" type="text" placeholder="Name" required />
              </div>
            </label>

            <label>
              <span>Your Email</span>
              <div className="career-apply-input">
                <Mail size={17} />
                <input name="email" type="email" placeholder="Email address" required />
              </div>
            </label>

            <label>
              <span>Your Phone</span>
              <div className="career-apply-input">
                <Phone size={17} />
                <input name="phone" type="tel" placeholder="Phone" required />
              </div>
            </label>

            <label>
              <span>Your Resume</span>
              <div className="career-apply-input">
                <FileText size={17} />
                <input name="resume" type="file" accept=".pdf,.doc,.docx" required />
              </div>
            </label>

            <button type="submit" name="submit">
              Apply <Send size={16} />
            </button>

            {submitted && (
              <p className="career-apply-submit-note">Submitting your application to GHL India...</p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}

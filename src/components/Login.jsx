import React, { useState, useEffect } from 'react';
import { Mail, Lock, Eye, EyeOff, ShieldCheck, TrendingUp, UserCheck, ArrowRight, Play, X } from 'lucide-react';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (!email || !password) {
      setErrorMsg('Email address and password are required.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      if (email.toLowerCase() === 'blocked@gmail.com') {
        setErrorMsg('This account is blocked. Please contact support.');
      } else {
        setSuccessMsg('Welcome back! Logged in successfully.');
        setTimeout(() => {
          window.location.hash = '#/';
        }, 1500);
      }
    }, 1500);
  };

  return (
    <div className="login-container-wrapper">
      {/* Background Glow */}
      <div className="login-bg-layers">
        <div className="login-bg-glow-1"></div>
        <div className="login-bg-glow-2"></div>
        <div className="login-bg-grid"></div>
      </div>

      <div className="login-breadcrumbs">
        <div className="container">
          <span className="breadcrumb-link" onClick={() => window.location.hash = '#/'}>Home</span>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Login</span>
        </div>
      </div>

      <section className="login-main-section">
        <div className="container login-grid-layout">

          {/* LEFT PANEL: Sleek Branding & Typography */}
          <div className="login-left-panel">
            <div className="login-left-card">
              <div className="login-badge-pill">
                <span className="badge-dot-pulse"></span>
                Secure Alternative Assets
              </div>

              {/* Video Card Container */}
              <div className="login-video-card">
                <div className="video-thumbnail-container" onClick={() => setIsVideoOpen(true)}>
                  <img
                    src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=600&q=80"
                    alt="GHL India Investment Intro"
                    className="video-thumb"
                  />
                  <div className="video-play-overlay">
                    <div className="play-icon-circle">
                      <Play size={18} fill="currentColor" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="login-hero-text">
                <h1>Secure Access to <br />Your <span className="highlight-text">Wealth Portal</span></h1>
                <p>Log in to oversee your asset-backed investments, track periodic monthly cash flows, and monitor your diversified returns portfolio.</p>
              </div>

              {/* Spacing Stats Pills */}
              <div className="login-stats-pills-row">
                <span className="stat-pill-badge">₹300Cr+ AUM</span>
                <span className="stat-pill-badge">Zero Defaults</span>
                <span className="stat-pill-badge">4.4★ Rating</span>
              </div>

              {/* Minimal Trust Features */}
              <div className="login-minimal-trust-grid">
                <div className="min-trust-item">
                  <ShieldCheck size={18} className="min-trust-icon" />
                  <span>MCA Compliant &amp; Asset-Backed</span>
                </div>
                <div className="min-trust-item">
                  <TrendingUp size={18} className="min-trust-icon" />
                  <span>18% - 24% Targeted Returns</span>
                </div>
                <div className="min-trust-item">
                  <UserCheck size={18} className="min-trust-icon" />
                  <span>Dedicated Relationship Support</span>
                </div>
              </div>


            </div>
          </div>

          {/* RIGHT PANEL: Login Form Card */}
          <div className="login-right-panel">
            <div className="login-form-card glass-panel">
              <div className="card-top-line"></div>

              <div className="form-header">
                <span className="form-tag">Dear Investor</span>
                <h2>Welcome Back</h2>
                <p>Log in to monitor your portfolio performance</p>
              </div>

              {/* Google Button */}
              <button
                type="button"
                className="google-signin-btn"
                onClick={() => window.location.href = "https://accounts.google.com/o/oauth2/auth?response_type=code&access_type=online&client_id=270419167990-9m6r5vvjusitc8sf2r2h5ubhkokjdb34.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fghlindia.com%2Fglogin.php&state&scope=email%20profile&approval_prompt=auto"}
              >
                <svg className="google-icon" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Continue with Google
              </button>

              <div className="form-divider">
                <div className="divider-line"></div>
                <span className="divider-text">or sign in with email</span>
                <div className="divider-line"></div>
              </div>

              {errorMsg && (
                <div className="alert-message error-alert">
                  <span>{errorMsg}</span>
                </div>
              )}
              {successMsg && (
                <div className="alert-message success-alert">
                  <span>{successMsg}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="login-form">

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <div className="input-with-icon">
                    <span className="input-icon"><Mail size={18} /></span>
                    <input
                      type="email"
                      id="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <div className="input-with-icon">
                    <span className="input-icon"><Lock size={18} /></span>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      className="password-toggle-btn"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div className="form-options-row">
                  <label className="remember-me-checkbox">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <span>Remember me</span>
                  </label>
                  <span className="forgot-password-link" onClick={() => alert('Forgot password service requested')}>
                    Forgot Password?
                  </span>
                </div>

                <button
                  type="submit"
                  className="login-submit-btn"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="loader-inner">
                      <div className="btn-spinner"></div>
                      <span>Signing in...</span>
                    </div>
                  ) : (
                    <div className="btn-inner-content">
                      <span>Sign In</span>
                      <ArrowRight size={18} className="arrow-icon" />
                    </div>
                  )}
                </button>
              </form>

              <div className="register-redirect-footer">
                Don't have an account? <span className="register-link" onClick={() => window.location.hash = '#/register'}>Create one</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Video Lightbox Modal */}
      {isVideoOpen && (
        <div className="video-lightbox-overlay" onClick={() => setIsVideoOpen(false)}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={() => setIsVideoOpen(false)}>
              <X size={24} />
            </button>
            <div className="iframe-container">
              <iframe
                src="https://www.youtube.com/embed/X3l0n_ZRjpg?autoplay=1"
                title="GHL India NCD Intro"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

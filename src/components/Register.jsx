import React, { useState, useEffect } from 'react';
import { User, Mail, Phone, Lock, Eye, EyeOff, FileText, CreditCard, Landmark, Check, ArrowRight, Play, X, ShieldAlert } from 'lucide-react';
import './Register.css';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneCode: '+91',
    phone: '',
    password: '',
    confirmPassword: '',
    referral: '',
    whatsappOptIn: true
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // OTP Simulation States
  const [otpStep, setOtpStep] = useState(false);
  const [otpCode, setOtpCode] = useState('');
  const [simulatedOtp, setSimulatedOtp] = useState('');
  const [otpLoading, setOtpLoading] = useState(false);

  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;

    // Formatting/validations
    if (id === 'name') {
      const alphaVal = value.replace(/[^a-zA-Z\s]/g, '');
      setFormData(prev => ({ ...prev, [id]: alphaVal }));
      return;
    }

    if (id === 'phone') {
      const numVal = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, [id]: numVal }));
      return;
    }

    setFormData(prev => ({ ...prev, [id]: val }));

    if (id === 'password') {
      evaluatePasswordStrength(value);
    }
  };

  const evaluatePasswordStrength = (pass) => {
    if (!pass) {
      setPasswordStrength('');
      return;
    }
    let score = 0;
    if (pass.length >= 8) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[a-z]/.test(pass)) score++;
    if (/\d/.test(pass)) score++;
    if (/[^A-Za-z0-9]/.test(pass)) score++;

    if (score <= 2) {
      setPasswordStrength('weak');
    } else if (score <= 4) {
      setPasswordStrength('medium');
    } else {
      setPasswordStrength('strong');
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    const { name, email, phone, password, confirmPassword } = formData;

    if (!name || !email || !phone || !password || !confirmPassword) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    if (phone.length < 10) {
      setErrorMsg('Mobile number must be exactly 10 digits.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMsg('Passwords do not match.');
      return;
    }

    setLoading(true);

    // Simulate OTP Code generation and sending
    setTimeout(() => {
      setLoading(false);
      const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
      setSimulatedOtp(generatedOtp);
      setOtpStep(true);

      // Console log for demo/testing convenience
      console.log(`[GHL SIMULATED OTP]: ${generatedOtp}`);
      alert(`OTP sent to mobile! Simulated Code is: ${generatedOtp}`);
    }, 1500);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (!otpCode) {
      setErrorMsg('Please enter the verification code.');
      return;
    }

    if (otpCode !== simulatedOtp) {
      setErrorMsg('Invalid verification code. Please check and try again.');
      return;
    }

    setOtpLoading(true);

    setTimeout(() => {
      setOtpLoading(false);
      setSuccessMsg('Account created successfully! Welcome to GHL India.');
      setTimeout(() => {
        window.location.hash = '#/login';
      }, 1500);
    }, 1500);
  };

  return (
    <div className="register-container-wrapper">
      {/* Background Glow */}
      <div className="register-bg-layers">
        <div className="register-bg-glow-1"></div>
        <div className="register-bg-glow-2"></div>
        <div className="register-bg-grid"></div>
      </div>

      <div className="register-breadcrumbs">
        <div className="container">
          <span className="breadcrumb-link" onClick={() => window.location.hash = '#/'}>Home</span>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Register</span>
        </div>
      </div>

      <section className="register-main-section">
        <div className="container register-grid-layout">

          {/* LEFT PANEL: Redesigned branding, pills & compact checklist */}
          <div className="register-left-panel">
            <div className="register-left-card">

              <div className="register-badge-pill">
                <span className="badge-dot-pulse"></span>
                Secure &amp; Regulatory Compliant
              </div>


              {/* Video Card Container */}
              <div className="register-video-card">
                <div className="video-thumbnail-container" onClick={() => setIsVideoOpen(true)}>
                  <img
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
                    alt="GHL India Registration Guide"
                    className="video-thumb"
                  />
                  <div className="video-play-overlay">
                    <div className="play-icon-circle">
                      <Play size={18} fill="currentColor" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="register-hero-text">
                <h1>Begin Your <br />Investment <span className="highlight-text">Journey</span></h1>
                <p>Register in minutes to unlock high-yield investment options. We require standard identity documents to establish your verified portfolio dashboard.</p>
              </div>

              {/* Stats row */}
              <div className="register-stats-pills-row">
                <span className="stat-pill-badge">MCA Regulated</span>
                <span className="stat-pill-badge">Asset-Backed</span>
                <span className="stat-pill-badge">100% Encrypted</span>
              </div>

              {/* Compact Documents checklist */}
              <div className="register-compact-checklist">
                <h4>Required for Quick Activation</h4>

                <div className="checklist-grid">
                  <div className="checklist-doc-item">
                    <FileText size={18} className="doc-icon" />
                    <div className="doc-info">
                      <h5>Aadhaar Card</h5>
                      <span>Identity &amp; Address Proof</span>
                    </div>
                  </div>

                  <div className="checklist-doc-item">
                    <CreditCard size={18} className="doc-icon" />
                    <div className="doc-info">
                      <h5>PAN Card</h5>
                      <span>Income Tax &amp; PAN Verification</span>
                    </div>
                  </div>

                  <div className="checklist-doc-item">
                    <Landmark size={18} className="doc-icon" />
                    <div className="doc-info">
                      <h5>Bank Proof</h5>
                      <span>Cancelled Cheque or Statement</span>
                    </div>
                  </div>
                </div>
              </div>



            </div>
          </div>

          {/* RIGHT PANEL: Form Column */}
          <div className="register-right-panel">
            <div className="register-form-card glass-panel">
              <div className="card-top-line"></div>

              {!otpStep ? (
                // STEP 1: Registration Form
                <>
                  <div className="form-header">
                    <span className="form-tag">New Investor</span>
                    <h2>Create Account</h2>
                    <p>Start earning high-yield returns today</p>
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
                    <span className="divider-text">or register with email</span>
                    <div className="divider-line"></div>
                  </div>

                  {errorMsg && (
                    <div className="alert-message error-alert">
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <form onSubmit={handleRegisterSubmit} className="register-form">

                    <div className="form-group">
                      <label htmlFor="name">Full Name (As per PAN)</label>
                      <div className="input-with-icon">
                        <span className="input-icon"><User size={18} /></span>
                        <input
                          type="text"
                          id="name"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-row-two-col">
                      <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <div className="input-with-icon">
                          <span className="input-icon"><Mail size={18} /></span>
                          <input
                            type="email"
                            id="email"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="phone">Mobile Number</label>
                        <div className="mobile-input-group">
                          <select
                            id="phoneCode"
                            value={formData.phoneCode}
                            onChange={handleInputChange}
                            className="country-code-select"
                          >
                            <option value="+91">+91 (IN)</option>
                            <option value="+1">+1 (US)</option>
                            <option value="+44">+44 (UK)</option>
                          </select>
                          <div className="input-with-icon flex-grow">
                            <span className="input-icon"><Phone size={18} /></span>
                            <input
                              type="tel"
                              id="phone"
                              placeholder="10-digit number"
                              value={formData.phone}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-row-two-col">
                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <div className="input-with-icon">
                          <span className="input-icon"><Lock size={18} /></span>
                          <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            placeholder="Min. 8 characters"
                            value={formData.password}
                            onChange={handleInputChange}
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
                        {passwordStrength && (
                          <div className="password-strength-indicator">
                            Strength: <span className={`strength-val strength-${passwordStrength}`}>{passwordStrength}</span>
                          </div>
                        )}
                      </div>

                      <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <div className="input-with-icon">
                          <span className="input-icon"><Lock size={18} /></span>
                          <input
                            type={showConfirmPassword ? "text" : "password"}
                            id="confirmPassword"
                            placeholder="Re-enter password"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            required
                          />
                          <button
                            type="button"
                            className="password-toggle-btn"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          >
                            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="referral">Referral Code (Optional)</label>
                      <div className="input-with-icon">
                        <span className="input-icon"><User size={18} /></span>
                        <input
                          type="text"
                          id="referral"
                          placeholder="Enter referral code"
                          value={formData.referral}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <label className="whatsapp-opt-in-checkbox">
                      <input
                        type="checkbox"
                        id="whatsappOptIn"
                        checked={formData.whatsappOptIn}
                        onChange={handleInputChange}
                      />
                      <span>Send registration updates &amp; OTP to WhatsApp</span>
                    </label>

                    <button
                      type="submit"
                      className="register-submit-btn"
                      disabled={loading}
                    >
                      {loading ? (
                        <div className="loader-inner">
                          <div className="btn-spinner"></div>
                          <span>Sending OTP...</span>
                        </div>
                      ) : (
                        <div className="btn-inner-content">
                          <span>Get OTP Code</span>
                          <ArrowRight size={18} className="arrow-icon" />
                        </div>
                      )}
                    </button>
                  </form>

                  <div className="login-redirect-footer">
                    Already have an account? <span className="login-link" onClick={() => window.location.hash = '#/login'}>Sign in</span>
                  </div>
                </>
              ) : (
                // STEP 2: OTP Verification Form
                <>
                  <div className="form-header">
                    <span className="form-tag">Security Verification</span>
                    <h2>Enter OTP</h2>
                    <p>Enter the code sent to {formData.phoneCode} {formData.phone}</p>
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

                  <div className="otp-sim-badge">
                    <ShieldAlert size={16} />
                    <span>Check your alerts or developer console for code: <strong>{simulatedOtp}</strong></span>
                  </div>

                  <form onSubmit={handleVerifyOtp} className="otp-verification-form">
                    <div className="form-group">
                      <label htmlFor="otpCode">6-Digit Verification Code</label>
                      <input
                        type="text"
                        id="otpCode"
                        placeholder="Enter 6-digit code"
                        maxLength="6"
                        className="otp-code-input"
                        value={otpCode}
                        onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, ''))}
                        required
                        autoFocus
                      />
                    </div>

                    <button
                      type="submit"
                      className="register-submit-btn"
                      disabled={otpLoading}
                    >
                      {otpLoading ? (
                        <div className="loader-inner">
                          <div className="btn-spinner"></div>
                          <span>Verifying...</span>
                        </div>
                      ) : (
                        <span>Verify &amp; Create Account</span>
                      )}
                    </button>

                    <button
                      type="button"
                      className="resend-otp-btn"
                      onClick={() => {
                        const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
                        setSimulatedOtp(newOtp);
                        console.log(`[GHL SIMULATED OTP]: ${newOtp}`);
                        alert(`Resent! Simulated Code is: ${newOtp}`);
                      }}
                    >
                      Resend Code
                    </button>

                    <button
                      type="button"
                      className="change-phone-btn"
                      onClick={() => setOtpStep(false)}
                    >
                      Change Details
                    </button>
                  </form>
                </>
              )}

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
                title="GHL India Registration Guide"
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

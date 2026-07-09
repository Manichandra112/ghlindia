import React, { useState, useEffect } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Play, X, User, Phone, Check, CheckCircle2, Users } from 'lucide-react';
import './Register.css';

export default function Register() {
  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneCode, setPhoneCode] = useState('91');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [referral, setReferral] = useState('');
  const [sendOtpWhatsapp, setSendOtpWhatsapp] = useState(true);
  
  // UI logic states
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // OTP flow states
  const [otpSent, setOtpSent] = useState(false);
  const [otpVal, setOtpVal] = useState('');
  const [strength, setStrength] = useState(''); // 'too-short', 'medium', 'strong'
  const [strengthText, setStrengthText] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Password strength evaluation
  useEffect(() => {
    if (!password) {
      setStrength('');
      setStrengthText('');
      return;
    }
    if (password.length < 8) {
      setStrength('too-short');
      setStrengthText('Too short — min. 8 characters');
      return;
    }
    if (password.length > 15) {
      setStrength('too-short');
      setStrengthText('Too long — max. 15 characters');
      return;
    }
    const hasNum = /[0-9]/.test(password);
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasSpecial = /[~!@#$%^&*\-_+=?><]/.test(password);

    if (hasNum && hasLetter && hasSpecial) {
      setStrength('strong');
      setStrengthText('Strong ✓');
    } else {
      setStrength('medium');
      setStrengthText('Medium — add numbers & special chars');
    }
  }, [password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    // Pre-OTP validations
    if (!otpSent) {
      if (!name || !email || !phone || !password || !confirmPassword) {
        setErrorMsg('Please fill in all required fields.');
        return;
      }

      // Email pattern check
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        setErrorMsg('Please enter a valid email address.');
        return;
      }

      // Blocked emails
      if (email.toLowerCase() === 'nbid@gmail.com' || email.toLowerCase() === 'blocked@gmail.com') {
        setErrorMsg('This email is blocked. Cannot register.');
        return;
      }

      // Phone check
      if (phone.length !== 10) {
        setErrorMsg('Phone number must be exactly 10 digits.');
        return;
      }

      // Password checks
      if (password.length < 8) {
        setErrorMsg('Password must be at least 8 characters.');
        return;
      }
      if (password !== confirmPassword) {
        setErrorMsg('Passwords do not match.');
        return;
      }

      setLoading(true);

      // Simulate sending OTP
      setTimeout(() => {
        setLoading(false);
        setOtpSent(true);
        const destination = sendOtpWhatsapp ? 'SMS, Email & WhatsApp' : 'Email Address';
        setSuccessMsg(`Simulated OTP successfully sent to your ${destination}!`);
      }, 1500);

    } else {
      // OTP Verification validation
      if (!otpVal || otpVal.length !== 4) {
        setErrorMsg('Please enter the 4-digit OTP code.');
        return;
      }

      setLoading(true);

      // Simulate registration
      setTimeout(() => {
        setLoading(false);
        setSuccessMsg('Account created successfully! Redirecting to login...');
        setTimeout(() => {
          window.location.hash = '#/login';
        }, 1500);
      }, 1500);
    }
  };

  const checklistItems = [
    "Email ID, Mobile number, Bank account details and Address of the Investor",
    "Email ID, Mobile number and Address of the Nominee of the Investor",
    "ID Proof: Scan copy of Aadhaar Card (front & back)",
    "Scan copy of PAN Card",
    "Bank details: Passbook front page / Cancelled cheque / Recent Bank statement"
  ];

  return (
    <div className="register-container-wrapper">
      {/* Background Glow */}
      <div className="register-bg-layers">
        <div className="register-bg-glow-1"></div>
        <div className="register-bg-glow-2"></div>
        <div className="register-bg-grid"></div>
        <div className="register-particles">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`register-particle rp-${i + 1}`}></div>
          ))}
        </div>
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
          
          {/* LEFT PANEL: Document list & Video guide */}
          <div className="register-left-panel">
            <div className="register-left-card">
              <div className="register-badge-pill">
                <span className="badge-dot-pulse"></span>
                India's Premier NCD Platform
              </div>

              <div className="register-hero-text">
                <h1>Begin Your <br /><span className="highlight-text">Investment</span> Journey</h1>
                <p>Join thousands of investors earning 18%–24% annual returns through our asset-backed NCD platform. Registration takes under 3 minutes.</p>
              </div>

              {/* Checklist */}
              <div className="register-checklist">
                <h4>Required Information &amp; Documents:</h4>
                <div className="checklist-list">
                  {checklistItems.map((item, index) => (
                    <div key={index} className="checklist-item">
                      <div className="checklist-check-icon">
                        <Check size={16} />
                      </div>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Video Thumbnail */}
              <div className="register-video-card">
                <div className="video-thumbnail-container" onClick={() => setIsVideoOpen(true)}>
                  <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80" alt="GHL India Registration Guide" className="video-thumb" />
                  <div className="video-overlay-play">
                    <div className="play-btn-circle">
                      <Play size={24} fill="currentColor" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: Form */}
          <div className="register-right-panel">
            <div className="register-form-card glass-panel">
              <div className="card-top-line"></div>

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
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Continue with Google
              </button>

              <div className="form-divider">
                <div className="divider-line"></div>
                <span className="divider-text">or register with email</span>
                <div className="divider-line"></div>
              </div>

              {/* Status Messages */}
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

              <form onSubmit={handleSubmit} className="register-form">
                
                {/* Form fields before OTP is sent */}
                {!otpSent && (
                  <>
                    {/* Full Name + Email Row */}
                    <div className="form-row-two-col">
                      <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <div className="input-with-icon">
                          <span className="input-icon"><User size={18} /></span>
                          <input 
                            type="text" 
                            id="name" 
                            placeholder="Your full name"
                            value={name}
                            onChange={(e) => setName(e.target.value.replace(/[^a-zA-Z\s]/g, ''))}
                            required
                          />
                        </div>
                      </div>

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
                    </div>

                    {/* Phone Row */}
                    <div className="form-group">
                      <label>Mobile Number</label>
                      <div className="phone-input-row">
                        <select 
                          className="phone-select-code"
                          value={phoneCode}
                          onChange={(e) => setPhoneCode(e.target.value)}
                        >
                          <option value="91">+91 (India)</option>
                          <option value="1">+1 (USA)</option>
                          <option value="44">+44 (UK)</option>
                          <option value="971">+971 (UAE)</option>
                          <option value="65">+65 (Singapore)</option>
                        </select>
                        <div className="input-with-icon phone-number-input-field">
                          <span className="input-icon"><Phone size={18} /></span>
                          <input 
                            type="number" 
                            placeholder="10-digit number"
                            value={phone}
                            onChange={(e) => {
                              if (e.target.value.length <= 10) {
                                setPhone(e.target.value);
                              }
                            }}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Password + Confirm Row */}
                    <div className="form-row-two-col">
                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <div className="input-with-icon">
                          <span className="input-icon"><Lock size={18} /></span>
                          <input 
                            type={showPassword ? "text" : "password"} 
                            id="password" 
                            placeholder="Create password"
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
                        {strengthText && (
                          <span className={`strength-indicator strength-${strength}`}>
                            {strengthText}
                          </span>
                        )}
                      </div>

                      <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <div className="input-with-icon">
                          <span className="input-icon"><Lock size={18} /></span>
                          <input 
                            type={showConfirmPassword ? "text" : "password"} 
                            id="confirmPassword" 
                            placeholder="Repeat password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
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

                    {/* Referral ID */}
                    <div className="form-group">
                      <label htmlFor="referral">Referral ID <span className="optional-lbl">(Optional)</span></label>
                      <div className="input-with-icon">
                        <span className="input-icon"><Users size={18} /></span>
                        <input 
                          type="text" 
                          id="referral" 
                          placeholder="Enter referral ID if any"
                          value={referral}
                          onChange={(e) => setReferral(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* OTP WhatsApp Checkbox */}
                    <label className="whatsapp-otp-chk">
                      <input 
                        type="checkbox" 
                        checked={sendOtpWhatsapp}
                        onChange={(e) => setSendOtpWhatsapp(e.target.checked)}
                      />
                      <span>Send OTP to WhatsApp</span>
                    </label>
                  </>
                )}

                {/* OTP verification input section */}
                {otpSent && (
                  <div className="form-group otp-verification-wrapper">
                    <label htmlFor="otp">Enter 4-Digit OTP Code</label>
                    <div className="input-with-icon">
                      <span className="input-icon"><CheckCircle2 size={18} /></span>
                      <input 
                        type="number" 
                        id="otp" 
                        placeholder="Enter 4-digit code"
                        value={otpVal}
                        onChange={(e) => {
                          if (e.target.value.length <= 4) {
                            setOtpVal(e.target.value);
                          }
                        }}
                        required
                      />
                    </div>
                    <span className="resend-otp-link" onClick={() => alert('New OTP has been dispatched.')}>
                      Resend OTP Code
                    </span>
                  </div>
                )}

                {/* Submit button */}
                <button 
                  type="submit" 
                  className="register-submit-btn"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="loader-inner">
                      <div className="btn-spinner"></div>
                      <span>Processing...</span>
                    </div>
                  ) : (
                    <div className="btn-inner-content">
                      <span>{otpSent ? 'Verify & Create Account' : 'Get OTP Code'}</span>
                      <ArrowRight size={18} className="arrow-icon" />
                    </div>
                  )}
                </button>
              </form>

              <div className="login-redirect-footer">
                Already have an account? <span className="login-link" onClick={() => window.location.hash = '#/login'}>Sign in</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="video-lightbox-overlay" onClick={() => setIsVideoOpen(false)}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={() => setIsVideoOpen(false)}>
              <X size={24} />
            </button>
            <div className="iframe-container">
              <iframe 
                src="https://www.youtube.com/embed/aN3SHykSqRA?autoplay=1" 
                title="GHL India NCD Register Guide" 
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

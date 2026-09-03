import { useState } from 'react'
import heroImg from '../assets/hero_photo.jpg'

const GITHUB_URL = 'https://github.com/sonalBviidure'
const LINKEDIN_URL = 'https://www.linkedin.com/in/sonali-vidure-sbv354?utm_source=share_via&utm_content=profile&utm_medium=member_android'
const EMAIL_ID = 'viduresonali@gmail.com'

function Hero({ onOpenResume }) {
  const [visualTab, setVisualTab] = useState('code')

  return (
    <section id="home" className="section hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-status-pill">
            <span className="pulse-dot"></span>
            <span>Open to Software Engineering Opportunities</span>
          </div>

          <h1 className="hero-title">
            Hi, I&apos;m <span className="gradient-text">Sonali</span>
          </h1>

          <h2 className="hero-subtitle">
            MCA Student &amp; Full Stack Developer
          </h2>

          <p className="hero-intro">
            Entry-level software engineer with strong foundations in <strong>Core Java</strong>, <strong>Python/Django</strong>, <strong>React.js</strong>, and <strong>MySQL</strong>. Experienced in building responsive, scalable full-stack web applications with 6 months of internship experience.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ marginRight: '6px' }} aria-hidden="true">
                <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z" />
              </svg>
              View Projects
            </a>

            <a href="#contact" className="btn btn-secondary">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ marginRight: '6px' }} aria-hidden="true">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              Contact Me
            </a>

            <button
              type="button"
              className="btn btn-outline"
              onClick={onOpenResume}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ marginRight: '6px' }} aria-hidden="true">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
              </svg>
              View Resume
            </button>
          </div>

          <div className="hero-social-row">
            <span className="hero-connect-label">Connect:</span>
            <div className="hero-social-links">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="social-btn"
                title="GitHub"
              >
                <GitHubIcon />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="social-btn"
                title="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href={`mailto:${EMAIL_ID}`}
                aria-label="Send Email"
                className="social-btn"
                title="Email"
              >
                <EmailIcon />
              </a>
            </div>
            <span className="hero-location">📍 Maharashtra, India</span>
          </div>
        </div>

        <div className="hero-visual-wrapper">
          <div className="hero-visual-glow"></div>
          
          <div className="hero-visual-container">
            <div className="visual-header-tabs">
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="tab-buttons">
                <button
                  type="button"
                  className={`vtab-btn ${visualTab === 'code' ? 'active' : ''}`}
                  onClick={() => setVisualTab('code')}
                >
                  developer.json
                </button>
                <button
                  type="button"
                  className={`vtab-btn ${visualTab === 'photo' ? 'active' : ''}`}
                  onClick={() => setVisualTab('photo')}
                >
                  profile.jpg
                </button>
              </div>
            </div>

            {visualTab === 'code' ? (
              <div className="terminal-body">
                <pre className="code-block">
                  <code>
                    <span className="code-comment">// Software Engineer Candidate</span>{'\n'}
                    <span className="code-keyword">const</span> <span className="code-var">developer</span> = {'{'}{'\n'}
                    {'  '}name: <span className="code-string">&apos;Sonali Vidure&apos;</span>,{'\n'}
                    {'  '}degree: <span className="code-string">&apos;MCA (9.33 CGPA) &bull; BCA (9.20)&apos;</span>,{'\n'}
                    {'  '}role: <span className="code-string">&apos;Full Stack Developer&apos;</span>,{'\n'}
                    {'  '}experience: <span className="code-string">&apos;Peakprosys Solutions (6 Mo)&apos;</span>,{'\n'}
                    {'  '}stack: [{'\n'}
                    {'    '}<span className="code-string">&apos;Java&apos;</span>, <span className="code-string">&apos;Python&apos;</span>, <span className="code-string">&apos;React.js&apos;</span>,{'\n'}
                    {'    '}<span className="code-string">&apos;Django&apos;</span>, <span className="code-string">&apos;PHP&apos;</span>, <span className="code-string">&apos;MySQL&apos;</span>{'\n'}
                    {'  '}],{'\n'}
                    {'  '}status: <span className="code-highlight">&apos;Available to Join&apos;</span>{'\n'}
                    {'}'};
                  </code>
                </pre>
                
                <div className="terminal-footer">
                  <div className="tech-badge-strip">
                    <span className="mini-badge">React</span>
                    <span className="mini-badge">Java</span>
                    <span className="mini-badge">Python</span>
                    <span className="mini-badge">MySQL</span>
                    <span className="mini-badge">Django</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="photo-panel">
                <img
                  src={heroImg}
                  alt="Sonali Vidure"
                  className="hero-avatar-photo"
                  loading="eager"
                />
                <div className="photo-panel-footer">
                  <span className="avatar-name">Sonali Vidure</span>
                  <span className="avatar-title">Full Stack Developer</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.1-1.5-1.1-1.5-.9-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.8c.85 0 1.7.12 2.5.34 1.9-1.32 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.81c0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M6.94 8.5H3.75V20h3.19V8.5zM5.34 3.5A1.85 1.85 0 1 0 5.35 7.2 1.85 1.85 0 0 0 5.34 3.5zM20.25 20h-3.18v-5.6c0-1.34-.02-3.06-1.86-3.06-1.87 0-2.16 1.46-2.16 2.96V20H9.87V8.5h3.05v1.57h.04c.42-.8 1.46-1.65 3.01-1.65 3.22 0 3.28 2.12 3.28 4.87V20z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  )
}

export default Hero

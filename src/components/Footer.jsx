const GITHUB_URL = 'https://github.com/sonalBviidure'
const LINKEDIN_URL = 'https://www.linkedin.com/in/sonali-vidure-sbv354?utm_source=share_via&utm_content=profile&utm_medium=member_android'
const EMAIL_ID = 'viduresonali@gmail.com'

function Footer() {
  const currentYear = new Date().getFullYear()

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="site-footer">
      <div className="container footer-layout">
        <div className="footer-main-info">
          <a href="#home" className="footer-brand-logo">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-name">Sonali Vidure</span>
            <span className="logo-bracket">/&gt;</span>
          </a>
          <p className="footer-developer-tagline">
            MCA Student &amp; Full Stack Developer &bull; Building robust and scalable web software.
          </p>
        </div>

        <div className="footer-links-group">
          <div className="footer-nav-column">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#certifications">Certifications</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-social-column">
            <h4 className="footer-heading">Connect</h4>
            <div className="footer-social-items">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="footer-social-link"
              >
                <GitHubIcon />
                <span>GitHub</span>
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="footer-social-link"
              >
                <LinkedInIcon />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${EMAIL_ID}`}
                className="footer-social-link"
              >
                <EmailIcon />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p className="copyright-text">
            &copy; {currentYear} <strong>Sonali Vidure</strong>. All rights reserved.
          </p>

          <button
            type="button"
            className="scroll-to-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
              <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
            </svg>
            <span>Back to top</span>
          </button>
        </div>
      </div>
    </footer>
  )
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.1-1.5-1.1-1.5-.9-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.8c.85 0 1.7.12 2.5.34 1.9-1.32 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.81c0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M6.94 8.5H3.75V20h3.19V8.5zM5.34 3.5A1.85 1.85 0 1 0 5.35 7.2 1.85 1.85 0 0 0 5.34 3.5zM20.25 20h-3.18v-5.6c0-1.34-.02-3.06-1.86-3.06-1.87 0-2.16 1.46-2.16 2.96V20H9.87V8.5h3.05v1.57h.04c.42-.8 1.46-1.65 3.01-1.65 3.22 0 3.28 2.12 3.28 4.87V20z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  )
}

export default Footer

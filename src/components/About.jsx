import profilePhoto from '../assets/profile.jpg'

function About({ onOpenResume }) {
  const strengths = [
    'Object-Oriented Programming (OOP)',
    'Full-Stack Web Development',
    'Relational Database Architecture',
    'RESTful API Design',
    'Responsive UI Design',
    'Agile Collaboration & Git',
    'Problem Solving & Debugging',
    'Quick Learner',
  ]

  return (
    <section id="about" className="section section-secondary">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">About Me</span>
          <h2 className="section-title">Background &amp; Profile</h2>
          <p className="section-subtitle">
            A developer dedicated to writing clean, maintainable code and building high-performance web applications.
          </p>
        </div>

        <div className="about-layout-grid">
          {/* Left Column: ID Profile Photo & Quick Stats */}
          <div className="about-profile-sidebar">
            <div className="id-photo-card">
              <div className="id-photo-frame">
                <img
                  src={profilePhoto}
                  alt="Sonali Vidure - Profile"
                  className="id-profile-img"
                  loading="lazy"
                />
              </div>
              <div className="id-photo-caption">
                <h3 className="id-card-name">Sonali Vidure</h3>
                <p className="id-card-role">Full Stack Developer &bull; MCA</p>
                <div className="id-status-chip">
                  <span className="mini-pulse-dot"></span>
                  <span>Available to Join</span>
                </div>
              </div>
            </div>

            <div className="about-quick-contact-card">
              <h4 className="quick-card-title">Quick Details</h4>
              <div className="quick-row">
                <span className="q-label">Email:</span>
                <a href="mailto:viduresonali@gmail.com" className="q-val clickable-link" title="Send email">
                  viduresonali@gmail.com
                </a>
              </div>
              <div className="quick-row">
                <span className="q-label">Phone:</span>
                <a href="tel:+918180939354" className="q-val clickable-link" title="Call Sonali">
                  +91 8180939354
                </a>
              </div>
              <div className="quick-row">
                <span className="q-label">Location:</span>
                <span className="q-val">A/P Savalaj, Dist. Sangli</span>
              </div>
              <div className="quick-row">
                <span className="q-label">Mobility:</span>
                <span className="q-val">Pune, Bangalore, Remote</span>
              </div>
            </div>
          </div>

          {/* Right Column: Objective, Highlights & Strengths */}
          <div className="about-main-content">
            <div className="about-bio-card">
              <h3 className="about-card-heading">Career Objective</h3>
              <p className="about-bio-lead">
                Motivated and detail-oriented computer application graduate with a strong foundation in software development, web technologies, and database management. Seeking an entry-level software development opportunity to apply technical knowledge, contribute to real-world projects, and continue developing practical full-stack and web development skills.
              </p>

              <p className="about-bio-text">
                During my 6-month Software Developer Internship at <strong>Peakprosys Solutions Pvt. Ltd., Pune</strong> (Mar 2025 &ndash; Aug 2025), I worked on real-time web application projects involving administrative dashboard modules, relational database schemas with MySQL, and responsive interfaces with Bootstrap and CSS.
              </p>

              <div className="about-strengths-block">
                <h4 className="strengths-title">Core Competencies</h4>
                <div className="badge-wrap">
                  {strengths.map((item) => (
                    <span key={item} className="tech-badge">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="about-btn-row">
                <button
                  type="button"
                  className="btn btn-primary btn-small"
                  onClick={onOpenResume}
                  aria-label="Open Full Resume Modal"
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style={{ marginRight: '6px' }} aria-hidden="true">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                  </svg>
                  View Full Resume
                </button>
                <a
                  href="/Sonali_Vidure_Resume.pdf"
                  download="Sonali_Vidure_Resume.pdf"
                  className="btn btn-outline btn-small"
                  aria-label="Download Resume PDF"
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style={{ marginRight: '6px' }} aria-hidden="true">
                    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z" />
                  </svg>
                  Download PDF
                </a>
              </div>
            </div>

            {/* Key Highlights Grid */}
            <div className="highlights-grid">
              <div className="info-stat-card">
                <div className="stat-icon-wrap">
                  <span className="stat-icon">🎓</span>
                </div>
                <div className="stat-text-wrap">
                  <h4 className="stat-title">Academic Distinction</h4>
                  <p className="stat-desc">MCA: <strong>9.33 CGPA</strong> (KIT IMER) &bull; BCA: <strong>9.20 CGPA</strong> (DYP ATU)</p>
                </div>
              </div>

              <div className="info-stat-card">
                <div className="stat-icon-wrap">
                  <span className="stat-icon">💼</span>
                </div>
                <div className="stat-text-wrap">
                  <h4 className="stat-title">6-Month Industry Internship</h4>
                  <p className="stat-desc">Software Developer Intern at <strong>Peakprosys Solutions</strong>, Pune</p>
                </div>
              </div>

              <div className="info-stat-card">
                <div className="stat-icon-wrap">
                  <span className="stat-icon">🏆</span>
                </div>
                <div className="stat-text-wrap">
                  <h4 className="stat-title">Merit Scholar</h4>
                  <p className="stat-desc">Recipient of <strong>Shantadevi D. Patil Merit Scholarship Award</strong></p>
                </div>
              </div>

              <div className="info-stat-card">
                <div className="stat-icon-wrap">
                  <span className="stat-icon">💻</span>
                </div>
                <div className="stat-text-wrap">
                  <h4 className="stat-title">Core Development</h4>
                  <p className="stat-desc">Full-stack development in <strong>Java, Python, React.js, and MySQL</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

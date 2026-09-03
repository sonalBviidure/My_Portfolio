function About({ onOpenResume }) {
  const strengths = [
    'Object-Oriented Programming',
    'Full-Stack Architecture',
    'Database Design',
    'Agile Collaboration',
    'Problem Solving',
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
          {/* Left Column: Short About Me */}
          <div className="about-bio-card">
            <h3 className="about-card-heading">Career Objective</h3>
            <p className="about-bio-lead">
              Detail-oriented <strong>BCA graduate</strong> currently pursuing <strong>MCA</strong> with strong academic performance (9.33 MCA CGPA, 9.20 BCA CGPA) and hands-on experience in full-stack software development.
            </p>
            <p className="about-bio-text">
              During my 6-month Software Developer Internship at Peakprosys Solutions, I built dynamic dashboard modules, implemented secure session-based authentication, and worked extensively with relational database architectures.
            </p>
            <p className="about-bio-text">
              I am seeking an entry-level Software Engineer / Full Stack Developer position where I can apply my skills in Java, Python, React, and MySQL to deliver impactful software solutions.
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
              >
                View Full Resume
              </button>
              <a
                href="/Sonali_Vidure_Resume.pdf"
                download="Sonali_Vidure_Resume.pdf"
                className="btn btn-outline btn-small"
              >
                Download PDF
              </a>
            </div>
          </div>

          {/* Right Column: Developer Info Card */}
          <div className="about-info-card">
            <h3 className="about-card-heading">Key Highlights</h3>
            
            <div className="info-item-list">
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
                  <h4 className="stat-title">6-Month Internship</h4>
                  <p className="stat-desc">Software Developer Intern at <strong>Peakprosys Solutions</strong>, Pune</p>
                </div>
              </div>

              <div className="info-stat-card">
                <div className="stat-icon-wrap">
                  <span className="stat-icon">🏆</span>
                </div>
                <div className="stat-text-wrap">
                  <h4 className="stat-title">Merit Scholar</h4>
                  <p className="stat-desc">Recipient of <strong>Shantadevi D Patil Merit Scholarship</strong> for top academic rank</p>
                </div>
              </div>

              <div className="info-stat-card">
                <div className="stat-icon-wrap">
                  <span className="stat-icon">📍</span>
                </div>
                <div className="stat-text-wrap">
                  <h4 className="stat-title">Location &amp; Mobility</h4>
                  <p className="stat-desc">Based in <strong>Sangli / Kolhapur</strong>, open to roles in <strong>Pune, Bangalore, Remote</strong></p>
                </div>
              </div>
            </div>

            <div className="quick-contact-summary">
              <div className="quick-row">
                <span className="q-label">Email:</span>
                <a href="mailto:viduresonali@gmail.com" className="q-val">viduresonali@gmail.com</a>
              </div>
              <div className="quick-row">
                <span className="q-label">Phone:</span>
                <a href="tel:+918180939354" className="q-val">+91 8180939354</a>
              </div>
              <div className="quick-row">
                <span className="q-label">Availability:</span>
                <span className="q-val text-success">Immediate / Ready to Join</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

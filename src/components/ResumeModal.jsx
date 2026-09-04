import { useEffect, useState } from 'react'

function ResumeModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('doc') // 'doc' or 'pdf'

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div className="modal-content-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header-bar">
          <div className="modal-title-wrap">
            <span className="modal-tag">Curriculum Vitae</span>
            <h3 id="resume-modal-title" className="modal-title">Sonali Vidure &mdash; Resume</h3>
          </div>

          <div className="modal-view-tabs">
            <button
              type="button"
              className={`modal-view-tab-btn ${activeTab === 'doc' ? 'active' : ''}`}
              onClick={() => setActiveTab('doc')}
            >
              Interactive View
            </button>
            <button
              type="button"
              className={`modal-view-tab-btn ${activeTab === 'pdf' ? 'active' : ''}`}
              onClick={() => setActiveTab('pdf')}
            >
              PDF Document
            </button>
          </div>

          <div className="modal-btn-group">
            <a
              href="/Sonali_Vidure_Resume.pdf"
              download="Sonali_Vidure_Resume.pdf"
              className="btn btn-small btn-primary"
              title="Download Resume PDF"
            >
              <DownloadIcon />
              <span>Download PDF</span>
            </a>
            <button
              type="button"
              className="modal-close-icon-btn"
              onClick={onClose}
              aria-label="Close resume dialog"
            >
              &times;
            </button>
          </div>
        </div>

        <div className="modal-body-scrollable">
          {activeTab === 'doc' ? (
            <div className="resume-paper-doc">
              {/* Header */}
              <div className="resume-doc-header">
                <h1 className="resume-doc-name">SONALI VIDURE</h1>
                <div className="resume-doc-contact">
                  <a href="tel:+918180939354" className="r-link">+91 8180939354</a>
                  <span className="r-sep">&bull;</span>
                  <span>A/P Savalaj, Dist. Sangli</span>
                  <span className="r-sep">&bull;</span>
                  <a href="mailto:viduresonali@gmail.com" className="r-link">viduresonali@gmail.com</a>
                  <span className="r-sep">&bull;</span>
                  <a href="https://www.linkedin.com/in/sonali-vidure-sbv354" target="_blank" rel="noreferrer" className="r-link">LinkedIn</a>
                  <span className="r-sep">&bull;</span>
                  <a href="https://github.com/sonalBviidure" target="_blank" rel="noreferrer" className="r-link">GitHub</a>
                </div>
              </div>

              {/* Objective */}
              <div className="resume-doc-section">
                <h2 className="resume-doc-heading">OBJECTIVE</h2>
                <p className="resume-doc-para">
                  Motivated and detail-oriented computer application graduate with a strong foundation in software development, web technologies, and database management. Seeking an entry-level software development opportunity to apply technical knowledge, contribute to real-world projects, and continue developing practical full-stack and web development skills.
                </p>
              </div>

              {/* Education */}
              <div className="resume-doc-section">
                <h2 className="resume-doc-heading">EDUCATION</h2>
                <div className="resume-doc-entry">
                  <div className="entry-row">
                    <span className="entry-bold">Master of Computer Application (MCA)</span>
                    <span className="entry-meta">2025 &ndash; Present</span>
                  </div>
                  <div className="entry-subrow">
                    <span className="entry-italic">KIT&apos;s Institute of Management &amp; Engineering Research (IMER), Kolhapur</span>
                    <span className="entry-score">CGPA: 9.33</span>
                  </div>
                </div>

                <div className="resume-doc-entry">
                  <div className="entry-row">
                    <span className="entry-bold">Bachelor of Computer Application (BCA)</span>
                    <span className="entry-meta">2022 &ndash; 2025</span>
                  </div>
                  <div className="entry-subrow">
                    <span className="entry-italic">D.Y.P &ndash; ATU, Talsande</span>
                    <span className="entry-score">CGPA: 9.20</span>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="resume-doc-section">
                <h2 className="resume-doc-heading">EXPERIENCE</h2>
                <div className="resume-doc-entry">
                  <div className="entry-row">
                    <span className="entry-bold">Software Developer Intern &mdash; Peakprosys Solutions Pvt. Ltd., Pune</span>
                    <span className="entry-meta">Mar 2025 &ndash; Aug 2025</span>
                  </div>
                  <ul className="resume-doc-bullets">
                    <li>Worked on real-time web application projects involving dashboard modules and CRUD-based functionality.</li>
                    <li>Gained practical exposure to full-stack development, database integration, and responsive web interfaces.</li>
                    <li>Contributed to debugging, problem-solving, and collaboration within a professional development environment.</li>
                  </ul>
                </div>
              </div>

              {/* Projects */}
              <div className="resume-doc-section">
                <h2 className="resume-doc-heading">PROJECTS</h2>
                
                <div className="resume-doc-entry">
                  <div className="entry-row">
                    <span className="entry-bold">NGO Admin Dashboard</span>
                    <span className="entry-tech-tag">PHP, MySQL</span>
                  </div>
                  <ul className="resume-doc-bullets">
                    <li>Developed a dynamic administration dashboard for managing colleges, trainers, courses, and students.</li>
                    <li>Applied CRUD operations for structured record management and designed a responsive Bootstrap interface.</li>
                    <li><strong>Value:</strong> Centralizes NGO administrative records for organized and efficient management.</li>
                  </ul>
                </div>

                <div className="resume-doc-entry">
                  <div className="entry-row">
                    <span className="entry-bold">Business Board Matrix Solution</span>
                    <span className="entry-tech-tag">HTML, CSS, PHP, MySQL</span>
                  </div>
                  <ul className="resume-doc-bullets">
                    <li>Developed a web-based business management solution with area-wise post filtering and meeting management.</li>
                    <li>Built separate dashboards for admin and business owners with role-specific functionality.</li>
                    <li><strong>Value:</strong> Supports structured business networking, meetings, posts, and referral-oriented activities.</li>
                  </ul>
                </div>

                <div className="resume-doc-entry">
                  <div className="entry-row">
                    <span className="entry-bold">Farm Management System</span>
                    <span className="entry-tech-tag">Ongoing &mdash; MCA Project</span>
                  </div>
                  <ul className="resume-doc-bullets">
                    <li>Ongoing MCA project focused on a centralized digital system for organizing farming-related activities and resources.</li>
                    <li>Aims to make farm-related activities more organized and manageable through a digital platform.</li>
                  </ul>
                </div>
              </div>

              {/* Technical Skills */}
              <div className="resume-doc-section">
                <h2 className="resume-doc-heading">TECHNICAL SKILLS</h2>
                <div className="skills-grid-lines">
                  <div className="skill-line">
                    <span className="skill-line-label">Programming Languages:</span>
                    <span className="skill-line-val">C++, Core Java, Python</span>
                  </div>
                  <div className="skill-line">
                    <span className="skill-line-label">Web Technologies:</span>
                    <span className="skill-line-val">HTML, CSS, Bootstrap, React.js</span>
                  </div>
                  <div className="skill-line">
                    <span className="skill-line-label">Databases:</span>
                    <span className="skill-line-val">MySQL, MongoDB, PostgreSQL</span>
                  </div>
                  <div className="skill-line">
                    <span className="skill-line-label">Tools:</span>
                    <span className="skill-line-val">VS Code, GitHub, Excel, Power BI</span>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="resume-doc-section">
                <h2 className="resume-doc-heading">ACHIEVEMENTS &amp; CERTIFICATIONS</h2>
                <ul className="resume-doc-bullets">
                  <li>Shantadevi D. Patil Merit Scholarship Award (2022&ndash;23)</li>
                  <li>Hands-on PHP Training Certificate</li>
                  <li>Microsoft Excel Certificate</li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="modal-iframe-wrap">
              <iframe
                src="/Sonali_Vidure_Resume.pdf#toolbar=1"
                title="Sonali Vidure Resume PDF"
                className="resume-pdf-frame"
              />
            </div>
          )}
        </div>

        <div className="modal-footer-bar">
          <p className="modal-footer-info">
            MCA Student &bull; 9.33 CGPA &bull; Full Stack Developer
          </p>
          <div className="modal-footer-actions">
            <a
              href="/Sonali_Vidure_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn btn-small btn-outline"
            >
              Open PDF in New Tab
            </a>
            <button type="button" className="btn btn-small btn-outline" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style={{ marginRight: '6px' }} aria-hidden="true">
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z" />
    </svg>
  )
}

export default ResumeModal

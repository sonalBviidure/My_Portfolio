function Experience() {
  const experiences = [
    {
      role: 'Software Developer Intern',
      type: '6-Month Internship',
      company: 'Peakprosys Solutions Pvt. Ltd.',
      location: 'Pune, Maharashtra',
      period: 'March 2025 – August 2025',
      points: [
        'Designed and developed dynamic administration dashboard modules and full-stack CRUD applications using PHP and MySQL.',
        'Implemented secure session-based authentication, role-based access control (RBAC), and relational schema models.',
        'Collaborated in an Agile development environment utilizing Git and GitHub for version control, issue tracking, and code reviews.',
        'Enhanced front-end responsiveness and accessibility across mobile and desktop devices using Bootstrap and CSS3.',
      ],
      techStack: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'Git', 'Agile', 'CRUD'],
    },
  ]

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">Career Path</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            Professional industry experience in building real-world web applications and collaborative software development.
          </p>
        </div>

        <div className="timeline-container">
          <div className="timeline-track"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-indicator">
                <span className="timeline-dot"></span>
              </div>

              <div className="timeline-card">
                <div className="timeline-card-header">
                  <div className="role-company-group">
                    <div className="role-badge-row">
                      <h3 className="timeline-role">{exp.role}</h3>
                      <span className="timeline-type-badge">{exp.type}</span>
                    </div>
                    <h4 className="timeline-company">{exp.company}</h4>
                  </div>

                  <div className="timeline-meta">
                    <span className="timeline-period">{exp.period}</span>
                    <span className="timeline-location">📍 {exp.location}</span>
                  </div>
                </div>

                <ul className="timeline-points">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx}>
                      <span className="point-bullet">&bull;</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="timeline-stack-row">
                  {exp.techStack.map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

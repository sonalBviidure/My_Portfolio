function Experience() {
  const experiences = [
    {
      role: 'Software Developer Intern',
      type: '6-Month Internship',
      company: 'Peakprosys Solutions Pvt. Ltd.',
      location: 'Pune, Maharashtra',
      period: 'Mar 2025 – Aug 2025',
      points: [
        'Worked on real-time web application projects involving administrative dashboard modules and CRUD-based functionality.',
        'Gained practical exposure to full-stack development, database integration with MySQL, and responsive web interfaces using Bootstrap.',
        'Contributed to debugging, problem-solving, code reviews, and collaboration within a professional development team environment.',
      ],
      techStack: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'HTML5/CSS3', 'Git', 'CRUD'],
    },
  ]

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">Career Path</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            Hands-on software development experience gained in an industry development setting.
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

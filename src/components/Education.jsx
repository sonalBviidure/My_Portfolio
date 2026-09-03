const educationList = [
  {
    degree: 'Master of Computer Application (MCA)',
    shortDegree: 'MCA',
    institute: "KIT's Institute of Management Education & Research, Kolhapur",
    duration: '2025 – Present',
    cgpa: '9.33 CGPA',
    status: 'Currently Pursuing',
    coursework: 'Advanced Software Engineering, Web Technologies, Database Systems, Object-Oriented Programming.',
  },
  {
    degree: 'Bachelor of Computer Application (BCA)',
    shortDegree: 'BCA',
    institute: 'D.Y. Patil Agriculture and Technical University, Talsande',
    duration: '2022 – 2025',
    cgpa: '9.20 CGPA',
    status: 'Graduated with Distinction',
    coursework: 'Core Java, Python, C++, Full-Stack Web Development, Relational DBMS, Computer Networks.',
  },
]

function Education() {
  return (
    <section id="education" className="section section-secondary">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">Academics</span>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Consistent academic excellence with a focus on computer applications, software engineering, and systems design.
          </p>
        </div>

        <div className="timeline-container">
          <div className="timeline-track"></div>

          {educationList.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-indicator">
                <span className="timeline-dot cyan"></span>
              </div>

              <div className="timeline-card">
                <div className="timeline-card-header">
                  <div className="role-company-group">
                    <div className="role-badge-row">
                      <h3 className="timeline-role">{item.degree}</h3>
                      <span className="timeline-cgpa-badge">{item.cgpa}</span>
                    </div>
                    <h4 className="timeline-company">{item.institute}</h4>
                  </div>

                  <div className="timeline-meta">
                    <span className="timeline-period">{item.duration}</span>
                    <span className="timeline-status-tag">{item.status}</span>
                  </div>
                </div>

                <p className="timeline-coursework">
                  <strong>Coursework:</strong> {item.coursework}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

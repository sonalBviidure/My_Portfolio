const educationList = [
  {
    degree: 'Master of Computer Application (MCA)',
    shortDegree: 'MCA',
    institute: "KIT's Institute of Management & Engineering Research (IMER), Kolhapur",
    duration: '2025 – Present',
    cgpa: '9.33 CGPA',
    status: 'Currently Pursuing',
    coursework: 'Advanced Software Engineering, Web Technologies, Relational Database Systems, Object-Oriented Programming, Data Structures.',
  },
  {
    degree: 'Bachelor of Computer Application (BCA)',
    shortDegree: 'BCA',
    institute: 'D.Y. Patil Agriculture and Technical University (D.Y.P – ATU), Talsande',
    duration: '2022 – 2025',
    cgpa: '9.20 CGPA',
    status: 'Graduated with Distinction',
    coursework: 'Core Java, Python, C++, Web Development (HTML/CSS/JS), Database Management Systems, Computer Networks.',
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
            Consistent academic excellence in computer applications, software engineering principles, and systems development.
          </p>
        </div>

        <div className="timeline-container">
          <div className="timeline-track"></div>

          {educationList.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-indicator">
                <span className="timeline-dot"></span>
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
                  <strong>Key Subjects:</strong> {item.coursework}
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

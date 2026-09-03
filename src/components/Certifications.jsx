const certifications = [
  {
    title: 'Shantadevi D Patil Merit Scholarship Award',
    issuer: 'D.Y. Patil Agriculture and Technical University',
    year: '2022 – 2023',
    type: 'Merit Award',
    desc: 'Awarded merit scholarship recognition for securing top academic ranking in Computer Applications.',
  },
  {
    title: 'Hands-on PHP Training Certificate',
    issuer: 'Technical Training Program',
    year: '2024',
    type: 'Certification',
    desc: 'Certified training covering PHP fundamentals, MySQL integration, session security, and CRUD development.',
  },
  {
    title: 'Microsoft Excel Certificate',
    issuer: 'Microsoft Skills Program',
    year: '2023',
    type: 'Certification',
    desc: 'Certified proficiency in spreadsheet data analysis, advanced formulas, structured reporting, and data management.',
  },
  {
    title: 'Academic Distinction Honors (9+ CGPA)',
    issuer: "KIT'S IMER & D.Y.P-ATU",
    year: '2022 – Present',
    type: 'Academic Merit',
    desc: 'Maintained 9.33 CGPA in MCA and 9.20 CGPA in BCA with consistent University distinction.',
  },
]

function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">Recognition</span>
          <h2 className="section-title">Certifications &amp; Awards</h2>
          <p className="section-subtitle">
            Formal technical certifications, academic merit scholarships, and recognized accomplishments.
          </p>
        </div>

        <div className="cert-card-grid">
          {certifications.map((item) => (
            <article key={item.title} className="cert-card">
              <div className="cert-card-top">
                <span className={`cert-badge ${item.type === 'Merit Award' ? 'gold' : ''}`}>
                  {item.type}
                </span>
                <span className="cert-year-tag">{item.year}</span>
              </div>

              <h3 className="cert-card-title">{item.title}</h3>
              <h4 className="cert-issuer-name">{item.issuer}</h4>
              <p className="cert-desc">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications

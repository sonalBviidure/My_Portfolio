import { useState } from 'react'

const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: '💻',
    skills: [
      { name: 'React.js', level: 'Component Architecture' },
      { name: 'JavaScript (ES6+)', level: 'Modern JS' },
      { name: 'HTML5 & CSS3', level: 'Semantic & Layouts' },
      { name: 'Bootstrap', level: 'Responsive UI' },
      { name: 'Responsive Design', level: 'Mobile First' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Python & Django', level: 'Framework & Auth' },
      { name: 'Core Java', level: 'OOP & Collections' },
      { name: 'PHP', level: 'Sessions & CRUD' },
      { name: 'RESTful APIs', level: 'JSON & Integration' },
      { name: 'OOP Principles', level: 'Clean Code' },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    icon: '🗄️',
    skills: [
      { name: 'MySQL', level: 'Relational Design' },
      { name: 'PostgreSQL', level: 'Schema & Queries' },
      { name: 'CRUD Architecture', level: 'Data Management' },
      { name: 'SQL Optimization', level: 'Joins & Indexes' },
      { name: 'Database Normalization', level: 'Core CS' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: '🛠️',
    skills: [
      { name: 'Git & GitHub', level: 'Version Control' },
      { name: 'VS Code', level: 'Primary IDE' },
      { name: 'Microsoft Excel', level: 'Certified' },
      { name: 'Power BI Basics', level: 'Analytics' },
      { name: 'Agile & Code Reviews', level: 'Collaboration' },
    ],
  },
]

function Skills() {
  const [activeFilter, setActiveFilter] = useState('all')

  const displayedCategories = activeFilter === 'all'
    ? skillCategories
    : skillCategories.filter(c => c.id === activeFilter)

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">Technical Expertise</span>
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <p className="section-subtitle">
            Core technical competencies developed through academic coursework, software development internship, and project implementations.
          </p>
        </div>

        <div className="filter-pill-bar">
          <button
            type="button"
            className={`filter-pill-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Skills
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`filter-pill-btn ${activeFilter === cat.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat.id)}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <div className="skills-category-grid">
          {displayedCategories.map((category) => (
            <article key={category.id} className="skill-group-card">
              <div className="skill-group-header">
                <span className="skill-group-icon">{category.icon}</span>
                <h3 className="skill-group-title">{category.title}</h3>
              </div>

              <div className="skill-badge-list">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-badge-item">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-subtext">{skill.level}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

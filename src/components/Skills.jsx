import { useState } from 'react'

const skillCategories = [
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: '⌨️',
    skills: [
      { name: 'Core Java', level: 'OOP, Collections, Core Fundamentals' },
      { name: 'Python', level: 'Backend Logic, Data Structures' },
      { name: 'C++', level: 'Object-Oriented Programming, Logic' },
      { name: 'PHP', level: 'Session Handling, CRUD Operations' },
    ],
  },
  {
    id: 'web',
    title: 'Web Technologies',
    icon: '🌐',
    skills: [
      { name: 'React.js', level: 'Component Architecture, Hooks' },
      { name: 'JavaScript (ES6+)', level: 'Async, DOM, Modern Syntax' },
      { name: 'HTML5 & CSS3', level: 'Semantic Markup, Responsive Layouts' },
      { name: 'Bootstrap', level: 'Responsive Grid, UI Components' },
    ],
  },
  {
    id: 'database',
    title: 'Databases',
    icon: '🗄️',
    skills: [
      { name: 'MySQL', level: 'Relational Schema Design & Joins' },
      { name: 'MongoDB', level: 'NoSQL, Document Model' },
      { name: 'PostgreSQL', level: 'Schema Queries & Optimization' },
      { name: 'CRUD Operations', level: 'Data Management & Transactions' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    icon: '🛠️',
    skills: [
      { name: 'Git & GitHub', level: 'Version Control, Collaborative PRs' },
      { name: 'VS Code', level: 'Primary Code Editor & Debugging' },
      { name: 'Microsoft Excel', level: 'Certified Data Management & Analysis' },
      { name: 'Power BI', level: 'Analytics & Visual Reporting Basics' },
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

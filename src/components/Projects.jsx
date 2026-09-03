import { useState } from 'react'

const GITHUB_PROFILE = 'https://github.com/sonalBviidure'

const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'python', label: 'Python / Django' },
  { id: 'react', label: 'React & AI' },
]

const projects = [
  {
    title: 'NGO Admin Dashboard',
    tag: 'Web Application',
    category: 'fullstack',
    description:
      'Dynamic administration dashboard for managing affiliated colleges, trainers, courses, and student batches with secure session-based authentication, role authorization, and responsive UI.',
    technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'Sessions'],
    github: GITHUB_PROFILE,
    demo: GITHUB_PROFILE,
  },
  {
    title: 'Business Board Matrix Solution (BBMS)',
    tag: 'B2B Networking Platform',
    category: 'fullstack',
    description:
      'B2B referral networking platform featuring area-wise post filtering, meeting scheduling, and dedicated role dashboards for administrators and business members.',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML5/CSS3', 'CRUD'],
    github: GITHUB_PROFILE,
    demo: GITHUB_PROFILE,
  },
  {
    title: 'Lead Generation Management System',
    tag: 'CRM & Lead Management',
    category: 'python',
    description:
      'Enterprise CRM and lead tracking application featuring role-based access control (RBAC), multi-stage pipeline workflows, status tracking, and reporting analytics.',
    technologies: ['Python', 'Django', 'MySQL', 'Bootstrap', 'RBAC'],
    github: GITHUB_PROFILE,
    demo: GITHUB_PROFILE,
  },
  {
    title: 'RAG-Based AI Resume Ranker',
    tag: 'AI / NLP Screening',
    category: 'react',
    description:
      'Automated candidate evaluation platform that leverages vector embeddings and semantic search to rank resumes objectively against customized job descriptions.',
    technologies: ['React.js', 'Python', 'ChromaDB', 'Vector Search', 'REST API'],
    github: GITHUB_PROFILE,
    demo: GITHUB_PROFILE,
  },
]

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === selectedCategory)

  return (
    <section id="projects" className="section section-secondary">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">Featured Work</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            A selection of production-grade management dashboards, CRM platforms, and full-stack software solutions.
          </p>
        </div>

        <div className="filter-pill-bar">
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`filter-pill-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="projects-card-grid">
          {filteredProjects.map((project) => (
            <article key={project.title} className="premium-project-card">
              <div className="project-card-header">
                <span className="project-category-tag">{project.tag}</span>
                <h3 className="project-title">{project.title}</h3>
              </div>

              <p className="project-desc">{project.description}</p>

              <div className="project-tech-badges">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-card-actions">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-small btn-primary"
                  aria-label={`View GitHub repository for ${project.title}`}
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style={{ marginRight: '6px' }} aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.1-1.5-1.1-1.5-.9-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.8c.85 0 1.7.12 2.5.34 1.9-1.32 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.81c0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
                  </svg>
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-small btn-outline"
                  aria-label={`View Live Demo for ${project.title}`}
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style={{ marginRight: '6px' }} aria-hidden="true">
                    <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                  </svg>
                  Live Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

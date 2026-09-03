import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ResumeModal from './components/ResumeModal'
import './App.css'

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  function openResume() {
    setIsResumeOpen(true)
  }

  function closeResume() {
    setIsResumeOpen(false)
  }

  return (
    <div className="app">
      <Navbar onOpenResume={openResume} />
      <main id="main-content">
        <Hero onOpenResume={openResume} />
        <About onOpenResume={openResume} />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <ResumeModal isOpen={isResumeOpen} onClose={closeResume} />
    </div>
  )
}

export default App

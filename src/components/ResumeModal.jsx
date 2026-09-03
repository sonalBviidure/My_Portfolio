import { useEffect } from 'react'

function ResumeModal({ isOpen, onClose }) {
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
            <h3 id="resume-modal-title" className="modal-title">Sonali Vidure - Resume</h3>
          </div>
          <div className="modal-btn-group">
            <a
              href="/Sonali_Vidure_Resume.pdf"
              download="Sonali_Vidure_Resume.pdf"
              className="btn btn-small btn-primary"
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

        <div className="modal-iframe-wrap">
          <iframe
            src="/Sonali_Vidure_Resume.pdf#toolbar=1"
            title="Sonali Vidure Resume"
            className="resume-pdf-frame"
          />
        </div>

        <div className="modal-footer-bar">
          <p className="modal-footer-info">
            BCA Graduate &amp; MCA Student &bull; Open to Software Engineering Roles
          </p>
          <div className="modal-footer-actions">
            <a
              href="/Sonali_Vidure_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn btn-small btn-outline"
            >
              Open in New Tab
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

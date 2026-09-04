import { useState } from 'react'

const EMAIL_ADDRESS = 'viduresonali@gmail.com'
const GITHUB_URL = 'https://github.com/sonalBviidure'
const LINKEDIN_URL = 'https://www.linkedin.com/in/sonali-vidure-sbv354'
const PHONE_NUMBER = '+91 8180939354'
const LOCATION = 'A/P Savalaj, Dist. Sangli, Maharashtra'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)

  function handleCopyEmail() {
    navigator.clipboard.writeText(EMAIL_ADDRESS).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    })
  }

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  function validate() {
    const nextErrors = {}
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!formData.name.trim()) {
      nextErrors.name = 'Please enter your name.'
    }

    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your email address.'
    } else if (!emailPattern.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }

    if (!formData.message.trim()) {
      nextErrors.message = 'Please enter your message.'
    }

    return nextErrors
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      return
    }

    // Static frontend mailto trigger
    const subject = encodeURIComponent(formData.subject.trim() || `Portfolio Contact from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    const mailtoUrl = `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`

    // Trigger user's mail client
    window.location.href = mailtoUrl
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section section-secondary">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">Get In Touch</span>
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">
            Available for Software Engineer, Full Stack, and IT developer opportunities. Let&apos;s discuss how I can contribute to your team.
          </p>
        </div>

        <div className="contact-layout-grid">
          {/* Left Column: Direct Clickable Channels */}
          <div className="contact-info-column">
            <h3 className="contact-column-heading">Contact Details</h3>
            <p className="contact-column-desc">
              Feel free to reach out via email, phone, LinkedIn, or explore my GitHub profile.
            </p>

            <div className="contact-channels-list">
              <div className="contact-channel-item">
                <div className="channel-icon-wrap">
                  <EmailIcon />
                </div>
                <div className="channel-content">
                  <span className="channel-type">Email</span>
                  <a href={`mailto:${EMAIL_ADDRESS}`} className="channel-link clickable-link" title="Click to send email">
                    {EMAIL_ADDRESS}
                  </a>
                </div>
                <button
                  type="button"
                  className="btn-copy-tag"
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? '✓ Copied' : 'Copy'}
                </button>
              </div>

              <div className="contact-channel-item">
                <div className="channel-icon-wrap">
                  <PhoneIcon />
                </div>
                <div className="channel-content">
                  <span className="channel-type">Phone</span>
                  <a href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} className="channel-link clickable-link" title="Click to call">
                    {PHONE_NUMBER}
                  </a>
                </div>
              </div>

              <div className="contact-channel-item">
                <div className="channel-icon-wrap">
                  <LocationIcon />
                </div>
                <div className="channel-content">
                  <span className="channel-type">Location</span>
                  <span className="channel-text">{LOCATION}</span>
                </div>
              </div>

              <div className="contact-channel-item">
                <div className="channel-icon-wrap">
                  <LinkedInIcon />
                </div>
                <div className="channel-content">
                  <span className="channel-type">LinkedIn</span>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="channel-link clickable-link"
                    title="View LinkedIn Profile (opens in new tab)"
                  >
                    linkedin.com/in/sonali-vidure-sbv354
                  </a>
                </div>
              </div>

              <div className="contact-channel-item">
                <div className="channel-icon-wrap">
                  <GitHubIcon />
                </div>
                <div className="channel-content">
                  <span className="channel-type">GitHub</span>
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="channel-link clickable-link"
                    title="View GitHub Profile (opens in new tab)"
                  >
                    github.com/sonalBviidure
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Static Frontend Direct Message Form */}
          <div className="contact-form-column">
            <form className="developer-contact-form" onSubmit={handleSubmit} noValidate>
              <h3 className="contact-column-heading">Send a Direct Message</h3>

              <div className="form-field">
                <label htmlFor="name" className="field-label">Your Name <span className="req">*</span></label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className={`field-input ${errors.name ? 'error' : ''}`}
                />
                {errors.name && <span className="field-error-text">{errors.name}</span>}
              </div>

              <div className="form-field">
                <label htmlFor="email" className="field-label">Email Address <span className="req">*</span></label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  className={`field-input ${errors.email ? 'error' : ''}`}
                />
                {errors.email && <span className="field-error-text">{errors.email}</span>}
              </div>

              <div className="form-field">
                <label htmlFor="subject" className="field-label">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Software Engineer Role / Project Inquiry"
                  className="field-input"
                />
              </div>

              <div className="form-field">
                <label htmlFor="message" className="field-label">Message <span className="req">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Sonali, I came across your portfolio and would like to discuss..."
                  className={`field-input field-textarea ${errors.message ? 'error' : ''}`}
                ></textarea>
                {errors.message && <span className="field-error-text">{errors.message}</span>}
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-submit-full"
              >
                Send Message via Email
              </button>

              {submitted && (
                <div className="form-alert-success" role="alert">
                  <p>
                    <strong>Email draft opened!</strong> If your email application did not launch automatically, you can also email directly at{' '}
                    <a href={`mailto:${EMAIL_ADDRESS}`} style={{ textDecoration: 'underline', fontWeight: 600 }}>
                      {EMAIL_ADDRESS}
                    </a>.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M6.94 8.5H3.75V20h3.19V8.5zM5.34 3.5A1.85 1.85 0 1 0 5.35 7.2 1.85 1.85 0 0 0 5.34 3.5zM20.25 20h-3.18v-5.6c0-1.34-.02-3.06-1.86-3.06-1.87 0-2.16 1.46-2.16 2.96V20H9.87V8.5h3.05v1.57h.04c.42-.8 1.46-1.65 3.01-1.65 3.22 0 3.28 2.12 3.28 4.87V20z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.1-1.5-1.1-1.5-.9-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.8c.85 0 1.7.12 2.5.34 1.9-1.32 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.81c0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
    </svg>
  )
}

export default Contact

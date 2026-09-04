import os
import subprocess
import tempfile
import shutil

html_content = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Sonali Vidure - Resume</title>
<style>
  @page {
    size: letter;
    margin: 0.42in 0.52in;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Calibri', 'Segoe UI', Arial, sans-serif;
    color: #1a1a1a;
    line-height: 1.34;
    font-size: 10.5pt;
    background: #ffffff;
  }
  .header {
    text-align: center;
    margin-bottom: 10px;
  }
  .header h1 {
    font-size: 20pt;
    font-weight: 700;
    letter-spacing: 0.05em;
    color: #0f2744;
    margin-bottom: 3px;
    text-transform: uppercase;
  }
  .contact-bar {
    font-size: 9.5pt;
    color: #333333;
  }
  .contact-bar a {
    color: #1d4ed8;
    text-decoration: underline;
  }
  .contact-sep {
    margin: 0 5px;
    color: #888888;
  }
  .section {
    margin-top: 10px;
    margin-bottom: 7px;
  }
  .section-title {
    font-size: 10.8pt;
    font-weight: 700;
    color: #0f2744;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    border-bottom: 1.5pt solid #0f2744;
    padding-bottom: 2px;
    margin-bottom: 6px;
  }
  .objective-text {
    font-size: 9.8pt;
    text-align: justify;
    line-height: 1.35;
    color: #222222;
  }
  .item-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 10pt;
  }
  .item-title {
    font-weight: 700;
    color: #111827;
  }
  .item-right {
    font-weight: 600;
    color: #374151;
    font-size: 9.5pt;
  }
  .item-subrow {
    display: flex;
    justify-content: space-between;
    font-style: italic;
    font-size: 9.5pt;
    color: #4b5563;
    margin-bottom: 3px;
  }
  ul.bullet-list {
    margin-left: 18px;
    margin-bottom: 5px;
    font-size: 9.6pt;
  }
  ul.bullet-list li {
    margin-bottom: 2px;
    line-height: 1.32;
    color: #262626;
  }
  .project-header {
    display: flex;
    justify-content: space-between;
    font-size: 10pt;
    font-weight: 700;
    margin-top: 4px;
    margin-bottom: 2px;
  }
  .project-title {
    color: #111827;
  }
  .project-tech {
    font-weight: 600;
    color: #4b5563;
    font-style: italic;
    font-size: 9.5pt;
  }
  .skills-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 9.8pt;
    margin-top: 3px;
  }
  .skills-table td {
    padding: 2px 0;
    vertical-align: top;
  }
  .skill-cat {
    font-weight: 700;
    color: #111827;
    width: 185px;
  }
  .skill-vals {
    color: #262626;
  }
</style>
</head>
<body>

<div class="header">
  <h1>SONALI VIDURE</h1>
  <div class="contact-bar">
    +91 8180939354
    <span class="contact-sep">|</span>
    A/P Savalaj, Dist. Sangli
    <span class="contact-sep">|</span>
    <a href="mailto:viduresonali@gmail.com">viduresonali@gmail.com</a>
    <span class="contact-sep">|</span>
    <a href="https://www.linkedin.com/in/sonali-vidure-sbv354">LinkedIn</a>
    <span class="contact-sep">|</span>
    <a href="https://github.com/sonalBviidure">GitHub</a>
  </div>
</div>

<div class="section">
  <div class="section-title">OBJECTIVE</div>
  <p class="objective-text">
    Motivated and detail-oriented computer application graduate with a strong foundation in software development, web technologies, and database management. Seeking an entry-level software development opportunity to apply technical knowledge, contribute to real-world projects, and continue developing practical full-stack and web development skills.
  </p>
</div>

<div class="section">
  <div class="section-title">EDUCATION</div>
  
  <div class="item-row">
    <span class="item-title">Master of Computer Application (MCA)</span>
    <span class="item-right">2025 &ndash; Present</span>
  </div>
  <div class="item-subrow">
    <span>KIT&apos;S Institute of Management &amp; Engineering Research (IMER), Kolhapur</span>
    <span style="font-style: normal; font-weight: 600;">CGPA: 9.33</span>
  </div>

  <div class="item-row" style="margin-top: 5px;">
    <span class="item-title">Bachelor of Computer Application (BCA)</span>
    <span class="item-right">2022 &ndash; 2025</span>
  </div>
  <div class="item-subrow">
    <span>D.Y.P &ndash; ATU, Talsande</span>
    <span style="font-style: normal; font-weight: 600;">CGPA: 9.20</span>
  </div>
</div>

<div class="section">
  <div class="section-title">EXPERIENCE</div>
  <div class="item-row">
    <span class="item-title">Software Developer Intern &mdash; Peakprosys Solutions Pvt. Ltd., Pune</span>
    <span class="item-right">Mar 2025 &ndash; Aug 2025</span>
  </div>
  <ul class="bullet-list" style="margin-top: 3px;">
    <li>Worked on real-time web application projects involving dashboard modules and CRUD-based functionality.</li>
    <li>Gained practical exposure to full-stack development, database integration, and responsive web interfaces.</li>
    <li>Contributed to debugging, problem-solving, and collaboration within a professional development environment.</li>
  </ul>
</div>

<div class="section">
  <div class="section-title">PROJECTS</div>
  
  <div class="project-header">
    <span class="project-title">NGO Admin Dashboard</span>
    <span class="project-tech">PHP, MySQL</span>
  </div>
  <ul class="bullet-list">
    <li>Developed a dynamic administration dashboard for managing colleges, trainers, courses, and students.</li>
    <li>Applied CRUD operations for structured record management and designed a responsive Bootstrap interface.</li>
    <li><strong>Value:</strong> Centralizes NGO administrative records for organized and efficient management.</li>
  </ul>

  <div class="project-header">
    <span class="project-title">Business Board Matrix Solution</span>
    <span class="project-tech">HTML, CSS, PHP, MySQL</span>
  </div>
  <ul class="bullet-list">
    <li>Developed a web-based business management solution with area-wise post filtering and meeting management.</li>
    <li>Built separate dashboards for admin and business owners with role-specific functionality.</li>
    <li><strong>Value:</strong> Supports structured business networking, meetings, posts, and referral-oriented activities.</li>
  </ul>

  <div class="project-header">
    <span class="project-title">Farm Management System</span>
    <span class="project-tech">Ongoing &mdash; MCA Project</span>
  </div>
  <ul class="bullet-list">
    <li>Ongoing MCA project focused on a centralized digital system for organizing farming-related activities and resources.</li>
    <li>Aims to make farm-related activities more organized and manageable through a digital platform.</li>
  </ul>
</div>

<div class="section">
  <div class="section-title">TECHNICAL SKILLS</div>
  <table class="skills-table">
    <tr>
      <td class="skill-cat">Programming Languages:</td>
      <td class="skill-vals">C++, Core Java, Python</td>
    </tr>
    <tr>
      <td class="skill-cat">Web Technologies:</td>
      <td class="skill-vals">HTML, CSS, Bootstrap, React.js</td>
    </tr>
    <tr>
      <td class="skill-cat">Databases:</td>
      <td class="skill-vals">MySQL, MongoDB, PostgreSQL</td>
    </tr>
    <tr>
      <td class="skill-cat">Tools:</td>
      <td class="skill-vals">VS Code, GitHub, Excel, Power BI</td>
    </tr>
  </table>
</div>

<div class="section">
  <div class="section-title">ACHIEVEMENTS &amp; CERTIFICATIONS</div>
  <ul class="bullet-list" style="margin-top: 3px;">
    <li>Shantadevi D. Patil Merit Scholarship Award (2022&ndash;23)</li>
    <li>Hands-on PHP Training Certificate</li>
    <li>Microsoft Excel Certificate</li>
  </ul>
</div>

</body>
</html>
"""

def generate():
    temp_dir = tempfile.gettempdir()
    html_path = os.path.join(temp_dir, 'sonali_resume_template.html')
    pdf_out = os.path.join(temp_dir, 'sonali_resume_generated.pdf')

    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(html_content)

    edge_paths = [
        r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
        r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
        "msedge"
    ]
    edge_exe = None
    for p in edge_paths:
        if os.path.exists(p):
            edge_exe = p
            break

    if not edge_exe:
        raise RuntimeError("Microsoft Edge executable not found")

    cmd = [
        edge_exe,
        "--headless",
        "--disable-gpu",
        "--no-pdf-header-footer",
        f"--print-to-pdf={pdf_out}",
        f"file:///{html_path.replace(os.sep, '/')}"
    ]

    print("Running:", " ".join(cmd))
    res = subprocess.run(cmd, capture_output=True, text=True)
    print("Return code:", res.returncode)

    if os.path.exists(pdf_out):
        print(f"Generated PDF successfully! Size: {os.path.getsize(pdf_out)} bytes")
        base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
        public_dest = os.path.join(base_dir, 'public', 'Sonali_Vidure_Resume.pdf')
        assets_dest = os.path.join(base_dir, 'src', 'assets', 'Sonali_Vidure_Resume.pdf')
        shutil.copyfile(pdf_out, public_dest)
        shutil.copyfile(pdf_out, assets_dest)
        print(f"Copied to {public_dest} and {assets_dest}")
    else:
        print("Failed to generate PDF")

if __name__ == '__main__':
    generate()

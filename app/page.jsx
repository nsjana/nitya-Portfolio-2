export default function Home() {
  return (
    <section>
      <div className="container hero">
        <div className="hero-text">
          <h1>Hi — I'm Your Name</h1>
          <p className="lead">A short, one-line tagline about what you build or do.</p>
          <p className="cta-row">
            <a className="btn" href="#projects">See my work</a>
            <a className="btn btn-outline" href="/YourResume.pdf" target="_blank">Download Resume</a>
          </p>
        </div>
        <div className="hero-visual">
          <div className="avatar">Your Photo</div>
        </div>
      </div>

      <section id="about" className="section">
        <div className="container">
          <h2>About</h2>
          <p className="muted">Short bio: who you are, what you focus on, and what technologies you enjoy using.</p>
        </div>
      </section>

      <section id="projects" className="section alt">
        <div className="container">
          <h2>Projects</h2>
          <div className="projects-grid">
            <article className="project-card">
              <div className="project-thumb">Thumb</div>
              <div className="project-body">
                <h3>Project Title</h3>
                <p>Short description of the project and technologies used.</p>
                <p className="project-links"><a href="#">Live</a> · <a href="#">Source</a></p>
              </div>
            </article>

            <article className="project-card">
              <div className="project-thumb">Thumb</div>
              <div className="project-body">
                <h3>Another Project</h3>
                <p>Short description — what problem it solves and tech used.</p>
                <p className="project-links"><a href="#">Live</a> · <a href="#">Source</a></p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="container">
          <h2>Skills</h2>
          <ul className="skills-list">
            <li>HTML & CSS</li>
            <li>JavaScript / React</li>
            <li>Next.js</li>
            <li>Node.js</li>
          </ul>
        </div>
      </section>

      <section id="contact" className="section alt">
        <div className="container">
          <h2>Contact</h2>
          <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
            <div className="form-grid">
              <label>
                <span>Name</span>
                <input name="name" required />
              </label>
              <label>
                <span>Email</span>
                <input name="email" type="email" required />
              </label>
            </div>
            <label>
              <span>Message</span>
              <textarea name="message" rows="6" required></textarea>
            </label>
            <div className="form-actions">
              <button className="btn" type="submit">Send message</button>
              <a className="btn btn-outline" href="mailto:you@example.com">Or email me</a>
            </div>
            <p id="form-status" className="muted" aria-live="polite"></p>
          </form>
        </div>
      </section>
    </section>
  )
}

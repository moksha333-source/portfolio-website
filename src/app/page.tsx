export default function Home() {
  return (
    <main>
      {/* Background Layers */}
      <div className="background-layer"></div>
      <div className="scroll-background"></div>

      {/* Navigation Header */}
      <header className="navbar">
        <nav className="nav-container">
          <div className="nav-logo">
            <span className="logo-text">MV</span>
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#home" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link">Projects</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>
          <div className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-name">
              <span className="greeting">Hello, I am</span>
              <span className="name-letter">K</span>
              <span className="name-letter">o</span>
              <span className="name-letter">m</span>
              <span className="name-letter">a</span>
              <span className="name-letter">r</span>
              <span className="name-letter">a</span>
              <span className="name-letter">p</span>
              <span className="name-letter">u</span>
              <span className="name-letter">r</span>
              <span className="name-letter">i</span><br />
              <span className="name-letter">M</span>
              <span className="name-letter">o</span>
              <span className="name-letter">k</span>
              <span className="name-letter">s</span>
              <span className="name-letter">h</span>
              <span className="name-letter">a</span><br />
              <span className="name-letter">V</span>
              <span className="name-letter">a</span>
              <span className="name-letter">r</span>
              <span className="name-letter">d</span>
              <span className="name-letter">h</span>
              <span className="name-letter">a</span>
              <span className="name-letter">n</span>
            </h1>
            <p className="hero-subtitle">
              Mechanical Engineering Student | Tech Enthusiast | Problem Solver
            </p>
            <div className="hero-buttons">
              <a href="#about" className="btn btn-primary">Learn More</a>
              <a href="#contact" className="btn btn-secondary">Get in Touch</a>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-container">
            <img
              src="https://res.cloudinary.com/dner8a9y0/image/upload/v1772387018/Gemini_Generated_Image_2kxc7q2kxc7q2kxc_x5s0ak.png"
              alt="Komarapuri Moksha Vardhan Outline Portrait"
              className="hero-portrait"
            />
            <div className="image-glow"></div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <div className="objective-text">
                <p>
                  Motivated B.Tech Mechanical Engineering student seeking part-time opportunities in tech
                  fields including data entry, management, website design, AI prompting, and problem solving.
                </p>
              </div>
            </div>

            <div className="skills-section">
              <h3 className="sub-heading">Skills</h3>
              <div className="skills-grid">
                <div className="skill-category">
                  <h4>Technical Skills</h4>
                  <ul>
                    <li>HTML & CSS</li>
                    <li>Python</li>
                    <li>SQL</li>
                    <li>CAD & Fusion 360</li>
                    <li>Adobe Photo Editing</li>
                    <li>AI Prompting & Integration</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h4>Soft Skills</h4>
                  <ul>
                    <li>Fluent Communication</li>
                    <li>Teamwork & Leadership</li>
                    <li>Effective AI Communication</li>
                    <li>Problem Solving</li>
                  </ul>
                </div>
                <div className="skill-category languages">
                  <h4>Languages</h4>
                  <ul>
                    <li>English (Fluent)</li>
                    <li>Telugu (Native)</li>
                    <li>Hindi (Proficient)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="education-timeline">
              <h3 className="sub-heading">Education</h3>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>Secondary (10th CBSE)</h4>
                    <p className="timeline-school">Saranya Concept School</p>
                    <p className="timeline-date">GPA: 9.3</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>Senior Secondary</h4>
                    <p className="timeline-school">Saranya Concept School</p>
                    <p className="timeline-date">GPA: 8.7</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>B.Tech Mechanical Engineering</h4>
                    <p className="timeline-school">JNTUGV University</p>
                    <p className="timeline-date">Batch of 2024 | Expected Graduation 2028</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-content">
            <div className="projects-placeholder">
              <div className="placeholder-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h3>On the way...</h3>
              <p>Exciting projects are currently in development. Stay tuned for updates!</p>
              <div className="loading-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-profile">
              <div className="profile-photo">
                <img
                  src="https://res.cloudinary.com/dner8a9y0/image/upload/v1772382002/WhatsApp_Image_2026-02-28_at_11.55.03_AM_1_erj6rs.jpg"
                  alt="Komarapuri Moksha Vardhan"
                  className="profile-img"
                />
              </div>
            </div>
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <a href="mailto:mokshamny333@gmail.com">mokshamny333@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-details">
                  <h3>Phone</h3>
                  <a href="tel:+919392401867">+91 9392401867</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-details">
                  <h3>Location</h3>
                  <p>Kakinada, Andhra Pradesh</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fab fa-instagram"></i>
                </div>
                <div className="contact-details">
                  <h3>Instagram</h3>
                  <a href="https://instagram.com/alwaysm33" target="_blank" rel="noopener noreferrer">
                    @alwaysm33
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

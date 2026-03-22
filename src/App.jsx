import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Section from './components/Section.jsx';
import ProjectList from './components/ProjectList.jsx';
import Skills from './components/Skills.jsx';
import AboutMe from './components/AboutMe.jsx';
import Footer from './components/Footer.jsx';
import './index.css';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <main className="main-container" style={{ minHeight: '1000vh' }}>
      <Navbar />

      <button
        className="theme-toggle-circular"
        onClick={toggleTheme}
        aria-label="Cambiar modo de color"
      >
        <div className={`icon-wrapper ${theme}`}>
          <svg className="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="18.36" x2="5.64" y2="16.92"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
          <svg className="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </div>
      </button>

      <Section range={[0, 0.05, 0.12, 0.18]} zIndex={10}>
        <Hero />
      </Section>

      <Section range={[0.18, 0.23, 0.33, 0.38]} zIndex={20}>
        <div id="projects" className="projects-container">
          <h2 className="section-title">Mis Proyectos</h2>
          <ProjectList />
        </div>
      </Section>

      <Section range={[0.38, 0.43, 0.53, 0.58]} zIndex={30}>
        <div id="cv" className="cv-section">
          <h2 className="section-title">Trayectoria</h2>
          <div className="cv-grid">
            <div className="cv-column">
              <span className="column-label">Experiencia</span>
              <div className="cv-item">
                <span className="cv-date">2024 - 2025</span>
                <h2 className="cv-text">Stellantis Vigo</h2>
                <p className="description">Operario en línea de montaje</p>
              </div>
              <div className="cv-item">
                <span className="cv-date">2020 - 2024</span>
                <h2 className="cv-text">Atendo Calidade</h2>
                <p className="description">Auxiliar sociosanitario de personas dependientes en domicilio</p>
              </div>
              <div className="cv-item">
                <span className="cv-date">2016</span>
                <h2 className="cv-text">Plycem Construsistemas</h2>
                <p className="description">Practicas profesionales para la obtención de Bachiller</p>
              </div>
            </div>
            <div className="cv-column">
              <span className="column-label">Educación</span>
              <div className="cv-item">
                <span className="cv-date">2025 - 2026</span>
                <h2 className="cv-text">Certificado Profesional N3 Desenvolvimiento de Aplicaciones con Tecnologías Web</h2>
                <p className="description">FORMACOM</p>
              </div>
              <div className="cv-item">
                <span className="cv-date">2016</span>
                <h2 className="cv-text">Bachillerato de Informática</h2>
                <p className="description">INTEC</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section range={[0.58, 0.63, 0.73, 0.78]} zIndex={40}>
        <div id="skills" className="skills-container">
          <h2 className="section-title">Aptitudes</h2>
          <Skills />
        </div>
      </Section>

      <Section range={[0.78, 0.83, 0.88, 0.93]} zIndex={50}>
        <div id="about" className="about-section">
          <h2 className="section-title">Sobre Mí</h2>
          <AboutMe />
        </div>
      </Section>

      <Section range={[0.93, 0.96, 1.0, 1.0]} zIndex={60}>
        <div id="contact" className="contact-wrapper-final">
          <h2 className="section-title">Contacto</h2>
          <div className="contact-main-content">
            <p className="contact-sub">¿Creamos algo increíble juntos?</p>
            <a href="mailto:xgonan99@gmail.com" className="email-link">
              xgonan99@gmail.com
            </a>
            <div className="contact-socials">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              <a href="https://github.com/gonanx" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              </a>
            </div>
          </div>
          <Footer />
        </div>
      </Section>
    </main>
  );
}

export default App;
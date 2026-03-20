import React from 'react';
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
  return (
    <main className="main-container" style={{ minHeight: '1000vh' }}>
      <Navbar />

      {/* 1. HERO */}
      <Section range={[0, 0.05, 0.12, 0.18]} zIndex={1}>
        <Hero />
      </Section>

      {/* 2. PROYECTOS */}
      <Section range={[0.18, 0.23, 0.33, 0.38]} zIndex={2}>
        <div id="projects" className="projects-container">
          <h2 className="section-title">Mis Proyectos</h2>
          <ProjectList />
        </div>
      </Section>

      {/* 3. TRAYECTORIA */}
      <Section range={[0.38, 0.43, 0.53, 0.58]} zIndex={3}>
        <div id="cv" className="cv-section">
          <h2 className="section-title">Trayectoria</h2>
          <div className="cv-grid">
            <div className="cv-column">
              <span className="column-label">Experiencia</span>
              <div className="cv-item">
                <span className="cv-date">2024 — PRESENTE</span>
                <p className="cv-text">Diseñador Web Freelance</p>
              </div>
              <div className="cv-item">
                <span className="cv-date">2023 — 2024</span>
                <p className="cv-text">Prácticas UI en Estudio Creativo</p>
              </div>
            </div>
            <div className="cv-column">
              <span className="column-label">Educación</span>
              <div className="cv-item">
                <span className="cv-date">2022 — 2026</span>
                <p className="cv-text">Grado en Diseño y Desarrollo Web</p>
              </div>
              <div className="cv-item">
                <span className="cv-date">2020 — 2022</span>
                <p className="cv-text">Bachillerato de Artes</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 4. APTITUDES */}
      <Section range={[0.58, 0.63, 0.73, 0.78]} zIndex={4}>
        <div id="skills" className="skills-container">
          <h2 className="section-title">Aptitudes</h2>
          <Skills />
        </div>
      </Section>

      {/* 5. SOBRE MÍ */}
      <Section range={[0.78, 0.83, 0.88, 0.93]} zIndex={5}>
        <div id="about" className="about-section">
          <h2 className="section-title">Sobre Mí</h2>
          <AboutMe />
        </div>
      </Section>

      {/* 6. CONTACTO */}
      <Section range={[0.93, 0.96, 0.98, 1.0]} zIndex={6}>
        <div id="contact" className="contact-wrapper-final">
          <h2 className="section-title">Contacto</h2>
          <div className="contact-content">
            <p className="contact-sub">¿Creamos algo increíble juntos?</p>
            <a href="mailto:tuemail@ejemplo.com" className="email-link">
              tuemail@ejemplo.com
            </a>
          </div>
          <div className="footer-container-fixed">
            <Footer />
          </div>
        </div>
      </Section>
    </main>
  );
}

export default App;
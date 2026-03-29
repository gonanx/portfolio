import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import ProjectList from './components/ProjectList';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import { experienceData, educationData } from './data/portfolioData';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function App() {
  const [theme, setTheme] = useState('dark');
  const { scrollYProgress } = useScroll();

  const decorOpacity = useTransform(scrollYProgress, [0.36, 0.40, 0.50, 0.56], [0, 1, 1, 0]);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <main className="main-container" style={{ minHeight: '750vh' }}>
      <Navbar />
      <button className="theme-toggle-circular" onClick={toggleTheme} aria-label="Cambiar modo de color">
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

      <Section range={[0, 0, 0.10, 0.16]} zIndex={10}>
        <Hero />
      </Section>

      <Section range={[0.16, 0.22, 0.30, 0.36]} zIndex={20}>
        <div id="projects" className="projects-container">
          <h2 className="section-title">Mis Proyectos</h2>
          <ProjectList />
        </div>
      </Section>

      <Section range={[0.36, 0.42, 0.50, 0.56]} zIndex={30}>
        <div id="cv" className="cv-section">
          <h2 className="section-title">Trayectoria</h2>
          <motion.div className="cv-grid" style={{ opacity: decorOpacity }}>
            <div className="cv-column">
              <span className="column-label">Experiencia</span>
              {experienceData.map((item) => (
                <div key={item.id} className="cv-item">
                  <span className="cv-date">{item.date}</span>
                  <h2 className="cv-text">{item.title}</h2>
                  <p className="description">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="cv-column">
              <span className="column-label">Educación</span>
              {educationData.map((item) => (
                <div key={item.id} className="cv-item">
                  <span className="cv-date">{item.date}</span>
                  <h2 className="cv-text">{item.title}</h2>
                  <p className="description">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      <Section range={[0.56, 0.62, 0.70, 0.76]} zIndex={40}>
        <div id="skills" className="skills-container">
          <h2 className="section-title">Aptitudes</h2>
          <Skills />
        </div>
      </Section>

      <Section range={[0.76, 0.82, 0.88, 0.94]} zIndex={50}>
        <div id="about" className="about-section">
          <h2 className="section-title">Sobre Mi</h2>
          <AboutMe />
        </div>
      </Section>

      <Section range={[0.94, 0.97, 1.0, 1.0]} zIndex={60} isLast={true}>
        <div id="contact" className="contact-wrapper-final">
          <h2 className="section-title">Contacto</h2>

          <div className="contact-main-content">
            {/* Nuevo grupo para juntar el texto */}
            <div className="contact-text-group">
              <p className="contact-sub">¿Creamos algo increible juntos?</p>
              <a href="mailto:xgonan99@gmail.com" className="email-link">xgonan99@gmail.com</a>
            </div>

            <div className="contact-socials">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/gonanx" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <FaGithub size={24} />
              </a>
            </div>
          </div>

          <Footer />
        </div>
      </Section>    </main>
  );
}

export default App;
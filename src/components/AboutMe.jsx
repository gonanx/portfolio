import React from 'react';
import { motion } from 'framer-motion';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <motion.div
            className="about-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <p className="about-text-main">
                Soy un desarrollador y diseñador enfocado en crear experiencias digitales
                que combinan <strong>estética minimalista</strong> con <strong>funcionalidad técnica</strong>.
                Mi objetivo es transformar ideas complejas en interfaces intuitivas y memorables.
            </p>
            <div className="about-details-grid">
                <div className="about-detail-item">
                    <span className="detail-label">Localización</span>
                    <span className="detail-value">Vigo, España</span>
                </div>
                <div className="about-detail-item">
                    <span className="detail-label">Intereses</span>
                    <span className="detail-value">UI Design, Open Source, Fotografía</span>
                </div>
                <div className="about-detail-item">
                    <span className="detail-label">Idiomas</span>
                    <span className="detail-value">Español, Inglés</span>
                </div>
            </div>
        </motion.div>
    );
};

export default AboutMe;
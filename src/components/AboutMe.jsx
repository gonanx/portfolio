import React from 'react';
import { motion } from 'framer-motion';
import './AboutMe.css';

const AboutMe = () => {
    const details = [
        { label: "Localización", value: "Vigo, España" },
        { label: "Intereses", value: "UI Design, Open Source, Fotografía" },
        { label: "Idiomas", value: "Español, Inglés" }
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <motion.div
            className="about-content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <motion.p className="about-text-main" variants={itemVariants}>
                Soy un desarrollador y diseñador enfocado en crear experiencias digitales
                que combinan <strong>estética minimalista</strong> con <strong>funcionalidad técnica</strong>.
                Mi objetivo es transformar ideas complejas en interfaces intuitivas y memorables.
            </motion.p>

            <motion.div className="about-details-grid" variants={itemVariants}>
                {details.map((detail, index) => (
                    <div key={index} className="about-detail-item">
                        <span className="detail-label">{detail.label}</span>
                        <span className="detail-value">{detail.value}</span>
                    </div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default AboutMe;
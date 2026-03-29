import React from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/portfolioData';

const ProjectList = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] } }
    };

    return (
        <motion.div className="projects-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {projectsData.map((project, index) => (
                <motion.a key={project.id} href={project.url} target="_blank" rel="noopener noreferrer" className="project-item-link" variants={itemVariants} whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 100, damping: 20 }}>
                    <div className="project-item-content">
                        <div className="project-left">
                            <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
                            <h3 className="project-title">{project.title}</h3>
                        </div>
                        <span className="project-category">{project.category}</span>
                    </div>
                </motion.a>
            ))}
        </motion.div>
    );
};

export default ProjectList;
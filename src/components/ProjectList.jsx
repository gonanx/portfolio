import React from 'react';
import { motion } from 'framer-motion';
import './ProjectList.css';

const projects = [
    {
        id: 1,
        title: "KROMOS",
        category: "Web Design",
        url: "https://github.com/tu-usuario/proyecto-1"
    },
    {
        id: 2,
        title: "PadelAPP",
        category: "UI/UX",
        url: "https://github.com/tu-usuario/proyecto-2"
    },
    {
        id: 3,
        title: "Pokedex",
        category: "Graphic Design",
        url: "https://github.com/tu-usuario/proyecto-3"
    },
    {
        id: 4,
        title: "App Libros",
        category: "UI/UX",
        url: "https://github.com/tu-usuario/proyecto-4"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

const ProjectList = () => {
    return (
        <motion.div
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
        >
            {projects.map((project, index) => (
                <motion.a
                    key={project.id}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-item-link"
                    variants={itemVariants}
                    whileHover={{ x: 20 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    <div className="project-item-content">
                        <div className="project-left">
                            <span className="project-number">0{index + 1}</span>
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
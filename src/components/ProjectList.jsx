import React from 'react';
import { motion } from 'framer-motion';
import './ProjectList.css';

const projects = [
    {
        id: 1,
        title: "KROMOS",
        category: "Web Design",
        url: "https://github.com/gonanx/Kromos"
    },
    {
        id: 2,
        title: "PadelAPP",
        category: "UI/UX",
        url: "https://github.com/gonanx/padel-front"
    },
    {
        id: 3,
        title: "Pokedex",
        category: "Graphic Design",
        url: "https://github.com/gonanx/pokedex"
    },
    {
        id: 4,
        title: "App Libros",
        category: "UI/UX",
        url: "https://github.com/gonanx/applibros"
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
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: [0.215, 0.61, 0.355, 1]
        }
    }
};

const ProjectList = () => {
    return (
        <motion.div
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {projects.map((project, index) => (
                <motion.a
                    key={project.id}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-item-link"
                    variants={itemVariants}
                    whileHover={{ x: 15 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        layout: { duration: 0.3 }
                    }}
                >
                    <div className="project-item-content">
                        <div className="project-left">
                            <span className="project-number">
                                {String(index + 1).padStart(2, '0')}
                            </span>
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
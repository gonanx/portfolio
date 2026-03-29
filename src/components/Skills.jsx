import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/portfolioData';

const Skills = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
    };

    return (
        <motion.div className="skills-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
            {skillCategories.map((category, index) => (
                <div key={index} className="skills-column">
                    <span className="column-label">{category.title}</span>
                    <div className="skills-list">
                        {category.items.map((skill, i) => (
                            <motion.div key={i} className="skill-icon-wrapper" variants={itemVariants} whileHover={{ y: -10, color: "var(--text-main)", transition: { duration: 0.2 } }}>
                                <div className="icon-box">{skill.icon}</div>
                                <span className="skill-name">{skill.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            ))}
        </motion.div>
    );
};

export default Skills;
import React from 'react';
import { motion } from 'framer-motion';
import {
    SiFigma,
    SiReact,
    SiJavascript,
    SiGit,
    SiMysql
} from 'react-icons/si';
import {
    FaPalette,
    FaCss3Alt,
    FaNodeJs,
    FaUsers,
    FaLightbulb
} from 'react-icons/fa';
import {
    HiOutlineChatAlt2,
    HiOutlineUserGroup,
    HiOutlineTrendingUp
} from 'react-icons/hi';
import './Skills.css';

const skillCategories = [
    {
        title: "Diseño",
        items: [
            { name: "Figma", icon: <SiFigma /> },
            { name: "Adobe CC", icon: <FaPalette /> },
            { name: "UI/UX", icon: <FaLightbulb /> }
        ]
    },
    {
        title: "Desarrollo",
        items: [
            { name: "React", icon: <SiReact /> },
            { name: "JavaScript", icon: <SiJavascript /> },
            { name: "CSS3", icon: <FaCss3Alt /> },
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "MySQL", icon: <SiMysql /> },
            { name: "Git", icon: <SiGit /> }
        ]
    },
    {
        title: "Soft Skills",
        items: [
            { name: "Liderazgo", icon: <HiOutlineTrendingUp /> },
            { name: "Equipo", icon: <HiOutlineUserGroup /> },
            { name: "Comunicación", icon: <HiOutlineChatAlt2 /> },
            { name: "Estrategia", icon: <FaUsers /> }
        ]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

const Skills = () => {
    return (
        <motion.div
            className="skills-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {skillCategories.map((category, index) => (
                <div key={index} className="skills-column">
                    <span className="column-label">{category.title}</span>
                    <div className="skills-list">
                        {category.items.map((skill, i) => (
                            <motion.div
                                key={i}
                                className="skill-icon-wrapper"
                                variants={itemVariants}
                                whileHover={{ y: -10, color: "#fff" }}
                            >
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
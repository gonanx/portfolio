// src/data/portfolioData.jsx
import React from 'react';
import { SiFigma, SiReact, SiJavascript, SiGit, SiMysql } from 'react-icons/si';
import { FaPalette, FaCss3Alt, FaNodeJs, FaUsers, FaLightbulb } from 'react-icons/fa';
import { HiOutlineChatAlt2, HiOutlineUserGroup, HiOutlineTrendingUp } from 'react-icons/hi';

export const navLinks = [
    { name: "Inicio", pos: 0.05 },
    { name: "Proyectos", pos: 0.22 },
    { name: "Trayectoria", pos: 0.42 },
    { name: "Aptitudes", pos: 0.62 },
    { name: "Sobre Mi", pos: 0.82 },
    { name: "Contacto", pos: 0.97 }
];

export const personalDetails = [
    { label: "Localización", value: "Vigo, España" },
    { label: "Intereses", value: "UX/UI Design, Diseño Gráfico, Prompting" },
    { label: "Idiomas", value: "Español, Inglés" }
];

export const projectsData = [
    { id: 1, title: "KROMOS", category: "Web Design", url: "https://github.com/gonanx/Kromos" },
    { id: 2, title: "PadelAPP", category: "UI/UX", url: "https://github.com/gonanx/padel-front" },
    { id: 3, title: "Pokedex", category: "Graphic Design", url: "https://github.com/gonanx/pokedex" },
    { id: 4, title: "App Libros", category: "UI/UX", url: "https://github.com/gonanx/applibros" }
];

export const skillCategories = [
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

export const experienceData = [
    { id: 1, date: "2024 - 2025", title: "Stellantis Vigo", description: "Operario en linea de montaje" },
    { id: 2, date: "2020 - 2024", title: "Atendo Calidade", description: "Auxiliar sociosanitario de personas dependientes en domicilio" },
    { id: 3, date: "2016", title: "Plycem Construsistemas", description: "Practicas profesionales para la obtención de Bachiller" }
];

export const educationData = [
    { id: 1, date: "2025 - 2026", title: "Certificado Profesional N3 Aplicaciones Web", description: "FORMACOM" },
    { id: 2, date: "2016", title: "Bachillerato de Informática (Homologado)", description: "INTEC, Honduras" }
];
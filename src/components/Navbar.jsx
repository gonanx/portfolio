import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (percentage) => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        window.scrollTo({
            top: totalHeight * percentage,
            behavior: 'auto'
        });
        setIsOpen(false);
    };

    const menuVariants = {
        closed: {
            opacity: 0,
            y: "-100%",
            transition: {
                duration: 0.5,
                ease: [0.43, 0.13, 0.23, 0.96]
            }
        },
        opened: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.43, 0.13, 0.23, 0.96]
            }
        }
    };

    const linkVariants = {
        closed: { y: 20, opacity: 0 },
        opened: (i) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.1 + (i * 0.1),
                duration: 0.5,
                ease: "easeOut"
            }
        })
    };

    const navLinks = [
        { name: "Inicio", pos: 0.05 },
        { name: "Proyectos", pos: 0.22 },
        { name: "Trayectoria", pos: 0.42 },
        { name: "Aptitudes", pos: 0.62 },
        { name: "Sobre Mí", pos: 0.82 },
        { name: "Contacto", pos: 0.97 }
    ];

    return (
        <nav className="navbar">
            <div
                className={`nav-brand ${isOpen ? 'active' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? 'Cerrar' : 'Portfolio'}
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="nav-menu-overlay"
                        variants={menuVariants}
                        initial="closed"
                        animate="opened"
                        exit="closed"
                        style={{ backgroundColor: 'var(--nav-overlay)' }}
                    >
                        <div className="nav-links-container">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    custom={i}
                                    variants={linkVariants}
                                    onClick={() => scrollToSection(link.pos)}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
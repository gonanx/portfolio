import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-container">
            <div className="footer-credits">
                © {currentYear} — Diseñado y Desarrollado por gonanx
            </div>
        </footer>
    );
};

export default Footer;
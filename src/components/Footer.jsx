import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="footer-line"></div>
            <div className="footer-bottom">
                <p>&copy; {year} Portfolio Personal</p>
                <div className="footer-socials">
                    <a href="#">LinkedIn</a>
                    <a href="#">GitHub</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero-content">
            <span className="hero-subtitle">Diseñador & Desarrollador Web</span>
            <h1 className="hero-title">
                {"{"}José Ángel Gonzales{"}"}<br />
            </h1>
            <div className="hero-scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <span>Scroll para explorar</span>
            </div>
        </div>
    );
};

export default Hero;
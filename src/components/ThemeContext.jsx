import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
    const [isLight, setIsLight] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', isLight ? 'light' : 'dark');
    }, [isLight]);

    return (
        <button
            onClick={() => setIsLight(!isLight)}
            className="theme-toggle"
            aria-label="Cambiar modo de color"
        >
            {isLight ? 'Modo Oscuro' : 'Modo Claro'}
        </button>
    );
};

export default ThemeToggle;
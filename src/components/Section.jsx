import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Section.css';

const Section = ({ children, range, zIndex, isLast = false }) => {
    const { scrollYProgress } = useScroll();

    const finalOpacity = isLast ? 1 : 0;
    const finalScale = isLast ? 1 : 1.05;
    const finalBlur = isLast ? "blur(0px)" : "blur(20px)";

    const opacity = useTransform(scrollYProgress, range, [1, 1, 1, finalOpacity]);
    const scale = useTransform(scrollYProgress, range, [1, 1, 1, finalScale]);
    const blur = useTransform(
        scrollYProgress,
        range,
        ["blur(0px)", "blur(0px)", "blur(0px)", finalBlur]
    );

    const visibility = useTransform(scrollYProgress, (value) => {
        if (isLast && value >= range[0]) {
            return "visible";
        }
        return value >= range[0] && value <= range[3] ? "visible" : "hidden";
    });

    const pointerEvents = useTransform(opacity, (value) => {
        return value > 0.1 ? "all" : "none";
    });

    return (
        <motion.section
            className="fixed-section"
            style={{
                opacity,
                scale,
                filter: blur,
                pointerEvents,
                visibility,
                zIndex
            }}
        >
            <div className="content-wrapper">
                {children}
            </div>
        </motion.section>
    );
};

export default Section;
import { motion, useScroll, useTransform } from 'framer-motion';
import './Section.css';

const Section = ({ children, range, zIndex }) => {
    const { scrollYProgress } = useScroll();

    const opacity = useTransform(scrollYProgress, range, [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, range, [0.95, 1, 1, 1.05]);
    const blur = useTransform(
        scrollYProgress,
        range,
        ["blur(20px)", "blur(0px)", "blur(0px)", "blur(20px)"]
    );

    const visibility = useTransform(scrollYProgress, (value) => {
        return value >= range[0] && value <= range[3] ? "visible" : "hidden";
    });

    const pointerEvents = useTransform(opacity, (value) => {
        return value > 0.5 ? "all" : "none";
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
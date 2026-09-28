import { motion, useReducedMotion } from "framer-motion";

export function Reveal({ children, delay = 0, y = 28, className = "", as = "div" }) {
    const reduce = useReducedMotion();
    const Tag = motion[as] || motion.div;
    return (
        <Tag
            className={className}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </Tag>
    );
}

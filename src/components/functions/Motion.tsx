import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';


export function Motion(duration: number, delay: number, value: any) {
    const [dynamicThreshold, setDynamicThreshold] = useState(0.07);

    const [ref, inView] = useInView({
        triggerOnce: true, // ativa a detecção apenas uma vez.
        threshold: dynamicThreshold
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setDynamicThreshold(0.2);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{
                duration: duration,
                delay: delay,
                ease: [0, 0.71, 0.2, 1.01],
            }}
        >            {value}
        </motion.div>
    )
}
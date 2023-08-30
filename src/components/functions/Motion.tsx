import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';



export function Motion(duration: number, delay: number, value: any) {


    const [ref, inView] = useInView({
        triggerOnce: false, // ativa a detecção apenas uma vez.
        threshold: 0.4
    });

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

export function MotionFirst(duration: number, delay: number, value: any) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: duration,
                delay: delay,
                ease: [0, 0.71, 0.2, 1.01],
            }}
        >            {value}
        </motion.div>
    )
}
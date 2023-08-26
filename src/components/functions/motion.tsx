import { motion } from "framer-motion";


export function Motion(duration: number, delay: number, value: any) {
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
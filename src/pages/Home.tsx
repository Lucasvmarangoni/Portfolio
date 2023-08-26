import { ButtonPort } from "../components/Home/ButtonPort";
import { Capa } from "../components/Home/Capa";
import { motion } from "framer-motion";
import { Info } from "../components/Home/Info";

export const Home = () => {

  return (
    <div className="grid gap-10">
      <Capa />
      {/* <Skills /> */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 1.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <ButtonPort />
      </motion.div>
      <Info />
    </div>
  );
};

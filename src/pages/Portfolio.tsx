import { Esports } from "../components/portfolio/Esports";
import { Lab01 } from "../components/portfolio/Lab01";
import { Port } from "../components/portfolio/Port";
import { motion } from "framer-motion";
import { Hidden } from "../components/portfolio/Hidden";

export const Portfolio = () => {
  return (
    <motion.div
      className="mt-10 w-[1030px] py-20 bg-BGH brightness-150 m-auto flex flex-wrap justify-center 
       n0:w-[1030px]    
       n1:w-[830px]
       n2:w-[781px] n2:mt-10 n2:gap-14
       n3:w-[576px] n3:mt-6 n3:gap-14  
       n4:w-[530px] n4:mt-6 n4:gap-14
       n5:w-[430px] n5:mt-6 n5:gap-14
       n6:w-[350px] n6:mt-4 n6:gap-14
       n7:w-[240px] n7:mt-4 n7:gap-10       
    "
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Esports />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.6,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Lab01 />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.7,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Port />
      </motion.div>

      <Hidden />
    </motion.div>
  );
};

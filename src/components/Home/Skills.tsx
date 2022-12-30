import { Database } from "../Home/skills/Database";
import { Javascript } from "../Home/skills/Javascript";
import { Python } from "../Home/skills/Python";
import { Security } from "../Home/skills/Security";
import { motion } from "framer-motion";

export function Skills() {
  return (
    <motion.div
      className="h-[75px] bg-BGH m-auto mt-10 brightness-150  
       n0:w-[1030px]   
       n1:w-[830px]    
       n2:w-[781px] n2:mt-10
       n3:w-[576px] n3:mt-6
       n4:w-[530px] n4:mt-6
       n5:w-[430px] n5:mt-6
       n6:w-[350px] n6:mt-4
       n7:w-[240px] n7:mt-4
       "
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.4,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div
        className="h-[75px] flex items-center justify-center 
      n0:w-[1030px]   
      n1:w-[830px]    
      n2:w-[781px] 
      n3:w-[576px] 
      n4:w-[530px] 
      n5:w-[430px]
      n6:w-[350px]
      n7:w-[240px]
      "
      >
        <div
          className="box-border flex gap-10 mt-1
        n6:gap-10 n6:p-0
        n7:gap-4 n7:p-2"
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
            <Python />
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
            <Javascript />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.9,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Database />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Security />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

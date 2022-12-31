import { motion } from "framer-motion";
import { Hidden } from "../components/portfolio/Hidden";
import { NotificationsService } from "../components/portfolio/Notifications-service";
import { Search } from "../components/functions/Search";
import { Esports } from "../components/portfolio/Esports";
import { Lab01 } from "../components/portfolio/Lab01";
import { Port } from "../components/portfolio/Port";
import { VscSearch } from "react-icons/vsc";

// Colocar no buscador opções de alterar o parâmetrod de busca, como pelo nome do projeto ou ano de criação...

export const Portfolio = () => {
  return (
    <motion.div
      className="mt-10 w-[1030px] pb-20 pt-10 bg-BGH brightness-150 m-auto
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
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div
        className=" flex justify-center items-center
      n0:w-[1030px]
      n1:w-[830px]      
      n2:w-[781px] 
      n3:w-[576px] 
      n4:w-[530px] 
      n5:w-[430px] 
      n6:w-[350px] 
      n7:w-[240px] "
      >
        
        <input
          id="input"
          onInput={Search}
          type="text"
          placeholder="Pesquise pela tecnologia usada"
          className="w-80 h-10 bg-BG text-T2 placeholder:text-[#a0aec042]"
        />
        < VscSearch color="#a0aec042" className="bg-BG w-10 h-10 py-2"/>
      </div>

      <div
        className="m-auto flex flex-wrap justify-center 
         n2:gap-14 n2:mt-10 
         n3:gap-14 n3:mt-6   
         n4:gap-14 n4:mt-6 
         n5:gap-14 n5:mt-6 
         n6:gap-14 n6:mt-4 
         n7:gap-10 n7:mt-4        
      "
      >
        <motion.div
          id="Tesports"
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
          id="Tlab01"
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
          id="Tport"
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

        <motion.div
          id="TnotServ"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <NotificationsService />
        </motion.div>
      </div>

      {/* <Hidden /> */}
    </motion.div>
  );
};

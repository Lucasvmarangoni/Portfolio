import { motion } from "framer-motion";
import { Hidden } from "../components/portfolio/Hidden";
import { NotificationsService } from "../components/portfolio/Notifications-service";
import { Search } from "../components/portfolio/functions/Search";
import { Esports } from "../components/portfolio/Esports";
// import { Lab01 } from "../components/portfolio/Lab01";
import { Port } from "../components/portfolio/Port";
import { VscSearch } from "react-icons/vsc";
import { TaskList } from "../components/portfolio/TaskList";
import { SetStateAction, useEffect, useState } from "react";
import { BestSurfing } from "../components/portfolio/BestSurfing";

export const autorais: any = [<TaskList />, <Port />];
export const projetos: any = [<BestSurfing />, <NotificationsService />, <Esports />]

const autoraisId: string[] = ["TtaskList", "Tport"]
const projetosId: string[] = ["TbestSurfing", "TnotServ", "Tesports"]

const THidden = document.querySelector("#THidden") as HTMLElement | any;

const datalist: string[] = [
  'Node Vitest',
  'Nest Jest',
  'Node Typescript',
  'Node Typescript express'
]

export const Portfolio = () => {




  let [windowWidth, windowCheck]: SetStateAction<any> = useState();
  function hidden() {
    const THidden = document.querySelector("#THidden") as HTMLElement | any;
    windowWidth = window.innerWidth;
    windowCheck(
      windowWidth <= 949
        ? (THidden.style = "display: none")
        : (THidden.style = "display: flex")
    );
  }


  useEffect(() => {
    hidden();
  }, []);




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
       n7:w-[300px] n7:mt-4        
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
      n2:w-[781px] n2:pb-0
      n3:w-[576px] n3:pb-4
      n4:w-[530px] n4:pb-4
      n5:w-[430px] n5:pb-4
      n6:w-[350px] n6:pb-4
      n7:w-[300px] n7:pb-4
      "
      >
        <label
          aria-label="Pesquise o projeto pela tecnologia."
          htmlFor="input"
        ></label>
        <input
          id="input"
          onInput={Search}
          autoComplete="on"
          type="search"
          placeholder="Pesquise pelas tecnologias. Ex: node vite"
          list="datalist"
          className="px-3 bg-BG text-T1 text-sm placeholder:text-[#302f2f] 
          n0:w-80 n0:h-10
          n1:w-80 n1:h-10
          n2:w-80 n2:h-10 
          n3:w-80 n3:h-10 
          n4:w-80 n4:h-10
          n5:w-80 n5:h-10 n5:text-sm
          n6:w-64 n6:h-8 n6:text-xs 
          n7:w-52 n7:h-8 n7:text-xs
          "
        />
        <VscSearch
          color="#55396285"
          className="bg-BG  pr-2
           n0:w-8 n0:h-10
           n1:w-8 n1:h-10
           n2:w-8 n2:h-10
           n3:w-8 n3:h-10
           n4:w-8 n4:h-10
           n5:w-8 n5:h-10 
           n6:w-8 n6:h-8
           n7:w-8 n7:h-8"
        />
        <datalist id="datalist">
          {datalist.map((data) => {
            return <option value={data} />;
          })} 
        </datalist>
      </div>

      <div>


        <div>
          <motion.div
            className=" text-center w-[70%] m-auto"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >

            <h2 className="text-T4 text-xl mt-10">Projetos pessoais</h2>
            <p className="text-base text-[#252525] text-justify mt-5" >
              Projetos pessoais são aqueles de minha autoria, ou seja, que crio e desenvolvo do zero sozinho.
              O objetivo desses projetos é praticar para consolidar novos conhecimentos e habilidades adquiridas.
            </p>


          </motion.div>
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

          {
            autorais.map((projeto: any, transitionDelay: number) => {
              return (

                <motion.div
                  id={autoraisId[transitionDelay]}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: transitionDelay / 4,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  {projeto}
                </motion.div>
              )
            })

          }
          {
            (autorais.length % 2) == 0 ?
              null
              :
              <motion.div
                id="THidden"
                className="THiddenPersonal"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 1.0,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <Hidden />
              </motion.div>
          }
        </div>

        <hr className=" border-[#252525] w-[80%] m-auto
           n2:mt-10 
           n3:mt-6   
           n4:mt-6 
           n5:mt-6 
           n6:mt-4 
           n7:mt-4        
          "/>

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
            className=" text-center w-[70%] m-auto"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >

            <h2 className="text-T4 text-xl">Projetos de cursos</h2>
            <p className="text-base text-[#252525] text-justify mt-5" >
              Projetos de curso são aqueles desenvolvidos durante os cursos que faço, ou seja, sua criação não é de minha autoria.
              O objetivo desses projetos é aprender para obter novos conhecimentos e habilidades.
            </p>


          </motion.div>

          {
            projetos.map((projeto: any, transitionDelay: number) => {
              return (

                <motion.div
                  id={projetosId[transitionDelay]}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: transitionDelay / 4,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  {projeto}
                </motion.div>
              )
            })

          }


          {

            projetos.length % 2 == 0
              ? null
              :
              <motion.div
                id="THidden"
                className="THiddenCurse"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 1.0,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <Hidden />
              </motion.div>
          }
        </div>

      </div>
    </motion.div>
  );
};

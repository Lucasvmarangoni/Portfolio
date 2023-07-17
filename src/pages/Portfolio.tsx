import { motion } from "framer-motion";
import { Hidden } from "../components/portfolio/Hidden";
import { Search } from "../components/portfolio/functions/Search";
import { VscChromeClose, VscSearch } from "react-icons/vsc";
import { SetStateAction, useEffect, useState } from "react";
import { fullFilterDatabase } from "../components/portfolio/database/TecSearch";
import { listAllProjects } from "../components/portfolio/all";
import { projectsDB } from "../components/portfolio/database/projetos"
import { hiddenDisplay } from "../components/portfolio/functions/hidden-display";

export const Portfolio = () => {

  const personalProjects = projectsDB.filter((project) => {
    return project.type === "pessoal"
  })

  const courseProjects = projectsDB.filter((project) => {
    return project.type === "curso"
  })

  const groupProjects = projectsDB.filter((project) => {
    return project.type === "equipe"
  })

  const autoraisId: string[] = ["Tport", "TtaskList", "TcurrencyConverter"]
  const groupId: string[] = ["Tpaiva"]
  const projetosId: string[] = ["Tesports", "TnotServ", "TbestSurf"]

  const datalist: string[] = [
    'Node Vitest',
    'Nest Jest',
    'Node Typescript',
    'Node Typescript express'
  ]

  const [list, setList] = useState<string[]>([])
  const [check, setCheck] = useState<number>(0)

  function dynamicDatalist() {
    const filterInput: any = document.querySelector("#input");
    const filter = filterInput.value.toLowerCase();

    const tecnologias: string[] = [];
    for (let i = 0; i < fullFilterDatabase.length; i++) {
      if (fullFilterDatabase[i] !== fullFilterDatabase[i + 1]) {
        tecnologias.push(fullFilterDatabase[i]);
      }
    }
    const dList: string[] = []
    for (let i = 0; i < tecnologias.length; i++) {
      filter.length > 0 ? setCheck(1) : setCheck(0)
      if (filter.length >= 2) {
        if (tecnologias[i].includes(filter)) {
          dList.push(tecnologias[i])
        }
      }
      setList(dList.map((tecnologia) => {
        return tecnologia
      }))
    }
  }

  let [windowWidth, windowCheck]: SetStateAction<any> = useState();
  function hidden() {
    const TCourseHidden = document.querySelector(".TCourseHidden") as HTMLElement | any;
    const TTeamHidden = document.querySelector(".TTeamHidden") as HTMLElement | any;
    const TPersonalHidden = document.querySelector(".TPersonalHidden") as HTMLElement | any;
    windowWidth = window.innerWidth;
    windowCheck(
      windowWidth <= 949
        ? (TCourseHidden.style.display = "none", TTeamHidden.style.display = "none")
        : (TCourseHidden.style.display = "flex", TTeamHidden.style.display = "flex")
    );
  }
  useEffect(() => {
    hidden();
    dynamicDatalist()
    Search();
  }, []);

  return (
    <motion.div
      className="mt-10 w-[1030px] pb-20 pt-10 bg-BGH m-auto brightness-150
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
        className=" flex justify-center items-center brightness-125
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
          onChange={Search}
          onInput={dynamicDatalist}
          autoComplete="on"
          type="search"
          placeholder="Pesquise pelas tecnologias."
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
        {
          check === 1
            ? <VscChromeClose
              color="#3b275367"
              className="bg-BG  pr-2
              n0:w-8 n0:h-10
              n1:w-8 n1:h-10
              n2:w-8 n2:h-10
              n3:w-8 n3:h-10
              n4:w-8 n4:h-10
              n5:w-8 n5:h-10 
              n6:w-8 n6:h-8
              n7:w-8 n7:h-8"
              style={{ cursor: "pointer" }}
              onClick={() => {
                console.log(window.innerWidth);
                const filterInput: any = document.querySelector("#input");
                filterInput.value = ""
                setCheck(0)
                setList([])
                document.querySelectorAll("#Tesports, #Tport, #TnotServ, #TtaskList, #TbestSurf, #Tpaiva, #TcurrencyConverter")
                  .forEach((element: any) => {
                    if (element) {
                      element.style.display = "flex"
                    }
                  })

                hiddenDisplay()

              }}
            />
            : <VscSearch
              color="#3b275367"
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
        }
        <datalist id="datalist">
          {list.map((tecnologia, index) =>
            <option key={index} value={tecnologia} />
          )
          }
          {
            datalist.map((tecnologia, index) =>
              <option key={index} value={tecnologia} />
            )
          }
        </datalist>
      </div>
      <div className="brightness-125 m-auto flex flex-wrap justify-center 
          gap-10 ">
        <div className="">
          <motion.div
            className=" text-center w-[70%] m-auto brightness-200"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <h2 className="text-T4 text-xl mt-10 brightness-75 font-semi-bold mb-4">Projetos pessoais</h2>
            <p className="text-base text-[#25252588] text-justify" >
              Projetos pessoais são aqueles de minha autoria, ou seja, que crio e desenvolvo do zero sozinho.
              O objetivo desses projetos é praticar para consolidar os novos conhecimentos e habilidades adquiridas,
              além de adquirir outras em virtude do desenvolvimento do projeto.
            </p>

          </motion.div>
        </div>
        <div
          className="m-auto flex flex-wrap justify-center 
          gap-10       
      "
        >
          {
            personalProjects.map((project, transitionDelay) => {
              return (
                <motion.div
                  id={autoraisId[transitionDelay]}
                  key={transitionDelay}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: transitionDelay / 2,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  {listAllProjects(project)}
                </motion.div>
              )
            })
          }
          {
            (personalProjects.length % 2) === 0 ?
              null
              :
              <motion.div
                className="THiddenPersonal TPersonalHidden"
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
        <hr className=" border-[#25252588] w-[80%] m-auto
           n2:mt-10   
           n3:mt-6      
           n4:mt-6  
           n5:mt-6  
           n6:mt-6  
           n7:mt-6          
          "/>
        <div className="m-auto flex flex-wrap justify-center 
          gap-10 
      ">
          <motion.div
            className=" text-center w-[70%] m-auto brightness-200"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <h2 className="text-T4 text-xl brightness-75 font-semi-bold mb-4">Projetos em equipe</h2>
            <p className="text-base text-[#25252588] text-justify" >
              Projetos em equipe normalmente são desenvolvidos em função da graduação de analise e
              desenvolvimento de sistemas na PUC Minas. Sua criação e desenvolvimento são
              realizados pela equipe.
            </p>
          </motion.div>
        </div>

        <div
          className="m-auto flex flex-wrap justify-center 
          gap-10     
      "
        >
          {
            groupProjects.map((project, transitionDelay) => {
              return (

                <motion.div
                  id={groupId[transitionDelay]}
                  key={transitionDelay}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: transitionDelay + 1 / 2,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  {listAllProjects(project)}
                </motion.div>
              )
            })
          }
          {
            groupProjects.length % 2 === 0
              ? null
              :
              <motion.div
                className="THiddenGroup TTeamHidden"
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

        <hr className=" border-[#25252588] w-[80%] m-auto
           n2:mt-10   
           n3:mt-6      
           n4:mt-6  
           n5:mt-6  
           n6:mt-6  
           n7:mt-6          
          "/>
        <div
          className="m-auto flex flex-wrap justify-center 
          gap-10      
      "
        >
          <motion.div
            className=" text-center w-[70%] m-auto brightness-200"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <h2 className="text-T4 brightness-75 text-xl font-semi-bold mb-4 ">Projetos de cursos</h2>
            <p className="text-base text-[#25252588] text-justify" >
              Projetos de curso são aqueles desenvolvidos durante os cursos que faço, ou seja, sua criação não é de minha autoria.
              O objetivo desses projetos é adquirir novos conhecimentos e habilidades.
            </p>
          </motion.div>
          {
            courseProjects.map((project, transitionDelay) => {
              return (

                <motion.div
                  id={projetosId[transitionDelay]}
                  key={transitionDelay}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: transitionDelay / 2,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  {listAllProjects(project)}
                </motion.div>
              )
            })
          }

          {
            courseProjects.length % 2 === 0
              ? null
              :
              <motion.div

                className="THiddenCourse TCourseHidden"
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
    </motion.div >
  );
};


import { Search } from "../components/portfolio/functions/Search";
import { VscChromeClose, VscSearch } from "react-icons/vsc";
import { useEffect, useState } from "react";
import { fullFilterDatabase } from "../components/portfolio/database/TecSearch";
import { listAllProjects } from "../components/portfolio/all";
import { projectsDB } from "../components/portfolio/database/projetos"
import { Motion, MotionFirst } from "../components/functions/Motion";
import { pageWidth } from "./util/page-width";

export const Projetos = () => {

  const username = "Lucasvmarangoni";
  const customTitle = "GitHub Activity Graph";
  const bgColor = "070707";
  const color = "3b27535b";
  const line = "3b27535b";
  const point = "ffffff85";
  const areaColor = "030303";
  const titleColor = "3b27535b";
  const hideBorder = true
  const hideTitle = true
  const area = true;

  const linkGraph =
    `https://github-readme-activity-graph.vercel.app/graph?username=${username}&custom_title=${customTitle}&bg_color=${areaColor}&color=${color}&line=${line}&point=${point}&area_color=${areaColor}&title_color=${titleColor}&area=${area}&hide_border=${hideBorder}&hide_title=${hideTitle}`
  const link =
    `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&langs_count=2&hide_title=${hideTitle}&bg_color=${bgColor}&hide_border=${hideBorder}`

  const personalProjects = projectsDB.filter((project) => {
    return project.type === "pessoal" || project.type === "equipe" || project.type === "lib"
  }).reverse();

  const librariesProjects = projectsDB.filter((project) => {
    return project.type === "lib"
  }).reverse();

  const autoraisId: string[] = ["TLogella", "TFFManager", "TcurrencyConverter", "Tpaiva", "TtaskList", "Tport",]
  // const libraries: string[] = ["TLogella"]

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

  useEffect(() => {
    // hidden();
    dynamicDatalist()
    Search();
  }, []);

  return (

    MotionFirst(1.0, 0.5,
      <div
        className={"mt-10 w-[1030px] py-20 bg-BGH m-auto brightness-200  " + pageWidth}
      >
        <div
          className={" flex justify-center items-center brightness-[2] " + pageWidth}
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
            className="px-3 bg-BG text-T1 text-sm placeholder:text-[#25252588] placeholder:brightness-150 
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
                  const filterInput: any = document.querySelector("#input");
                  filterInput.value = ""
                  setCheck(0)
                  setList([])
                  document.querySelectorAll('#TLogella, #TFFManager, #TcurrencyConverter, #TtaskList, #Tpaiva, #Tport')
                    .forEach((element: any) => {
                      if (element) {
                        element.style.display = "flex"
                      } else {
                        element.style.display = "none"
                      }
                    })


                }}
              />
              : <VscSearch
                color="#3b275367"
                className="bg-BG pr-2 relative right-10
              n0:w-8 n0:h-8
              n1:w-8 n1:h-8
              n2:w-8 n2:h-8
              n3:w-8 n3:h-8
              n4:w-8 n4:h-8
              n5:w-8 n5:h-8 
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

        {/* <div className="w-full">
          <img src={link} className="relative right-4 m-auto   
          n5:w-[23rem]  
          n6:w-[18rem]  
          n7:w-52  
          " alt="Lucasvmarangoni's Github Activity Graph" />
        </div> */}

        <div className="grid gap-40 relative">

          <div className="grid gap-10 scroll-item ">
            <div className=" m-auto flex flex-wrap justify-center align-center
              gap-10">

              {MotionFirst(0.8, 0.4,
                <div
                  className=" text-center w-[70%] m-auto brightness-75"
                >
                  <h2 className="text-T1 text-2xl mt-10 brightness-[2.5] font-semi-bold mb-4">Projetos</h2>
                  <p className="PP" >
                    Esses são meus projetos autorais, todos são planejados e desenvolvidos por mim sozinho ou em colaboração com uma equipe.
                  </p>
                </div>

                // <div className=" text-center w-[70%] m-auto brightness-200">
                // <h2 className="text-T4 text-xl mt-10 brightness-75 font-semi-bold mb-4">Projetos</h2>
                // <p className="text-base text-[#25252588] text-justify" >
                //   Apresento nesse portfólio apenas meus projetos autorais, ou seja, que desenvolvo sozinho (pessoal) ou em
                //   colaboração com uma equipe (equipe).
                // </p>
                // </div>

              )}


              <div
                className={"flex flex-wrap justify-center "}
              >
                {
                  personalProjects.map((project, transitionDelay) => {
                    return (
                      Motion(0.8, transitionDelay / 4,
                        <div
                          className="py-4 px-6"
                          id={autoraisId[transitionDelay]}
                          key={transitionDelay}
                        >
                          {listAllProjects(project)}
                        </div>
                      )
                    )
                  })
                }
              </div>
            </div>



            <hr className=" border-[#25252588] w-[80%] m-auto" />

            {/* <div className=" m-auto grid flex-wrap justify-center align-center 
              gap-10">

              {MotionFirst(0.8, 0.4,
                <div
                  className=" text-center m-auto brightness-75"
                >
                  <h2 className="text-T1 text-2xl mt-10 brightness-[2.5] font-semi-bold mb-4">Bibliotecas</h2>
                  <p className="PP text-center" >
                    Essas são as bibliotecas desenvolvidas por mim.
                  </p>
                </div>               

              )}


              <div
                className={"flex flex-wrap justify-center "}
              >
                {
                  librariesProjects.map((project, transitionDelay) => {
                    return (
                      Motion(0.8, transitionDelay / 4,
                        <div
                          className="py-4 px-6"
                          id={libraries[transitionDelay]}
                          key={transitionDelay}
                        >
                          {listAllProjects(project)}
                        </div>
                      )
                    )
                  })
                }
              </div>
            </div> */}



          </div>

        </div>
      </div >
    )
  );
};


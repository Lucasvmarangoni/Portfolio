import { Search } from "../components/portfolio/functions/Search";
import { VscChromeClose, VscSearch } from "react-icons/vsc";
import { useEffect, useState } from "react";
import { fullFilterDatabase } from "../components/portfolio/database/TecSearch";
import { listAllProjects } from "../components/portfolio/all";
import { projectsDB } from "../components/portfolio/database/projetos"
import { Motion, MotionFirst } from "../components/functions/Motion";
import { pageWidth } from "./util/page-width";
import { NavLink } from "react-router-dom";

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
        <div className="flex justify-center items-center m-auto pb-4 gap-4
          n0:w-[800px]
          n1:w-[450px]
          n2:w-[400px]
          n3:w-[460px]
          n4:w-[430px]
          n5:w-[350px]
          n6:w-[300px]
          n7:w-[200px]
          ">

          <img
            className="bg-[#6d6d6d0e] opacity-100 rounded-[10rem] brightness-50
              n0:w-32  
              n1:w-32    
              n2:w-32
              n3:w-32
              n4:w-32
              n5:w-32
              n6:w-32
              n7:w-32
             "
            src="/foto-perfil.png"
            alt="Foto do perfil"
          />

          <div className={"text-center flex flex-col "} >
            {Motion(0.7, 0.2,
              <h1
                className="text-T2 font-medium brightness-[1.8]
              n0:text-2xl n0:text-left
              n1:text-2xl n1:text-left
              n2:text-2xl n2:text-left
              n3:text-base
              n4:text-base 
              n5:text-base 
              n6:text-base 
              n7:text-base"
              >
                {/* {<FigsCapaText />} */}
                Olá, meu nome é
              </h1>
            )}
            {Motion(0.7, 0.3,
              <h1
                className="text-T4 font-semibold brightness-[2]
        n0:text-3xl n0:text-left
        n1:text-3xl n1:text-left
        n2:text-2xl n2:text-left
        n3:text-lg 
        n4:text-base 
        n5:text-base 
        n6:text-base 
        n7:text-base"
              >
                Lucas V. Marangoni
              </h1>
            )}
            {Motion(0.7, 0.4,
              <p className="mb-1 text-justify  text-T2        
          ">
                Desenvolvedor Backend
              </p>
            )}

            <div
              className="mt-1 flex justify-center gap-1
                      n0:flex-wrap
                      n1:flex-wrap
                      n2:flex-wrap
                      n3:flex-wrap 
                      n4:flex-wrap
                      n5:flex-wrap
                      n6:flex-wrap
                      n7:flex-wrap
                    "
            >
              {Motion(0.6, 0.8,
                <NavLink
                  className="buttons
                        "
                  to="https://www.linkedin.com/in/lucasvmarangoni/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="18" height="18" rx="2" fill="#3b27535b" />
                    <path d="M16.5604 0H1.53803C0.717186 0 0 0.590625 0 1.40183V16.4575C0 17.2732 0.717186 18 1.53803 18H16.556C17.3812 18 18 17.2683 18 16.4575V1.40183C18.0048 0.590625 17.3812 0 16.5604 0ZM5.57959 15.0039H3.00093V6.98625H5.57959V15.0039ZM4.37946 5.76723H4.36097C3.53571 5.76723 3.00133 5.1529 3.00133 4.38388C3.00133 3.6008 3.54977 3.00094 4.39352 3.00094C5.23727 3.00094 5.75356 3.59638 5.77204 4.38388C5.77164 5.1529 5.23727 5.76723 4.37946 5.76723ZM15.0039 15.0039H12.4252V10.62C12.4252 9.56973 12.0499 8.85214 11.117 8.85214C10.4042 8.85214 9.98235 9.33429 9.79472 9.80397C9.7244 9.97272 9.70552 10.2025 9.70552 10.4372V15.0039H7.12686V6.98625H9.70552V8.10201C10.0808 7.56763 10.667 6.79862 12.0311 6.79862C13.7238 6.79862 15.0043 7.91438 15.0043 10.3199L15.0039 15.0039Z" fill="black" />
                  </svg>

                  <p>Linkedin</p>
                </NavLink>
              )}

              {Motion(0.6, 0.9,
                <NavLink
                  className="buttons
                        "
                  to="https://github.com/Lucasvmarangoni"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="18" height="18" rx="2" fill="black" />
                    <path d="M9.05044 2.00043C5.15551 2.00043 2 5.10682 2 8.93529C2 12.0009 4.01995 14.5993 6.81942 15.516C7.17326 15.5815 7.30105 15.3669 7.30105 15.1814C7.30105 15.0167 7.29708 14.5811 7.29444 14.0029C5.33221 14.4208 4.91888 13.0706 4.91888 13.0706C4.59765 12.2714 4.13408 12.0568 4.13408 12.0568C3.49602 11.6282 4.18476 11.6373 4.18476 11.6373C4.89156 11.6845 5.26347 12.3503 5.26347 12.3503C5.89228 13.4113 6.91328 13.1044 7.31735 12.9259C7.37905 12.479 7.5628 12.1717 7.76285 12.0005C6.19766 11.8267 4.55182 11.2307 4.55182 8.57338C4.55182 7.81445 4.82502 7.19638 5.27669 6.71094C5.1987 6.53713 4.95986 5.83064 5.33882 4.87537C5.33882 4.87537 5.92886 4.69029 7.2777 5.58662C7.84217 5.43276 8.44146 5.35604 9.04031 5.35214C9.63959 5.35604 10.2384 5.43319 10.8029 5.58662C12.1438 4.69029 12.7334 4.87537 12.7334 4.87537C13.1119 5.83064 12.8731 6.5367 12.8044 6.71094C13.2516 7.19638 13.5248 7.81488 13.5248 8.57338C13.5248 11.2368 11.8768 11.8241 10.3098 11.9936C10.5548 12.2012 10.7844 12.6281 10.7844 13.2761C10.7844 14.2036 10.7756 14.9508 10.7756 15.1767C10.7756 15.357 10.899 15.5737 11.2621 15.5039C14.0823 14.5967 16.1 11.9962 16.1 8.93486C16.1 5.10638 12.9445 2 9.04956 2L9.05044 2.00043Z" fill="#3b2753f1" fillOpacity="0.4" />
                  </svg>


                  <p>Github</p>
                </NavLink>
              )}

              {Motion(0.6, 1.0,
                <NavLink
                  className="buttons
                          n5:w24
                        "
                  to="/curriculo-lucasvmarangoni.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="18" height="18" rx="2" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M15 15.0588V16.4706H3V15.0588H15ZM15 11.5294V12.9412H3V11.5294H15ZM15 8V9.41176H3V8H15Z" fill="#3b2753f1" fillOpacity="0.4" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.2661 1L7.96147 5.30466L5.73336 3.07656L5 3.80991L7.96147 6.7719L13 1.73388L12.2661 1Z" fill="#3b2753f1" fillOpacity="0.4" />
                  </svg>



                  <p>Currículo</p>
                </NavLink>
              )}
            </div>
          </div>


        </div>



        <div
          className={" flex justify-center items-center brightness-[2]" + pageWidth}
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
            className="px-5 bg-BG text-T1 text-sm placeholder:text-[#3b27535b] placeholder:brightness-100 border-[1.5px] border-[#16161656] rounded-3xl ml-8
          n0:w-[30rem] n0:h-10
          n1:w-[35rem] n1:h-10
          n2:w-[33rem] n3:h-10 
          n4:w-[25rem] n4:h-10
          n5:w-[20rem] n5:h-10 n5:text-sm
          n6:w-64 n6:h-8 n6:text-xs 
          n7:w-52 n7:h-8 n7:text-xs
          "
          />
          {
            check === 1
              ? <VscChromeClose
                color="#3b275367"
                className=" bg-BG pr-2 relative right-10
              n0:w-8 n0:h-8
              n1:w-8 n1:h-8
              n2:w-8 n2:h-8
              n3:w-8 n3:h-8
              n4:w-8 n4:h-8
              n5:w-8 n5:h-8 
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


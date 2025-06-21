import { Search } from "../components/portfolio/functions/Search-projects";
import { VscChromeClose, VscSearch } from "react-icons/vsc";
import { useEffect, useState } from "react";
import { fullFilterDatabase } from "../components/portfolio/database/TecSearch";
import { listAllProjects } from "../components/portfolio/projects-template";
import { projectsDB } from "../components/portfolio/database/projetos"
import { Motion, MotionFirst } from "../components/functions/Motion";
import { pageWidth } from "./util/page-width";
import { Me } from "./util/me";
import { SearchBar } from "../components/portfolio/functions/Search-bar";

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
    return project.type === "personal" || project.type === "team" || project.type === "library"
  }).reverse();

  const librariesProjects = projectsDB.filter((project) => {
    return project.type === "library"
  }).reverse();

  const autoraisId: string[] = ["TLogella", "TFFManager", "TcurrencyConverter", "Tpaiva", "TtaskList", "Tport",]
  // const libraries: string[] = ["TLogella"]

  const datalist: string[] = [
    'Golang',
    'Node Typescript',
    'Node Typescript Nest'
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
    dynamicDatalist()
    Search();
  }, []);

  return (
    MotionFirst(1.0, 0.5,
      <div
        className={"mt-10 w-[1030px] py-20 bg-BGH m-auto " + pageWidth}
      >
        <Me job="Back-end Developer" />



        <SearchBar
          inputId="input"
          placeholder="Search by technologies"
          check={check}
          setCheck={setCheck}
          setList={setList}
          list={list}
          datalistId="datalist"
          datalist={datalist}
          onChange={Search}
          onInput={dynamicDatalist}
          selectorList={projectsDB.map(project => `#T${project.name}`)}
        />


        <div className="grid gap-40 relative">

          <div className="grid gap-10 scroll-item ">
            <div className=" m-auto flex flex-wrap justify-center align-center
              gap-10">

              <div></div>

              <div
                // brightness-[3]
                className={"flex flex-wrap justify-center "}
              >
                {
                  personalProjects.map((project, transitionDelay) => {
                    return (
                      Motion(0.8, transitionDelay / 4,
                        <div
                          className="py-4 px-6 hover:brightness-200"
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

          </div>

        </div>
      </div >
    )
  );
};


import { VscChromeClose, VscSearch } from "react-icons/vsc";
import { useEffect, useState } from "react";
import { MotionFirst } from "../components/functions/Motion";
import { pageWidth } from "./util/page-width";
import { Me } from "./util/me";
import { listAllMachines } from "../components/portfolio/machines-template";
import { machinesDB } from "../components/portfolio/database/machines";
import { fullFilterDatabase } from "../components/portfolio/database/MachinesSearch";
import { Search } from "../components/portfolio/functions/Search-machines";
import { SearchBar } from "../components/portfolio/functions/Search-bar";


export const OffSec = () => {

  const machines = machinesDB;

  const machinesID: string[] = machinesDB.map(machine => machine.name);
  console.log("machinesID", machinesID)
  const datalist: string[] = [
    'Linux',
    'Windows',
    'Active Directory',
    'SNMP'
  ]

  const [list, setList] = useState<string[]>([])
  const [check, setCheck] = useState<number>(0)

  function dynamicDatalist() {
    const filterInput: any = document.querySelector("#input-machines");
    const filter = filterInput.value.toLowerCase();

    const machines_data: string[] = [];
    for (let i = 0; i < fullFilterDatabase.length; i++) {
      if (fullFilterDatabase[i] !== fullFilterDatabase[i + 1]) {
        machines_data.push(fullFilterDatabase[i]);
      }
    }
    const dList: string[] = []
    for (let i = 0; i < machines_data.length; i++) {
      filter.length > 0 ? setCheck(1) : setCheck(0)
      if (filter.length >= 2) {
        if (machines_data[i].includes(filter)) {
          dList.push(machines_data[i])
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
        className={"mt-10 w-[1030px] py-20 bg-BGH m-auto " + pageWidth}
      >

        <Me job="Offensive Security Analyst" />

        <SearchBar
          inputId="input-machines"
          placeholder="Search by skill, os, active, retired, easy, medium, hard, insane"
          datalistId="datalist"
          datalist={datalist}
          onChange={Search}
          onInput={dynamicDatalist}
          list={list}          
          check={check}
          setCheck={setCheck}
          setList={setList}
          selectorList={machinesDB.map(machine => `#${machine.name}`)}
        />

        <div className="relative mt-10  max-w-[50rem] m-auto ">
          <h1 className="text-T2 text-3xl text-center mb-6 border-y-2 border-[#375949] max-w-[45rem] m-auto hover:brightness-200">Machines</h1>
          <div className="grid gap-10 scroll-item">
            <div className="m-auto flex justify-center align-center">

              <div></div>

              <div className={"flex justify-center flex-wrap w-[50rem]"}>

                {
                  machines.map((machine, transitionDelay) => {
                    return (
                      MotionFirst(0.2, transitionDelay / 8,
                        <div
                          className="pb-4 px-6 hover:opacity-70"
                          id={machinesID[transitionDelay]}
                          key={transitionDelay}
                        >
                          {listAllMachines(machine)}
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


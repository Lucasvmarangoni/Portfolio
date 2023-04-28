import { autorais, projetos } from "../../../pages/Portfolio";
import {
  tecEsports,
  tecPort,
  tecNotServ,
  tecTaskList,
  tecBestSurfing,
} from "../database/TecSearch";


const esports = tecEsports.concat(" ", "").join(" ").toLowerCase().split(" ");
const port: string[] = tecPort.concat(" ", "").join(" ").toLowerCase().split(" ");
const notServ: string[] = tecNotServ.concat(" ", "").join(" ").toLowerCase().split(" ");
const taskList: string[] = tecTaskList.concat(" ", "").join(" ").toLowerCase().split(" ");
const bestSurfing: string[] = tecBestSurfing.concat(" ", "").join(" ").toLowerCase().split(" ");


export function Search() {
  const filterInput: any = document.querySelector("#input");
  const Tesports: any = document.querySelector("#Tesports");
  const Tport: any = document.querySelector("#Tport");
  const TnotServ: any = document.querySelector("#TnotServ");
  const TtaskList: any = document.querySelector("#TtaskList");
  const TbestSurfing: any = document.querySelector("#TbestSurfing");

  const THiddenCurse: any = document.querySelector(".THiddenCurse")
  const THiddenPersonal: any = document.querySelector(".THiddenPersonal")

  let filter = filterInput.value.toLowerCase().split(" ");

  let checkEsports: number | boolean = 0;
  for (let i = 0; i < esports.length; i++) {
    esports.includes(filter[i]) ? ++checkEsports : (checkEsports += 0);
  }
  checkEsports >= filter.length
    ? (Tesports.style = "display: flex")
    : (Tesports.style = "display: none");

  let checkPort: number = 0;
  for (let i = 0; i < port.length; i++) {
    port.includes(filter[i]) ? ++checkPort : (checkPort += 0);
  }
  checkPort >= filter.length
    ? (Tport.style = "display: flex")
    : (Tport.style = "display: none");

  let checkNotServ: number = 0;
  for (let i = 0; i < notServ.length; i++) {
    notServ.includes(filter[i]) ? ++checkNotServ : (checkNotServ += 0);
  }
  checkNotServ >= filter.length
    ? (TnotServ.style = "display: flex")
    : (TnotServ.style = "display: none");

  let checkTasksList: number = 0;
  for (let i = 0; i < taskList.length; i++) {
    taskList.includes(filter[i]) ? ++checkTasksList : (checkTasksList += 0);
  }
  checkTasksList >= filter.length
    ? (TtaskList.style = "display: flex")
    : (TtaskList.style = "display: none");

  let checkBestsurfing: number = 0;
  for (let i = 0; i < bestSurfing.length; i++) {
    bestSurfing.includes(filter[i])
      ? ++checkBestsurfing
      : (checkBestsurfing += 0);
  }
  checkBestsurfing >= filter.length
    ? (TbestSurfing.style = "display: flex")
    : (TbestSurfing.style = "display: none");



  let nonePersonalCheck: number = 0;
  let noneCurseCheck: number = 0;

  Tesports.style.display == "none" ? noneCurseCheck += 2 : noneCurseCheck -= 2;
  TnotServ.style.display == "none" ? noneCurseCheck += 2 : noneCurseCheck -= 2;
  TbestSurfing.style.display == "none" ? noneCurseCheck += 2 : noneCurseCheck -= 2;

  if (autorais.length % 2 == 0) {
    THiddenCurse.style.display = "none"
  }
  if (noneCurseCheck == 0 || noneCurseCheck != 2)
    THiddenCurse.style.display = "flex"

  Tport.style.display == "none" ? nonePersonalCheck += 2 : nonePersonalCheck -= 2;
  TtaskList.style.display == "none" ? nonePersonalCheck += 2 : nonePersonalCheck -= 2;


  if (nonePersonalCheck == 2) {
    THiddenPersonal.style.display = "none"
  }
  if (nonePersonalCheck == 0 || nonePersonalCheck != 2) {
    THiddenPersonal.style.display = "flex"
  }



}



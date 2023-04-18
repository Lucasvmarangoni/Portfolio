import {
  esports,  //
  port,
  notServ,
  taskslist,
  bestsurfing,
} from "../database/TecSearch";

export function Search() {
  const filterInput: any = document.querySelector("#input");
  const Tesports: any = document.querySelector("#Tesports");
  // const Tlab01: any = document.querySelector("#Tlab01");
  const Tport: any = document.querySelector("#Tport");
  const TnotServ: any = document.querySelector("#TnotServ");
  const TTasksList: any = document.querySelector("#TTasksList");
  const TBestSurfing: any = document.querySelector("#TBestSurfing");

  let filter = filterInput.value.toLowerCase().split(" ");

  let checkEsports: number = 0;
  for (let i = 0; i < esports.length; i++) {
    esports.includes(filter[i]) ? ++checkEsports : (checkEsports += 0);
  }
  checkEsports >= filter.length
    ? (Tesports.style = "display: flex")
    : (Tesports.style = "display: none");

  // let checkLab01: number = 0;
  // for (let i = 0; i < esports.length; i++) {
  //   lab01.includes(filter[i]) ? ++checkLab01 : (checkLab01 += 0);
  // }
  // checkLab01 >= filter.length
  //   ? (Tlab01.style = "display: flex")
  //   : (Tlab01.style = "display: none");

  let checkPort: number = 0;
  for (let i = 0; i < esports.length; i++) {
    port.includes(filter[i]) ? ++checkPort : (checkPort += 0);
  }
  checkPort >= filter.length
    ? (Tport.style = "display: flex")
    : (Tport.style = "display: none");

  let checkNotServ: number = 0;
  for (let i = 0; i < esports.length; i++) {
    notServ.includes(filter[i]) ? ++checkNotServ : (checkNotServ += 0);
  }
  checkNotServ >= filter.length
    ? (TnotServ.style = "display: flex")
    : (TnotServ.style = "display: none");

  let checkTasksList: number = 0;
  for (let i = 0; i < taskslist.length; i++) {
    taskslist.includes(filter[i]) ? ++checkTasksList : (checkTasksList += 0);
  }
  checkTasksList >= filter.length
    ? (TTasksList.style = "display: flex")
    : (TTasksList.style = "display: none");

  let checkBestsurfing: number = 0;
  for (let i = 0; i < bestsurfing.length; i++) {
    bestsurfing.includes(filter[i])
      ? ++checkBestsurfing
      : (checkBestsurfing += 0);
  }
  checkBestsurfing >= filter.length
    ? (TBestSurfing.style = "display: flex")
    : (TBestSurfing.style = "display: none");
}

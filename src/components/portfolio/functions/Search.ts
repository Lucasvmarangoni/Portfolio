import {
  bestSurfing,
  esports,
  notServ,
  port,
  taskList,
} from "../database/TecSearch";
import { hiddenDisplay } from "./hidden-display";
import { Csearch } from "./search-component";




export function Search() {
  const Tesports: any = document.querySelector("#Tesports");
  const Tport: any = document.querySelector("#Tport");
  const TnotServ: any = document.querySelector("#TnotServ");
  const TtaskList: any = document.querySelector("#TtaskList");
  const TbestSurfing: any = document.querySelector("#TbestSurfing");

  const filterInput: any = document.querySelector("#input");
  let filter = filterInput.value.toLowerCase().split(" ");

  



  const Sesports = new Csearch(0, esports, filter, Tesports);
  Sesports.execute();
  const Sport = new Csearch(0, port, filter, Tport);
  Sport.execute();
  const SnotServ = new Csearch(0, notServ, filter, TnotServ);
  SnotServ.execute();
  const StaskList = new Csearch(0, taskList, filter, TtaskList);
  StaskList.execute();
  const SbestSurfing = new Csearch(0, bestSurfing, filter, TbestSurfing);
  SbestSurfing.execute();

  hiddenDisplay()
}



import {
  bestSurf,
  currencyConverter,
  esports,
  notServ,
  paivaMotoPecas,
  port,
  taskList,
} from "../database/TecSearch";
// import { hiddenDisplay } from "./hidden-display";
import { Csearch } from "./search-component";

export function Search() {
  const Tesports: any = document.querySelector("#Tesports");
  const Tport: any = document.querySelector("#Tport");
  const TnotServ: any = document.querySelector("#TnotServ");
  const TtaskList: any = document.querySelector("#TtaskList");
  const TbestSurf: any = document.querySelector("#TbestSurf");
  const TpaivaMotoPecas: any = document.querySelector("#Tpaiva");
  const TcurrencyConverter: any = document.querySelector("#TcurrencyConverter");

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
  const SbestSurf = new Csearch(0, bestSurf, filter, TbestSurf);
  SbestSurf.execute();
  const SpaivaMotoPecas = new Csearch(0, paivaMotoPecas, filter, TpaivaMotoPecas);
  SpaivaMotoPecas.execute();
  const ScurrencyConverter = new Csearch(0, currencyConverter, filter, TcurrencyConverter);
  ScurrencyConverter.execute();  
  
  // hiddenDisplay() 
}



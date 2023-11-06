import {
  bestSurf,
  currencyConverter,
  esports,
  notServ,
  paivaMotoPecas,
  port,
  taskList,
  gopportunities,
  ordering,
  encoder
} from "../database/TecSearch";
import { Csearch } from "./search-component";

export function Search() {
  const Tesports: any = document.querySelector("#Tesports");
  const Tport: any = document.querySelector("#Tport");
  const TnotServ: any = document.querySelector("#TnotServ");
  const TtaskList: any = document.querySelector("#TtaskList");
  const TbestSurf: any = document.querySelector("#TbestSurf");
  const TpaivaMotoPecas: any = document.querySelector("#Tpaiva");
  const TcurrencyConverter: any = document.querySelector("#TcurrencyConverter");
  const Tgopportunities: any = document.querySelector("#Tgopportunities");
  const Tordering: any = document.querySelector("#Tordering");
  const Tencoder: any = document.querySelector("#Tencoder");
  const TFFManager: any = document.querySelector("#TFFManager");

  const filterInput: any = document.querySelector("#input");
  let filter = filterInput.value.toLowerCase().split(" ");  

  const Sport = new Csearch(0, port, filter, Tport);
  Sport.execute();
  const StaskList = new Csearch(0, taskList, filter, TtaskList);
  StaskList.execute();
  const SbestSurf = new Csearch(0, bestSurf, filter, TbestSurf);
  SbestSurf.execute();
  const SpaivaMotoPecas = new Csearch(0, paivaMotoPecas, filter, TpaivaMotoPecas);
  SpaivaMotoPecas.execute();
  const ScurrencyConverter = new Csearch(0, currencyConverter, filter, TcurrencyConverter);
  ScurrencyConverter.execute();  
  const Sgopportunities = new Csearch(0, gopportunities, filter, Tgopportunities);
  Sgopportunities.execute(); 
  const Sordering = new Csearch(0, ordering, filter, Tordering)
  Sordering.execute()
  const Sencoder = new Csearch(0, encoder, filter, Tencoder)
  Sencoder.execute()
  const SFFManager = new Csearch(0, encoder, filter, TFFManager)
  SFFManager.execute()
  
}



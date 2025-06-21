import {
  currencyConverter,
  paivaMotoPecas,
  port,
  taskList,
  ffmanager,
  logella
} from "../database/TecSearch";
import { Csearch } from "./search-component";

export function Search() {
  const Tport: any = document.querySelector("#Tport");
  const TtaskList: any = document.querySelector("#TtaskList");
  const TpaivaMotoPecas: any = document.querySelector("#Tpaiva");
  const TcurrencyConverter: any = document.querySelector("#TcurrencyConverter");
  const TFFManager: any = document.querySelector("#TFFManager");
  const TLogella: any = document.querySelector("#TLogella");


  const filterInput: any = document.querySelector("#input");
  let filter = filterInput.value.toLowerCase().split(" ");  

  const Sport = new Csearch(0, port, filter, Tport);
  Sport.execute();

  const StaskList = new Csearch(0, taskList, filter, TtaskList);
  StaskList.execute();

  const SpaivaMotoPecas = new Csearch(0, paivaMotoPecas, filter, TpaivaMotoPecas);
  SpaivaMotoPecas.execute();
  
  const ScurrencyConverter = new Csearch(0, currencyConverter, filter, TcurrencyConverter);
  ScurrencyConverter.execute();  

  const SFFManager = new Csearch(0, ffmanager, filter, TFFManager)
  SFFManager.execute()


  const SLogella = new Csearch(0, logella, filter, TLogella)
  SLogella.execute()
  
}



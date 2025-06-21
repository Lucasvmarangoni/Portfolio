
import { machinesDB } from "../database/machines";
import { machineTerms } from "../database/MachinesSearch";
import { Csearch } from "./search-component";

export function Search() {
  const filterInput: any = document.querySelector("#input-machines");
  let filter = filterInput.value.toLowerCase().split(" ");

  machinesDB.forEach(machine => {
    const element: any = document.querySelector(`#${machine.name}`);
    const data = machineTerms[machine.name];
    if (element && data) {
      const searchInstance = new Csearch(0, data, filter, element);
      searchInstance.execute();
    }
  });
}



import { projectsDB } from "./projetos";

export const port: string[] = projectsDB[0].technologies.concat(" ", "").join(" ").toLowerCase().split(" ");
export const taskList: string[] = projectsDB[1].technologies.concat(" ", "").join(" ").toLowerCase().split(" ");
export const paivaMotoPecas: string[] = projectsDB[2].technologies.concat(" ", "").join(" ").toLowerCase().split(" ");
export const currencyConverter: string[] = projectsDB[3].technologies.concat(" ", "").join(" ").toLowerCase().split(" ");
export const ffmanager: string[] = projectsDB[4].technologies.concat(" ", "").join(" ").toLowerCase().split(" ");
export const logella: string[] = projectsDB[5].technologies.concat(" ", "").join(" ").toLowerCase().split(" ");


const fullDatabase = [...port, ...paivaMotoPecas, ...taskList, ...currencyConverter, ...ffmanager, ...logella]
let tecnologias: string[] = []

const ordenedFullDatabase: string[] = fullDatabase.sort()

for (let i = 0; i < ordenedFullDatabase.length; i++) {
  if (ordenedFullDatabase[i] !== ordenedFullDatabase[i + 1]) {
    tecnologias.push(ordenedFullDatabase[i])
  }
}

export const fullFilterDatabase = tecnologias
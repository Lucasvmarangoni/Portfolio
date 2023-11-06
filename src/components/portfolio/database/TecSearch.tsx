import { projectsDB } from "./projetos";

export const esports = projectsDB[0].technologies.concat(" ", "").join(" ").toLowerCase().split(" ");
export const port: string[] = projectsDB[1].technologies.concat(" ", "").join(" ").toLowerCase().split(" ");
export const notServ: string[] = projectsDB[2].technologies.concat(" ", "").join(" ").toLowerCase().split(" ");
export const taskList: string[] = projectsDB[3].technologies.concat(" ", "").join(" ").toLowerCase().split(" ");
export const bestSurf: string[] = projectsDB[4].technologies.concat(" ", "").join(" ").toLowerCase().split(" ");
export const paivaMotoPecas: string[] = projectsDB[5].technologies.concat(" ", "").join(" ").toLowerCase().split(" ");
export const currencyConverter: string[] = projectsDB[6].technologies.concat(" ", "").join(" ").toLowerCase().split(" ");
export const gopportunities: string[] = projectsDB[7].technologies.concat(" ", "").join(" ").toLowerCase().split(" ");
export const ordering: string[] = projectsDB[8].technologies.concat(" ", "").join(" ").toLowerCase().split(" ");
export const encoder: string[] = projectsDB[9].technologies.concat(" ", "").join(" ").toLowerCase().split(" ");
export const FFManager: string[] = projectsDB[10].technologies.concat(" ", "").join(" ").toLowerCase().split(" ");

const fullDatabase = [...port, ...paivaMotoPecas, ...bestSurf, ...taskList, ...currencyConverter, 
  ...gopportunities, ...ordering, ...encoder, ...FFManager]
let tecnologias: string[] = []

const ordenedFullDatabase: string[] = fullDatabase.sort()

for (let i = 0; i < ordenedFullDatabase.length; i++) {
  if (ordenedFullDatabase[i] !== ordenedFullDatabase[i + 1]) {
    tecnologias.push(ordenedFullDatabase[i])
  }
}

export const fullFilterDatabase = tecnologias
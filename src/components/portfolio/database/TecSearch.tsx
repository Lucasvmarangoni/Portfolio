import { projectsDB } from "./projetos";

export const esports = projectsDB[5].technologies.concat(" ", "").join(" ").toLowerCase().split(" ");
export const port: string[] = projectsDB[4].technologies.concat(" ", "").join(" ").toLowerCase().split(" ");
export const notServ: string[] = projectsDB[3].technologies.concat(" ", "").join(" ").toLowerCase().split(" ");
export const taskList: string[] = projectsDB[2].technologies.concat(" ", "").join(" ").toLowerCase().split(" ");
export const bestSurf: string[] = projectsDB[1].technologies.concat(" ", "").join(" ").toLowerCase().split(" ");
export const paivaMotoPecas: string[] = projectsDB[0].technologies.concat(" ", "").join(" ").toLowerCase().split(" ");


const fullDatabase = [...esports, ...port, ...notServ, ...taskList, ...bestSurf, ...paivaMotoPecas]
let tecnologias: string[] = []

const ordenedFullDatabase: string[] = fullDatabase.sort()


for (let i = 0; i < ordenedFullDatabase.length; i++) {
  if (ordenedFullDatabase[i] !== ordenedFullDatabase[i + 1]) {
    tecnologias.push(ordenedFullDatabase[i])
  }

}

export const fullFilterDatabase = tecnologias
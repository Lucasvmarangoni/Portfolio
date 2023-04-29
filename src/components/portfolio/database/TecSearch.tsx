export const tecEsports = [
  "Typescript",
  "Node",
  "Express",
  "SQLite",
  "Prisma Studio",
  "React",
  "Vite",
  "Axios",
  "Tailwind",
]

export const tecPort = [
  "TypeScript",
  "Vite",
  "React",
  "TailWind",
  "Radix ui",
  "Framer Motion"
];

export const tecNotServ = [
  "TypeScript",
  "Node",
  "Nest",
  "Jest",
  "Prisma Studio",
  "SQLite"
]

export const tecTaskList = [
  "TypeScript",
  "Node",
  "Express",
  "Vitest",
  "Prisma Studio",
  "Class-validator",
  "SQLite"
]

export const tecBestSurfing: string[] = [
  "TypeScript",
  "Node.js",
  "Express",
  "OvernightJS",
  "Lodash",
  "Pino",
  "Express-pino",
  "Json Web Token",
  "Bcrypt",
  "BodyParser",
  "Node-Config",
  "MongoDB",
  "Mongoose",
  "Jest",
  "Nock",
  "Supertest",
  "Docker",
  "Docker Compose",
  "Github Actions",
  "Heroku"
]

export const esports = tecEsports.concat(" ", "").join(" ").toLowerCase().split(" ");
export const port: string[] = tecPort.concat(" ", "").join(" ").toLowerCase().split(" ");
export const notServ: string[] = tecNotServ.concat(" ", "").join(" ").toLowerCase().split(" ");
export const taskList: string[] = tecTaskList.concat(" ", "").join(" ").toLowerCase().split(" ");
export const bestSurfing: string[] = tecBestSurfing.concat(" ", "").join(" ").toLowerCase().split(" ");



const fullDatabase = [...esports, ...port, ...notServ, ...taskList, ...bestSurfing]
let tecnologias: string[] = []

const ordenedFullDatabase: string[] = fullDatabase.sort()


for (let i = 0; i < ordenedFullDatabase.length; i++) {
  if (ordenedFullDatabase[i] !== ordenedFullDatabase[i + 1]) {
    tecnologias.push(ordenedFullDatabase[i])
  }

}

export const fullFilterDatabase = tecnologias
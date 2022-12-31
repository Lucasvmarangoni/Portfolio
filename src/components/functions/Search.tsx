const esports =
  "typescript, node.js, react.js, vite.js, prisma studio, sqlite, express, axios, tailwind, radix ui,";
const lab01 = "javascript, vite.js, tailwind, npm, imask,";
const port = "typescript, npm, react.js, vite.js, tailwind, radix ui, framer motion,";
const notServ = "typescript, node.js, nest.js, jest.js, prisma, sqlite,";


export function Search(t: any) {
  const filterInput: any = document.querySelector("#input");
  const Tesports: any = document.querySelector("#Tesports");
  const Tlab01: any = document.querySelector("#Tlab01");
  const Tport: any = document.querySelector("#Tport");
  const TnotServ: any = document.querySelector("#TnotServ");

  esports.includes(filterInput.value.toLowerCase())
    ? (Tesports.style = "display: flex")
    : (Tesports.style = "display: none");

  lab01.includes(filterInput.value.toLowerCase())
    ? (Tlab01.style = "display: flex")
    : (Tlab01.style = "display: none");

  port.includes(filterInput.value.toLowerCase())
    ? (Tport.style = "display: flex")
    : (Tport.style = "display: none");

  notServ.includes(filterInput.value.toLowerCase())
    ? (TnotServ.style = "display: flex")
    : (TnotServ.style = "display: none");
}

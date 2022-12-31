const esports = [
  "typescript",
  "node",
  "react",
  "vite",
  "prisma",
  "sqlite",
  "express",
  "axios",
  "tailwind",
  "radix ui",
  "",
];

const lab01 = ["javascript", "vite", "tailwind", "npm", "imask", ""];

const port = [
  "typescript",
  "npm",
  "react",
  "vite",
  "tailwind",
  "radix ui",
  "framer motion",
  "",
];

const notServ = ["typescript", "node", "nest", "jest", "prisma", "sqlite", ""];

export function Search() {
  const filterInput: any = document.querySelector("#input");
  const Tesports: any = document.querySelector("#Tesports");
  const Tlab01: any = document.querySelector("#Tlab01");
  const Tport: any = document.querySelector("#Tport");
  const TnotServ: any = document.querySelector("#TnotServ");

  esports.includes(filterInput.value.toLowerCase())
    ? (Tesports.style = "visibility: visible")
    : (Tesports.style = "visibility: hidden");

  lab01.includes(filterInput.value.toLowerCase())
    ? (Tlab01.style = "visibility: visible")
    : (Tlab01.style = "visibility: hidden");

  port.includes(filterInput.value.toLowerCase())
    ? (Tport.style = "visibility: visible")
    : (Tport.style = "visibility: hidden");

  notServ.includes(filterInput.value.toLowerCase())
    ? (TnotServ.style = "visibility: visible")
    : (TnotServ.style = "visibility: hidden");
}

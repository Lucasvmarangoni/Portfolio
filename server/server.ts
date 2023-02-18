import express from "express";

const app = express();

app.get("/", (req, res: any) => {
  res.url("https://lucasvmarangoni.vercel.app");
});

app.get("/portfolio", (req, res: any) => {
  res.url("https://lucasvmarangoni.vercel.app/portfolio");
});

app.listen("https://lucasvmarangoni.vercel.app", () => {
  console.log("Server is running!");
});

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("home");
});

app.get("/portfolio", (req, res) => {
    res.send("portfolio");
});

app.listen("https://lucasvmarangoni.vercel.app", () => {
  console.log("Server is running!");
});

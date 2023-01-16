import express from "express";
import path from "path";

const app = express();

app.use(express.static(path.join("./../src/pages")));

app.get("/", (req, res) => {
  req.url = "/";
  res.type("react");
  res.sendFile(path.join("../../src/pages/Home.tsx"));
});

app.get("/portfolio", (req, res) => {
  req.url = "/portfolio";
  res.type("react");
  res.sendFile(path.join("../../src/pages/Portfolio.tsx"));
});

app.get("*", (req, res) => {
  req.url = "*";
  res.type("react");
  res.sendFile(path.join("../../src/pages/ErrorNotFound.tsx"));
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

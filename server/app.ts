import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "teste se funciona no vercel",
  });
});

app.listen("https://lucasvmarangoni.vercel.app/", () => {
  console.log("Server is running on port https://lucasvmarangoni.vercel.app/");
});

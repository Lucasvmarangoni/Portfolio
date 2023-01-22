import express from "express";
import nodemailer from "nodemailer";
import {inputEmail, inputDescription} from "../components/Home/Contato"

const app = express();

const user: string = "email-lvm@lucasvmarangoni.vercel.app";
const toMyEmail: string = "lucasvm.ti@gmail.com";
const pass: string = "Teste123";

app.get("/send", (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.umbles.com",
    port: 587,
    secure: true,
    auth: {
      user,
      pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  transporter
    .sendMail({
      from: user,
      to: toMyEmail,
      replyTo: inputEmail.value,
      subject: "🆕 Contato do Portfólio.",
      text: inputDescription.value,
    })
    .then((message) => {
      res.send(message);
    })
    .catch((err) => {
      res.send(err);
    });
});

const port = "https://lucasvmarangoni.vercel.app/";
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

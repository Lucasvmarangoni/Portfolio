import nodemailer from "nodemailer";
import { inputEmail, inputDescription } from "./Contato";


const user: string = "email-lvm@lucasvmarangoni.vercel.app";
const toMyEmail: string = "lucasvm.ti@gmail.com";
const pass: string = "Teste123";

export function SendEmail() {
  const transporter = nodemailer.createTransport({
    host: "smtp.umbles.com",
    port: 587,
    secure: false,
    auth: {
      user,
      pass,
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
      console.log(message);
    })
    .catch((err) => {
      console.log(err);
    });
}

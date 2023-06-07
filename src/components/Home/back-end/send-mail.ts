import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();

app.use(
    cors({
        origin: 'https://lucasvmarangoni.vercel.app',
        optionsSuccessStatus: 200
    })
)

app.use(express.urlencoded({ extended: true }));

app.post('https://lucasvmarangoni.vercel.app/send-mail', (req, res) => {
    const { name, email, message } = req.body;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'lucasvmarangoni.sendemail@gmail.com',
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: 'lucasvmarangoni.sendemail@gmail.com',
        to: 'lucasvm.ti@gmail.com',
        subject: '⭐ - CONTATO DO PORTFÓLIO - ⭐',
        text: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(500).json({ error: 'Erro ao enviar o email' });
        } else {
            res.json({ success: true });
        }
    });
});



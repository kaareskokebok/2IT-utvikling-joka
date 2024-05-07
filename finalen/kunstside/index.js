import express from "express";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
// Laster inn variabler fra .env filen
dotenv.config();

// Environment variables fra .env
// Hvis 2faktor, gå i gmail -> settings -> app password
const email = process.env.MY_EMAIL;
const appPass = process.env.APP_PASS;

const app = express();
const port = 3000;
// Henter stilfiler, js-filer, bilder osv. fra public
app.use(express.static("public"));
// Lar oss bruke req.body for å hente skjemadata
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    // Vise fram index.ejs ved localhost:3000/
    res.render("index.ejs");
});
// Skjema
app.post("/submit", (req, res) => {
    console.log("morn");
    console.log(req.body);
    let data = {
        kundenavn: req.body.navn,
        kundeepost: req.body.epost,
        melding: req.body.melding
    };
    sendEpost(data);
    res.render("formSubmit.ejs", data);
});
// Trenger nodemailer
function sendEpost(data){
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: email,
            pass: appPass
        }
    });

    let emailContent = `<h1 style="color:blue">Morn, ${data.kundenavn}</h1>
    <p>Takk for din melding. Her er en kopi av meldingen
    du sendte:</p>
    <p>${data.melding}</p>
    <p>Med vennlig hilsen</p>
    <p><strong>Kunstnern'</strong></p>
    <img width="200px" src="https://picsum.photos/400?random=6" alt="Kunstbilde">`;

    let mailOptions = {
        from: email,
        to: data.kundeepost,
        subject: "epost fra skjema, spam",
        html: emailContent  // html hvis det er html
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error){
            console.log(error);
        }else{
            console.log("email sent" + info.response);
        }
    });
}
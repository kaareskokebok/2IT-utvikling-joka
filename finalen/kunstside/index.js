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
        kundeepost: req.body.epost
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

    let emailContent = `Morn, ${data.kundenavn}`;

    let mailOptions = {
        from: email,
        to: data.kundeepost,
        subject: "epost fra skjema, spam",
        text: emailContent  // html hvis det er html
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error){
            console.log(error);
        }else{
            console.log("email sent" + info.response);
        }
    });
}
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
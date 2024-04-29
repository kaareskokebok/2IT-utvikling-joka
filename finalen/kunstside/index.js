import express from "express";
import nodemailer from "nodemailer";
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Access environment variables
const email = process.env.MY_EMAIL;
const appPass = process.env.APP_PASS;
// console.log(email, appPass);  // Test
const app = express();
const port = 3000;

// For at stilfiler og liknende skal oppdages
app.use(express.static("public"));  
// For å hente skjemadata ved req.body.name, req.body.email osv.
app.use(express.urlencoded({ extended: true })); 

app.get("/", (req, res) => {
    res.render("index.ejs");
});

// Eksempel /test?melding=Jeg liker å fiske
app.get("/test", (req, res) => {
    console.log(req.query);
    res.send("Du sa " + req.query.melding);
})

app.post("/submit-form", (req, res) => {
    console.log(req.body.navn);
    console.log(req.body);
    let formData = req.body;

    sendEpost(formData);
    res.render("formsubmit.ejs", formData);
})

function sendEpost(formData){

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: email,
            pass: appPass  // søk app pass under sikkerhet, i konto-administrasjon
        }
    });

    let emailContent = `
    <h2>Takk for din melding, ${formData.navn}</h2>
    <p>Du mottar en bekreftelse på din epost ${formData.epost} straks.</p>
    <p>Din melding:</p>
    <hr>
    <p>${formData.melding}</p>
    <hr>
    <h3>Ha en fin dag!</h3>
`;
    let mailOptions = {
        from: email,
        to: formData.epost, // Assuming the form has an input field for email
        subject: 'Sending Email using Node.js',
        html: emailContent  // bruk text hvis det bare er tekst
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            // res.send('error'); // Or handle the error in a user-friendly way
        } else {
            console.log('Email sent: ' + info.response);
            // res.render('formsubmit.ejs', formData); // Render a page or send a confirmation
        }
    });
}

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}.`);
});
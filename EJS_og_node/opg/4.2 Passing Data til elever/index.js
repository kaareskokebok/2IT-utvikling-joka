import express from "express";

const app = express();
const port = 3000;

// app.use(bodyParser.urlencoded({ extended: true }));  // old
app.use(express.urlencoded({ extended: true })); 

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  let fNavn = req.body.fName;
  let eNavn = req.body.lName;
  // console.log(fNavn, eNavn);
  let lengde = fNavn.length + eNavn.length;
  res.render("index.ejs", {navnLengde: lengde});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

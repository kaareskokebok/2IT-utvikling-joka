var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "jensern",
    password: "Uctoi7p83",
    database: "mydb"
  });

// Hent alle kolonner fra customers
// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM customers", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// Velg kolonner name og address i tabellen customers
// con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT name, address FROM customers", function (err, result, fields) {
//       if (err) throw err;
//       console.log(result);
//      // adressen til den 3.kunden
//      console.log(result[2].address);  // Apple st 652
//     });
//   });




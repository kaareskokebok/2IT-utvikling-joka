var mysql = require('mysql2');
const express = require('express');
const app = express();
// Bruk http://193.90.158.102:10000 når utenfor ikt2-nettet
// Bruk http://192.168.1.124:10000 på ikt2-nettet
var connection = mysql.createConnection({
  host: "193.90.158.102",
  port: 3006,
  user: "root",
  password: "Skole12",
  database: "datakomponenter"
});


// Query til databasen
app.get('/alleprodukter', (req, res) => {
    let sql = 'SELECT navn FROM produkter;';
    connection.query(sql, (error, results) => {
        if (error) throw error;
        else{
            res.send(results);
        }
    })
});
const PORT = 80;
app.listen(PORT, function (){
    console.log('Server kjører på port 80');
});
// Lage databasen
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     con.query("CREATE DATABASE mydb", function (err, result) {
//       if (err) throw err;
//       console.log("Database created");
//     });
//   });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });

// Legge til kolonne for id
// ALTER fordi tabellen allerede er laget
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table altered");
//     });
//   });

// Legge til mange verdier
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "INSERT INTO customers (name, address) VALUES ?";
//     var values = [
//       ['John', 'Highway 71'],
//       ['Peter', 'Lowstreet 4'],
//       ['Amy', 'Apple st 652'],
//       ['Hannah', 'Mountain 21'],
//       ['Michael', 'Valley 345'],
//       ['Sandy', 'Ocean blvd 2'],
//       ['Betty', 'Green Grass 1'],
//       ['Richard', 'Sky st 331'],
//       ['Susan', 'One way 98'],
//       ['Vicky', 'Yellow Garden 2'],
//       ['Ben', 'Park Lane 38'],
//       ['William', 'Central st 954'],
//       ['Chuck', 'Main Road 989'],
//       ['Viola', 'Sideway 1633']
//     ];
//     con.query(sql, [values], function (err, result) {
//       if (err) throw err;
//       console.log("Number of records inserted: " + result.affectedRows);
//     });
//   });

// Legge til en, og få id-en til den siste
// con.connect(function(err) {
//     if (err) throw err;
//     var sql = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("1 record inserted, ID: " + result.insertId);
//     });
//   });




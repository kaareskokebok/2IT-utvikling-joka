const express = require('express');
const mysql = require('mysql');

// Set up connection to database.
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'teacher1',
  password : 'Uctoi7p83',
  database : 'school'
});

// Connect to database.
connection.connect();

const app = express();

// Uncomment and correct the directory name if needed
app.use(express.static('PUBLIC_HTML'));

// Endpoint to get all students' names
app.get('/student-names', (req, res) => {
  connection.query('SELECT name FROM students', (error, results) => {
    if (error) {
      res.status(500).send('Error retrieving data');
      return;
    }
    // Send all student names as an array
    res.send(results.length > 0 ? results.map(row => row.name) : []);
  });
});

// All info about students
app.get('/student-all', (req, res) => {
    connection.query('SELECT * FROM students', (error, results) => {
      if (error) {
        res.status(500).send('Error retrieving data');
        return;
      }
      // Send all student data. Each item in array is
      // an object, containing 1 row
      res.send(results.length > 0 ? results : []);
    });
});


const PORT = 3000;
// '0.0.0.0' listen on all network adresses
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

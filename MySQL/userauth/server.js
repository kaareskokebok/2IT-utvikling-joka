const express = require('express');
const mysql = require('mysql');

// Set up connection to database.
const connection = mysql.createConnection({
  host     : 'localhost',  // or the IP of your server
  user     : 'testbruker',       // your MySQL username
  password : 'Uctoi7p83',   // your MySQL password
  database : 'school'      // your database name
});

// Connect to database.
connection.connect();

const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));

// Endpoint to get the first student's email.
app.get('/first-student-email', (req, res) => {
  // Query to select the email of the first student.
  connection.query('SELECT email FROM users LIMIT 1', (error, results, fields) => {
    if (error) throw error;

    // Send the first student's email if exists.
    res.send(results.length > 0 ? results[0].email : "No students found");
  });
});

// Endpoint to get all students' emails.
app.get('/all-student-emails', (req, res) => {
    connection.query('SELECT email FROM users', (error, results, fields) => {
      if (error) throw error;
      // Send all student emails as an array
      res.send(results.map(row => row.email));
    });
  });

  
// Start the server.
const PORT = 3000; // Use whatever port you like.
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

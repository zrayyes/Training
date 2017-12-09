const sqlite3 = require('sqlite3').verbose();

// Connect to the database
let db = new sqlite3.Database('./Exercise Files/results.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to results database.');
});


// SQL Query to execute
let sqlQuery = "SELECT * FROM people";

// Return SQL Query results
db.all(sqlQuery, (err, results) => {
    console.log(results)
});


// Close the connection
db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Close the database connection.');
  });
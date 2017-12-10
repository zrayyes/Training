const sqlite3 = require('sqlite3').verbose();

// Use db.get, db.each, db.all, db.run

// Connect to the database
let db = new sqlite3.Database('./Exercise Files/results.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    return console.error(err.message);
  }
  // console.log('Connected to results database.');
});


db.all(
  `SELECT *
  FROM people
  WHERE state LIKE 'C%'
  LIMIT 5 OFFSET 5`,
  (err, results) => {
    console.log(results)
});


// Close the connection
db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    // console.log('Close the database connection.');
  });
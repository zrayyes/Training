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
  JOIN states
  ON people.state=states.state_abbrev
  WHERE people.first_name LIKE 'j%' AND states.region='South'`,
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
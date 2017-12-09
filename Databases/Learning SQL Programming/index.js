const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./Exercise Files/results.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to results database.');
});

db.serialize(() => {
    db.each(`SELECT * FROM people`, (err, row) => {
      if (err) {
        console.error(err.message);
      }
      console.log(row);
    });
  });

db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Close the database connection.');
  });
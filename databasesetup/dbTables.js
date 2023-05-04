let mysql = require("mysql");

// Prepare the connection to the database named "dbTest"
let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dbTest"
});

// Tries to connect
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  // If the table characters does not exists, create it
  let sql =
    "CREATE TABLE IF NOT EXISTS characters (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), hitpoints INT)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});

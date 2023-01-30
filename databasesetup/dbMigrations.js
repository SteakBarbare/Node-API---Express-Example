var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dbTest"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO characters (name, hitpoints) VALUES ?";
  var values = [
    ["Bender B Rodriguez", "345"],
    ["Nicolas Cage", "200"],
    ["George Abitbol", "300"],
    ["Joel Fauvelet de Charbonniere de Bourrienne", "666"]
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});

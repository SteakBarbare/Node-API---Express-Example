//Importing modules
const express = require("express");
const mysql = require("mysql");

const app = express();
const PORT = 3000;

// Create a connection to the database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dbTest"
});

// open the MySQL connection
connection.connect(error => {
  if (error) {
    console.log("A error has been occurred " + "while connecting to database.");
    throw error;
  }

  //If Everything goes correct, Then start Express Server
  app.listen(PORT, () => {
    console.log(
      "Database connection is Ready and " + "Server is Listening on Port ",
      PORT
    );
  });
});

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.send("Hello World");
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});

const express = require("express");
const app = express();
const port = 3000;
const charactersRouter = require("./routes/characters");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

// Shows a "hello world" on the default link
app.get("/", function (req, res) {
  res.send("Hello World");
});

// Shows an "ok" message on the default database link
app.get("/db", (req, res) => {
  res.json({ message: "ok" });
});

// Used to visualize the "characters" table
app.use("/characters", charactersRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// Let the "public" folder be seen by everyone, this is where the game logic should be placed
app.use(express.static("public"));

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});

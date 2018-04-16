const express = require("express");
var path = require("path");

const app = express();
const port = process.env.PORT || 3001;

// won't work without this line
// everything under the build directory are resources needed to make index html page work
app.use(express.static(path.join(__dirname + "/build/")));

// this will serve a static file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

app.get("/hello", (req, res) => {
  res.send("Hello world");
});

app.get("/goodbye", (req, res) => {
  res.send("Bye and Have a nice day!");
});

app.listen(port, () => console.log(`Listening on port ${port}`));

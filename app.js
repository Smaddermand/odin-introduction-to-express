// app.js

const express = require("express");
const app = express();
const port = 3000;

// Middleware to serve static files
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/about.html");
});

app.get("/contact-me", (req, res) => {
  res.sendFile(__dirname + "/public/contact-me.html");
});

// 404 catch-all handler
app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

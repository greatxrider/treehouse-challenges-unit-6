const express = require("express");
const app = express();
const { authUser } = require('./authUser');

app.get("/", (req, res, next) => {
  res.send("<h1>🎉 Welcome to the home page! 🎉</h1>");
});

app.get("/settings", authUser, (req, res, next) => {
  res.send(`<h1>⚙️ Welcome to your settings page ${req.currentUser}! ⚙️</h1>`);
});

app.get("/secret", authUser, (req, res, next) => {
  res.send("<h1>🤫 Shhh... it's a secret! 🤫</h1>");
});

app.get("/forbidden", (req, res, next) => {
  res.send("<h1>🚫 You're not authorized to view that page! 🚫</h1>");
});

app.listen(3000);

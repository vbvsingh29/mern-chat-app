const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const app = express();
console.log(process.env.MONGO_URL)
mongoose.connect(process.env.MONGO_URL);
app.get("/", (req, res) => {
  res.json("test ok");
});
app.post("/register", (req, res) => {});
app.listen(8080);

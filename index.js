const express = require("express");
const lodash = require("lodash");
const cors = require("cors");
const { v4: uuid } = require("uuid");

const app = express();

app.use(express.json());
app.use(cors());

const banco = require("./wordsDatabase.js");

app.get("/words/random", (req, res) => {
  const randomQuestion = banco[Math.floor(Math.random() * banco.length)];
  res.json({ word: randomQuestion });
  console.log(randomQuestion);
});

app.listen(4000, () => {
  console.log("API server is running");
});

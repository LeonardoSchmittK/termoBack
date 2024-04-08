const express = require("express");
const lodash = require("lodash");
const cors = require("cors");
const { v4: uuid } = require("uuid");

const app = express();

app.use(express.json());
app.use(cors());

const banco = require("./wordsDatabase.js");

app.get("/words/random", (req, res) => {
  const randomWord = banco[Math.floor(Math.random() * banco.length)];
  res.json({ word: randomWord });
});

app.get("/words/total", (req, res) => {
  res.json({ totalWords: banco.length });
});

app.listen(4000, () => {
  console.log("API server is running");
});

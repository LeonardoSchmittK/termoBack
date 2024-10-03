const express = require("express");
const cors = require("cors");
const fs = require("fs/promises");

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

app.post("/words/doesExist", async (req, res) => {
  const checkingWord = req.body.checkingWord;
  console.log(req.body);
  async function isWordInFile(word, filePath) {
    try {
      const data = await fs.readFile(filePath, "utf8");
      const words = data.split("\n");
      return words.includes(word);
    } catch (err) {
      console.error(`Error reading file: ${err}`);
      return false;
    }
  }

  const exists = await isWordInFile(checkingWord, "words.txt");

  if (exists) {
    res.status(200).json({ word: checkingWord, doesExist: true });
  } else {
    res.status(404).json({ word: checkingWord, doesExist: false });
  }
});

app.listen(4000, () => {
  console.log("API server is running");
});

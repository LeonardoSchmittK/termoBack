import express from "express";
import cors from "cors";
import { promises as fs } from "fs";
import words from "./wordsDatabase.js";
import wordsDict from "./wordsDict.js";
const app = express();

app.use(express.json());
app.use(cors());

// let banco = [];

// async function loadWords() {
//   try {
//     const data = await fs.readFile("words.txt", "utf8");
//     banco = data.split("\n");
//   } catch (err) {
//     console.error(`Error reading file: ${err}`);
//   }
// }

// loadWords();

const banco = [...words];

app.get("/words/random", (req, res) => {
  const randomWord = banco[Math.floor(Math.random() * banco.length)];
  res.json({ word: randomWord });
});

app.get("/words/total", (req, res) => {
  res.json({ totalWords: banco.length });
});

app.post("/words/doesExist", async (req, res) => {
  const checkingWord = req.body.checkingWord;

  const exists = wordsDict.includes(checkingWord);

  if (exists) {
    res.status(200).json({ word: checkingWord, doesExist: true });
  } else {
    res.status(404).json({ word: checkingWord, doesExist: false });
  }
});

app.listen(4000, () => {
  console.log("API server is running");
});

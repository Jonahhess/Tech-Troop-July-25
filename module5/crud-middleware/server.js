const express = require("express");
const app = express();
app.use(express.json());
const PORT = 3002;

const wordCounter = new Map();

function addWord(word) {
  const existingWord = wordCounter.has(word);
  existingWord
    ? wordCounter.set(word, wordCounter.get(word) + 1)
    : wordCounter.set(word, 1);
  return !existingWord;
}

function deleteWord(word) {
  return wordCounter.delete(word);
}

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.post("/word", (req, res) => {
  const body = req.body;
  if (!body) {
    res.status(404).send("no body found, how strange...");
    return;
  }

  // for safety - throw away anything else besides word field
  const { word } = body;
  if (!word || word === "") {
    res.status(404).send("no word found, how strange...");
    return;
  }

  // validate, clean, sanitize string value!!!
  if (word.split(" ").length > 1) {
    res.status(404).send("one word at a time, please!");
    return;
  }

  addWord(word);
  res.send({ text: `Added ${word}`, currentCount: wordCounter.get(word) });
});

app.post("/sentence", (req, res) => {
  const body = req.body;
  if (!body) {
    res.status(404).send("no body found, how strange...");
    return;
  }

  // for safety - throw away anything else besides word field
  const { sentence } = body;
  if (!sentence) {
    res.status(404).send("no sentence found, how strange...");
    return;
  }
  // validate, clean, sanitize string value!!!
  let numNewWords = 0;
  const words = sentence.split(" ");
  words.forEach((word) => {
    numNewWords += addWord(word);
  });

  res.send({
    text: `Added ${numNewWords}, ${words.length - numNewWords} already existed`,
  });
});

app.get("/top", (req, res) => {
  if (!wordCounter.size) {
    res.status(500).send("no top element");
    return;
  }

  const maxEntry = [...wordCounter].reduce((a, b) => (a[1] >= b[1] ? a : b));
  res.send({ text: maxEntry[0], count: maxEntry[1] });
});

app.get("/top5", (req, res) => {
  if (!wordCounter.size) {
    res.status(500).send("no element");
    return;
  }

  const top5 = [...wordCounter]
    .sort((a, b) => (a[1] >= b[1] ? a : b))
    .slice(0, 5)
    .map((entry) => {
      return { [entry[0]]: entry[1] };
    });
  res.send(top5);
});

app.get("/total", (req, res) => {
  res.send({
    text: "Total count",
    count: [...wordCounter].map((a) => a[1]).reduce((a, b) => a + b, 0),
  });
});

app.get("/:word", (req, res) => {
  const word = req.params.word;
  if (!word) {
    res.status(404).send("no word found, how strange...");
    return;
  }

  res.send({ count: wordCounter.get(word) ?? 0 });
});

app.delete("/:word", (req, res) => {
  const word = req.params.word;
  if (!word) {
    res.status(404).send("No word found");
    return;
  }

  const wasDeleted = deleteWord(word);
  if (!wasDeleted) {
    res.status(406).send("Word not found");
    return;
  }

  res.status(204).send("successfully deleted");
});

app.listen(PORT, () => {
  console.log("Server is up and running");
});

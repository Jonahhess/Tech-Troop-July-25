const { store } = require("./store.js");

const express = require("express");
const app = express();
app.use(express.static(__dirname + "/dist"));

app.get("/", (req, res) => {});

app.get("/priceCheck/:name", (req, res) => {
  const item = store.find((i) => i.name === req.params.name);
  const price = item?.price ?? null;
  res.send(JSON.stringify({ price }));
});

app.listen(3000, () => {
  console.log("hello world");
});

const { store } = require("./store.js");
const cors = require("cors");

const express = require("express");
const app = express();
app.use(cors());
app.use(express.static(__dirname + "/dist"));

app.get("/", (req, res) => {});

app.get("/priceCheck/:name", (req, res) => {
  const item = store.find((i) => i.name === req.params.name);
  const price = item?.price ?? null;
  res.send(JSON.stringify({ price }));
});

app.get("/buy/:name", (req, res) => {
  const item = store.find((i) => i.name === req.params.name);
  if (item && item.inventory > 0) {
    item.inventory -= 1;
  } else {
    res.status(400).send(JSON.stringify("an error occurred"));
  }
  res.status(200).send(JSON.stringify(item));
});

app.get("/sale/:name", (req, res) => {
  const isAdmin = req.query.admin === "true";
  const item = store.find((i) => i.name === req.params.name);

  if (!item) {
    res.status(400).send("error occurred");
  }

  const price = item.price;
  const finalPrice =
    isAdmin && item.inventory > 10 ? Math.floor(price / 2) : item.price;
  res.status(200).send(JSON.stringify({ ...item, price: finalPrice }));
});

app.listen(3000, () => {
  console.log("hello world");
});

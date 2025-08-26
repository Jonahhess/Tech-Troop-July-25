import express from "express";
const app = express();

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to my site!");
});

// Listening
const port = 3000;
app.listen(3000, () => {
  console.log(`Server is running on port ${port}`);
});

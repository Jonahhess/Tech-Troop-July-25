const express = require("express");
const app = express();

const PORT = 3004;
const postsRouter = require("./routes/postRouter.js");
const { logger } = require("./middlewares/logger.js");

const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

// middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(limiter);
app.use(helmet());
app.use(express.json());
app.use(logger);

// Routes
app.use("/posts", postsRouter);

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.listen(PORT, () => {
  console.log("server running");
});

// Error Handling Middleware (always in the END)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Server Error",
  });
});

const express = require("express");
const app = express();
const PORT = 3003;
let counter = 0;

const logger = (req, res, next) => {
  console.log(Date.now(), req.method, req.url);
  next();
};

const requestCounter = (req, res, next) => {
  counter++;
  next();
};

app.use(express.json());
app.use(logger);
app.use(requestCounter);

app.get("/", (req, res) => {
  res.send({ message: "Welcome to this server", requestCount: counter });
});

app.get("/about", (req, res) => {
  res.send({
    message: "This is a project about middleware",
    requestCount: counter,
  });
});

// route specific middleware
const validateId = (req, res, next) => {
  const id = req.params.id;
  if (!id) {
    next(id);
    return;
  }
  const castToNumber = Number(id);
  if (!Number.isInteger(castToNumber)) {
    res.status(400).send("invalid ID format");
    return;
  }
  next();
};

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];

const checkUserExists = (req, res, next) => {
  const user = req.user;
  if (!user || !(user in users)) {
    next(user);
  } else {
    next();
  }
};

app.get("/users", (req, res) => {
  res.send({ message: "success", data: users });
});

app.post("/users", (req, res) => {
  const body = req.body;
  if (!body) {
    res.status(404).send("No body");
    return;
  }

  const user = body.user;
  if (!user) {
    res.status(404).send("No user");
    return;
  }

  const { id, name } = user;

  if (!id) {
    res.status(404).send("id already in users");
    return;
  }

  if (!Number.isSafeInteger(id)) {
    res.status(400).send("invalid id format");
  }

  if (users.find((user) => user.id === id)) {
    res.status(404).send("id already in users");
    return;
  }

  if (!name || name === "") {
    res.status(404).send("user needs a name");
    return;
  }

  users.push({ id, name });
  res.send({ message: "success" });
});

// route with middleware
app.get("/users/:id", validateId, checkUserExists, (req, res) => {
  const user = users.find((user) => user.id == req.params.id);
  if (!user) {
    res.status(404).send("No user found");
  }

  res.send(user);
});

// error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(PORT, () => {
  console.log("server running");
});

const http = require("http");

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = [];
    req
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
        resolve(JSON.parse(body));
      });
  });
}

const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

const server = http.createServer(async (req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.method !== ("GET" || "POST")) {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "404 - Page not found" }));
    res.end();
    return;
  }
  if (req.url === "/api/users" && req.method === "GET") {
    res.statusCode = 200;
    res.write(JSON.stringify(users));
    res.end();
    return;
  }

  if (req.url === "/api/users" && req.method === "POST") {
    const newUser = (await readBody(req)) || null;
    if (!newUser) {
      res.statusCode = 404;
      res.write(JSON.stringify({ message: "404 - Body not found" }));
      res.end();
      return;
    }
    users.push(newUser);
    res.statusCode = 201;
    res.end();
    return;
  }

  if (req.method === "GET" && req.url.startsWith("/api/users/")) {
    const id = req.url.slice(11);
    const user = users.filter((u) => u.id == id);
    if (user) {
      res.statusCode = 200;
      res.write(JSON.stringify(user));
    } else {
      res.statusCode = 404;
      res.write(JSON.stringify({ message: "404 - User not found" }));
    }
  } else {
    res.write(JSON.stringify({ message: "404 - Page not found" }));
  }
  res.end();
});

server.listen(3000, () => {
  console.log("server is listening...");
});

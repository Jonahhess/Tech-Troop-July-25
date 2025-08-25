const http = require("http");

const server = http.createServer(async (req, res) => {
  res.setHeader("Content-Type", "text/plain");

  if (req.method !== "GET") {
    res.statusCode = 404;
    res.write("404 - Page not found");
  } else {
    res.statusCode = 200;
    if (req.url === "/") {
      res.write("Welcome to my website!");
    } else if (req.url === "/about") {
      res.write("This is the about page");
    } else if (req.url === "/contact") {
      res.write("Contact me at: jonahhessdev@gmail.com");
    } else {
      res.statusCode = 400;
      res.write(JSON.stringify({ error: "body must include content prop" }));
    }
  }
  res.end();
});

server.listen(8080, () => {
  console.log("server is listening...");
});

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

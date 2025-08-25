const http = require("http");

const server = http.createServer(async (req, res) => {
  res.setHeader("Content-Type", "text/plain");
  console.log(req.method);
  console.log(req.url);

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
      res.write("404 - Page not found");
    }
  }
  res.end();
});

server.listen(8080, () => {
  console.log("server is listening...");
});

import express from "express";
const app = express();

// Middleware
const addLinks = function (req, res, next) {
  const routes = [{ path: "/", methods: ["get"] }];
  app.router.stack.forEach((middleware) => {
    if (middleware.route) {
      const path =
        middleware.route.path.slice(-1) === "/"
          ? "/"
          : middleware.route.path + "/";
      const methods = Object.keys(middleware.route.methods);
      // Filter logic: one more slash than current path
      if (
        path.startsWith(req.path) &&
        path.split("/").length === req.path.split("/").length + 1
      ) {
        routes.push({ path, methods });
      }
    }
  });
  res.locals.availableRoutes = routes;
  next();
};

app.use(express.urlencoded({ extended: true }));
app.use(addLinks);

// ...existing code...
function renderLinks(routes) {
  let html = "<ul>";
  routes.forEach(({ path, methods }) => {
    // Find params in path
    const paramMatches = [...path.matchAll(/:([a-zA-Z0-9_]+)/g)];
    methods.forEach((method) => {
      html += `<li>
        <form action="${path}" method="${
        method === "get" ? "get" : "post"
      }" style="display:inline;">
          ${paramMatches
            .map(
              (match) =>
                `<input name="${match[1]}" placeholder="${match[1]} param">`
            )
            .join("")}
          <button type="submit">${method.toUpperCase()} ${path}</button>
          ${
            ["post", "put", "patch"].includes(method)
              ? '<input name="body" placeholder="Request body">'
              : ""
          }
        </form>
      </li>`;
    });
  });
  html += "</ul>";
  return html;
}
// ...existing code...

// Routes
app.get("/", (req, res) => {
  res.send(
    `<h1>Welcome to my site!</h1>${renderLinks(res.locals.availableRoutes)}`
  );
});

app.get("/users", (req, res) => {
  res.send(`<h1>Users</h1>${renderLinks(res.locals.availableRoutes)}`);
});

app.get("/books", (req, res) => {
  res.send(`<h1>Books</h1>${renderLinks(res.locals.availableRoutes)}`);
});

app.get("/books/:id", (req, res) => {
  res.send(
    `<h1>Book ${req.query.id}</h1>${renderLinks(res.locals.availableRoutes)}`
  );
});

app.get("/users/:userid", (req, res) => {
  res.send(
    `<h1>User ${req.query.userid}</h1>${renderLinks(
      res.locals.availableRoutes
    )}`
  );
});

app.get("/users/:userid/comments", (req, res) => {
  res.send(
    `<h1>User ${req.query.userid}'s comments</h1>${renderLinks(
      res.locals.availableRoutes
    )}`
  );
});

app.get("/users/:userid/comments/:commentid", (req, res) => {
  res.send(
    `<h1>User ${req.query.userid}'s comment #${
      req.query.commentid
    }</h1>${renderLinks(res.locals.availableRoutes)}`
  );
});

// Listening
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

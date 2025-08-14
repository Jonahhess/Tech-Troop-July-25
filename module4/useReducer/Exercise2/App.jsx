import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);
const FontSizeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const [fontSize, setFontSize] = useState("medium");
  return (
    <ThemeContext value={[theme, setTheme]}>
      <FontSizeContext value={[fontSize, setFontSize]}>
        <Layout />
      </FontSizeContext>
    </ThemeContext>
  );
}

function Layout() {
  const [theme] = useContext(ThemeContext);
  const bgColor = theme === "light" ? "#ffffff" : "#1a1a1a";
  const color = theme === "light" ? "#000000" : "#ffffff";

  return (
    <div
      style={{
        backgroundColor: bgColor,
        color,
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <Header />
      <Content />
    </div>
  );
}

function Header() {
  return (
    <header style={{ marginBottom: "20px" }}>
      <Navigation />
      <Controls />
    </header>
  );
}

function Navigation() {
  const [fontSize] = useContext(FontSizeContext);
  const size =
    fontSize === "small" ? "14px" : fontSize === "large" ? "20px" : "16px";

  return (
    <nav style={{ fontSize: size, marginBottom: "10px" }}>
      <a href="#home">Home</a> | <a href="#about">About</a> |{" "}
      <a href="#contact">Contact</a>
    </nav>
  );
}

function Controls() {
  return (
    <div>
      <ThemeToggle />
      <FontControl />
    </div>
  );
}

function ThemeToggle() {
  const [theme, setTheme] = useContext(ThemeContext);
  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}

function FontControl() {
  const [fontSize, setFontSize] = useContext(FontSizeContext);
  return (
    <select value={fontSize} onChange={(e) => setFontSize(e.target.value)}>
      <option value="small">Small</option>
      <option value="medium">Medium</option>
      <option value="large">Large</option>
    </select>
  );
}

function Content() {
  const [theme] = useContext(ThemeContext);
  const [fontSize] = useContext(FontSizeContext);
  const size =
    fontSize === "small" ? "8px" : fontSize === "large" ? "30px" : "16px";

  return (
    <main style={{ fontSize: size }}>
      <Article style={{ fontSize: size }} theme={theme} />
      <Sidebar style={{ fontSize: size }} theme={theme} />
    </main>
  );
}

function Article() {
  const [theme] = useContext(ThemeContext);
  return (
    <article>
      <h1>Article Title</h1>
      <p>
        This content uses the {theme} theme. Notice how theme props are passed
        through every component!
      </p>
    </article>
  );
}

function Sidebar() {
  const [theme] = useContext(ThemeContext);
  return (
    <aside
      style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}
    >
      <h3>Sidebar</h3>
      <p>Current theme: {theme}</p>
    </aside>
  );
}

export default App;

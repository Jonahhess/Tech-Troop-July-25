import "./App.css";

export default function App() {
  const getClassName = (temperature) => {
    return temperature < 15
      ? "freezing"
      : temperature <= 30
      ? "fair"
      : "hell-scape";
  };

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 2</h4>
      <div className="exercise" id="ex-2">
        {<div id="weatherBox" className={getClassName(5)}></div>}
      </div>
    </div>
  );
}

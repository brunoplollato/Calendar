import "./App.css";

function App() {
  const date = new Date();
  return (
    <div className="App wrapper">
      <div className="header">
        <span>{date.toLocaleString("en-us", { month: "long" })}</span>
      </div>
      <div className="content">
        <p className="week-day">
          {date.toLocaleString("en-us", { weekday: "long" })}
        </p>
        <p className="day">
          {date.toLocaleString("en-us", { day: "numeric" })}
        </p>
        <p className="year">
          {date.toLocaleString("en-us", { year: "numeric" })}
        </p>
      </div>
    </div>
  );
}

export default App;

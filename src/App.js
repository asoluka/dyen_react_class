import { useState } from "react";

function App() {
  const [px, setPX] = useState("");
  const [rem, setREM] = useState("");

  const calculatePX = (rem) => {
    return (rem / 16).toFixed(3);
  };

  const calculateREM = (px) => {
    return (px * 16).toFixed(3);
  };

  const handlePXChange = (e) => {
    let newValue = calculatePX(e.target.value);
    setPX(e.target.value);
    setREM(newValue);
  };

  const handleREMChange = (e) => {
    setREM(e.target.value);
    let newValue = calculateREM(e.target.value);
    setPX(newValue);
  };

  const flex = (alignItems, justifyContent, flexDirection) => {
    return { display: "flex", alignItems, justifyContent, flexDirection };
  };

  const inputStyle = {
    width: "350px",
    padding: "4px 20px",
    border: "1px solid #a2a1a1",
    outline: 0,
    height: "60px",
    fontSize: "1.5rem",
  };

  const inputLabelStyle = {
    textAlign: "center",
    padding: "10px 0",
  };

  return (
    <main
      style={{
        height: "100vh",
      }}
    >
      <nav
        style={{
          ...flex("center", "space-between"),
          height: "8vh",
          width: "100%",
          padding: " 0 16px",
        }}
      >
        <p>dyenCal</p>
        <p>burger</p>
      </nav>

      <section
        style={{
          ...flex("center", "center", "column"),
          height: "83vh",
          padding: " 0 16px",
        }}
      >
        <h1 style={{ padding: "0 0 20px 0" }}>PX to REM converter</h1>
        <section style={{ ...flex("center", "space-between"), width: "50%" }}>
          <div>
            <p style={inputLabelStyle}>Pixels</p>
            <input
              type="number"
              style={inputStyle}
              value={px}
              onChange={handlePXChange}
            />
          </div>
          <div>
            <p style={inputLabelStyle}>REM</p>
            <input
              type="number"
              style={inputStyle}
              value={rem}
              onChange={handleREMChange}
            />
          </div>
        </section>
        <p style={{ padding: "50px 0" }}>
          Calculation based on a root font-size of 16 pixel.
        </p>
      </section>

      <footer
        style={{
          height: "8vh",
        }}
      >
        <h3 style={{ padding: "20px 0", textAlign: "center" }}>
          &copy; DYEN Cohort-5
        </h3>
      </footer>
    </main>
  );
}

export default App;

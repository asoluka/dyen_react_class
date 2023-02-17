import { useState } from "react";
import { flexStyle } from "./utils/jsStyles";
import { flex } from "./utils/helperFunctions";
import { Footer } from "./Footer";
import { Nav } from "./Nav";
import { Input } from "./Input";

function App() {
  const [px, setPX] = useState(0);
  const [rem, setREM] = useState(0);
  const [baseSize, setBaseSize] = useState(16);

  const calculatePX = (rem) => {
    return (rem * baseSize).toFixed(3);
  };

  const calculateREM = (px) => {
    return (px / baseSize).toFixed(3);
  };

  const handlePXChange = (e) => {
    let newValue = calculateREM(e.target.value);
    setPX(e.target.value);
    setREM(newValue);
  };

  const handleREMChange = (e) => {
    setREM(e.target.value);
    let newValue = calculatePX(e.target.value);
    setPX(newValue);
  };

  const handleBaseInputChange = (e) => {
    // 1. Any rem value can be converted to px (unknown) using a base size ::: px = rem * baseSize
    // 2. Any px value can be converted to rem (unknown) using the base size ::: rem = px / baseSize
    setBaseSize(e.target.value);
    setPX(rem * e.target.value);
  };

  return (
    <main
      style={{
        height: "100vh",
      }}
    >
      <Nav />

      <section style={flexStyle}>
        <h1 style={{ padding: "0 0 20px 0" }}>PX to REM converter</h1>
        <section style={{ ...flex("center", "space-between"), width: "50%" }}>
          <Input label="Pixel" value={px} onChange={handlePXChange} />
          <Input label="REM" value={rem} onChange={handleREMChange} />
        </section>

        <div style={{ padding: "50px 0", display: "inline" }}>
          Calculation based on a root font-size of{" "}
          <Input
            style={{
              outline: "0px",
              border: "0px",
              width: "40px",
              margin: "0 16px",
            }}
            value={baseSize}
            onChange={handleBaseInputChange}
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default App;

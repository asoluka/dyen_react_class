export const BaseInput = ({ setPX, rem, setBaseSize, baseSize }) => {
  return (
    <p style={{ padding: "50px 0" }}>
      Calculation based on a root font-size of{" "}
      <input
        style={{
          outline: "0px",
          border: "0px",
          width: "40px",
          margin: "0 16px",
        }}
        type="number"
        value={baseSize}
        onChange={(e) => {
          // 1. Any rem value can be converted to px (unknown) using a base size ::: px = rem * baseSize
          // 2. Any px value can be converted to rem (unknown) using the base size ::: rem = px / baseSize
          setBaseSize(e.target.value);
          setPX(rem * e.target.value);
        }}
      />{" "}
      pixel.
    </p>
  );
};

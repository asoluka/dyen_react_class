import React from "react";
import { h1, h2, p } from "./theme/styleDefinition";

export const Text = (props) => {
  const { type, children } = props;

  if (type === "h1") {
    return <h1 style={h1}>{children}</h1>;
  }

  if (type === "h2") {
    return <h2 style={h2}>{children}</h2>;
  }

  if (type === "p") {
    return <p style={{ ...p, ...props }}>{children}</p>;
  }

  return (
    <>
      <span style={{ ...props }}>{children}</span>
    </>
  );
};

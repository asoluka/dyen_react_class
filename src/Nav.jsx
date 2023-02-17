import React from "react";
import { flex } from "./utils/helperFunctions";

export const Nav = () => {
  return (
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
  );
};

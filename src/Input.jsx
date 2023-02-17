import React from "react";
import { inputLabelStyle, inputStyle } from "./utils/jsStyles";

export const Input = (props) => {
  return (
    <div>
      <p style={inputLabelStyle}>{props.label}</p>
      <input style={props.style || inputStyle} {...props} />
    </div>
  );
};

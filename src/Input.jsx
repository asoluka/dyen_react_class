import React from "react";

export const Input = ({ type, placeholder, labelTxt, name }) => {
  return (
    <>
      <label htmlFor={name}>{labelTxt}</label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        style={{ marginBottom: "8px", fontSize: "12px", padding: "6px" }}
      />
    </>
  );
};

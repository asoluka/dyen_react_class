import React from "react";

export const Input = ({ type, placeholder, label, name }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input id={name} type={type} placeholder={placeholder} />
    </>
  );
};

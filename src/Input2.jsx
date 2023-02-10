import React, { useState } from "react";

export const Input2 = () => {
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  return (
    <>
      <input value={name} onChange={handleNameChange} />
    </>
  );
};

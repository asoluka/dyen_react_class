import React from "react";
import { AuthTemplate } from "../../templates/AuthTemplate";

export const Signup = () => {
  return (
    <AuthTemplate>
      <section
        style={{
          backgroundColor: "white",
          borderRadius: "16px",
          padding: "20px",
        }}
      >
        <h1>Signup Area</h1>
      </section>
    </AuthTemplate>
  );
};

import React from "react";
import { AuthTemplate } from "../../templates/AuthTemplate";
import { Image } from "../../atoms/Image";
import logo from "../../../assests/svgs/bani.svg";

export const LoginPage = () => {
  return (
    <AuthTemplate logo={<Image src={logo} alt="logo" />}>
      <section
        style={{
          backgroundColor: "white",
          borderRadius: "16px",
          padding: "20px",
        }}
      >
        <h1>Login Area</h1>
      </section>
    </AuthTemplate>
  );
};

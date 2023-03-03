import React from "react";
import "./style.css";
import { Image } from "../../atoms/Image";
import logo from "../../../assests/svgs/bani.svg";

export const AuthTemplate = ({ children }) => {
  return (
    <section className="signup-wrapper flex flex-justify vh-100">
      <section className="w-25 h-auto">
        <div className="flex flex-center" style={{ margin: "30px 0" }}>
          <Image src={logo} alt="logo" />
        </div>
        <div>{children}</div>
      </section>
    </section>
  );
};

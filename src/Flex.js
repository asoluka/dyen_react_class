import React from "react";
import { flex } from "./theme/styleDefinition";

export const Flex = (props) => {
  return <div style={{ ...flex, ...props }}>{props.children}</div>;
};

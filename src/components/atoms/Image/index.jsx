import React from "react";

export const Image = ({ src, alt, className }) => {
  return <img className={className} src={src} alt={alt} />;
};

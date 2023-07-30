import React from "react";
import logo from "../assets/logo.svg";

type LogoProps = {
  maxWidth?: string;
  maxHeight?: string;
  children?: React.ReactNode;
};

const Logo: React.FC<LogoProps> = ({
  maxHeight = "100%",
  maxWidth = "100%",
}) => {
  return (
    <img
      src={logo}
      alt="logo"
      style={{ maxWidth: maxWidth, maxHeight: maxHeight }}
    />
  );
};

export default Logo;

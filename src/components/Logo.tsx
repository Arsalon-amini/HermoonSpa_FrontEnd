import React from "react";
import logo from "../assets/logo.svg";

type LogoProps = {
  children?: React.ReactNode;
};

const Logo: React.FC<LogoProps> = () => {
  return <img src={logo} alt="logo" />;
};

export default Logo;

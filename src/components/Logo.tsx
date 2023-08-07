import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";

type LogoProps = {
  maxWidth?: string;
  maxHeight?: string;
  children?: React.ReactNode;
};

const StyledLogo = styled.img<LogoProps>`
  max-width: ${(props) => props.maxWidth};
  max-height: ${(props) => props.maxHeight};
`;

const Logo: React.FC<LogoProps> = ({
  maxHeight = "100%",
  maxWidth = "100%",
}) => {
  return (
    <StyledLogo
      src={logo}
      alt="logo"
      maxWidth={maxWidth}
      maxHeight={maxHeight}
    />
  );
};

export default Logo;

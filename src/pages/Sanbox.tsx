import { Typography, Box } from "@mui/material";
import React from "react";
import HeroSection from "../components/HeroSection";
import Header from "../components/NavElements/Header";

type SandboxProps = {
  children?: React.ReactNode;
};

const Sandbox: React.FC<SandboxProps> = ({ children }) => {
  return (
    <>
      <Header />
      <HeroSection />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h1" style={{ padding: "3rem" }}>
          想要看起來和感覺最好嗎？。
        </Typography>
        <Typography variant="h2">從對自己的投資開始。</Typography>
        {children}
      </Box>
    </>
  );
};

export default Sandbox;

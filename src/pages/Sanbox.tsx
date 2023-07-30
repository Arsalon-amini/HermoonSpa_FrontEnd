import { Typography, Box } from "@mui/material";
import React from "react";
import Header from "../components/NavElements/Header";

type SandboxProps = {
  children?: React.ReactNode;
};

const Sandbox: React.FC<SandboxProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h1" color="primary" style={{ padding: "5rem" }}>
          一些神奇的事情即將到來。
        </Typography>
        {children}
      </Box>
    </>
  );
};

export default Sandbox;

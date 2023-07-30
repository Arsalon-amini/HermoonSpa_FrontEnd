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
        <Typography variant="h1" style={{ padding: "5rem" }}>
          想要看起來和感覺最好嗎？。
        </Typography>
        <Typography variant="h2" style={{ padding: "5rem" }}>
          留下自信的感覺。
        </Typography>

        {children}
      </Box>
    </>
  );
};

export default Sandbox;

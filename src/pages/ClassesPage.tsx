import { Box, Typography } from "@mui/material";
import React from "react";
import Header from "../components/NavElements/Header";

type ClassesPageProps = {
  children?: React.ReactNode;
};

const ClassesPage: React.FC<ClassesPageProps> = () => {
  return (
    <>
      <>
        <Header />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h1" sx={{ padding: "110px" }}>
            Classes
          </Typography>
        </Box>
      </>
    </>
  );
};

export default ClassesPage;

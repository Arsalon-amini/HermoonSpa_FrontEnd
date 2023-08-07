import { Box, Typography } from "@mui/material";
import React from "react";
import Header from "../components/NavElements/Header";

type AboutUsPageProps = {
  children?: React.ReactNode;
};

const AboutUsPage: React.FC<AboutUsPageProps> = () => {
  return (
    <>
      <Header />
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="h1" sx={{ padding: "110px" }}>
          About Us{" "}
        </Typography>
      </Box>
    </>
  );
};

export default AboutUsPage;

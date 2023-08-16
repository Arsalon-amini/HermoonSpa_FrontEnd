import { Box, Typography } from "@mui/material";
import React from "react";
import ContentCardCarousel from "../components/ContentCardCarousel";
import HeroSection from "../components/HeroSection";
import Header from "../components/NavElements/Header";
import content from "../data/ClassesContent";
import theme from "../utils/useTheme";

type ClassesPageProps = {
  children?: React.ReactNode;
};

const ClassesPage: React.FC<ClassesPageProps> = () => {
  return (
    <>
      <Header />
      {/* Toolbar Space added */}
      <Box
        style={{
          ...theme.mixins.toolbar,
        }}
      />
      <HeroSection imageUrl="https://hermoonspa.s3.ap-southeast-2.amazonaws.com/license.jpeg" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            padding: "0.5rem",
            margin: "30px",
          }}
        >
          世界級的專業精神
        </Typography>
      </Box>
      <ContentCardCarousel content={content} />
    </>
  );
};

export default ClassesPage;

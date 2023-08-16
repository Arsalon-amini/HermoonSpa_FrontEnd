import React from "react";
import { Typography, Box } from "@mui/material";
import HeroSection from "../components/HeroSection";
import Header from "../components/NavElements/Header";
import theme from "../utils/useTheme";

import TestimonialCarousel from "../components/TestimonialCarousel";
import testimonialData from "../utils/TestimonialData";
import ContentCardCarousel from "../components/ContentCardCarousel";
import content from "../utils/ClassesContent";

type HomePageProps = {
  children?: React.ReactNode;
};

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <>
      <Header />
      {/* Toolbar Space added */}
      <Box
        style={{
          ...theme.mixins.toolbar,
        }}
      />
      <HeroSection
        imageUrl="https://hermoonspa.s3.ap-southeast-2.amazonaws.com/hero.jpeg"
        H1="禾沐"
        H2="Beauty Spa"
      />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        padding={theme.spacing(5, 0)}
      >
        <Typography
          variant="h1"
          style={{ color: theme.palette.secondary.main }}
        >
          創造終身客戶
        </Typography>
      </Box>
      <TestimonialCarousel testimonials={testimonialData} />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        padding={theme.spacing(5, 0)}
      >
        <Typography
          variant="h1"
          style={{ color: theme.palette.secondary.main }}
        >
          世界級的專業精神
        </Typography>
      </Box>
      <ContentCardCarousel content={content} />
    </>
  );
};

export default HomePage;

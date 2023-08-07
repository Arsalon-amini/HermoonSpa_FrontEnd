import React from "react";
import { Typography, Box } from "@mui/material";
import HeroSection from "../components/HeroSection";
import Header from "../components/NavElements/Header";
import theme from "../utils/useTheme";

import TestimonialCarousel from "../components/TestimonialCarousel";
import testimonialData from "../utils/TestimonialData";

type HomePageProps = {
  children?: React.ReactNode;
};

const HomePage: React.FC<HomePageProps> = ({ children }) => {
  return (
    <>
      <Header />
      <HeroSection />
      <TestimonialCarousel testimonials={testimonialData} />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        padding={theme.spacing(10, 0)}
      >
        <Typography
          variant="h1"
          style={{ padding: "2rem", color: theme.palette.primary.main }}
        >
          想要看起來和感覺最好嗎？。
        </Typography>
        <Typography variant="h2">從對自己的投資開始。</Typography>
        {children}
      </Box>
    </>
  );
};

export default HomePage;

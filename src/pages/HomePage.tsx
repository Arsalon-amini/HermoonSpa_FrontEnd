import React from "react";
import { Typography, Box, Paper } from "@mui/material";
import HeroSection from "../components/HeroSection";
import Header from "../components/NavElements/Header";
import theme from "../utils/useTheme";

import TestimonialCarousel from "../components/TestimonialCarousel";
import testimonialData from "../data/TestimonialData";
import ContentCardCarousel from "../components/ContentCardCarousel";
import content from "../data/ClassesContent";
import FAQAccordion from "../components/FAQAccordion";
import HomePageFAQContent from "../data/HomePageFAQContent";

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

      <Paper
        elevation={3}
        style={{
          padding: "20px",
          borderRadius: theme.spacing(2),
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            variant="h1"
            style={{ color: theme.palette.secondary.main }}
          >
            創造終身客戶
          </Typography>
        </Box>
        <TestimonialCarousel testimonials={testimonialData} />
      </Paper>

      <Paper
        elevation={3}
        style={{
          padding: "1.5rem",
          borderRadius: theme.spacing(2),
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          padding={theme.spacing(2, 0)}
        >
          <Typography
            variant="h1"
            style={{ color: theme.palette.secondary.main }}
          >
            世界級的專業精神
          </Typography>
        </Box>
        <ContentCardCarousel content={content} />
      </Paper>

      <FAQAccordion FAQContent={HomePageFAQContent} FAQTitle="經常問的問題" />
    </>
  );
};

export default HomePage;

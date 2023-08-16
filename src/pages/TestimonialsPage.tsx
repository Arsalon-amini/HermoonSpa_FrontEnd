import { Box, Typography } from "@mui/material";
import React from "react";
import CardGrid from "../components/CardGrid";
import Header from "../components/NavElements/Header";
import TestimonialGridContent from "../data/TestimonialGridContent";

type TestimonialsPageProps = {
  children?: React.ReactNode;
};

const TestimonialsPage: React.FC<TestimonialsPageProps> = () => {
  return (
    <>
      <Header />
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="h1" sx={{ padding: "110px" }}>
          Reviews
        </Typography>
        <CardGrid CardsContent={TestimonialGridContent}/>
      </Box>
    </>
  );
};

export default TestimonialsPage;

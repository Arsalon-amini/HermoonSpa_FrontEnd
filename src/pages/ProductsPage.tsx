import { Box, Typography } from "@mui/material";
import React from "react";
import CardGrid from "../components/CardGrid";
import FAQAccordion from "../components/FAQAccordion";
import Header from "../components/NavElements/Header";
import ProductGrid from "../components/ProductGrid";
import ProductsPageFAQContent from "../data/ProductsPageFAQcontent";
import SkinCareServiceDetails from "../data/SkinCareServiceDetails";
import SkinCareTestimonialsData from "../data/SkinCareTestimonialsData";
import theme from "../utils/useTheme";

type ProductsPageProps = {
  children?: React.ReactNode;
};

const ProductsPage: React.FC<ProductsPageProps> = () => {
  return (
    <>
      <Header />
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "3rem"}}
      >
        <Typography variant="h1" sx={{ color: theme.palette.primary.main, padding: "2rem" }}>
          皮膚護理服務
        </Typography>
      </Box>
      <ProductGrid products={SkinCareServiceDetails} />
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography
          variant="h1"
          sx={{ padding: "2rem", color: theme.palette.primary.main }}
        >
          Happy Reviews
        </Typography>
      </Box>
      <CardGrid CardsContent={SkinCareTestimonialsData} />
      <Box sx={{ margin: "2rem" }} />
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography
          variant="h1"
          sx={{ padding: "2rem", color: theme.palette.primary.main }}
        >
          Frequent Questions
        </Typography>
      </Box>
      <FAQAccordion FAQContent={ProductsPageFAQContent} />
    </>
  );
};

export default ProductsPage;

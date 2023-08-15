import { Box, Typography } from "@mui/material";
import React from "react";
import Header from "../components/NavElements/Header";


type ProductsPageProps = {
  children?: React.ReactNode;
};

const ProductsPage: React.FC<ProductsPageProps> = () => {
  return (
    <>
      <Header />
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="h1" sx={{ padding: "110px" }}>
          Products
        </Typography>
      </Box>
    </>
  );
};

export default ProductsPage;

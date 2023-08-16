import React from "react";
import { Grid, Container } from "@mui/material";
import ProductCard from "./ProductCard";


interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  images: Image[];
}

interface Image {
  id: number;
  src: string;
  alt: string;
}

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={4}>
            <ProductCard
              name={product.name}
              description={product.description}
              price={product.price}
              discountPrice={product.discountPrice}
              images={product.images}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductGrid;

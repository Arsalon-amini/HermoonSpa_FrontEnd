import { Box, Typography } from "@mui/material";
import ProductCard from "../components/ProductCard";
import ProdDetails from "../data/ProductDetailsData";

const Sanbox = () => {
  
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
        <Typography variant="h6" fontSize="2rem">
          Product Card Testing
        </Typography>
      </Box>

      {ProdDetails.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          discountPrice={product.discountPrice}
          images={product.images}
        />
      ))}
    </>
  );
};

export default Sanbox;

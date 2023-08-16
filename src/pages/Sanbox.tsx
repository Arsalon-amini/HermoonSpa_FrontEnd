import { Box, Typography } from "@mui/material";

import ProductGrid from "../components/ProductGrid";
import SkinCareServiceDetails from "../data/SkinCareServiceDetails";

const Sanbox = () => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
        <Typography variant="h6" fontSize="2rem">
          皮膚和痤瘡服務
        </Typography>
      </Box>

      <ProductGrid products={SkinCareServiceDetails} />
    </>
  );
};

export default Sanbox;

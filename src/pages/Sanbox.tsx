import { Box, Typography } from "@mui/material";
import CardGrid from "../components/CardGrid";

import TestimonialGridContent from "../utils/TestimonialGridContent";

const Sanbox = () => {

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
        <Typography variant="h6" fontSize="2rem">
          Testimonial Grid Testing
        </Typography>
      </Box>
      <CardGrid CardsContent={TestimonialGridContent} />
    </>
  );
};

export default Sanbox;

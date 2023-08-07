import { Typography } from "@mui/material";
import TestimonialCarousel from "../components/TestimonialCarousel";
import testimonialData from "../utils/TestimonialData";


const Sandbox: React.FC = () => {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Testimonials
      </Typography>
      <TestimonialCarousel testimonials={testimonialData} />
    </div>
  );
};

export default Sandbox;

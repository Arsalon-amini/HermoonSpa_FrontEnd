import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star"; // Import the StarIcon component from MUI

type Testimonial = {
  id: number;
  name: string;
  image: string;
  testimonial: string;
};

type TestimonialCardProps = {
  testimonial: Testimonial;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <Card>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CardMedia
          component="img"
          height="300"
          style={{
            height: "400px",
            width: "auto",
            maxWidth: "100%",
            objectFit: "cover",
          }}
          image={testimonial.image}
          alt={`Testimonial ${testimonial.id}`}
        />
      </div>
      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography color="textSecondary">
          <StarIcon style={{ color: "gold", fontSize: 24 }} />
          <StarIcon style={{ color: "gold", fontSize: 24 }} />
          <StarIcon style={{ color: "gold", fontSize: 24 }} />
          <StarIcon style={{ color: "gold", fontSize: 24 }} />
          <StarIcon style={{ color: "gold", fontSize: 24 }} />
        </Typography>
        <Typography variant="body1" sx={{ size: 24 }} gutterBottom>
          {testimonial.testimonial}
        </Typography>
        <Typography variant="h6" color="textSecondary">
          - {testimonial.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;

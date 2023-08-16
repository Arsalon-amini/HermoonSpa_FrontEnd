import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Image {
  id: number;
  src: string;
  alt: string;
}

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  images: Image[];
}

const CardWrapper = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: 400,
  margin: "0 auto",
  boxShadow: theme.shadows[3],
}));

const ImageSlider = styled(Slider)({
  width: "100%",
  "& .slick-slide img": {
    width: "100%",
    height: "auto",
  },
});

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  price,
  discountPrice,
  images,
}) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <CardWrapper>
      <ImageSlider {...sliderSettings}>
        {images.map((image) => (
          <div key={image.id}>
            <CardMedia component="img" image={image.src} alt={image.alt} />
          </div>
        ))}
      </ImageSlider>
      <CardContent sx={{ margin: "1.5rem" }}>
        <Typography variant="h6" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
        {discountPrice ? ( // Conditionally render the discount price
          <Typography variant="h6">
            <span
              style={{ textDecoration: "line-through", marginRight: "0.5rem" }}
            >
              ${price}
            </span>
            ${discountPrice}
          </Typography>
        ) : (
          <Typography variant="h6">${price}</Typography>
        )}
        <Button variant="contained" color="primary" >
          現在預訂
        </Button>
      </CardContent>
    </CardWrapper>
  );
};

export default ProductCard;

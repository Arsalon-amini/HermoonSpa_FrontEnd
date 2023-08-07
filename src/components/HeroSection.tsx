import { styled } from "@mui/material/styles";
import { Container, Typography } from "@mui/material";

const HeroSection = () => {
  return (
    <HeroSectionWrapper>
      <div className="backgroundOverlay"></div>
      <Container className="heroContent">
        <Typography variant="h1" className="heroTitle">
          禾沐
        </Typography>
        <Typography variant="h2" className="heroText">
          Beauty Spa
        </Typography>
      </Container>
    </HeroSectionWrapper>
  );
};

const HeroSectionWrapper = styled("div")(({ theme }) => ({
  position: "relative", // Add this line to make position relative
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.primary.main,

  "& .backgroundOverlay": {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `url('https://hermoonspa.s3.ap-southeast-2.amazonaws.com/hero.jpeg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.75, // Set the opacity here
    height: 500,
  },

  "& .heroContent": {
    position: "relative", // Add this line to make position relative
    textAlign: "center",
    marginTop: "350px",
    zIndex: 2, // Add this line to ensure the content is above the overlay
  },

  "& .heroTitle": {
    fontSize: 52,
    fontWeight: "bold",
    marginBottom: theme.spacing(),
    color: theme.palette.common.white,
  },

  "& .heroText": {
    fontSize: 20,
    marginBottom: theme.spacing(4),
    color: theme.palette.common.white,
  },

  "& .heroButton": {
    padding: theme.spacing(1.5, 3),
    fontSize: 18,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.black,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
}));

export default HeroSection;

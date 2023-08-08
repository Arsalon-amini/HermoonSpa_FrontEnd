import { styled } from "@mui/material/styles";
import { Container, Typography } from "@mui/material";

type HeroSectionProps = {
  imageUrl: string;
  H1?: string;
  H2?: string;
};

const HeroSection: React.FC<HeroSectionProps> = ({ imageUrl, H1, H2 }) => {
  return (
    <HeroSectionWrapper>
      <div
        className="backgroundOverlay"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <Container className="heroContent">
        <Typography variant="h1" className="heroTitle">
          {H1}
        </Typography>
        <Typography variant="h2" className="heroText">
          {H2}
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
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.95, // Set the opacity here
    height: "500",
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
    color: theme.palette.primary.main,
  },

  "& .heroText": {
    fontSize: 20,
    marginBottom: theme.spacing(4),
    color: theme.palette.primary.main,
  },
}));

export default HeroSection;

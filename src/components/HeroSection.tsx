import { styled } from "@mui/material/styles";
import { Button, Container, Typography } from "@mui/material";

const HeroSection = () => {
  return (
    <HeroSectionWrapper>
      <Container className="heroContent">
        <Typography variant="h1" className="heroTitle">
          變得美麗
        </Typography>
        <Typography variant="body1" className="heroText">
          當你變得更好時，一切都會變得更好
        </Typography>
        <Button variant="contained" className="heroButton">
          了解更多
        </Button>
      </Container>
    </HeroSectionWrapper>
  );
};

const HeroSectionWrapper = styled("div")(({ theme }) => ({
  background: `url('../src/assets/images/hero.jpeg')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: 700,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.black,

  "& .heroContent": {
    textAlign: "center",
    marginTop: "400px"
  },

  "& .heroTitle": {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: theme.spacing(),
  },

  "& .heroText": {
    fontSize: 20,
    marginBottom: theme.spacing(4),
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

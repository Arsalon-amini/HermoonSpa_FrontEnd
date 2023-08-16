import {
  AppBar,
  Box,
  Container,
  Grid,
  MenuItem,
  Paper,
  Select,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import theme from "../utils/useTheme";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import ContentCard from "../components/ContentCard";
import FAQAccordion from "../components/FAQAccordion";
import AccordionItem from "../components/AccordionItem";

const Sanbox = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const testContent = [
    {
      id: 4,
      image:
        "https://hermoonspa.s3.ap-southeast-2.amazonaws.com/class_img_4.jpeg",
      heading: "真實世界的經歷",
      text: "與僅在課堂上學習不同，我們的認證講師向學生教授真實客戶，確保專業精神和現實世界知識融入教育中。",
    },
    {
      id: 5,
      image:
        "https://hermoonspa.s3.ap-southeast-2.amazonaws.com/class_img_4.jpeg",
      heading: "真實世界的經歷",
      text: "與僅在課堂上學習不同，我們的認證講師向學生教授真實客戶，確保專業精神和現實世界知識融入教育中。",
    },
    {
      id: 6,
      image:
        "https://hermoonspa.s3.ap-southeast-2.amazonaws.com/class_img_4.jpeg",
      heading: "真實世界的經歷",
      text: "與僅在課堂上學習不同，我們的認證講師向學生教授真實客戶，確保專業精神和現實世界知識融入教育中。",
    },
  ];

  const faqs = [
    {
      title: "What is Netflix?",
      content: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    },
    {
      title: "How much does Netflix cost?",
      content: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $8.99 to $17.99 a month. No extra costs, no contracts.",
    },
  ]

  return (
    <>
      <AppBar>
        <Toolbar
          sx={{
            backgroundColor: theme.palette.common.white,
            ...theme.mixins.toolbar,
          }}
        >
          <Tabs value={value} onChange={handleChange}>
            <Tab label="classes" to="/classes" component={Link} />
            <Tab label="products" to="/products" component={Link} />
          </Tabs>
        </Toolbar>
      </AppBar>
      <Box
        style={{
          ...theme.mixins.toolbar,
        }}
      />

      <Box sx={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
        <Typography variant="h6" fontSize="2rem">
          Accordian Drop Down Sandbox
        </Typography>
      </Box>
      <Container>
        <Paper elevation={3} style={{ padding: "20px" }}>
          {faqs.map((faq) => (
            <AccordionItem
              title={faq.title}
              content={faq.content}
              key={faq.title}
            />))}
        </Paper>
      </Container>

        <Box
          sx={{ display: "flex", justifyContent: "center", padding: "2rem" }}
        >
          <Typography variant="h6" fontSize="2rem">
            Grid and Card Sandbox
          </Typography>
        </Box>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Grid container spacing={2}>
          {testContent.map((content) => (
            <Grid item xs={12} sm={6} md={4} key={content.id}>
              <ContentCard content={content} />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </>
  );
};

export default Sanbox;

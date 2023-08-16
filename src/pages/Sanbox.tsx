import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import ContentCard from "../components/ContentCard";
import FAQAccordion from "../components/FAQAccordion";
import FAQContent from "../utils/HomePageFAQContent";


const Sanbox = () => {
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

  
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
        <Typography variant="h6" fontSize="2rem">
          FAQ Accordion Component
        </Typography>
      </Box>
      <FAQAccordion FAQContent={FAQContent}/>
   
      <Box sx={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
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

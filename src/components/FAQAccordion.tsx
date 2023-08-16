import { Box, Container, Paper, Typography } from "@mui/material";
import React from "react";
import theme from "../utils/useTheme";
import AccordionItem from "./AccordionItem";

type FAQ = {
  title: string;
  content: string;
};

type FAQAccordionProps = {
  FAQTitle?: string;
  FAQContent: FAQ[];
};

const FAQAccordion: React.FC<FAQAccordionProps> = ({
  FAQContent,
  FAQTitle,
}) => {
  return (
    <>
      <Paper
        elevation={3}
        style={{ padding: "2rem", borderRadius: theme.spacing(2) }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "1rem",
          }}
        >
          <Typography
            variant="h6"
            fontSize="2rem"
            sx={{ color: theme.palette.primary.main }}
          >
            {FAQTitle}
          </Typography>
        </Box>
        {FAQContent.map((faq) => (
          <AccordionItem
            title={faq.title}
            content={faq.content}
            key={faq.title}
          />
        ))}
      </Paper>
    </>
  );
};
export default FAQAccordion;

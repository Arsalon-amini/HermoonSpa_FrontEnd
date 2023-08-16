import { Container, Paper } from '@mui/material';
import React from "react";
import AccordionItem from './AccordionItem';



type FAQ = {
    title: string;
    content: string;
}

type FAQAccordionProps = {
    FAQContent: FAQ[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ FAQContent }) => {
    return (
        <>
        <Container>
        <Paper elevation={3} style={{ padding: "20px" }}>
          {FAQContent.map((faq) => (
            <AccordionItem
              title={faq.title}
              content={faq.content}
              key={faq.title}
            />))}
        </Paper>
      </Container>
        </>
    )
}
export default FAQAccordion;
import { Container, Paper } from '@mui/material';
import React from "react";
import AccordionItem from './AccordionItem';


type FAQAccordionProps = {

}

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

const FAQAccordion: React.FC<FAQAccordionProps> = () => {
    return (
        <>
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
        </>
    )
}
export default FAQAccordion;
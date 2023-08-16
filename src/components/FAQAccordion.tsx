import { Container, Paper } from '@mui/material';
import React from "react";
import AccordionItem from './AccordionItem';
import FAQContent from '../utils/FAQContent';


type FAQAccordionProps = {

}

const FAQAccordion: React.FC<FAQAccordionProps> = () => {
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
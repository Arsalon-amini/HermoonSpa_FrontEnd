import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type AccordionItemProps = {
    title: string;
    content: string;
};

const AccordionItem: React.FC<AccordionItemProps> = ({title, content}) => {
    const [expanded, setExpanded] = useState<boolean>(false);

    const handleAccordionChange = () => {
        setExpanded((prevExpanded) => !prevExpanded);
    };
  return (
    <Accordion expanded={expanded} onChange={handleAccordionChange}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{content}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionItem;

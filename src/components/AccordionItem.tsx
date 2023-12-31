import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import theme from "../utils/useTheme";


type AccordionItemProps = {
  title: string;
  content: string;
};

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleAccordionChange = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  return (
    <Accordion expanded={expanded} onChange={handleAccordionChange} >
      <AccordionSummary expandIcon={<ExpandMoreIcon />} >
        <Typography
          sx={{
            fontSize: "1.45rem",
            fontFamily: "Labrada",
            color: theme.palette.secondary.main,
          }}
        >
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails >
        <Typography
          sx={{
            fontSize: "1.15rem",
            fontFamily: "Labrada",
            color: theme.palette.common.black,
          }}
        >
          {content}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionItem;

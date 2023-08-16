import { Paper, Grid } from "@mui/material";
import React from "react";
import ContentCard from "./ContentCard";


type ContentCard = {
  id: number;
  image: string;
  title?: string;
  content?: string;
};

type CardGridProps = {
  CardsContent: ContentCard[];
};

const CardGrid: React.FC<CardGridProps> = ({CardsContent}) => {
  return (
    <Paper elevation={3} style={{ padding: "20px" }}>
      <Grid container spacing={2}>
        {CardsContent.map((content) => (
          <Grid item xs={12} sm={6} md={4} key={content.id}>
            <ContentCard content={content} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default CardGrid;

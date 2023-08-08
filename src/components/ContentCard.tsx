import React from 'react'

import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import theme from '../utils/useTheme';

type Content = {
  id: number;
  image: string;
  heading?: string;
  text?: string;
};

type ContentCardProps = {
    content: Content;
}

const ContentCard: React.FC<ContentCardProps> = (props: ContentCardProps) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <CardMedia
        component="img"
        height="300"
        sx={{
          height: "400px",
          width: "auto",
          maxWidth: "100%",
          objectFit: "cover",
        }}
        image={props.content.image}
        alt={`Content ${props.content.id}`}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" sx={{ size: 24, color: theme.palette.secondary.main }} gutterBottom>
          {props.content.heading}
        </Typography>
        <Typography variant="body1" sx={{ size: 24 }} gutterBottom>
          {props.content.text}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ContentCard;
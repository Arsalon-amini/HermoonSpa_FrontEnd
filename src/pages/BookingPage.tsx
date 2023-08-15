import { Box, Typography } from "@mui/material";
import React from "react";
import Header from "../components/NavElements/Header";

type BookingPageProps = {
  children?: React.ReactNode;
};

const BookingPage: React.FC<BookingPageProps> = () => {
  return (
    <>
      <>
        <Header />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h1" sx={{ padding: "110px" }}>
            Booking | Contact Us
          </Typography>
        </Box>
      </>
    </>
  );
};

export default BookingPage;

import { AppBar, Tabs, Toolbar, Typography } from "@mui/material";
import React from "react";
import theme from "../utils/useTheme";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";

const Sanbox = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <AppBar>
      <Toolbar
        sx={{
          backgroundColor: theme.palette.common.white,
          ...theme.mixins.toolbar,
        }}
      >
        <Tabs value={value} onChange={handleChange}>
          <Tab label="classes" to="/classes" component={Link} />
          <Tab label="products" to="/products" component={Link} />
        </Tabs>
      </Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1, alignContent: "center" }}>
        Hello
      </Typography>
      <HeroSection imageUrl="https://hermoonspa.s3.ap-southeast-2.amazonaws.com/license.jpeg" />

     
    </AppBar>
  );
};

export default Sanbox;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Logo from "../Logo";
import theme from "../../utils/useTheme";

type HeaderProps = {
  children?: React.ReactNode;
};

const drawerWidth = 240;

const Header: React.FC<HeaderProps> = () => {
  //States
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);

  // effects
  useEffect(() => {
    if (window.location.pathname === "/about" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/classes" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/products" && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === "/booking" && value !== 3) {
      setValue(3);
    }
  }, [value]);

  //Handlers
  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  //subcomponent markup
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Logo maxHeight="4rem" />
      </Link>
      <Divider />
      {/* Tabs Components */}
      <Box sx={{ display: { xs: "block", md: "flex" } }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Link
            to="/about"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Tab
              label="我們的隊伍"
              sx={{
                color: theme.palette.common.black,
                minWidth: "unset",
                width: "100%", // Full width for vertical tabs
              }}
            />
          </Link>
          <Link
            to="/classes"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Tab
              label="美容班"
              sx={{
                color: theme.palette.common.black,
                minWidth: "unset",
                width: "100%", // Full width for vertical tabs
              }}
            />
          </Link>
          <Link
            to="/products"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Tab
              label="產品和服務"
              sx={{
                color: theme.palette.common.black,
                minWidth: "unset",
                width: "100%", // Full width for vertical tabs
              }}
            />
          </Link>
          <Button
            component={Link}
            to="/booking"
            variant="outlined"
            sx={{
              color: theme.palette.primary.main, // Setting text color
              minWidth: "unset",
              width: "50%", // Full width for vertical tabs
              textAlign: "center",
            }}
          >
            網上預訂
          </Button>
        </div>
      </Box>
    </Box>
  );

  return (
    <AppBar
      sx={{
        backgroundColor: theme.palette.common.white,
      }}
    >
      <Toolbar disableGutters sx={{ ...theme.mixins.toolbar }}>
        {/* Desktop Logo display container */}
        <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Logo maxHeight="4rem" />
          </Link>
        </Box>

        {/* Tabs Components */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
          <Tabs value={value} onChange={handleTabChange}>
            <Tab label="關於我們" to="/about" component={Link} />
            <Tab label="美容班" to="/classes" component={Link} />
            <Tab label="產品和服務" to="/products" component={Link} />
            <Tab label="聯繫我們" to="/booking" component={Link} />
          </Tabs>
        </Box>

        {/* Mobile hamburger icon */}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", md: "none" },
            color: { color: theme.palette.common.black },
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleDrawerToggle}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Mobile Logo display container */}
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            mr: 5,
            "@media (min-width: 900px)": {
              display: "none",
            },
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Logo maxHeight="4rem" />
          </Link>
        </Box>

        {/* Nav Menu links ipad/desktop */}
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>

        {/* mobile side menu slider container */}
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

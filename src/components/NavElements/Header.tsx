import * as React from "react";
import StyledAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import { styled } from "@mui/material/styles";

import Logo from "../Logo";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import Drawer from "@mui/material/Drawer";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AppBar from "@mui/material/AppBar";

const pages = ["產品和服務", "關於我們", "網上預訂"];

type HeaderProps = {
  children?: React.ReactNode;
};

const drawerWidth = 240;

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#ffffff", // Replace this with your desired white color
}));

const Header: React.FC<HeaderProps> = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Logo maxHeight="6rem" />
      <Divider />
      <List>
        {pages.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <CustomAppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Desktop Logo display container */}
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <Logo maxHeight="4rem" />
          </Box>

          {/* Tabs Components */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Tabs>
              <Tab label="產品和服務" />
              <Tab label="關於我們" />
              <Tab label="網上預訂" />
            </Tabs>
          </Box>

          {/* Mobile hamburger icon */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
            <Logo maxHeight="4rem" />
          </Box>

          {/* Nav Menu links ipad/desktop */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => {}}
                sx={{ my: 2, color: "black", display: "block", flexShrink: 0 }}
              >
                {page}
              </Button>
            ))}
          </Box>

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
      </Container>
    </CustomAppBar>
  );
};

export default Header;

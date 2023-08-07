import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import { styled } from "@mui/material/styles";

import Logo from "../Logo";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AppBar from "@mui/material/AppBar";
import theme from "../../utils/useTheme";

type HeaderProps = {
  children?: React.ReactNode;
};

const drawerWidth = 240;

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
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
      {/* Tabs Components */}
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <Tabs>
          <Tab label="產品和服務" sx={{ color: theme.palette.common.black }} />
          <Tab label="關於我們" sx={{ color: theme.palette.common.black }} />
          <Tab label="網上預訂" sx={{ color: theme.palette.common.black }} />
        </Tabs>
      </Box>
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
              <Tab
                label="產品和服務"
                sx={{ color: theme.palette.common.black }}
              />
              <Tab
                label="關於我們"
                sx={{ color: theme.palette.common.black }}
              />
              <Tab
                label="網上預訂"
                sx={{ color: theme.palette.common.black }}
              />
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
            <Logo maxHeight="4rem" />
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
      </Container>
    </CustomAppBar>
  );
};

export default Header;

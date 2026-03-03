import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { createTheme, ThemeProvider } from "@mui/material";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const theme = createTheme({
  components: {
    MuiPopover: {
      styleOverrides: {
        paper: {
          backgroundColor: "#22222260",
          color: "#fff",
          borderRadius: "12px",
          padding: "10px",
        },
      },
    },
  },
});

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar sx={{ backgroundColor: "#80808000" }} position="relative">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                LOGO
              </Typography>
              {/*  */}
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  PaperProps={{
                    sx: {
                      backgroundColor: "#222",
                      color: "#fff",
                      borderRadius: "12px",
                      padding: "10px",
                    },
                  }}
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    backgroundColor: "#00c878",
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem
                      // sx={{ background: "#415f53" }}
                      key={page}
                      onClick={handleCloseNavMenu}
                    >
                      <Typography
                        sx={{
                          textAlign: "center",
                        }}
                      >
                        {page}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              {/*  */}

              {/*  */}
              <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                LOGO
              </Typography>
              {/*  */}

              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                }}
              >
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      fontSize: "12px",
                      transition: "0.5s ease-in-out",
                      transform: "Scale(1)",
                      margin: "0 10px",

                      ":hover": {
                        color: "black",
                        backgroundColor: "#80808049",
                        transform: "Scale(1.2)",
                        transition: "0.5s ease-in-out",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          height: "100%",
                          width: "100%",
                          background: "#FFFFFF",
                          borderRadius: "10px",
                          transition: "0.5s",
                          transformOrigin: "right",
                          transform: "ScaleX(0)",
                          zIndex: -1,
                        },
                        "&:hover::before": {
                          transition: "transform 0.5s",
                          transformOrigin: "left",
                          transform: "scaleX(1)",
                        },
                      }}
                    >
                      {page}
                    </Typography>
                  </Button>
                ))}
              </Box>
              {/*  */}
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem
                      sx={{
                        transition: "0.5s",
                        ":hover": {
                          color: "#000000",
                          transform: "Scale(1.1)",

                          transition: "0.5s ease-in-out",
                        },
                      }}
                      key={setting}
                      onClick={handleCloseUserMenu}
                    >
                      <Typography
                        sx={{
                          margin: "5px",

                          textAlign: "center",
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            height: "100%",
                            width: "100%",
                            background: "#ffffff",
                            borderRadius: "10px",
                            transition: "0.5s",
                            transformOrigin: "right",
                            transform: "ScaleX(0)",
                            zIndex: -1,
                          },
                          "&:hover::before": {
                            transition: "transform 0.5s",
                            transformOrigin: "left",
                            transform: "scaleX(1)",
                          },
                        }}
                      >
                        {setting}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              {/*  */}
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </>
  );
};

export default Header;

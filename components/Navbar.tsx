import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import Logo from "public/assets/images/logo.png";
import { MouseEvent, useState } from "react";

const navLinks = [
  { name: "首页", href: "/" },
  { name: "广场", href: "/square" },
  { name: "看板", href: "/dashboard" },
];

export function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const openNavMenu = (e: MouseEvent<HTMLElement>) => {
    setAnchorElNav(e.currentTarget);
  };
  const closeNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ mr: 2, display: { xs: "none", md: "flex" } }}>
            <Image src={Logo} width={110} height={40} />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton size="large" onClick={openNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={!!anchorElNav}
              onClose={closeNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {navLinks.map(link => (
                <MenuItem key={link.name} onClick={closeNavMenu}>
                  <Typography textAlign="center" width={60}>
                    <Link href={link.href}>{link.name}</Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Image src={Logo} width={110} height={40} />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {navLinks.map(link => (
              <Link href={link.href} key={link.name}>
                <Button
                  size="large"
                  sx={{ my: 2, color: "inherit", display: "block" }}
                >
                  {link.name}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ p: 1 }}>
              <Link href="/dashboard">
                <PersonIcon fontSize="large" />
              </Link>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

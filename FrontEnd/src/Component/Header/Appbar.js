import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useAuth } from "../../Context/LoginContext";
import Link from "@mui/material/Link";

export default function ButtonAppBar() {
  const { login, Logouthandler } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="secondary" position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link color="#ffffff" href="/" underline="none">
              <b>Video App</b>
            </Link>
          </Typography>
          {login ? (
            <Button onClick={Logouthandler} color="inherit">
              <b>Logout</b>
            </Button>
          ) : (
            <Link color="#ffffff" href="/login" underline="none">
              <Button color="inherit">
                <b>Login</b>
              </Button>
            </Link>
          )}

          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            // aria-controls={menuId}
            aria-haspopup="true"
            // onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

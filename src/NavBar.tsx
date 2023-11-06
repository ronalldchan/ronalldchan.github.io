import { AppBar, Stack, Toolbar, Typography, Box } from "@mui/material";
import react from "react";
import NavBarButton from "./NavBarButton";

function NavBar() {
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ justifyContent: "space-between", display: "flex" }}>
        <Typography variant="h6" component="div">
          Ronald Chan
        </Typography>
        <Stack direction="row" spacing={2}>
          <NavBarButton name="About" />
          <NavBarButton name="Work" />
          <NavBarButton name="Projects" />
          <NavBarButton name="Contact" />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;

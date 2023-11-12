import { AppBar, Stack, Toolbar, Typography, Divider } from "@mui/material";
import react from "react";
import NavBarButton from "./NavBarButton";

function NavBar() {
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ justifyContent: "space-between", display: "flex" }}>
        <Typography variant="h6" component="div" fontWeight="bold">
          Ronald Chan
        </Typography>
        <Stack direction="row" spacing={2}>
          <NavBarButton name="About" href="#about" />
          <NavBarButton name="Work" href="#work" />
          <NavBarButton name="Projects" href="#projects" />
          <NavBarButton name="Contact" href="#contact" />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;

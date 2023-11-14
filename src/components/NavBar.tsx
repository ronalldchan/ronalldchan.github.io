import { AppBar, Stack, Toolbar } from "@mui/material";
import react from "react";
import NavBarButton from "./NavBarButton";

function NavBar() {
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ justifyContent: "center", display: "flex" }}>
        <Stack direction="row">
          <NavBarButton name="About" href="#about" />
          <NavBarButton name="Experience" href="#experience" />
          <NavBarButton name="Projects" href="#projects" />
          <NavBarButton name="Contact" href="#contact" />
          <NavBarButton name="Resume" href="" />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;

import { AppBar, Toolbar } from "@mui/material";
import NavBarButton from "./NavBarButton";

function NavBar() {
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ justifyContent: "center" }}>
        <NavBarButton name="About" href="#about" />
        <NavBarButton name="Experience" href="#experience" />
        <NavBarButton name="Projects" href="#projects" />
        <NavBarButton name="Contact" href="#contact" />
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;

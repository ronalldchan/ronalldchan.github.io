import { AppBar, Toolbar } from "@mui/material";
import NavBarButton from "./NavBarButton";
import { SECTIONS } from "../constants/sections";

function NavBar() {
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
        <NavBarButton name="About" href={`#${SECTIONS.ABOUT}`} />
        <NavBarButton name="Experience" href={`#${SECTIONS.EXPERIENCE}`} />
        <NavBarButton name="Projects" href={`#${SECTIONS.PROJECTS}`} />
        <NavBarButton name="Contact" href={`#${SECTIONS.CONTACT}`} />
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;

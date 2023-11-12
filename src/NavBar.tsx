import { AppBar, Stack, Toolbar, Typography, Divider, Button } from "@mui/material";
import react from "react";
import NavBarButton from "./NavBarButton";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

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
          <Button color="inherit" endIcon={<PictureAsPdfIcon />} href="">
            Resume
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;

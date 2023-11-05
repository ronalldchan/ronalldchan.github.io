import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import react from "react";
import NavBarButton from "./NavBarButton";

function NavBar() {
  return (
    // <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" component="div">
          Ronald Chan
        </Typography>
        <Stack direction="row" spacing={2} sx={{ ml: "auto" }}>
          <NavBarButton name="About" />
          <NavBarButton name="Work" />
          <NavBarButton name="Projects" />
          <NavBarButton name="Contact" />
        </Stack>
      </Toolbar>
    </AppBar>
    // </Box>
  );
}

export default NavBar;

import { AppBar, Box, Button, Divider, List, Stack, Toolbar, Typography } from "@mui/material";
import react from "react";

function NavBar() {
  return (
    // <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div">
          Ronald
        </Typography>
        <Stack direction="row" spacing={2} sx={{ marginLeft: "auto" }}>
          <Button color="inherit">About</Button>
          <Button color="inherit" size="large">
            Contact
          </Button>
          <Button color="inherit">Work</Button>
          <Button color="inherit">Projects</Button>
          <Button color="inherit">Resume</Button>
        </Stack>
      </Toolbar>
    </AppBar>
    // </Box>
  );
}

export default NavBar;

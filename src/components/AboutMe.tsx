import {
  Box,
  Container,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { SECTIONS } from "../constants/sections";
import { ABOUT } from "../constants/content";

function AboutMe() {
  return (
    <Container id={SECTIONS.ABOUT}>
      <Box component="section" py={6}>
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          spacing={4}
        >
          <Grid item maxWidth={500}>
            <Typography variant="h3" fontWeight={"bold"}>
              Ronald Chan
            </Typography>
            <Typography variant="body1">{ABOUT.description}</Typography>
            <Stack direction={"row"}>
              <IconButton href={ABOUT.linkedin}>
                <LinkedIn fontSize="large" />
              </IconButton>
              <IconButton href={ABOUT.github}>
                <GitHub fontSize="large" />
              </IconButton>
            </Stack>
          </Grid>
          <Grid item>
            <Paper
              sx={{
                width: 300,
                height: 300,
                overflow: "hidden",
                borderRadius: "50%",
              }}
            >
              <img src={"/headshot.jpg"} style={{ width: "100%" }} />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default AboutMe;

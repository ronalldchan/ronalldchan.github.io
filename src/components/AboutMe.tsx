import { Box, Container, Grid, IconButton, Paper, Stack, Typography } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import IconLinkButton from "./IconLinkButton";

function AboutMe() {
  return (
    <Container id="about">
      <Box component="section" py={6}>
        <Grid container justifyContent={"center"} alignItems={"center"} spacing={4}>
          <Grid item maxWidth={500}>
            <Typography variant="h3" fontWeight={"bold"}>
              Ronald Chan
            </Typography>
            <Typography variant="body1">
              Hi, I'm Ronald, a Quality Engineer at StackAdapt, where I help ensure the delivery of high-quality
              software. I hold a degree in Computer Science from The University of British Columbia, which gives me a
              strong technical foundation for working closely with developers and systems.
            </Typography>
            <Stack direction={"row"}>
              <IconButton href="https://www.linkedin.com/in/ronald-chan-info/">
                <LinkedIn fontSize="large" />
              </IconButton>
              <IconButton href="https://github.com/ronalldchan">
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
                // borderRadius: "10%",
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

import { Box, Container, Typography } from "@mui/material";

function Projects() {
  return (
    <Container id="projects">
      <Box component="section">
        <Box py={6}>
          <Typography variant="h4" fontWeight={"bold"}>
            Projects
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default Projects;

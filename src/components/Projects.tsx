import { Box, Container, Grid, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { SECTIONS } from "../constants/sections";
import { PROJECTS } from "../constants/content";

function Projects() {
  return (
    <Container id={SECTIONS.PROJECTS}>
      <Box component="section" py={6}>
        <Typography variant="h4" fontWeight={"bold"}>
          Projects
        </Typography>
        <Grid container justifyContent={"center"} spacing={3} py={3}>
          <Grid item>
            <ProjectCard
              title={PROJECTS.effectiveTests.title}
              subtitle={PROJECTS.effectiveTests.subtitle}
              description={PROJECTS.effectiveTests.description}
              image={PROJECTS.effectiveTests.image}
              github={PROJECTS.effectiveTests.github}
            />
          </Grid>
          <Grid item>
            <ProjectCard
              title={PROJECTS.folderDSL.title}
              subtitle={PROJECTS.folderDSL.subtitle}
              description={PROJECTS.folderDSL.description}
              image={PROJECTS.folderDSL.image}
              github={PROJECTS.folderDSL.github}
            />
          </Grid>
          <Grid item>
            <ProjectCard
              title={PROJECTS.ubcNotes.title}
              subtitle={PROJECTS.ubcNotes.subtitle}
              description={PROJECTS.ubcNotes.description}
              image={PROJECTS.ubcNotes.image}
              github={PROJECTS.ubcNotes.github}
              details={PROJECTS.ubcNotes.details}
            />
          </Grid>
          <Grid item>
            <ProjectCard
              title={PROJECTS.portfolioWebsite.title}
              subtitle={PROJECTS.portfolioWebsite.subtitle}
              description={PROJECTS.portfolioWebsite.description}
              image={PROJECTS.portfolioWebsite.image}
              github={PROJECTS.portfolioWebsite.github}
            />
          </Grid>
          <Grid item>
            <ProjectCard
              title={PROJECTS.translinkDB.title}
              subtitle={PROJECTS.translinkDB.subtitle}
              description={PROJECTS.translinkDB.description}
              image={PROJECTS.translinkDB.image}
              github={PROJECTS.translinkDB.github}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Projects;

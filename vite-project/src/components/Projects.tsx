import { Box, Container, Grid, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <Container id="projects">
      <Box component="section" py={6}>
        <Typography variant="h4" fontWeight={"bold"}>
          Projects
        </Typography>
        <Grid container justifyContent={"center"} spacing={3} py={3}>
          <Grid item>
            <ProjectCard
              title="Folder DSL"
              subtitle="Java, ANTLR"
              description={[
                "A DSL made to help users organize their files.",
                "Supports conditionals, condition macros, loops, and mutable variables that allow users to define complex rules for organizing file content.",
                "Implemented the evaluator component of the DSL, optimizing AST tree traversal and enabling core functionality.",
              ]}
              image={"/projects/dsl.png"}
              github="https://github.com/ronalldchan/fldr-dsl"
            />
          </Grid>
          <Grid item>
            <ProjectCard
              title="UBC Notes"
              subtitle="TypeScript, Firebase, React, Material UI"
              description={[
                "A 12-hour nwPlus hackathon project aimed at promoting inclusivity by creating a centralized platform for seamless, collaborative access to class notes among students.",
                "Utilized Google Firebase to create the backend infrastructure, allowing for note storage and retrieval for knowledge exchange within the academic community.",
              ]}
              image={"/projects/ubcnotes.png"}
              github="https://github.com/ronalldchan/UBC-Notes"
              details="https://devpost.com/software/ubc-notes?ref_content=my-projects-tab&ref_feature=my_projects"
            />
          </Grid>
          <Grid item>
            <ProjectCard
              title="Portfolio Website"
              subtitle="TypeScript, React, Material UI"
              description={[
                "My website that you are looking at now!",
                "Created with TypeScript, React, and Material UI.",
              ]}
              image={"/projects/website.png"}
              github="https://github.com/ronalldchan/ronalldchan.github.io"
            />
          </Grid>
          <Grid item>
            <ProjectCard
              title="Translink Database App"
              subtitle="SQL, HTML, PHP"
              description={[
                "A SQL database based on the TransLink transportation network.",
                "Allows users to add, remove, and query data regarding the network via a HTML and PHP frontend.",
              ]}
              image={"/projects/translinkdb.png"}
              github="https://github.com/ronalldchan/Translink-Database"
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Projects;

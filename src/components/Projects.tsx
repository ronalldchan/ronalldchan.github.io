import { Box, Container, Grid, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";
import ubcnotes from "../images/ubcnotes.png";
import website from "../images/website.png";

const cardData = [
  {
    title: "UBC Notes",
    description:
      "Led a 4-person team as part of a nwPlus's HackCamp 12-hour hackathon. Project was aimed to promote inclusivity by creating a centralized platform for seamless, collaborative access to class notes among students. Utilized Google Firebase to architect the backend infrastructure, allowing for efficient note storage and retrieval for seamless knowledge exchange within the academic community.",
    image: ubcnotes,
  },
  {
    title: "Personal Portfolio Website",
    description: "",
    image: website,
  },
];

function Projects() {
  return (
    <Container id="projects">
      <Box component="section">
        <Box py={6}>
          <Typography variant="h4" fontWeight={"bold"}>
            Projects
          </Typography>
          <Grid container spacing={3} display={"flex"} justifyContent={"center"} my={2}>
            {cardData.map((item) => (
              <Grid item>
                <ProjectCard title={item.title} description={item.description} image={item.image} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default Projects;

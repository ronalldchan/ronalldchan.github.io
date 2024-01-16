import { Box, Container, Grid, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";
import ubcnotes from "../images/ubcnotes.png";
import website from "../images/website.png";

const cardData = [
  {
    title: "UBC Notes · 2023",
    description: [
      "A 12-hour hackathon project aimed at promoting inclusivity by creating a centralized platform for seamless, collaborative access to class notes among students.",
      "Utilized Google Firebase to create the backend infrastructure, allowing for note storage and retrieval for knowledge exchange within the academic community.",
    ],
    image: ubcnotes,
  },
  {
    title: "Portfolio Website · 2023",
    description: [
      "My website that you are looking at now!",
      "Created with TypeScript, React, and Material UI for an intuitive user interface",
    ],
    image: website,
  },
  {
    title: "Insight UBC · 2022",
    description: [
      "A full stack web development project to enable effective querying of historical data regarding a university’s class sections and rooms.",
      "Designed and implemented the backend architecture, ensuring seamless data management and optimal performance through efficient database design and API implementation.",
    ],
    image: website,
  },
  {
    title: "TransLink Database App",
    description: [
      "A SQL database based on the TransLink transportation network using HTML and PHP to query, add, and remove data from the database.",
    ],
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

import { Box, Container, Typography } from "@mui/material";
import ExperienceForm from "./ExperienceForm";

function Experience() {
  return (
    <Container>
      <Box component="section" id="experience">
        <Box py={6}>
          <Typography variant="h4" fontWeight={"bold"}>
            Experience
          </Typography>
          <ExperienceForm
            date="MAY 2019 - PRESENT"
            jobTitle="Junior Quality Assurance Engineer (Co-op)"
            company="Operto Guest Technologies"
            description="Built a testing framework using Playwright and Typescript, enabling end-to-end test automation for Operto Teams and Connect products. Played a key role in managing sprint releases and ensuring software quality through comprehensive testing for smooth production deployments."
          />
        </Box>
      </Box>
    </Container>
  );
}

export default Experience;

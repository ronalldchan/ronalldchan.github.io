import { Box, Container, Stack, Typography } from "@mui/material";
import ExperienceForm from "./ExperienceForm";

function Experience() {
  return (
    <Container>
      <Box component="section" id="experience">
        <Box py={6}>
          <Typography variant="h4" fontWeight={"bold"}>
            Experience
          </Typography>
          <Stack direction={"column"} spacing={10} alignItems={"center"} sx={{ mt: 3 }}>
            <ExperienceForm
              date="MAY 2019 - PRESENT"
              jobTitle="Junior Quality Assurance Engineer (Co&#8209;op)"
              company="Operto"
              description="Built a testing framework using Playwright and Typescript, enabling end-to-end test automation for Operto Teams and Connect products. Played a key role in managing sprint releases and ensuring software quality through comprehensive testing for smooth production deployments."
              color="#3b73f3"
            />
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}

export default Experience;

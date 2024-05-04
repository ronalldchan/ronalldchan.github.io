import { Box, Container, Step, StepContent, StepLabel, Stepper, Typography } from "@mui/material";
import ExperienceCard from "./ExperienceCard";
// import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";

function Experience() {
  return (
    <Container id="experience">
      <Box component={"section"} py={6}>
        <Typography variant="h4" fontWeight={"bold"}>
          Experience
        </Typography>
        <Box display={"flex"} justifyContent={"center"} py={3}>
          <Stepper orientation="vertical">
            <Step active>
              <StepLabel StepIconProps={{ icon: "" }}>
                <Typography variant="h6">May 2023 - Dec. 2023</Typography>
              </StepLabel>
              <StepContent>
                <ExperienceCard
                  jobTitle={"Quality Assurance Engineer Co-op"}
                  company="Operto"
                  companyLink="https://operto.com/"
                  description={[
                    "Enabled E2E test automation for Operto Teams and Connect products by building a testing framework using Playwright and Typescript, allowing future test development.",
                    "Automated new deployments by integrating the E2E test automation framework into the CI/CD pipeline, enabling quick and reliable software releases.",
                    "Developed an onboarding guide for QA engineers, ensuring a smooth integration process and effective orientation within the QA team.",
                  ]}
                  color="#000000"
                />
              </StepContent>
            </Step>
            <Step active>
              <StepLabel StepIconProps={{ icon: "" }}>
                <Typography variant="h6">Jan. 2022 - Aug. 2022</Typography>
              </StepLabel>
              <StepContent>
                <ExperienceCard
                  jobTitle="Test Developer Co-op"
                  company="Visier"
                  companyLink="https://www.visier.com/"
                  description={[
                    "Performed manual testing, building automated tests and data validation via unit tests, integration tests and end-to-end UI automation acceptance tests.",
                    "Reduced total automated E2E test run time by 50% by optimizing test data and parallelizing existing tests, leading to faster iterations, and increasing developer productivity.",
                    "Implemented real-time test reporting functionality within the test runner, providing instant feedback on test outcomes and progress for developer productivity.",
                  ]}
                  color="#1d8187"
                />
              </StepContent>
            </Step>
            <Step active>{/* <StepLabel StepIconProps={{ icon: "" }} /> */}</Step>
          </Stepper>
        </Box>
      </Box>
    </Container>
  );
}

export default Experience;

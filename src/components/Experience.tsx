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
                <Typography variant="h6">May 2025 - Present</Typography>
              </StepLabel>
              <StepContent>
                <ExperienceCard
                  jobTitle="Quality Engineer"
                  company="StackAdapt"
                  companyLink="https://www.stackadapt.com/"
                  description={[
                    "Reduced production defects by identifying and reproducing bugs with engineers during feature development and validation, resulting in fewer issues reaching release.",
                    "Improved test coverage for new features by preparing test environments, organizing bug hunts, and contributing to team-owned test suites, resulting in earlier detection of functional issues.",
                    "Supported on-time feature releases by collaborating with product managers to validate requirements and test readiness, resulting in smoother and more predictable launches.",
                  ]}
                  color="#0061ff"
                />
              </StepContent>
            </Step>
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
                    "Built a scalable E2E test automation framework from scratch using Playwright and TypeScript, reducing reliance on manual regression testing and enabling maintainable E2E test coverage.",
                    "Streamlined deployment processes by integrating E2E test automation into the CI/CD pipeline, resulting in faster, more reliable releases and minimizing deployment errors.",
                    "Collaborated with developers and product managers to validate tickets for release, verify functionality, and develop regression test cases, ensuring comprehensive test coverage and smooth release cycles.",
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
                    "Developed a real-time test reporting system, enabling faster failure triaging and reducing developer downtime, resulting in improved test debugging efficiency and expedited issue resolution.",
                    "Optimized E2E test execution by 50% through strategic test data management, parallelization, and environment configuration, accelerating development cycles.",
                    "Designed and executed manual and automated test cases for unit, integration, and end-to-end testing, enhancing software quality and reducing production defects.",
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

import { Box, Container, Typography } from "@mui/material";
import ExperienceCard from "./ExperienceCard";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";

function Experience() {
  return (
    <Container id="experience">
      <Box component={"section"} py={6}>
        <Typography variant="h4" fontWeight={"bold"}>
          Experience
        </Typography>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <ExperienceCard
                jobTitle={"Quality Assurance Engineer Co-op"}
                company="Operto"
                companyLink="https://operto.com/"
                description={[
                  "Enabled E2E test automation for Operto Teams and Connect products by building a testing framework using Playwright and Typescript, allowing future test development.",
                  "Automated new deployments by integrating the E2E test automation framework into the CI/CD pipeline, ensuring software stability.",
                  "Developed an onboarding guide for QA engineers, ensuring a smooth integration process and effective orientation within the QA team.",
                ]}
                color="#000000"
              />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <ExperienceCard
                jobTitle={"Quality Assurance Engineer Co-op"}
                company="Operto"
                companyLink="https://operto.com/"
                description={[
                  "Enabled E2E test automation for Operto Teams and Connect products by building a testing framework using Playwright and Typescript, allowing future test development.",
                  "Automated new deployments by integrating the E2E test automation framework into the CI/CD pipeline, ensuring software stability.",
                  "Developed an onboarding guide for QA engineers, ensuring a smooth integration process and effective orientation within the QA team.",
                ]}
                color="#000000"
              />
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
    </Container>
  );
}

export default Experience;

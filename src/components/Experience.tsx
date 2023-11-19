import { Box, Container, Typography } from "@mui/material";
import ExperienceForm from "./ExperienceForm";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import ExperienceTimelineItem from "./ExperienceTimelineItem";

function Experience() {
  return (
    <Container>
      <Box component="section" id="experience">
        <Box py={6}>
          <Typography variant="h4" fontWeight={"bold"}>
            Experience
          </Typography>
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent />
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent />
            </TimelineItem>
            <ExperienceTimelineItem date="MAY 2023 - PRESENT">
              <ExperienceForm
                jobTitle="Quality Assurance Engineer Co&#8209;op"
                company="Operto"
                companyLink="https://operto.com/"
                description="Built a testing framework using Playwright and Typescript, enabling E2E test automation for Operto Teams and Connect products. Integrated this E2E automation framework into the CI/CD pipeline to automate new deployments and ensure software stability. Helped manage sprint releases for smooth production deployments."
                color="#002780"
              />
            </ExperienceTimelineItem>
            <ExperienceTimelineItem date="JAN 2022 - AUG 2022">
              <ExperienceForm
                jobTitle="Test Developer Co&#8209;op"
                company="Visier"
                companyLink="https://www.visier.com/"
                description="Performed manual testing, building automated tests and data validation via unit tests, integration tests and end-to-end UI automation acceptance tests. Helped optimize total automated E2E test run time by 50% from 6 to 3 hours. Created a live test failure reporter to help developers view and analyze test run progress before completion."
                color="#1d8187"
              />
            </ExperienceTimelineItem>
            <TimelineItem>
              <TimelineOppositeContent />
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot />
              </TimelineSeparator>
              <TimelineContent />
            </TimelineItem>
          </Timeline>
        </Box>
      </Box>
    </Container>
  );
}

export default Experience;

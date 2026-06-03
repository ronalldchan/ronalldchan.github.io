import { Box, Container, Typography } from "@mui/material";
import ExperienceCard from "./ExperienceCard";
import { SECTIONS } from "../constants/sections";
import { EXPERIENCE } from "../constants/content";

import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  timelineItemClasses,
  TimelineSeparator,
} from "@mui/lab";
// import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";

function Experience() {
  return (
    <Container id={SECTIONS.EXPERIENCE}>
      <Box component={"section"} py={6}>
        <Typography variant="h4" fontWeight={"bold"}>
          Experience
        </Typography>
        <Box display={"flex"} justifyContent={"center"} py={3}>
          <Box>
            <Timeline
              sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }}
            >
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <ExperienceCard
                    jobTitle={EXPERIENCE.stackadapt.jobTitle}
                    company={EXPERIENCE.stackadapt.company}
                    companyLink={EXPERIENCE.stackadapt.companyLink}
                    startDate={EXPERIENCE.stackadapt.startDate}
                    endDate={EXPERIENCE.stackadapt.endDate}
                    description={EXPERIENCE.stackadapt.description}
                    color={EXPERIENCE.stackadapt.color}
                  />
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <ExperienceCard
                    jobTitle={EXPERIENCE.operto.jobTitle}
                    company={EXPERIENCE.operto.company}
                    companyLink={EXPERIENCE.operto.companyLink}
                    startDate={EXPERIENCE.operto.startDate}
                    endDate={EXPERIENCE.operto.endDate}
                    description={EXPERIENCE.operto.description}
                    color={EXPERIENCE.operto.color}
                  />
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                </TimelineSeparator>
                <TimelineContent>
                  <ExperienceCard
                    jobTitle={EXPERIENCE.visier.jobTitle}
                    company={EXPERIENCE.visier.company}
                    companyLink={EXPERIENCE.visier.companyLink}
                    startDate={EXPERIENCE.visier.startDate}
                    endDate={EXPERIENCE.visier.endDate}
                    description={EXPERIENCE.visier.description}
                    color={EXPERIENCE.visier.color}
                  />
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Experience;

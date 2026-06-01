import {
  Box,
  Container,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import ExperienceCard from "./ExperienceCard";
import { SECTIONS } from "../constants/sections";
import { EXPERIENCE } from "../constants/content";
// import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";

function Experience() {
  return (
    <Container id={SECTIONS.EXPERIENCE}>
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
                  jobTitle={EXPERIENCE.stackadapt.jobTitle}
                  company={EXPERIENCE.stackadapt.company}
                  companyLink={EXPERIENCE.stackadapt.companyLink}
                  description={EXPERIENCE.stackadapt.description}
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
                  jobTitle={EXPERIENCE.operto.jobTitle}
                  company={EXPERIENCE.operto.company}
                  companyLink={EXPERIENCE.operto.companyLink}
                  description={EXPERIENCE.operto.description}
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
                  jobTitle={EXPERIENCE.visier.jobTitle}
                  company={EXPERIENCE.visier.company}
                  companyLink={EXPERIENCE.visier.companyLink}
                  description={EXPERIENCE.visier.description}
                  color="#1d8187"
                />
              </StepContent>
            </Step>
            <Step active>
              {/* <StepLabel StepIconProps={{ icon: "" }} /> */}
            </Step>
          </Stepper>
        </Box>
      </Box>
    </Container>
  );
}

export default Experience;

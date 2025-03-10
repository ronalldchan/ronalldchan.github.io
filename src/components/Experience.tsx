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
                                        "Achieved robust test automation for Operto software products by designing and implementing a scalable E2E testing framework using Playwright and TypeScript, ensuring high test coverage and regression testing support for continuous software improvement.",
                                        "Streamlined deployment processes by integrating E2E test automation into the CI/CD pipeline, resulting in faster, more reliable releases and minimizing deployment errors.",
                                        "Enhanced onboarding efficiency by creating a comprehensive QA engineer guide, streamlining the adoption of QA methodologies and best practices to support efficient quality processes.",
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
                                        "Minimized developer downtime by introducing a real-time test reporting system, enabling instant insights into test outcomes, test failure analysis, and triaging, significantly expediting issue resolution.",
                                        "Optimized E2E test run times by 50% through strategic test environment configuration, data optimization and parallelization, resulting in faster development cycles and a measurable boost to developer productivity.",
                                        "Ensured software reliability by conducting comprehensive manual and automated testing, including unit, integration, and end-to-end UI tests, which improved test coverage and reduced production bugs.",
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

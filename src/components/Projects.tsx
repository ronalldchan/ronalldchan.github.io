import { Box, Container, Grid, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";

function Projects() {
    return (
        <Container id="projects">
            <Box component="section" py={6}>
                <Typography variant="h4" fontWeight={"bold"}>
                    Projects
                </Typography>
                <Grid container justifyContent={"center"} spacing={3} py={3}>
                    <Grid item>
                        <ProjectCard
                            title="Effective Tests Tool"
                            subtitle="Java, ANTLR, Gradle"
                            description={[
                                "Developed an IDE extension tool that combines static and dynamic analysis to enhance test coverage test coverage metrics, supporting test-driven development and QA validation workflows.",
                                "Innovated a unique test coverage metric to detect unvalidated method side effects, addressing gaps left in traditional test methodologies.",
                                "Implemented static analysis logic to quantify assertion coverage and highlight untested code.",
                            ]}
                            image={"/projects/effective_tests.png"}
                            github="https://github.com/ronalldchan/effective-tests"
                        />
                    </Grid>
                    <Grid item>
                        <ProjectCard
                            title="Folder DSL"
                            subtitle="Java, ANTLR"
                            description={[
                                "Designed a domain specific language to automate and simplify file organization workflows.",
                                "Developed support for advanced language features including conditionals, macros, loops, and mutable variables for dynamic scripting.",
                                "Transformed parsed AST nodes into executable logic to support runtime behavior for the DSL.",
                            ]}
                            image={"/projects/dsl.png"}
                            github="https://github.com/ronalldchan/fldr-dsl"
                        />
                    </Grid>
                    <Grid item>
                        <ProjectCard
                            title="UBC Notes"
                            subtitle="TypeScript, Firebase, React, Material UI"
                            description={[
                                "Built a web application during a 12-hour hackathon for students to upload, organize, and share course notes using React and MUI.",
                                "Integrated Google Firebase for backend infrastructure, handling file storage and API endpoints.",
                            ]}
                            image={"/projects/ubcnotes.png"}
                            github="https://github.com/ronalldchan/UBC-Notes"
                            details="https://devpost.com/software/ubc-notes"
                        />
                    </Grid>
                    <Grid item>
                        <ProjectCard
                            title="Portfolio Website"
                            subtitle="TypeScript, React, Material UI"
                            description={[
                                "My website that you are looking at now!",
                                "Created with TypeScript, React, and Material UI.",
                            ]}
                            image={"/projects/website.png"}
                            github="https://github.com/ronalldchan/ronalldchan.github.io"
                        />
                    </Grid>
                    <Grid item>
                        <ProjectCard
                            title="Translink Database App"
                            subtitle="SQL, HTML, PHP"
                            description={[
                                "A SQL database based on the TransLink transportation network.",
                                "Allows users to add, remove, and query data regarding the network via a HTML and PHP frontend.",
                            ]}
                            image={"/projects/translinkdb.png"}
                            github="https://github.com/ronalldchan/Translink-Database"
                        />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default Projects;

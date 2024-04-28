import { Container, Divider } from "@mui/material";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Projects from "./Projects";

function Content() {
  return (
    <Container>
      <AboutMe />
      <Divider />
      <Experience />
      <Divider />
      <Projects />
    </Container>
  );
}

export default Content;

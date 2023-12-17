import { Container, Divider } from "@mui/material";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Projects from "./Projects";

function Content() {
  return (
    <Container>
      <AboutMe />
      <Divider variant="middle" />
      <Experience />
      <Divider variant="middle" />
      <Projects />
    </Container>
  );
}

export default Content;

import { Container, Divider } from "@mui/material";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

function Content() {
  return (
    <Container>
      <AboutMe />
      <Divider />
      <Experience />
      <Divider />
      <Projects />
      <Divider />
      <Contact />
    </Container>
  );
}

export default Content;

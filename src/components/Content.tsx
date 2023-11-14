import { Container, Divider } from "@mui/material";
import AboutMe from "./AboutMe";
import Experience from "./Experience";

function Content() {
  return (
    <Container>
      <AboutMe />
      <Divider variant="middle" />
      <Experience />
    </Container>
  );
}

export default Content;

import { Container } from "@mui/material";
import AboutMe from "./AboutMe";

function Content() {
  return (
    <Container maxWidth="xl" sx={{ height: 2000 }}>
      <AboutMe title="somdad" />
      {/* <Divider variant="middle" />
      <Typography id="about">about here</Typography>
      <Typography id="123">something</Typography>
      <Typography id="123">something</Typography> */}
    </Container>
  );
}

export default Content;

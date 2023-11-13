import { Box, Paper, Typography } from "@mui/material";
import headshot from "../images/headshot.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconLinkButton from "./IconLinkButton";

function AboutMe() {
  return (
    <Box component="section" id="about">
      <Box py={6} display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Box mr={5}>
          <Typography variant="h3" fontWeight={"bold"}>
            Ronald Chan
          </Typography>
          <Typography variant="body1" maxWidth={500} mb={2}>
            Hi, I'm Ronald, a fourth-year computer science student at The University of British Columbia. With hands-on
            experience as a Quality Assurance Engineer, I've honed my skills in ensuring the seamless functionality and
            reliability of software solutions.
          </Typography>
          <IconLinkButton href="https://www.linkedin.com/in/ronald-chan-info/">
            <LinkedInIcon fontSize="large" />
          </IconLinkButton>
          <IconLinkButton href="https://github.com/ronalldchan">
            <GitHubIcon fontSize="large" />
          </IconLinkButton>
        </Box>
        <Paper
          sx={{
            borderRadius: "50%",
            overflow: "hidden",
            maxWidth: 200,
            minWidth: 150,
            border: 10,
            aspectRatio: "1/1",
          }}
        >
          <img src={headshot} style={{ width: "100%", height: "auto" }} />
        </Paper>
      </Box>
    </Box>
  );
}

export default AboutMe;

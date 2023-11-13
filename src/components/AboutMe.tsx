import { Avatar, Box, Paper, Typography } from "@mui/material";
import headshot from "../images/headshot.png";

function AboutMe(props: { title: string }) {
  return (
    <Box component="section" id="about">
      <Box paddingTop={6} display={"flex"} justifyContent={"center"} alignItems={"center"}>
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
        <Box ml={5}>
          <Typography variant="h3" fontWeight={"bold"}>
            Ronald Chan
          </Typography>
          <Typography variant="body1" maxWidth={500}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi assumenda cumque delectus, corrupti totam,
            molestias atque enim, omnis at mollitia tempora suscipit quia? Id, facilis quasi ab a quisquam distinctio?
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default AboutMe;

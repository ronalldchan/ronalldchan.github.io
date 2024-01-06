import { Card, CardActionArea, CardContent, CardMedia, Divider, Typography } from "@mui/material";
import sample from "../images/ubcnotes.png";
import { title } from "process";

function ProjectCard(props: { title: string; description: string; image: string }) {
  return (
    <Card sx={{ width: "400px" }}>
      {/* <CardActionArea> */}
      <CardMedia component={"img"} height={"200"} image={props.image} sx={{ objectPosition: "0% 0%" }} />
      <Divider />
      <CardContent>
        <Typography variant="h6" fontWeight={"bold"}>
          {props.title}
        </Typography>
        <Typography>{props.description}</Typography>
      </CardContent>
      {/* </CardActionArea> */}
    </Card>
  );
}

export default ProjectCard;

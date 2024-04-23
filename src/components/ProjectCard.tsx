import { Card, CardContent, CardMedia, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";

function ProjectCard(props: { title: string; description: string[]; image: string }) {
  return (
    <Card sx={{ width: "350px" }}>
      <CardMedia component={"img"} height={"200"} image={props.image} sx={{ objectPosition: "0% 0%" }} />
      <Divider />
      <CardContent>
        <Typography variant="h6" fontWeight={"bold"}>
          {props.title}
        </Typography>
        <List sx={{ listStyleType: "disc", pl: 3, py: 0 }}>
          {props.description.map((item) => (
            <ListItem sx={{ display: "list-item", p: 0 }}>
              <ListItemText>{item}</ListItemText>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;

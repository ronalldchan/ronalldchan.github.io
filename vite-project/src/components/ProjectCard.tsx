import { Button, Card, CardActions, CardContent, CardMedia, Divider, List, ListItem, Typography } from "@mui/material";

function ProjectCard(props: { title: string; subtitle: string; description: string[]; image: string; link: string }) {
  return (
    <Card sx={{ width: 500 }}>
      <CardMedia sx={{ height: 250, objectPosition: "top" }} image={props.image} component={"img"} />
      <Divider />
      <CardContent sx={{ height: 230, overflow: "hidden" }}>
        <Typography variant="h6" fontWeight={"bold"}>
          {props.title}
        </Typography>
        <Typography variant="subtitle1" fontStyle={"italic"}>
          {props.subtitle}
        </Typography>
        <List sx={{ listStyleType: "disc", pl: 3, py: 0 }}>
          {props.description.map((item) => (
            <ListItem sx={{ display: "list-item", pl: 0, py: 0 }}>{item}</ListItem>
          ))}
        </List>
      </CardContent>
      <CardActions>
        <Button href={props.link}>github</Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;

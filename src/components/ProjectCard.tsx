import { Button, Card, CardActions, CardContent, CardMedia, Divider, List, ListItem, Typography } from "@mui/material";

function ProjectCard(props: {
  title: string;
  subtitle: string;
  description: string[];
  image: string;
  github: string;
  details?: string;
}) {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia sx={{ height: 250, objectPosition: "top" }} image={props.image} component={"img"} />
      <Divider />
      <CardContent sx={{ minHeight: 230, overflow: "hidden" }}>
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
        <Button href={props.github}>github</Button>
        {props.details != undefined ? <Button href={props.details}>Details</Button> : null}
      </CardActions>
    </Card>
  );
}

export default ProjectCard;

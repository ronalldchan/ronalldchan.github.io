import { Card, List, ListItem, ListItemText, Typography } from "@mui/material";

function ExperienceCard(props: {
  jobTitle: string;
  company: string;
  companyLink: string;
  description: string[];
  tags?: string[];
  color: string;
}) {
  return (
    <Card sx={{ p: 3, borderTop: 15, borderColor: props.color, maxWidth: 500, minWidth: 250, textAlign: "left" }}>
      <a href={props.companyLink} target="_blank" style={{ color: "inherit" }}>
        <Typography
          variant="h6"
          fontWeight={"bold"}
          display={"inline-flex"}
          alignItems={"center"}
          sx={{ "&:hover": { opacity: "70%", transitionDuration: "0.1s" } }}
        >
          {`${props.jobTitle} · ${props.company}`}
        </Typography>
      </a>
      <List sx={{ listStyleType: "disc", pl: 3, py: 0 }}>
        {props.description.map((item) => (
          <ListItem sx={{ display: "list-item", p: 0 }}>
            <ListItemText>{item}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}

export default ExperienceCard;

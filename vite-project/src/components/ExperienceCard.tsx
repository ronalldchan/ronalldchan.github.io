import { Card, CardContent, List, ListItem, Typography } from "@mui/material";

function ExperienceCard(props: {
  jobTitle: string;
  company: string;
  companyLink: string;
  description: string[];
  color: string;
}) {
  return (
    <Card sx={{ borderTop: 15, borderColor: props.color, maxWidth: 500 }}>
      <CardContent sx={{ textAlign: "left" }}>
        <Typography
          component={"a"}
          href={props.companyLink}
          variant="h6"
          fontWeight={"bold"}
          display={"inline"}
          sx={{
            "&:hover": { opacity: "70%", transitionDuration: "0.1s" },
            textDecoration: "none",
            color: "inherit",
          }}
        >
          {`${props.jobTitle} · ${props.company}`}
        </Typography>
        <List sx={{ listStyleType: "disc", pl: 3, py: 0 }}>
          {props.description.map((item) => (
            <ListItem sx={{ display: "list-item", pl: 0, py: 0 }}>{item}</ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

export default ExperienceCard;

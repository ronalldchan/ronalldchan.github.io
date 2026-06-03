import {
  Avatar,
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  Typography,
} from "@mui/material";

function ExperienceCard(props: {
  jobTitle: string;
  company: string;
  companyLink: string;
  startDate: string;
  endDate: string;
  description: string[];
  color: string;
}) {
  return (
    <Card sx={{ borderTop: 15, borderColor: props.color, maxWidth: 500 }}>
      <CardContent sx={{ textAlign: "left" }}>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <Box>
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
              {`${props.jobTitle}`}
            </Typography>
            <Typography>{`${props.company}`}</Typography>
            <Typography
              variant="body1"
              color={"textSecondary"}
            >{`${props.startDate} - ${props.endDate}`}</Typography>
          </Box>
        </Box>

        <List sx={{ listStyleType: "disc", pl: 3, py: 0 }}>
          {props.description.map((item) => (
            <ListItem sx={{ display: "list-item", pl: 0, py: 0 }}>
              {item}
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

export default ExperienceCard;

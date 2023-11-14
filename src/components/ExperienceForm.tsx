import { Box, Paper, Typography } from "@mui/material";

function ExperienceForm(props: {
  date: string;
  jobTitle: string;
  company: string;
  description: string;
  tags?: string[];
}) {
  return (
    <Box display={"flex"} my={4}>
      <Box minWidth={200}>
        <Typography variant="subtitle1">{props.date}</Typography>
      </Box>
      <Paper elevation={2} sx={{ p: 3, borderTop: 15, borderColor: "#3b73f3" }}>
        <Typography variant="h6" fontWeight={"bold"}>
          {props.jobTitle} · {props.company}
        </Typography>
        <Typography variant="body1">{props.description}</Typography>
      </Paper>
    </Box>
  );
}

export default ExperienceForm;

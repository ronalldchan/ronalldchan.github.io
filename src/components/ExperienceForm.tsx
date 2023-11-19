import { Box, Paper, Typography } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

function ExperienceForm(props: {
  jobTitle: string;
  company: string;
  companyLink: string;
  description: string;
  tags?: string[];
  color: string;
}) {
  return (
    <Box display={"flex"} my={4}>
      <Paper
        elevation={2}
        sx={{ p: 3, borderTop: 15, borderColor: props.color, maxWidth: 500, minWidth: 250, textAlign: "left" }}
      >
        <a href={props.companyLink} target="_blank" style={{ color: "inherit" }}>
          <Typography variant="h6" fontWeight={"bold"} display={"inline-flex"} alignItems={"center"}>
            {`${props.jobTitle} · ${props.company}`} <LaunchIcon fontSize="inherit" sx={{ ml: 0.5 }} />
          </Typography>
        </a>
        <Typography variant="body1">{props.description}</Typography>
      </Paper>
    </Box>
  );
}

export default ExperienceForm;

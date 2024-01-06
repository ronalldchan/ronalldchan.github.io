import {
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineConnector,
  TimelineDot,
  TimelineContent,
} from "@mui/lab";
import { Typography } from "@mui/material";
import { ReactElement } from "react";

export default function ExperienceTimelineItem(props: { date: string; children: ReactElement }) {
  return (
    <TimelineItem>
      <TimelineOppositeContent sx={{ m: "auto 0" }}>
        <Typography variant="h6">{props.date}</Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent my={2}>{props.children}</TimelineContent>
    </TimelineItem>
  );
}

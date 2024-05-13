import { Email, EmailRounded } from "@mui/icons-material";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";

function Contact() {
  const iconSize: number = 50;
  const iconAvatar: number = iconSize * 1.5;
  const iconColor: string = "primary.main";

  return (
    <Container id="contact">
      <Box component="section" py={6}>
        <Typography variant="h4" fontWeight={"bold"}>
          Contact
        </Typography>
        <Grid container justifyContent={"space-evenly"} py={3} spacing={3}>
          <Grid item>
            <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
              <Avatar sx={{ width: iconAvatar, height: iconAvatar, bgcolor: iconColor, mb: 1 }}>
                <EmailRounded sx={{ fontSize: iconSize }} />
              </Avatar>
              <Typography>Email</Typography>
              <Typography>career@ronaldchan.ca</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Contact;

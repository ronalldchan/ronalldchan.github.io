import { Button } from "@mui/material";

function NavBarButton(props: { name: string; href: string }) {
  return (
    <Button variant="text" color="inherit" href={props.href} disableRipple sx={{ py: 2, px: 2, mx: 2 }}>
      {props.name}
    </Button>
  );
}

export default NavBarButton;

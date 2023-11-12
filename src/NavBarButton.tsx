import { Button } from "@mui/material";

function NavBarButton(props: { name: string; href: string }) {
  return (
    <Button variant="text" color="inherit" href={props.href} disableRipple>
      {props.name}
    </Button>
  );
}

export default NavBarButton;

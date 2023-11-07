import { Button } from "@mui/material";

function NavBarButton(props: { name: string; href: string }) {
  return (
    <Button color="inherit" disableRipple href={props.href} sx={{ p: 2 }}>
      {props.name}
    </Button>
  );
}

export default NavBarButton;

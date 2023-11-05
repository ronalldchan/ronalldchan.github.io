import { Button } from "@mui/material";

function NavBarButton(props: { name: string }) {
  return (
    <Button color="inherit" disableRipple>
      {props.name}
    </Button>
  );
}

export default NavBarButton;

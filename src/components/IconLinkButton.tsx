import { IconButton } from "@mui/material";
import React from "react";

function IconLinkButton(props: { href: string; children: React.ReactElement }) {
  return (
    <IconButton href={props.href} disableRipple target="_blank" sx={{ padding: 0, mr: 2 }}>
      {props.children}
    </IconButton>
  );
}

export default IconLinkButton;

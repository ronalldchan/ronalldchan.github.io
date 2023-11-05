import { createTheme } from "@mui/material";
import { ThemeOptions } from "@mui/material/styles";

const themeOptions: ThemeOptions = {
  // palette: {
  //   mode: "light",
  //   primary: {
  //     main: "#388e3c",
  //   },
  //   secondary: {
  //     main: "#f50057",
  //   },
  // },
  palette: {
    mode: "light",
    primary: {
      main: "#0277bd",
    },
    secondary: {
      main: "#f50057",
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;

import { ThemeProvider } from "@emotion/react";
import Content from "./components/Content";
import NavBar from "./components/NavBar";

import { createTheme } from "@mui/material/styles";

export const themeOptions = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2e7d32",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={themeOptions}>
      <NavBar />
      <Content />
    </ThemeProvider>
  );
}

export default App;

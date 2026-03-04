// PAGE IMPORTS
import Home from "./page/Home";

// import Background from "./Background";
import { createTheme, ThemeProvider } from "@mui/material";
const theme = createTheme({
  typography: {
    fontFamily: '"M PLUS Code Lati", monospace',
  },
});
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <Background /> */}

        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;

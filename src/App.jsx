// src/App.jsx

import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>hello</h1>
    </ThemeProvider>
  );
}

export default App;

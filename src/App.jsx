import { ThemeProvider } from "styled-components";
import theme from "./theme/Theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}></ThemeProvider>;
    </>
  );
}

export default App;

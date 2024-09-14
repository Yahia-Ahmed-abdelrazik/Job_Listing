// src/theme.js
import { createTheme } from "@mui/material/styles";

const primary = "#18E1D9";
const secondary = "#0B0B15";

const createTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
  },
  typography: {
    fontFamily: "Poppins , sans-serif",
  },
  overrides: {
    MuiDialogActions: {
      root: {
        Padding: "8px 24px 16px 24px",
      },
    },
    MuiButton: {
      root: {
        fontWeight: 600,
        textTransform: "none",
        color: secondary,
        padding: "6px 24px",
      },
      Outlined: {
        borderRadius: "35px",
        borderColor: secondary,
        padding: "6px 20px",
      },
    },
    MuiSelect: {
      filled: {
        padding: "15px 0 15px 15px",
      },
    },
    MuiFilledInput: {
      input: {
        height: "49px",
        padding: "0px 0 0 10px",
      },
    },
  },
});

export default createTheme;

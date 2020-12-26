import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#000000",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});
theme = responsiveFontSizes(theme);

export default theme;

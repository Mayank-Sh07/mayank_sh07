import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
  typography: {
    button: {
      textTransform: "none",
      fontWeight: 400,
    },
    fontFamily: ["Jost", "sans-serif"].join(","),
  },
});
theme = responsiveFontSizes(theme);

export default theme;

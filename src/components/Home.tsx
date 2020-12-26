import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeProvider";
import {
  makeStyles,
  Theme,
  createStyles,
  fade,
} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import LightThemeIcon from "@material-ui/icons/WbSunnyRounded";
import DarkThemeIcon from "@material-ui/icons/NightsStayRounded";
import BlogIcon from "@material-ui/icons/CollectionsBookmarkRounded";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      paddingTop: theme.spacing(8),
    },
    themeBtn: {
      borderRadius: "4px",
      backgroundColor: fade(theme.palette.secondary.light, 0.1),
      "&:hover": {
        backgroundColor: fade(theme.palette.secondary.light, 0.125),
      },
    },
    linkBtn: {
      borderRadius: "4px",
      fontSize: "1.250em",
      fontWeight: 200,
      "&:hover": {
        backgroundColor: fade(theme.palette.secondary.light, 0.125),
        fontWeight: 400,
      },
    },
  })
);

export default function Home(): JSX.Element {
  const { currentTheme, setTheme } = useContext(ThemeContext);
  const isDark = Boolean(currentTheme === "dark");
  const classes = useStyles();
  return (
    <Container maxWidth={"md"} className={classes.container}>
      <AppBar position='relative' color='transparent' elevation={0}>
        <Toolbar>
          <IconButton
            color='secondary'
            classes={{ root: classes.themeBtn }}
            onClick={() => {
              isDark ? setTheme("light") : setTheme("dark");
            }}
          >
            {isDark ? <LightThemeIcon /> : <DarkThemeIcon />}
          </IconButton>
          <div style={{ flexGrow: 1 }} />
          <Button
            color='secondary'
            classes={{ root: classes.linkBtn }}
            startIcon={<BlogIcon />}
          >
            Blog
          </Button>
        </Toolbar>
      </AppBar>
    </Container>
  );
}

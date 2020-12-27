import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeProvider";
import {
  makeStyles,
  Theme,
  createStyles,
  fade,
} from "@material-ui/core/styles";
import clsx from "clsx";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import Grow from "@material-ui/core/Grow";
import Slide from "@material-ui/core/Slide";
import LightThemeIcon from "@material-ui/icons/WbSunnyRounded";
import DarkThemeIcon from "@material-ui/icons/Brightness2Rounded";
import BlogIcon from "@material-ui/icons/CollectionsBookmarkRounded";
import AvailableIcon from "@material-ui/icons/Check";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    noPointer: {
      pointerEvents: "none",
    },
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
    navItem: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      pointerEvents: "initial",
    },
    linkBtn: {
      borderRadius: "4px",
      fontSize: "1.250em",
      fontWeight: 300,
      "&:hover": {
        backgroundColor: fade(theme.palette.secondary.light, 0.125),
        textDecoration: "underline",
      },
    },
    chip: {
      backgroundColor: fade(theme.palette.secondary.light, 0.02),
    },
    chipAvatar: {
      backgroundColor: fade(theme.palette.success.main, 0.4),
    },
    chipIcon: {
      color: theme.palette.secondary.light,
      fontSize: "13px",
    },
    content: {
      padding: "50px 100px",
    },
    overParticles: {
      position: "relative",
      zIndex: 300,
    },
    introTitle: {
      fontWeight: 600,
      lineHeight: 1,
    },
    introDescription: {
      fontWeight: 400,
      lineHeight: 1.4,
      color: theme.palette.primary.contrastText,
    },
  })
);

export default function Home(): JSX.Element {
  const { currentTheme, setTheme } = useContext(ThemeContext);
  const isDark = Boolean(currentTheme === "dark");
  const classes = useStyles();
  return (
    <Container
      maxWidth={"md"}
      className={clsx(classes.container, classes.noPointer)}
    >
      <AppBar
        position='relative'
        color='transparent'
        elevation={0}
        className={classes.noPointer}
      >
        <Toolbar className={classes.noPointer}>
          <Slide in={true} timeout={1000} direction='down'>
            <IconButton
              color='secondary'
              className={classes.navItem}
              classes={{ root: classes.themeBtn }}
              onClick={() => {
                isDark ? setTheme("light") : setTheme("dark");
              }}
            >
              {isDark ? (
                <LightThemeIcon />
              ) : (
                <DarkThemeIcon style={{ transform: `rotateZ(145deg)` }} />
              )}
            </IconButton>
          </Slide>
          <div style={{ flexGrow: 1 }} className={classes.noPointer} />
          <Slide in={true} direction={"down"} timeout={1000}>
            <Button
              color='secondary'
              size='small'
              className={classes.navItem}
              classes={{ root: classes.linkBtn }}
              startIcon={<BlogIcon />}
            >
              Blog
            </Button>
          </Slide>
          <Slide in={true} direction={"down"} timeout={1000}>
            <Chip
              variant='outlined'
              size='small'
              className={clsx(classes.navItem, classes.chip)}
              avatar={
                <Avatar className={classes.chipAvatar}>
                  <AvailableIcon className={classes.chipIcon} />
                </Avatar>
              }
              label='available'
            />
          </Slide>
        </Toolbar>
      </AppBar>
      <Container
        className={clsx(classes.content, classes.noPointer)}
        maxWidth={"md"}
      >
        <Slide in={true} direction={"down"} timeout={1500}>
          <Typography
            variant='h3'
            className={clsx(
              classes.overParticles,
              classes.noPointer,
              classes.introTitle
            )}
            gutterBottom
          >
            Hey, I&apos;m Mayank Sharma
          </Typography>
        </Slide>
        <Grow in={true} timeout={3000}>
          <Typography
            variant='body1'
            className={clsx(
              classes.overParticles,
              classes.noPointer,
              classes.introDescription
            )}
          >
            I&apos;m a web developer, social entrepreneur and currently a
            college undergrad. I study Computer Science and Engineering at VIT
            and I have a deep love for tech, innovation and design.
          </Typography>
        </Grow>
      </Container>
    </Container>
  );
}

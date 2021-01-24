import Link from "next/link";
import { useContext } from "react";
import { ThemeContext } from "@/theme/ThemeProvider";
import {
  makeStyles,
  Theme,
  createStyles,
  fade,
} from "@material-ui/core/styles";
import clsx from "clsx";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import DarkThemeIcon from "@material-ui/icons/Brightness2Rounded";
import LightThemeIcon from "@material-ui/icons/WbSunnyRounded";
import BlogIcon from "@material-ui/icons/BookRounded";
import AboutIcon from "@material-ui/icons/PublicRounded";
import WorkIcon from "@material-ui/icons/DeveloperBoardSharp";
import AvailableIcon from "@material-ui/icons/Check";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles(({ breakpoints, spacing, palette }: Theme) =>
  createStyles({
    noPointer: {
      pointerEvents: "none",
    },
    container: {
      paddingTop: spacing(8),
      [breakpoints.only("xs")]: {
        paddingTop: spacing(4),
      },
    },
    navBar: {
      [breakpoints.only("sm")]: {
        padding: spacing(0, 4),
      },
      [breakpoints.only("xs")]: {
        paddingLeft: spacing(3),
        paddingRight: spacing(2),
      },
    },
    themeBtn: {
      borderRadius: "4px",
      backgroundColor: fade(palette.secondary.light, 0.1),
      "&:hover": {
        backgroundColor: fade(palette.secondary.light, 0.125),
      },
      [breakpoints.only("xs")]: {
        transform: `translateY(-8px)`,
      },
    },
    navItem: {
      margin: spacing(0, 1),
      pointerEvents: "initial",
      [breakpoints.only("xs")]: {
        margin: "0px 2px",
      },
    },
    linkBtn: {
      borderRadius: "4px",
      fontSize: "1.250em",
      fontWeight: 400,
      "&:hover": {
        backgroundColor: fade(palette.secondary.light, 0.125),
        textDecoration: "underline",
      },
      [breakpoints.only("xs")]: {
        fontSize: "1rem",
      },
    },
    linkBtnIcon: {
      marginRight: "2px",
    },
    chip: {
      backgroundColor: fade(palette.secondary.light, 0.02),
      [breakpoints.only("xs")]: {
        position: "fixed",
        top: 15,
        right: 12,
        zIndex: 1200,
      },
    },
    chipAvatar: {
      backgroundColor: fade(palette.success.main, 0.4),
    },
    chipIcon: {
      color: palette.secondary.light,
      fontSize: "13px",
    },
    content: {
      padding: "48px 152px 0px 96px",
      [breakpoints.only("sm")]: {
        padding: "48px 96px 0px 104px",
      },
      [breakpoints.only("xs")]: {
        padding: "24px 32px 0px 32px",
      },
    },
    overParticles: {
      position: "relative",
      zIndex: 300,
    },
    introTitle: {
      fontWeight: 600,
      lineHeight: 1,
      [breakpoints.only("xs")]: {
        fontWeight: 500,
        fontSize: "1.68rem",
      },
    },
    introDescription: {
      fontWeight: 400,
      lineHeight: 1.4,
      color: palette.primary.contrastText,
      [breakpoints.only("sm")]: {
        fontWeight: 500,
        lineHeight: 1.275,
        fontSize: "0.825rem",
      },
      [breakpoints.only("xs")]: {
        fontWeight: 300,
        lineHeight: 1.15,
        fontSize: "0.7rem",
      },
    },
    iconContainer: {
      [breakpoints.up("md")]: {
        position: "fixed",
        top: 0,
        right: 0,
        zIndex: 1200,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flex: "1 0 auto",
        overflow: "hidden",
        height: "100%",
        backgroundColor: "transparent",
        paddingRight: 30,
      },
      [breakpoints.down("sm")]: {
        display: "none",
      },
    },
    socialIcon: {
      margin: "25px 0px",
      fontSize: "35px",
      pointerEvents: "initial",
      "&:hover": {
        backgroundColor: fade(palette.secondary.light, 0.225),
        padding: "1px",
        borderRadius: "4px",
      },
    },
  })
);

export default function LandingPage(): JSX.Element {
  const { currentTheme, setTheme } = useContext(ThemeContext);
  const isDark = Boolean(currentTheme === "dark");
  const classes = useStyles();
  const appBarProps = {
    position: "relative",
    color: "transparent",
    elevation: 0,
  };

  const ThemeButton = (): JSX.Element => (
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
  );

  const LinkButton = ({ icon, label, path }): JSX.Element => (
    <Link href={path}>
      <Button
        color='secondary'
        size='small'
        className={classes.navItem}
        classes={{ root: classes.linkBtn, startIcon: classes.linkBtnIcon }}
        startIcon={icon}
      >
        {label}
      </Button>
    </Link>
  );

  return (
    <>
      <Container
        maxWidth={"md"}
        className={clsx(classes.container, classes.noPointer)}
        disableGutters
      >
        <Grid container>
          <Grid item xs={12}>
            <AppBar {...appBarProps} className={classes.noPointer}>
              <Toolbar className={clsx(classes.noPointer, classes.navBar)}>
                <ThemeButton />
                <div style={{ flexGrow: 1 }} className={classes.noPointer} />
                <LinkButton
                  path='/About'
                  icon={<AboutIcon style={{ transform: `rotateZ(180deg)` }} />}
                  label='About'
                />
                <LinkButton path='/Work' icon={<WorkIcon />} label='Work' />
                <LinkButton path='/Blog' icon={<BlogIcon />} label='Blog' />
                <Chip
                  variant='outlined'
                  size='small'
                  className={clsx(classes.navItem, classes.chip)}
                  classes={{ labelSmall: classes.noPointer }}
                  avatar={
                    <Avatar className={classes.chipAvatar}>
                      <AvailableIcon className={classes.chipIcon} />
                    </Avatar>
                  }
                  label='available'
                />
              </Toolbar>
            </AppBar>
          </Grid>
          <Grid
            item
            xs={12}
            className={clsx(classes.content, classes.noPointer)}
          >
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
          </Grid>
        </Grid>
      </Container>
      <div className={classes.iconContainer}>
        <InstagramIcon className={classes.socialIcon} />
        <GitHubIcon className={classes.socialIcon} />
        <LinkedInIcon className={classes.socialIcon} />
      </div>
    </>
  );
}

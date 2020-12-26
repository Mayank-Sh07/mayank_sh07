import Particles from "react-tsparticles";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Home from "../src/components/Home";

const useStyles = makeStyles({
  particleContainer: {
    height: "100vh",
    position: "absolute",
    top: 0,
    zIndex: -1,
  },
});

export default function LandingPage(): JSX.Element {
  const theme = useTheme();
  const classes = useStyles();
  if (process.browser) {
    require("pathseg");
  }
  return (
    <>
      <Container
        disableGutters
        maxWidth={false}
        className={classes.particleContainer}
      >
        <Particles
          style={{ height: "inherit" }}
          options={{
            background: {
              color: {
                value: theme.palette.primary.main,
              },
            },
            fpsLimit: 60,
            interactivity: {
              detectsOn: "canvas",
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "grab",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 2,
                },
                grab: {
                  distance: 120,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: theme.palette.secondary.main,
              },
              links: {
                color: theme.palette.secondary.light,
                distance: 120,
                enable: true,
                opacity: 0.5,
                width: 1,
                frequency: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "out",
                random: false,
                speed: 3,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                  factor: 1000,
                },
                value: 120,
                limit: 180,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "triangle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
      </Container>
      <Home />
    </>
  );
}

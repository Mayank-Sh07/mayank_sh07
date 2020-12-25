import Particles from "react-tsparticles";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  landingFrame: {
    backgroundColor: theme.palette.primary.dark,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "-20px",
  },
}));

export default function LandingPage(): JSX.Element {
  const classes = useStyles();
  if (process.browser) {
    require("pathseg");
  }
  return (
    <>
      <Particles
        height='100vh'
        options={{
          background: {
            color: {
              value: "#282c34",
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
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
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
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 80,
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
              value: 200,
              limit: 220,
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
      <Container className={classes.landingFrame}>Hello</Container>
    </>
  );
}

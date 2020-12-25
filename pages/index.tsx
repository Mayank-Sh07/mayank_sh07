import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

export default function Index(): JSX.Element {
  return (
    <Container maxWidth='sm'>
      <Typography variant='h4' component='h1' gutterBottom>
        Next.js with TypeScript example
      </Typography>
      <Button variant='contained' color='primary'>
        Next
      </Button>
    </Container>
  );
}

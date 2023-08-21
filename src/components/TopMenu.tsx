import { Container, Button } from "@mui/joy";


export const TopMenu = () => {
  return (
      <Container
        sx={{
          height: "60px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button color='primary'>Add a dream</Button>
        <Button>My dreams</Button>
        <Button>My garden</Button>
      </Container>
  );
};

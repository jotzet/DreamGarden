import { Container, Typography } from "@mui/joy";


export const MainScreen = () => {
  return (
      <Container
        sx={{
            height: "30vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}
      >
        <Typography>Hello dreamers!</Typography>
      </Container>
  );
};

import { Container } from "@mui/joy";
import { ModeToggle } from "./ModeToggle";

export const Footer = () => {
  return (
    <Container
      sx={{
        height: "60px",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <ModeToggle />
    </Container>
  );
};

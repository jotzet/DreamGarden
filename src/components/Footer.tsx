import { Container } from "@mui/joy";
import { ModeToggle } from "./ModeToggle";
import Divider from "@mui/joy/Divider";

export const Footer = () => {
  return (
    <Container
    sx={{
      position: "fixed",
      bottom: 5,
      left: 0,
    }}>
    <Divider />
    <Container
      sx={{
        display: "flex",
        justifyContent: "right",
      }}
    >
      <ModeToggle />
    </Container>
    </Container>
  );
};

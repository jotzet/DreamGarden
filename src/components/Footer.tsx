import { Container } from "@mui/joy";
import { ModeToggle } from "./ModeToggle";
import Divider from "@mui/joy/Divider";

export const Footer = () => {
  return (
    <Container>
    <Divider />
    <Container
      sx={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <ModeToggle />
    </Container>
    </Container>
  );
};

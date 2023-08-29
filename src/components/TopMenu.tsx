import { Container, Button } from "@mui/joy";
import Divider from "@mui/joy/Divider";
import { Link } from "react-router-dom";

export const TopMenu = () => {
  return (
    <Container  sx={{ marginBottom: "50px"}}>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "4px 0 4px 0",
        }}
      >
        <Button>Add a dream</Button>
        <Link to="/mydreams">
          <Button>My dreams</Button>
        </Link>
        <Link to="/mygarden">
          <Button>My garden</Button>
        </Link>
      </Container>
      <Divider />
    </Container>
  );
};

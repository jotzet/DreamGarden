import { TopMenu } from "./components/TopMenu";
import { Footer } from "./components/Footer";
import { MainScreen } from "./components/MainScreen";
import { Box, Container } from "@mui/joy";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyGarden from "./pages/MyGarden";

export const Main = () => {
  return (
    <Box>
      <Router>
        <TopMenu />
        <Container
        >
          <Routes>
            <Route path="/mygarden" element={<MyGarden />} />
            <Route path="*" element={<MainScreen />}/>
          </Routes>
        </Container>

        
        <Footer />
      </Router>
    </Box>
  );
};

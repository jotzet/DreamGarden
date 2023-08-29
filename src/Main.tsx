import { TopMenu } from "./components/TopMenu";
import { Footer } from "./components/Footer";
import { MainScreen } from "./components/MainScreen";
import { Box, Container } from "@mui/joy";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyGarden from "./pages/MyGarden";
import MyDreams from "./pages/MyDreams";

export const Main = () => {
  return (
    <Router>
      <TopMenu />
      <Container>
        <Routes>
          <Route path="/mygarden" element={<MyGarden />} />
          <Route path="/mydreams" element={<MyDreams />} />
          <Route path="*" element={<MainScreen />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
};

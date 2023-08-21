import { TopMenu } from "./components/TopMenu";
import { Footer } from "./components/Footer";
import Divider from "@mui/joy/Divider";
import { MainScreen } from "./components/MainScreen";

export const Main = () => {
  return (
    <div>
      <TopMenu />
      <Divider />
      <MainScreen/>
      <Divider />
      <Footer />
    </div>
  );
};

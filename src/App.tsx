import React from "react";
import { CssVarsProvider} from "@mui/joy";
import { Main } from "./Main";
import theme from "./theme/theme";
import CssBaseline from '@mui/joy/CssBaseline';

const App = () => (

    <CssVarsProvider theme={theme}>
      <CssBaseline/>
    <Main />
    </CssVarsProvider>
  
);

export default App;

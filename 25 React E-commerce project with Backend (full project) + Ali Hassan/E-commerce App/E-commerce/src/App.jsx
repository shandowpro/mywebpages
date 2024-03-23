// This is the [App.jsx] file of assembling file :

// 1] importing the defined components :
import Header1 from "./components/header/Header1";
import Header2 from "./components/header/Header2";
import Header3 from "./components/header/Header3";
import Hero from "./components/hero/Hero";


// 2] importing the [MUI] darkmode components and classes :

import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Outlet } from "react-router-dom";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}
    >
      <ThemeProvider
        // @ts-ignore
        theme={theme}
      >
        <CssBaseline />

        <div>
          <Outlet />

          <Header1 />
          <Header2 />
          <Header3 />
          
          <Box bgcolor={theme.
          // @ts-ignore
          palette.bg.main}> 
            <Hero/>
          </Box>
      
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

// <Typography variant="h3">Header</Typography>

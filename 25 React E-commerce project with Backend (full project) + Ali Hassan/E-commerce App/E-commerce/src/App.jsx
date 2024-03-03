import Header1 from "./components/header/Header1";
import Header2 from "./components/header/Header2";
import Header3 from "./components/header/Header3";

import Typography from "@mui/material/Typography";
import { CssBaseline, ThemeProvider } from "@mui/material";
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
          <Typography variant="h3">Header</Typography>
          <Outlet />

          <h1> Hello from the main app </h1>

          <Header1 />
          <Header2 />
          <Header3 />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

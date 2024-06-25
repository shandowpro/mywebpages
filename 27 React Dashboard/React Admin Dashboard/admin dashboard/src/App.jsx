// This is the App assembling component :

// A] Importings  :
import * as React from "react";
import {
  ThemeProvider,
  createTheme,
  styled,
  useTheme,
} from "@mui/material/styles";
import Box from "@mui/material/Box";

import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";

// import MenuIcon from '@mui/icons-material/Menu';

// importing  the main components :
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import { getDesignTokens } from "./theme";
import { Outlet } from "react-router-dom";
// import { getDesignTokens } from "./theme";

// ---------------------------------------------------------

// B]  Public  variable of callback function :
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
// ----------------------------------------------------------

//  C]  Main functional component  :
export default function MiniDrawer() {
  // C/1] Define some Hooks  :
  const [open, setOpen] = React.useState(false);

  // will be passed into the [TopBar] component , as one of it's attributes  :
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  // will be passed into the [SideBar] component , as one of it's attributes  :
  const handleDrawerClose = () => {
    setOpen(false);
  };

  /* C/2] Main return of the functional component [MiniDrawer()] , and it will  include the following  : 
    = Main Box container element [Box] , that will include all the following elements :     
      1- First header part [TopBar] element -> the top part of the header       
      2- Second header part [SideBar] element -> the side  part of the header        
      3- Third header part [Box] element -> the  contents of dashboard , and it will include main (2)  parts :
        a- DrawerHeader   
        b- Typography  
  */

  /*/ Setting the localStorage of the browser with the current value of the current value of 'currentMode' key in case of there is an existed value localStorage ,
    and set a value  'light' in case there is no existed value , as the value of [setMode]  Hook  :   
  */
  const [mode, setMode] = React.useState(
    Boolean(localStorage.getItem("currentMode"))
      ? localStorage.getItem("currentMode")
      : "light"
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <TopBar
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          setMode={setMode}
        />

        <SideBar open={open} handleDrawerClose={handleDrawerClose} />

        
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
           <Outlet />   
        </Box>

      </Box>
    </ThemeProvider>
  );
}

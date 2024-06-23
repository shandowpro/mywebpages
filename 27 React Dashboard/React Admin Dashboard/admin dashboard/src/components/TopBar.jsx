// This is the first part of header {TopBar} :

// A] Importings :
import React from "react";
import { Box, IconButton, Stack, Toolbar, Typography, styled, useTheme } from "@mui/material";
import MuiAppBar from '@mui/material/AppBar'; 
import MenuIcon from "@mui/icons-material/Menu";


import { alpha } from '@mui/material/styles' ;    
import SearchIcon  from '@mui/icons-material/Search' ;
import {InputBase}  from '@mui/material' ;
import { Delete } from "@mui/icons-material";
import Person2OutlinedIcon  from '@mui/icons-material/Person2Outlined' ;
import SettingsOutlinedIcon  from '@mui/icons-material/SettingsOutlined' ;
import NotificationsOutlinedIcon  from '@mui/icons-material/NotificationsOutlined' ;
import LightModeOutlinedIcon  from '@mui/icons-material/LightModeOutlined' ;
import DarkModeOutlinedIcon  from '@mui/icons-material/DarkModeOutlined' ;


// B] Define the public variables & functions   :
  
// B/1] Define the public variables & functions of [AppBar] of main desing of the TopBar : 
  const drawerWidth = 240;

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
    // @ts-ignore
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));



  // B/2] Define the public variables & functions of [Search] of [search input] field :
    const Search = styled('div')( ({theme}) => ({
      position : 'relative' , 
      borderRadius : theme.shape.borderRadius , 
      backgroundColor : alpha(theme.palette.common.white, 0.15 ) , 
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25 ),
      },
      marginRight: theme.spacing(2), 
      marginLeft: 0, 
      width : '100%',
      [theme.breakpoints.up('sm')] : {
        marginLeft: theme.spacing(3) , 
        width : 'auto' , 
      } ,
    })) ;


    const  SearchIconWrapper = styled('div')(( { theme } ) => ({
      padding : theme.spacing(0 , 2) ,
      height  : '100%' ,
      position  : 'absolute' ,
      pointerEvents  : 'none' ,
      display   : 'flex' ,
      alignItems   : 'center ' ,
      justifyContent  : 'center ' ,
    })) ;   

    // @ts-ignore
    const  StyledInputBase = styled(InputBase)(({ theme }) => ({
      color : 'inherit' ,
      '& .MuiInputBase-input' : {
        padding : theme.spacing(1 , 1 , 1 , 0) , 
        paddingLeft :  `calc(1em + ${theme.spacing(4)})` , 
        transition :  theme.transitions.create('width') ,
        width : '100%' ,
        [theme.breakpoints.up('md')] : {
          width : '20ch' , 
        } ,  
      } ,
    })) ;   

    

  // ----------------------------------------------------------
/* C] Main functional component , include the following imported elements from the  [MUI]  library  :
  1- AppBar => them main container of all other components . 
  2- Toolbar => the second child container of the following elements :  
    -  IconButton =>  include an imported element from the MUI -> [MenuIcon] (Burger Menu) -> this is an exracted icon          
    -  Typography =>  the title value of the topbar     
    -  Search   =>  the parnet container of the imported element of [Search] , and includes :
      -- SearchIconWrapper 
      -- StyledInputBase 
    - Box => as a flex grow for formating  
    - Stack => a parent  of all imported icons in {TopBar} component , and it includes the following icons :
      -- A conditional icon of  [dark/,light] mode icons  as the imported icon  {IconButton} from the MUI
      -- [IconButton] icon of  [NotificationsOutlinedIcon] the Notfication icons as the imported icon  {IconButton} from the MUI
      -- [IconButton] icon of  [SettingsOutlinedIcon] the Settings icon as the imported icon  {IconButton} from the MUI
      -- [IconButton] icon of  [Person2OutlinedIcon] the user icon as the imported icon  {IconButton} from the MUI
    
*/ 

const TopBar = ({ open, handleDrawerOpen , setMode }) => {
  
  // Define the hook required for the swithcing between the dark mode and light mode :    
  const theme = useTheme();

  return (
    <AppBar
      position="fixed"
      // @ts-ignore
      open={open}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>

        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>

          <StyledInputBase
            placeholder = "Search...."
            inputProps={{ 'aria-label' : 'search' }}
          />
        </Search>

        <Box flexGrow ={1} />    

        <Stack  direction= {"row"}  >
          
         {theme.palette.mode === 'light'  ?  (
            <IconButton onClick={() => {
              localStorage.setItem("currentMode" , theme.palette.mode === "light" ? "dark" : "light" ) 
              setMode((prevMode) =>
                  prevMode === 'light' ? 'dark' : 'light' ,
               );
            } } color = 'inherit' > 
              <LightModeOutlinedIcon /> 
            </IconButton>
          ) : (
            <IconButton onClick={() => {
              localStorage.setItem("currentMode" , theme.palette.mode === "light" ? "dark" : "light"  )
              setMode((prevMode) =>
                  prevMode === 'light' ? 'dark' : 'light' ,
               );
            } } color = 'inherit' > 
              <DarkModeOutlinedIcon /> 
            </IconButton>
          )}

          <IconButton  color = 'inherit' > 
            <NotificationsOutlinedIcon /> 
          </IconButton>
        
          <IconButton  color = 'inherit' > 
            <SettingsOutlinedIcon /> 
          </IconButton>
        
          <IconButton  color = 'inherit' > 
            <Person2OutlinedIcon /> 
          </IconButton>
        
      </Stack>

      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
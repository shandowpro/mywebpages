// this is the second header [Header2.jsx] of the main Header :

// A] Importing section :
  // import { useContext } from "react";
  // import { ColorModeContext } from "../../theme";
   
  // 1- General importings : 
  import React, { useState, useContext } from "react";

  // 2- Required importings for [MUI Components + Icons]  :
  import {
    ShoppingCartOutlined,
    ExpandMore,
    SpatialTracking,
  } from "@mui/icons-material";

  import {
    useTheme,
    Badge,
    Container,
    IconButton,
    InputBase,
    Stack,
  } from "@mui/material";

  import Typography from "@mui/material/Typography";

  import SearchIcon from "@mui/icons-material/Search";

  import { styled, alpha } from "@mui/material/styles";

  import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddOutlined";

  import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

  // Importings for the [SelectedMenuItem] icons library :
  import List from "@mui/material/List";
  import ListItem from "@mui/material/ListItem";
  import ListItemText from "@mui/material/ListItemText";
  import MenuItem from "@mui/material/MenuItem";
  import Menu from "@mui/material/Menu";
// ----------------------------------

// B] Before the functional component section  :
  // 1- Required functions and varialbes for [Search inner secton] :
    const Search = styled("div")(({ theme }) => ({
      flexGrow: 0.4,
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      border: "1px solid #777",
      "&:hover": {
         backgroundColor: alpha(theme.palette.common.white, 0.25) , 
         border: "1px solid #333",
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "277px",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "330px",
        paddingLeft: "10px",
      },
    }));

    const SearchIconWrapper = styled("div")(({ theme }) => ({
      padding: theme.spacing(0.2),
      height: "100%",
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#777",
      pointerEvents: "none",
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
      color: "inherit",
      "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
          width: "20ch",
          marginLeft: theme.spacing(3),
        },
      },
    }));

    const StyledBadge = styled(Badge)(({ theme }) => ({
      color: "inherit",
      "& .MuiBadge-badge": {
        right: -3,
        top: 13,
        padding: "0 4px",
        border: "2px solid ${theme.palette.background.paper}",
      },
    }));

  // 2- Required array variable for the [MemuList data]  :
    const options = ["All Categories", "CARS", "Colthes" , "Electronics"];

// C] Inside the [Functional Component] :
  const Header2 = () => {
    const theme = useTheme();

    // 1- Required defined states variables and functions for the [Menu List item] :
      const [anchorEl, setAnchorEl] = useState(null);
      
      // The storage varialble of the selected item from the array of option + the essential value determine the default selected item :  
      const [selectedIndex, setSelectedIndex] = useState(0);
      
      const open = Boolean(anchorEl);

      const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
      };

      const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
      };

      const handleClose = () => {
        setAnchorEl(null);
      };

    return (
      <div>
        <Container
          sx={{
            my: 3,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Stack alignItems={"center"}>
            <ShoppingCartOutlined />
            <Typography variant="body2">E-commerce</Typography>
          </Stack>

          <Search
            sx={{
              display: "flex",
              borderRadius: "22px",
              justifyContent: "space-between",
              justifyItems: "center", 
              minHeight: '50px' , 
              transition: 'all ease-in-out .4s'
            }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            
            <StyledInputBase
              placeholder="Search..."
              inputProps={{ "aria-label": "search" }}
            />

            <div>
              <List
                sx={{
                   bgcolor: "theme.palette.myColor.main" ,
                   py: .5 ,
                   my: 0 ,
                   height: '100%' ,
                   transition: 'all ease-in-out .5s' , 
                   "&:hover": { bgcolor : "#777"} , 
                  borderBottomRightRadius:22,
                  borderTopRightRadius:22 
                }}
                component="nav"
                aria-label="Device settings"
              >
                <ListItem 
                  id="lock-button"
                  aria-haspopup ="listbox"
                  aria-controls ="lock-menu"
                  aria-label = "when device is locked"
                  aria-expanded = {open ? "true" : undefined}
                  onClick = {handleClickListItem}
                  sx={{
                     "&:hover": { cursor: "pointer"  },
                      color :'theme.palette.myColor.main', 
                      maxHeight: "50px"
                    }}
                >
                  <ListItemText
                    secondary = {options[selectedIndex]}
                    sx={{
                      ".MuiTypography-root": { fontSize: "13px", color :'theme.palette.myColor.main' },
                      width: 93 , 
                      textAlign : 'center' , 
                      '&:hover' :  { cursor: 'pointer' } , 
                    }}
                  />
                  <ExpandMore sx={{ fontSize: "16px" }} />
                </ListItem>
              </List>
            </div>

            <Menu
              id="lock-menu"
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "lock-button",
                role: "listbox",
              }}
            >
              {options.map((option, index) => (
                <MenuItem
                  key={option}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                  sx={{ fontSize: "10px", p: "3px 10px", minHeight: "10px" }}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </Search>

          <Stack direction={"row"} alignItems={"center"} >
            <IconButton>
              <PersonAddAltOutlinedIcon />
            </IconButton>

            <IconButton aria-label="cart">
              <StyledBadge badgeContent={4} color="primary">
                <ShoppingCartOutlinedIcon />
              </StyledBadge>
            </IconButton>
          </Stack>
        </Container>
      </div>
    );
  };

export default Header2;

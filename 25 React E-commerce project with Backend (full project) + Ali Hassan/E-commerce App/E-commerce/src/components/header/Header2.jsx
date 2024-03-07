// this is the second header [Header2.jsx] of the main Header :

// Importing section :
// import { useContext } from "react";
// import { ColorModeContext } from "../../theme";

import React, { useState, useContext } from "react";

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

// Importing the  [SelectedMenuItem] icons library :
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

// Before the functional component section  :
// a- Search inner secton requirments :
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": { backgroundColor: alpha(theme.palette.common.white, 0.25) },
  border: "1px solid #777",
  flexGrow: 0.4,
  marginRight: theme.spacing(2),
  marginLeft: 0,
  minWidth: "300px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
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
    paddingLeft: "calc(1em + ${theme.spacing(4)})",
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

// Required array variable for the [MemuList data]  :
const options = ["All Categories", "CARS", "Colthes" , "Electronics"];

const Header2 = () => {
  const theme = useTheme();

  //  Requried defined states variables and functions for the [Menu List item] :
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
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
          }}
        >
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search..."
            inputProps={{ "aria-label": "search" }}
          />

          <List
            sx={{ bgcolor:'theme.palette.myColor.main' , p: 0, m: 0  , borderBottomRightRadius:22,  borderTopRightRadius:22 }}
            component="nav"
            aria-label="Device settings"
          >
            <ListItem
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
              sx={{ "&:hover": { cursor: "pointer" }, color :'theme.palette.myColor.main' }}
            >
              <ListItemText
                secondary={options[selectedIndex]}
                sx={{
                  ".MuiTypography-root": { fontSize: "10px", color :'theme.palette.myColor.main' },
                  width:'93px' , 
                  textAlign : 'center' , 
                  '&:hover' :  { cursor: 'pointer' } , 
                }}
              />
              <ExpandMore sx={{ fontSize: "16px" }} />
            </ListItem>
          </List>

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

        <Stack direction={"row"} alignItems={"center"}>
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

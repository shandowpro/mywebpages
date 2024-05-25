// This is the {header1.jsx} the first component of the main header :

import React from "react";
import { useState, useContext } from "react";

// Importing [dark/light] mode + other elements  from the [mui/material] :
import { ColorModeContext } from "../../theme";
import { Box, Container, IconButton, Stack, useTheme } from "@mui/material";
import { DarkModeOutlined, ExpandMore,  LightModeOutlined } from "@mui/icons-material";

// Importing the [Typography] icons from the [mui/material/Typography] class library :
import Typography from "@mui/material/Typography";

// Importing the  [SelectedMenuItem] icons library :
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

// Importing the [socialmedia] icons from the [mui/icons-material] library :
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";



// Required array variable for the [MemuList data]  :
const options = ["Ar", "En"];

const Header1 = () => {
  // Required variables for the dark/linght mode :   
  const colorMode = useContext(ColorModeContext);
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
      <Box
        sx={{
          bgcolor: "#2B3345",
          py: "4px",
          BorderRadiusBottomleft: 4,
          BorderRadiusBottomright: 4,
        }}
      >
        <Container>
          <Stack direction={"row"} alignItems={"center"} >
            <Typography
              sx={{
                mr: 2,
                p: "3px 10px",
                bgcolor: "#D23F57",
                borderRadius: "12px",
                fontSize: "13px",
                fontWeight: "bold",
                color: "#FFF",
              }}
              variant="body2"
            >
              HOT
            </Typography>

            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "300",
                color: "#FFF",
              }}
              variant="body2"
            >
              Free Express Shipping
            </Typography>

            <Box flexGrow={1}></Box>

            <div>
              {theme.palette.mode === "light" ? (
                <IconButton
                  onClick={() => {
                    localStorage.setItem(
                      "mode",
                      theme.palette.mode === "dark" ? "light" : "dark"
                    );
                    colorMode.toggleColorMode();
                  }}
                  color="inherit"
                >
                  <LightModeOutlined sx={{ color: "#fff", fontSize: "16px" }} />
                </IconButton>
              ) : (
                <IconButton
                  onClick={() => {
                    localStorage.setItem(
                      "mode",
                      theme.palette.mode === "dark" ? "light" : "dark"
                    );
                    colorMode.toggleColorMode();
                  }}
                  color="inherit"
                >
                  <DarkModeOutlined sx={{ color: "#fff", fontSize: "16px" }} />
                </IconButton>
              )}
            </div>

            <List
              sx={{ p: 0, m: 0 }}
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
                sx={{ "&:hover": { cursor: "pointer" } , color:"#fff" }}
              >
                <ListItemText
                  secondary={options[selectedIndex]}
                  sx={{
                    ".MuiTypography-root": { fontSize: "10px", color: "#fff" },
                  }}
                />
                <ExpandMore sx={{ fontSize: "10px", color: "#fff" }} />
 
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
                  sx={{ fontSize: "11px", p: "3px 10px", minHeight: "10px" }}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>

            <FacebookIcon sx={{ fontSize: "16px", color: "#FFF" , margin:"3px" }} />
            <TwitterIcon sx={{ fontSize: "16px", color: "#FFF" , margin:"3px" }} />
            <InstagramIcon sx={{ fontSize: "16px", color: "#FFF" , margin:"3px" }} />

          </Stack>
        </Container>
      </Box>
    </div>
  );
};

export default Header1;

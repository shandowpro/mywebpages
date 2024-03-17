// This is the {header3.jsx} the third component of the main header  :

// A] Import section    :
// a- importing basic libraries :
import { useState } from "react";

// b- importing MUI libraries [component and icons]  :
// 1- Main [Menu] (Toggling Burger Menu)  :
import {
  Box,
  Container,
  Drawer,
  IconButton,
  ListItemIcon,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// 2-  Icons before and after Categories [Menu] + [Toggle Burger Menu] :
import MenuIcon from "@mui/icons-material/Menu" ;
import WindowIcon from "@mui/icons-material/Window";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

// 3-  Icons before each item of Categories [Menu] :
import {
  SportsEsportsOutlined,
  ElectricBikeOutlined,
  LaptopChromebookOutlined,
  MenuBookOutlined,
  Close,
} from "@mui/icons-material";

// 4- Importing According element and it's  inner children  :
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// 5- importing [List] and its innner children + [MenuIcon - burger menu => customized displayed according to different scales  ( Breakpoints:[sx, sm , md , lg , xl] , useMediaQuerry Hook   )   ]     :
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
// import ExpandMore from "@mui/icons-material/ExpandMore";
import Links from "./Links";

const Header3 = () => {
  // B] Inside the component function  Before the return Section    :
  // 1] Required defined functions and variables for the controling the [Categories Menu] :
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // 2] Required theme state for [dark/light] mode color controling for the [categories menu]  :
  const theme = useTheme();

  // 3] Required defined functons and variables for the controling the [Drawer Menu] =>
  // a) with assining the all properties of position  by false    :
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  // b) Define the method of controling the [toggling] function   :
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  // C] Inside the component function and inside the return Section :

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mt:5
      }}
    >
      <Box>
        <Button
          // className="border"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            width: 222,
            // @ts-ignore
            bgcolor: theme.palette.myColor.main,
            color: theme.palette.text.secondary,
          }}
        >
          <WindowIcon />
          <Typography
            sx={{
              padding: "0",
              textTransform: "capitalize",
            }}
          >
            Categories
          </Typography>
          <Box flexGrow={1} />
          <KeyboardArrowRightOutlinedIcon />
        </Button>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            ".MuiPaper-root": {
              width: 220,
              // @ts-ignore
              bgcolor: theme.palette.myColor.main,
            },
          }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ElectricBikeOutlined fontSize="small" />
            </ListItemIcon>

            <ListItemText>Bikes</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <LaptopChromebookOutlined fontSize="small" />
            </ListItemIcon>

            <ListItemText>Electronics</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <MenuBookOutlined fontSize="small" />
            </ListItemIcon>

            <ListItemText>Books</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SportsEsportsOutlined fontSize="small" />
            </ListItemIcon>

            <ListItemText>Games</ListItemText>
          </MenuItem>
        </Menu>
      </Box>
 
      <Links/>
      <Links/>
      <Links/>
      <Links/>
       

      { useMediaQuery('(max-width:1000px)') && (
        <IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{
          ".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper": {
            height: "100%",
          },
        }}
      >
        <Box
          sx={{
            width: 444,
            mx: "auto",
            mt: 6,
            position: "relative",
            pt: 6,
          }}
        >
          <IconButton
            sx={{ position: "absolute", top: 0, right: 0 }}
            onClick={toggleDrawer("top", false)}
          >
            <Close />
          </IconButton>

          {[
            { mainLink: "Home",
             subLink: ["Link1", "Link2", "Link3"] 
            },
            { mainLink: "Mega Menu", 
             subLink: ["Link1", "Link2", "Link3"]
            },
            {
              mainLink: "Full screen menu",
              subLink: ["Link1", "Link2", "Link3"],
            },
            { mainLink: "Pages",
             subLink: ["Link1", "Link2", "Link3"] 
            },
            { mainLink: "User Account",
             subLink: ["Link1", "Link2", "Link3"] 
            },
            {
              mainLink: "Vendor Account",
              subLink: ["Link1", "Link2", "Link3"],
            },
          ].map((item) => {
            return (
              <Accordion
                key={item.mainLink}
                elevation={0}
                sx={{ bgcolor: "initial" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography> {item.mainLink} </Typography>
                </AccordionSummary>

                <List sx ={{ py: 0, my: 0 }}>
                  {item.subLink.map((link) => {
                    return (
                      <ListItem key={link} sx={{ py: 0, my: 0 }}   >
                        <ListItemButton>
                          <ListItemText primary={link} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Accordion>
            );
          })}
        </Box>
      </Drawer>
    </Container>
  );
};

export default Header3;

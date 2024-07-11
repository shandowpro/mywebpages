// The Second part of header {SideBar} :

// A] Importings :
import React from "react";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Avatar, Typography, styled, useTheme } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import {
  BarChartOutlined,
  CalendarTodayOutlined,
  ContactsOutlined,
  HelpOutlineOutlined,
  HomeOutlined,
  PeopleOutlined,
  PersonOutlined,
  PieChartOutlineOutlined,
  ReceiptLongOutlined,
  TimelineOutlined,
  MapOutlined,
  MenuOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";
// -----------------------------------------------------------------

// B] Define the public variables & functions  :
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(
  // @ts-ignore
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

// Define (3) arrays of Objects for each section of the [SideBar] to be called into each section maping :
const array1 = [
  {
    text: "Dahsboard",
    icon: <HomeOutlined />,
    path: "/",
  },
  {
    text: "Manage Team",
    icon: <PeopleOutlined />,
    path: "/team",
  },
  {
    text: "Contacts Information",
    icon: <ContactsOutlined />,
    path: "/contact",
  },
  {
    text: "Invoices Balances",
    icon: <ReceiptLongOutlined />,
    path: "/invoices",
  },
];

const array2 = [
  {
    text: "Profile Form",
    icon: <PersonOutlined />,
    path: "/form",
  },
  {
    text: "Calendar",
    icon: <CalendarTodayOutlined />,
    path: "/calendar",
  },
  {
    text: "FAQ Page",
    icon: <HelpOutlineOutlined />,
    path: "/faq",
  },
];

const array3 = [
  {
    text: "Bar Chart",
    icon: <BarChartOutlined />,
    path: "/bar",
  },
  {
    text: "Pie Chart",
    icon: <PieChartOutlineOutlined />,
    path: "/pie",
  },
  {
    text: "Line Chart",
    icon: <TimelineOutlined />,
    path: "/line",
  },
  {
    text: "Geography Chart",
    icon: <MapOutlined />,
    path: "/geography",
  },
];

/* C] Main functional component , include the following imported elements from the  mui library  :
  a-  Functional component Attributes => to be obainend it;s values from the {App.jsx} assembling element => [open, handleDrawerClose]    
  b-  Functional component Defined Hooks => [theme] extracted from the imported class (useTheme)  
  c-  Functional component return elements [copied from the MUI libraryimport { Typography } from '@mui/material';
] =>  
    -  [Drawer]  -> General  Contianer element , and it include the following elements :  
      1-  [DrawerHeader]  -> inlcude mainly the [IconButton] -> which is the  closing process button     
      2-  [Divider]  -> the first  seperator element 
      3-  [List]  ->  The first list menu element , which is including items of menu  
      4-  [Divider]  -> the second seperator element 
      5-  [List]  ->  The Second list menu element , which is including  items of menu 
      6-  [Divider]  -> the third  seperator element 
      7-  [List]  ->  The Third list menu element , which is including  items of menu 

*/

const SideBar = ({ open, handleDrawerClose }) => {
  // Define Hook  [used for in switching between button of closing and open the SideBar Menu  + Changing color of inner text inside the sidebar ]  :
  const theme = useTheme();

  // Define a Hook [used for set navigating - to the assinged router inside it's parameter [could be a dymaic value & inside a mapping] - routering to a certain event of a certain element ]  :
  const navigate = useNavigate();

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />

      <Avatar
        sx={{
          mx: "auto",
          width: open ? 88 : 44,
          height: open ? 88 : 44,
          my: 1,
          border: "2px solid grey",
          transition: "0.25s",
        }}
        alt="Shadi Sayed"
        src="me.jpg"
      />

      <Typography
        align="center"
        sx={{
          fontSize: open ? 17 : 0,
          transition: "0.25s",
        }}
      >
        Shadi Sayed
      </Typography>

      <Typography
        align="center"
        sx={{
          fontSize: open ? 15 : 0,
          transition: "0.25s",
          color: theme.palette.info.main,
        }}
      >
        Admin
      </Typography>

      <Divider />

      <List>
        {array1.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                bgcolor:
                  location.pathname === item.path
                    ? theme.palette.mode === "dark"
                      ? grey[800]
                      : grey[300]
                    : null,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {array2.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                bgcolor:
                  location.pathname === item.path
                    ? theme.palette.mode === "dark"
                      ? grey[800]
                      : grey[300]
                    : null,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />

      <List>
        {array3.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                bgcolor:
                  location.pathname === item.path
                    ? theme.palette.mode === "dark"
                      ? grey[800]
                      : grey[300]
                    : null,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
};

export default SideBar;

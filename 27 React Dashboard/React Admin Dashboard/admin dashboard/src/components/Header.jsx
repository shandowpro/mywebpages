//  Reusable component  of each inner page Haeder :

import React from "react";

import { Box , Typography , useTheme}    from "@mui/material";

 
export const Header = () => {
    const theme =  useTheme() ;
   return (
    <Box>
      <Typography
        variant="h5"
        sx={{
          color: theme.palette.info.light,
          fontWeight: "bold",
        }}
      >
        DASHBOARD
      </Typography>

      <Typography variant="body1">Welcome to your Dashboard</Typography>
    </Box>
  );
};

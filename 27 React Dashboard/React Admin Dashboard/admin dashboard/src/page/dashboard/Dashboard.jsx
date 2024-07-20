
// inner page of [Dashboard] as a assembling inner page    :

// Main segmentation of the inner page [3 rows ] as following :
// 0- Button  of Download     => This component using an external component [ Card ] with chlidren poperties  
// 1- Row1 => This component using an external component [ card ] with chlidren popereites  
// 2- Row2 =>
// 3- Row3 =>

import React from "react";

// importing the main inner sections of the dashborard :
import Row1 from "./Row1";
import Row2 from './Row2';
import Row3 from './Row3';
 

// importing mui elements :
import   Button   from "@mui/material/Button";
import    {Box}    from "@mui/material";
import { DownloadOutlined } from "@mui/icons-material";
 


const Dashboard = () => {
  return (
    <div>
      <Box sx={{ textAlign: 'right' }} >
        <Button sx={{  padding: '6px 8px' , textTransform: 'capitalize'  }}  variant="contained" color="primary">
          <DownloadOutlined />
          Download Report 
        </Button>
        
      </Box>

      <Row1 />
    

      <Row2 />
      <Row3 />
    </div>
  );
};

export default Dashboard;

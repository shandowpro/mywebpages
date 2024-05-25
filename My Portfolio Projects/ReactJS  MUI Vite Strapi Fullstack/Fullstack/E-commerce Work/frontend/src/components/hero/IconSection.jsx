// This is the inner section {IconSection} of the hero icons bottom of the hero slider
// This is the inner section including inside calling of another defined functional conponent {MyBox} that including a single Icon component (that using props passed throgh from the main inner section component {IconSection } )

// import React from "react";

import { Box, Container, Divider, Stack, Typography, useMediaQuery } from "@mui/material";

import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
import { useTheme } from "@mui/material";

// Define a unified functional component =>  to call each defined single component below with asssigning propps of each detail [as a dynamnic value] :  
const IconSection = () => {
  const theme = useTheme();
  
  return (
    <Container sx={ {mt:3 ,  bgcolor: theme.palette.mode === 'dark' ?  "#000" : "#FFF" }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        sx={{ flexWrap:"wrap" }}
        divider= { 
            useMediaQuery('(min-width:600px)') ?  <Divider orientation ="vertical"  flexItem /> : null 
        }
      >
        <MyBox
          icon={<ElectricBoltIcon />}
          title={'Fast Delivery'}
          subTitle={ 'Start from 10$'}
        />

        <MyBox
          icon={<WorkspacePremiumOutlinedIcon />}
          title={'Money Guarantee'}
          subTitle={"7 Days Back"}
        />
        
        <MyBox
          icon={<AccessAlarmOutlinedIcon />}
          title={'365 Days'}
          subTitle={'For Free return'}
        />

        <MyBox
          icon={<CreditScoreOutlinedIcon />}
          title={'Payment'}
          subTitle={'Secure system'}
        />
        
      </Stack>
    </Container>
  );
};
export default IconSection;
// -------------------------------------------

// Define a [Dynamic single inner component] of the {Iconic Box} to be called from the upper unfined component :

const MyBox = ({ icon, title, subTitle }) => {
  const theme = useTheme();

  return (
    <Box 
      sx={{
          width: 150 ,
          display:"flex" ,
          flexGrow:1 ,
          alignItems:"center " ,
          gap:3 ,
          py : 1.6 ,
          justifyContent: useMediaQuery("(min-width:600px)") ? "center" : "left" ,  
        }}
    >
      {icon}

      <Box>
        <Typography variant="body1"> {title} </Typography>

        <Typography
          sx={{
            fontWeight: 300,
            color: theme.palette.text.secondary,
          }}
          variant="body1"
        >
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
};

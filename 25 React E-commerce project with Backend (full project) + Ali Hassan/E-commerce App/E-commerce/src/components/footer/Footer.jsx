// This is the  {footer} main section :

import React from 'react'

import { Box , Typography } from '@mui/material';
 
 
const Footer = () => {
  return (
    <Box  
        sx={{
            bgcolor: "#2B3445"  , 
            py: 1.3  , 
            borderTopLeftRadius: 8  , 
            borderTopRightRadius: 8  ,    
        }}
    >
        <Typography
            justifyContent = {'center'}
            display = {'flex'}
            alignItems = {'center'}
            color = {'HighLightText'}
            variant = 'h6'
            sx = {{ fontSize:18 }}
        >
          Designed & developed by 
        
        </Typography>
    </Box>
  )
}


export default Footer ;
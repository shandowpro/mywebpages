
// @ts-nocheck
// [Product Details] inner [Modal : the popup screen  - by clickOn   (the Add to cart button) ] => will be exported  into the  main component [Main.jsx]   : 

// import React from 'react' ;

import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Typography, Stack, Button, ToggleButtonGroup, ToggleButton } from "@mui/material";
import { useState } from "react";


// Importing the libraries of toggling buttons of add to cart imnages [toggling imasges opacity] :  
// import ToggleButton from '@material-ui/lab/ToggleButton';
// import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';


// This component will hold a prop [clickedProduct : the defiend state of the product item ] come form the other component [Main]  : 
const ProductDetails = ({clickedProduct}) => {
  
 

  const [ selectedImg ,  setselectedImg  ] = useState(0) ;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box sx={{ display: "flex" }}>
        <img width={360} alt="" 
          src= {clickedProduct.attributes.productImg.data[selectedImg].attributes.url} 
        />
      </Box>

      <Box sx={{ py : 2 , textAlign: { xs: "center", sm: "left" } }}>
        <Typography varaint="h5"> {clickedProduct.attributes.productTitle}  </Typography>

        <Typography my={0.4} fontSize={"22px"} color={"crimson"} varaint="h5">
          ${clickedProduct.attributes.productPrice}
        </Typography>

        <Typography varaint="body1">
        {clickedProduct.attributes.productDescription}
        </Typography>

        <Stack
          sx={{ justifyContent: { xs: "center", sm: "left" } }}
          direction={"row"}
          gap={1}
          my={2}
        >
        <ToggleButtonGroup 
          value={selectedImg}
          exclusive
           sx = {{
            ".Mui-selected" : {
              border : '1px solid royalblue !important', 
              borderRadius : '5px !important', 
              opacity : '1', 
              backgroundColor : 'initial', 
            }, 
          }}
        >

          { clickedProduct.attributes.productImg.data.map((item , index) => {
            return (
                <ToggleButton   
                  key={item.id}  
                  value={index}
                  sx = {{  
                    width: '110px' ,
                    height: '110px' ,
                    mx: 1,
                    p: '0',
                    opacity: '0.5' 
                  }} 
                >
                  <img
                    onClick = { () => {
                      setselectedImg(index) ;
                    }}
                    
                    src={item.attributes.url}
                    style={{ borderRadius: 3 }}                 
                    width={"100%"}
                    height={"100%"}
                    alt=""
                  />
                 
              </ToggleButton>
              
            );
          })}
 
        </ToggleButtonGroup>

        </Stack>

        <Button
          sx={{
            mb: { xs: 2, sm: 0 },
            textTransform: "capitalize",
          }}
          variant="contained"
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy now
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;

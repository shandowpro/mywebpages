
// This is the {Main} component of the [product Cards secton] => will call real api data form the database  :
// The Main component of the [product Cards secton] => will incolude another inner compont of [ProductDetails.jsx] 

import React, { useState } from "react";

import {
  Box,
  Container,
  Stack,
  Typography,
  useTheme,
  Button,
  Rating,
  Dialog,
  IconButton,
} from "@mui/material";

import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import {Close} from "@mui/icons-material";


import ProductDetails from './ProductDetails' ;
import { useGetproductByNameQuery } from "../../Redux/product";

const Main = () => {
  const [alignment, setAlignment] = useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const theme = useTheme();

  // Controling the [Dialog] [open , close] functions  :
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // This state used to call the redux RTK toolkit query  , with (3) parameters cases [data: which is the returned data from the assinged full api] & [error: the error message will be displayed in case of none existed data] & [isLoading: case of loading data] :
    // the inner par inside the hook is value of api url after the baseUrl :   
  const { data, error, isLoading } = useGetproductByNameQuery('products?populate=*')

  // Printing testing [console log] of the obtained data [data.data] according to the assinged prop sub url  :  
// console.log(data.data) ; 


// coniditional return of funcational component [incase of therr is a data retunred  from the  Strapi server] :
if(data) {
  return (
    <Container sx={{ mt: 9, py: 3 }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        gap={3}
      >
        <Box>
          <Typography variant="h6"> Selected Products </Typography>

          <Typography variant="body1" fontWeight={300}>
            All our new arrivals in a exclusive brand selection
          </Typography>
        </Box>

        <ToggleButtonGroup
          color="error"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          sx={{
            ".Mui-selected": {
              border: "1px solid rgba(233, 69 , 96 , 0.5) !important ",
              color: "#e94560",
              backgroundColor: "initial",
            },
          }}
        >
          <ToggleButton
            sx={{ color: theme.palette.text.primary }}
            className="myButton"
            value="left"
            aria-label="left aligned"
          >
            All Products
          </ToggleButton>

          <ToggleButton
            sx={{ mx: "16px !important", color: theme.palette.text.primary }}
            className="myButton"
            value="center"
            aria-label="centered"
          >
            MEN Category
          </ToggleButton>

          <ToggleButton
            sx={{ color: theme.palette.text.primary }}
            className="myButton"
            value="right"
            aria-label="right aligned"
          >
            WOMEN Category
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
      >
        {data.data.map((item) => {          
          return (
            <Card
              key={item}
              sx={{
                minWidth: 350,
                maxWidth: 400,
                mt: 6,
                ":hover .MuiCardMedia-root": {
                  scale: "1.1",
                  rotate: "1deg",
                  transition: ".45s",
                },
              }}
            >
              <CardMedia
                sx={{ height: 277 }}
                // @ts-ignore
                image={`${import.meta.env.VITE_BASE_URL}${item.attributes.productImg.data[0].attributes.url}`}
                title={item.attributes.productTitle}
              />

              <CardContent>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography gutterBottom variant="h6" component="div">
                    {item.attributes.productTitle}
                  </Typography>

                  <Typography variant="subtitle1" component="p">
                    ${item.attributes.productPrice}
                  </Typography>
                </Stack>

                <Typography variant="body2" color="text.secondary">
                   {item.attributes.productDescription}
                </Typography>
              </CardContent>

              <CardActions sx={{ justifyContent: "space-between" }}>
                <Button
                  size="small"
                  sx={{ textTransform: "capitalize" }}
                  onClick={handleClickOpen}
                >
                  <AddShoppingCartOutlinedIcon
                    fontSize="small"
                    sx={{ mr: 1 }}
                  />
                  Add to Cart
                </Button>

                <Rating
                  name="read-only"
                  precision={0.5}
                  value={item.attributes.productRating}
                  readOnly
                  size="medium"
                />
              </CardActions>
            </Card>
          );
        })}
         
      </Stack>

      <Dialog
        sx={{
          ".MuiPaper-root": {
            minWidth: { xs: "100%", md: "800px" },
            border: "3px solid red ",
          },
          border: "3px solid red",
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <IconButton
          sx={{
            ":hover": { color: "red", rotate: "180deg", transition: ".5s" },
            position: "absolute",
            top: 0,
            right: 10,
          }}
          onClick={handleClose}
        >
          <Close />
          
        </IconButton>

        <ProductDetails />
  
      </Dialog>
    </Container>
  );
}
  
 
};

export default Main;

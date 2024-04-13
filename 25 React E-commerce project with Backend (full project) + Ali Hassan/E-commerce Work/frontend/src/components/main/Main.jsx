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

import { Close } from "@mui/icons-material";

import ProductDetails from "./ProductDetails";
import { useGetproductByNameQuery } from "../../Redux/product";

const Main = () => {
  // const [alignment, setAlignment] = useState("left");
  
  // Define the variable of theme to be used inside the template :    
   const theme = useTheme();
  //  ---------------------

  // Controling the [Dialog] [open , close] functions  :
    const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
    
    const handleClose = () => {
      setOpen(false);
    };
  // --------------------- 
      
  // B] Dynamic Filtering display of products [according to clicked Filtering buttons ] :  
    //  B] / 1- Define (3) variables of each custom  api [all products & menProducts & women products] :
    const allProductsAPI = "products?populate=*" ;
    const menCategoryAPI = "products?populate=*&filters[category][$eq]=men" ;
    const womenCategoryAPI = "products?populate=*&filters[category][$eq]=women" ;
     
 
    // B] / 2- Define a state variable to store the value of  display one of  defined variables , with initial value of [allProductsAPI] :    
    const [myData , setmyData] = useState(allProductsAPI) ;
  
  // A] Define the object handler object of [RTK query] The inner par inside the hook ( the defined state variable ) is value of api url after the baseUrl : 
    // This state used to call the redux RTK toolkit query  , with (3) parameters cases :
      // 1- [data: which is the returned data from the assinged customized api prop ]
      // 2- [error: the error message will be displayed in case of none existed data]
      // 3- [isLoading: case of loading data]
      const { data, error, isLoading } = useGetproductByNameQuery(myData);
  
      // setAlignment(newValue);
    // B]/ 3- Execute the function of clicked buttons -> upon the clicked button's incomming value as a prop value of both {setAlignment}  & {setmyData}  :
    const handleAlignment = (event, newValue) => {
      setmyData(newValue);
    };
  
  // C] Conditional return of functional component [incase of each retunred case from the Strapi server props {data, isLoading , error} ] :
    // 1- Conditional return of functional component in case of [data : the data is obtained from the database ] :
    if (data) {
      // Printing testing [console log] of the obtained data [data.data] according to the assinged prop sub url :
      console.log(data.data) ;
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
              value={myData}
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
                value= {allProductsAPI}
                aria-label="left aligned"
              >
                All Products
              </ToggleButton>

              <ToggleButton
                sx={{ mx: "16px !important", color: theme.palette.text.primary }}
                className="myButton"
                value= {menCategoryAPI}
                aria-label="centered"
              >
                MEN Category
              </ToggleButton>

              <ToggleButton
                sx={{ color: theme.palette.text.primary }}
                className="myButton"
                value= {womenCategoryAPI}
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
                    width: 333, 
                    mt: 6,
                    ":hover .MuiCardMedia-root": {
                      scale: "1.1",
                      rotate: "1deg",
                      transition: ".45s",
                    },
                  }}
                >
                  <CardMedia
                    sx={{ height: 300 }}
                    // @ts-ignore
                    image={`${
                      item.attributes.productImg.data[0].attributes.url
                    }`}
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

    // 2- Conditional return of functional component in case of [isLoading data] :
    if (isLoading) {
      return(
        <Typography variant="h6">LOADING ........</Typography>
      );
    }

    // 3- Conditional return of functional component in case of [error] of getting data :
    if (error) {
      return (
        <Typography variant="h6">
          {
            // @ts-ignore
            error.message
          }
        </Typography>
      );
    }
};

export default Main;

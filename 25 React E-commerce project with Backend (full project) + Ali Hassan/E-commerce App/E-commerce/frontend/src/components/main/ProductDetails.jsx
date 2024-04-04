
// @ts-nocheck
// [Product Details] inner [Modal : the popup screen  - by clickOn   (the Add to cart button) ] => will be exported  into the  main component [Main.jsx]   : 

// import React from 'react' ;

import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Typography, Stack, Button } from "@mui/material";

const ProductDetails = () => {
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
        <img width={300} alt="" src="src\images\1.jpg" />
      </Box>

      <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
        <Typography varaint="h5">WOMEN 's FASHION</Typography>

        <Typography my={0.4} fontSize={"22px"} color={"crimson"} varaint="h5">
          $12.99
        </Typography>

        <Typography varaint="body1">
          Products Details Products Details Products DetailsProducts Details Products Details
        </Typography>

        <Stack
          sx={{ justifyContent: { xs: "center", sm: "left" } }}
          direction={"row"}
          gap={1}
          my={2}
        >
          {["src/images/1.jpg", "src/images/2.jpg"].map((item) => {
            return (
              <img
                key={item}
                src={item}
                style={{ borderRadius: 3 }}                 
                width={100}
                alt=""
              />
            );
          })}
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

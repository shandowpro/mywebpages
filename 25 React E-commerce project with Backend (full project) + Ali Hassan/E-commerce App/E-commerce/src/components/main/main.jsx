// This is the {Main} component of the [product secton] :

import React, { useState } from "react";

import {
  Box,
  Container,
  Stack,
  Typography,
  useTheme,
  Button ,
} from "@mui/material";

// import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
// import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
// import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
// import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"

const Main = () => {
  const [alignment, setAlignment] = useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const theme = useTheme();
  return (
    <Container sx={{ mt: 9 }}>
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
            className="myButtimport { CardContent } from '@mui/material';
on"
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

      <Stack>
        <Card sx = {{ maxWidth : 345  }}     >
          <CardMedia
            sx={{ height : 140 }}
            image = '/static/images/cards/contemplative-reptile.jpg'
            title = 'green iguana'
          
          />
        
          <CardContent>
            <Typography gutterBottom variant="h5" component='div'  >
              Lizard
            </Typography>
            
            <Typography variant="body2" color='text.secondary' >
              details details details details details details details details 
            </Typography>
          </CardContent>

          <CardActions>
            <Button size="small"> Share </Button>
            <Button size="small"> Learn More </Button>
          </CardActions>
        </Card>
      </Stack>
    </Container>
  );
};

export default Main;

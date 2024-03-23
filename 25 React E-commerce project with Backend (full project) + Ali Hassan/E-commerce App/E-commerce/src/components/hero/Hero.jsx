

// The {Hero}  component  is consisting of  (2) main sections :
  //  1- First section {Box} general contianer , inlcuding the following :
    // The first part of the hero section => [swiper slider ]
    // The second part of the hero section => [ consist of (2) sub parts ] 

  // 2- Second section imported component {IconsSection}        
//----------------------------
 

// A]  General Importings  : 
  // 1- Importing general libraries :   
  import React, { useState, useRef } from "react";


  // 2- Importing general components  {IconSection} to be called and used inside this main componet [Hero]   :   
  import IconSection from "./IconSection";


// B]  Specific Importings  : 
  // 1- Importing certain common usages components and elements   : 
  import { Container, Box, Link, Stack, Typography,  useTheme } from "@mui/material";
  import Button from "@mui/material/Button";
  import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


  // 2- Importing the required modules from the {swiper} library :
    import { Swiper, SwiperSlide } from "swiper/react";
    import { Pagination } from "swiper/modules";

  // 3- Importing Swiper styles :
    import "swiper/css";
    import "swiper/css/pagination";
    import "./slider.css";

  // Define an array of objects -> to store each single [slider]'s data of dynamic slider details contents :
  const mySlider = [
    { text: "MEN", link: "src/images/banner-15.jpg" },
    { text: "WOMEN", link: "src/images/banner-25.jpg" },
  ];

const Hero = () => {
  const theme = useTheme();

  return (
    <Container>
      <Box sx={{ pt:2 , mt: 2.5, display: "flex", alignItems: "center", gap:2 }}>
        
      
        <Swiper
          loop={true}
          pagination= {{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {mySlider.map((item) => {
            return (
              <SwiperSlide key={item.link} className="parent-slider">
                <img src={item.link} alt="" />

                <Box
                  sx={{
                    [theme.breakpoints.up("sm")]: {
                      position: "absolute",
                      left: "10%",
                      textAlign: "left",
                    },

                    [theme.breakpoints.down("sm")]: {
                      pt: 4,
                      pb: 6,
                    },
                  }}
                >
                  <Typography sx={{ color: "#222" }} variant="h6">
                    LIFESTYLE COLLECTION
                  </Typography>

                  <Typography
                    sx={{ color: "#222", fontWeight: 400, my: 1 }}
                    variant="h5"
                  >
                    {item.text}
                  </Typography>

                  <Stack
                    sx={{ justifyContent: { xs: "center", sm: "left" } }}
                    direction={"row"}
                    alignItems={"center"}
                  >
                    <Typography color={"#333"} mr={1} variant="h5">
                      SALES UP TO
                    </Typography>

                    <Typography color={"#D23F57"} variant="h5">
                      30% OFF
                    </Typography>
                  </Stack>

                  <Typography
                    sx={{ color: "#000", fontWeight: 300, my: 1 }}
                    variant="body1"
                  >
                    Get free shipping on orders over $99.00
                  </Typography>

                  <Button
                    sx={{
                      px: 5,
                      py: 1,
                      mt: 2,
                      backgroundColor: "#222",
                      boxShadow: " 0px 4px 16px rgba(43 , 52 , 69 , 0.1)  ",
                      color: "#fff",
                      borderRadius: "1px",
                      "&:hover": {
                        bgcolor: "#151515",
                        boxShadow: " 0px 4px 16px rgba(43 , 52 , 69 , 0.1)  ",
                      },
                    }}
                    variant="contained"
                  >
                    SHOP NOW
                  </Button>
                  
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>


        <Box sx={{ display: { xs: "none", md: "block", minWidth: "26.3%" } }}   >
          
          <Box sx={{ position: "relative" }} >
            <img src="src\images\banner-17.jpg" alt="" width="100%" />

            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: 31,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#283445",
                  fontSize: "18px",
                  // textDecoration : "Capitalize"
                }}
              >
                NEW ARRIVALS
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "#283445",
                  fontSize: "16px",
                }}
              >
                SUMMER <br />
                Sale 20% Off
              </Typography>

              <Link
                sx={{
                  color: "#2B3445",
                  display: "flex",
                  alignItems: "center ",
                  gap: "5px",
                  tansition: ".25",
                  "&:hover": {
                    color: "#D23F57",
                  },
                }}
                href="#"
                underline="none"
              >
                shop now
                <ArrowForwardIcon sx={{ fontSize: "13px" }} />
              </Link>

            </Stack>
          </Box>

          <Box sx={{ position: "relative"  }}  >
            <img src="src\images\banner-16.jpg" alt="" width="100%" />

            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: 31,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#283445",
                  fontSize: "18px",
                  fontWeight: 300,
                }}
              >
                GAMING 4K
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "#283445",
                }}
              >
                DESKTOPS &
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "#283445",
                }}
              >
                LAPTOPS
              </Typography>

              <Link
                sx={{
                  color: "#2B3445",
                  display: "flex",
                  alignItems: "center ",
                  gap: "5px",
                  tansition: ".25",
                  "&:hover": {
                    color: "#D23F57",
                  },
                }}
                href="#"
                underline="none"
              >
                shop now
                <ArrowForwardIcon sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>

        </Box>

      </Box>

      <IconSection />
    </Container>
  );
};



export default Hero;
  
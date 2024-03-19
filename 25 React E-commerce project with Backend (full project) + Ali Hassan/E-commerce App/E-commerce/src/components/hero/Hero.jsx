import { Container, Box, Link, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Hero = () => {
  return (
    <Container sx={{ mt: 2.5, display: "flex", alignItems: "center" }}>
      <Box> Slider </Box>

      <Box>
        <Box sx={{ border:'solid 2px red'}}> img 1 </Box>
        <Box sx={{ border:'solid 2px red'}}> img 2 </Box>
      </Box>
    </Container>
  );
};

export default Hero;

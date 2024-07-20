// Third  inner section of Dashoard inner page :

import React from "react";
import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";

//  Importing  the component   [Pie]     :
import Pie from "../../page/pieChart/Pie";
import Bar from "../../page/barChart/bar";

const Row3 = () => {
  const theme = useTheme();

  return (
    <Stack
      sx={{ border: "1px solid red" }}
      mt={3}
      direction={"row"}
      flexWrap={"wrap"}
    >
      <Paper
        sx={{
          width: "33%",
          minWidth: "400px",
          flexGrow: 1,
          border: "1px solid red",
        }}
      >
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px  30px  0 30px " }}
          variant="h6"
          fontWeight="600"
        >
          Campaign
        </Typography>
        <Pie isDashboard={true} />
        <Typography variant="h6" align="center" sx={{ mt: "15px " }}>
          $48,352 revenue generated
        </Typography>

        <Typography variant="body2" align="center" pb={3} px={0.7}>
          Include extra misc ependitures and costs
        </Typography>
      </Paper>

      <Paper
        sx={{
          width: "33%",
          minWidth: "400px",
          flexGrow: 1,
          border: "1px solid red",
        }}
      >
        <Typography
          color={theme.palette.secondary.main}
          variant="h6"
          fontWeight="600"
          sx={{ padding: "30px  30px  0 30px " }}
        >
          Sales Quantity
        </Typography>

        <Bar />

      </Paper>

      <Paper
        sx={{
          width: "33%",
          minWidth: "400px",
          flexGrow: 1,
          border: "1px solid red",
        }}
      >
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px  30px  0 30px " }}
          variant="h6"
          fontWeight="600"
        >
          Geochart
        </Typography>
      </Paper>
      
    </Stack>
  );
};

export default Row3;

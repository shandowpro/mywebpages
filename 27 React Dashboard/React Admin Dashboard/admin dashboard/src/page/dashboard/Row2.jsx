// Second inner section [Row2] of Dashoard inner page :

import React, { Fragment } from "react";

import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

// import { DLine } from "./DLine";
// import Line  from "../lineChart/Line";
import { Line } from "../../page/lineChart/Line";
import { DownloadOutlined } from "@mui/icons-material";
import { Transactions } from "./data";

const Row2 = () => {
  const theme = useTheme();

  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={1.5} mt={3}>
      <Paper sx={{  maxWidth: 900, flexGrow: 1 , minWidth:  '400px'   }}>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box>
            <Typography
              color={theme.palette.secondary.main}
              mb={1}
              mt={2}
              ml={4}
              variant="h6"
            >
              Revenue Generator
            </Typography>

            <Typography variant="body2" ml={4}>
              $59,342.32
            </Typography>
          </Box>

          <Box>
            <IconButton sx={{ mr: 3 }}>
              <DownloadOutlined />
            </IconButton>
          </Box>
        </Stack>

        <Line isDashboard={true} />
      </Paper>

      <Box
        sx={{
          overflow: 'auto' ,      
          maxHeight: 380,
          flexGrow: 1,
          minWidth:  '280px'  
        }}
      >
        <Paper>
          <Typography
            color={theme.palette.secondary.main}
            fontWeight={"bold"}
            p={1.2}
            variant="h6"
          >
            Recent Transactions
          </Typography>
        </Paper>

        { Transactions.map((item) => {
          return (
            <Paper
              sx={{
                mt: 1,
                display: "flex",
                justifyContent: " space-between",
                alignItems: " center ",
              }}
            >
              <Box p={1.2}>
                <Typography variant="body1" fontWeight="600">
                  {item.txId}
                </Typography>
    
                <Typography variant="body2"> {item.user} </Typography>
    
                <Typography variant="body1">  {item.date} </Typography>
              </Box>
    
              <Typography
                borderRadius={1.4}
                p={1}
                bgcolor={theme.palette.error.main}
                color={theme.palette.getContrastText(theme.palette.error.main)}
                variant="body2"
              >
                ${item.cost}
              </Typography>
            </Paper>
                    
          )
        })}
      </Box>
    </Stack>
  );
};

export default Row2;

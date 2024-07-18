// First inner section of Dashoard inner page :

import React from "react";

// Define the  useTheme  hook   to be used to call the builtin  palette  colors    :
import { useTheme } from "@mui/material";

// The [Mui] imported elements   :
import { Paper, Stack, Typography } from "@mui/material";


// importing the main [Card] from the external file  as Reusable comnponent   : 
import Card from "./card";


// Define the used icons inside each card Cpmponent :
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";

 
// Define all datasources variables from the [data] file :
import { data1, data2, data3, data4 } from "./data";

const Row1 = () => {
  const theme = useTheme();

  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      gap={2}
      justifyContent={{ xs: "center", sm: "space-between" }}
    >
      <Card
        icon={
          <EmailIcon
            sx={{ fonstSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"12.361"}
        subTitle={"Emails Sent "}
        increase={"increase"}
        data={data1}
        color={"nivo"}
      />

      <Card
        icon={
          <PointOfSaleIcon
            sx={{ fonstSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"431.225"}
        subTitle={"Sales obtained "}
        increase={"+21%"}
        data={data2}
        color={"category10"}
      />

      <Card
        icon={
          <TrafficIcon
            sx={{ fonstSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"32.441"}
        subTitle={"New Clients "}
        increase={"+5%"}
        data={data3}
        color={"accent"}
      />

      <Card
        icon={
          <PersonAddIcon
            sx={{ fonstSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"1,325,441"}
        subTitle={"Traffic Recieved"}
        increase={"+43%"}
        data={data4}
        color={"dark2"}
      />

    </Stack>
  );
};

export default Row1;

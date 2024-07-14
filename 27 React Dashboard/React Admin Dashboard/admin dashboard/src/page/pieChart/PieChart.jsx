
// Pie Chart component file :

import React from "react";

// Import the main library of  the  Piechart element :
import { ResponsivePie } from "@nivo/pie";

//  Importing   :
import { Box, useTheme } from "@mui/material";

// Define the variable of data to be used insdie the chart ;
const data = [
  {
    id: "React",
    label: "React",
    value: 272,
    color: "hsl(107, 70% , 50%)",
  },
  {
    id: "stylus",
    label: "stylus",
    value: 543,
    color: "hsl(64, 70% , 50%)",
  },
  {
    id: "sass",
    label: "sass",
    value: 401,
    color: "hsl(41, 70% , 50%)",
  },
  {
    id: "haskell",
    label: "haskell",
    value: 434,
    color: "hsl(172, 70% , 50%)",
  },
  {
    id: "Nue",
    label: "Nue",
    value: 333 ,
    color: "hsl(219, 70% , 50%)",
  },
];

const PieChart = () => {
  // Define the [theme] varialbe Hook , to be used inside the chart  of the MUI :
  const theme = useTheme();

  return (
    <Box sx={{ height: "75vh" }}>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor= {theme.palette.text.primary}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: theme.palette.text.primary,
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: theme.palette.text.primary,
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "ruby",
            },
            id: "dots",
          },
          {
            match: {
              id: "c",
            },
            id: "dots",
          },
          {
            match: {
              id: "go",
            },
            id: "dots",
          },
          {
            match: {
              id: "python",
            },
            id: "dots",
          },
          {
            match: {
              id: "scala",
            },
            id: "lines",
          },
          {
            match: {
              id: "lisp",
            },
            id: "lines",
          },
          {
            match: {
              id: "elixir",
            },
            id: "lines",
          },
          {
            match: {
              id: "javascript",
            },
            id: "lines",
          },
        ]}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: theme.palette.text.primary ,
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: theme.palette.text.primary ,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
};

export default PieChart;
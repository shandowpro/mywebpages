// the serpated file of the {lineChart}  :

import React from "react";

import { ResponsiveLine } from "@nivo/line";

import { Box, useTheme } from "@mui/material";

// Define the variable of data to be used insdie the chart ;
const data = [
  {
    id: "Japan",
    color: "hsl(161, 70% , 50%)",
    data: [
      {
        x: "plan",
        y: 226,
      },
      {
        x: "Helicopter",
        y: 129,
      },
      {
        x: "Boat",
        y: 251,
      },
      {
        x: "Train",
        y: 154,
      },
      {
        x: "Subway",
        y: 224,
      },
      {
        x: "Bus",
        y: 98,
      },
      {
        x: "Car",
        y: 244,
      },
      {
        x: "Moto",
        y: 295,
      },
      {
        x: "bicycle",
        y: 287,
      },
      {
        x: "Horse",
        y: 210,
      },
      {
        x: "SkateBoard",
        y: 76,
      },
      {
        x: "other",
        y: 126,
      },
    ],
  },

  {
    id: "Italy",
    color: "hsl(261, 70% , 50%)",
    data: [
      {
        x: "plan",
        y: 300,
      },
      {
        x: "Helicopter",
        y: 100,
      },
      {
        x: "Boat",
        y: 150,
      },
      {
        x: "Train",
        y: 170,
      },
      {
        x: "Subway",
        y: 255,
      },
      {
        x: "Bus",
        y: 198,
      },
      {
        x: "Car",
        y: 304,
      },
      {
        x: "Moto",
        y: 135,
      },
      {
        x: "bicycle",
        y: 100,
      },
      {
        x: "Horse",
        y: 120,
      },
      {
        x: "SkateBoard",
        y: 366,
      },
      {
        x: "other",
        y: 399,
      },
    ],
  },

  {
    id: "Spain",
    color: "hsl(151, 70% , 50%)",
    data: [
      {
        x: "plan",
        y: 200,
      },
      {
        x: "Helicopter",
        y: 229,
      },
      {
        x: "Boat",
        y: 259,
      },
      {
        x: "Train",
        y: 354,
      },
      {
        x: "Subway",
        y: 222,
      },
      {
        x: "Bus",
        y: 50,
      },
      {
        x: "Car",
        y: 75,
      },
      {
        x: "Moto",
        y: 305,
      },
      {
        x: "bicycle",
        y: 366,
      },
      {
        x: "Horse",
        y: 111,
      },
      {
        x: "SkateBoard",
        y: 88,
      },
      {
        x: "other",
        y: 80,
      },
    ],
  },
];

export const Line = () => {
  // Define the [theme] varialbe Hook , to be used inside the chart  of the MUI :
  const theme = useTheme();

  return (
    <Box sx={{ height: "75vh" }}>
      <ResponsiveLine
        data={data}
        curve="catmullRom"
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        theme={{
          text: {
            fontSize: 11,
            fill: theme.palette.text.primary,
            outlineWidth: 0,
            outlineColor: "transparent",
          },
          axis: {
            domain: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.secondary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          grid: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 0,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "transparent",
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: theme.palette.text.primary,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: "#000000",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            wrapper: {},
            container: {
              background: theme.palette.background.default,
              color: theme.palette.text.primary,
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Transportation",
          legendOffset: 45,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Count",
          legendOffset: -45,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
};

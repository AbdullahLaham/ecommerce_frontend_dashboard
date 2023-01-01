import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { useGetOverviewQuery } from 'state/api'
import { useTheme } from '@emotion/react';
import { Box, Typography } from '@mui/material';
import { ResponsivePie } from '@nivo/pie';

const BreakdownChart = ({isDashboard = false}) => {
    const {data, isLoading} = useGetOverviewQuery();
    const theme = useTheme();
    if (!data || isLoading) return "Loading..."
    const colors = [
        theme.palette.secondary[500],
        theme.palette.secondary[300],
        theme.palette.secondary[300],
        theme.palette.secondary[500],
    ]
    const formattedData = Object.entries(data.salesByCategory).map(([category, sales], i) => ({
        id: category,
        label: category,
        value: sales,
        color: colors[i],
    }))
  return (
      <Box 
        height="100%"
        maxWidth={'100%'}
        position={'relative'}>
      <ResponsivePie
        data={formattedData}
        position={'relative'}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: theme.palette.secondary[200],
              },
            },
            legend: {
              text: {
                fill: theme.palette.secondary[200],
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.secondary[200],
                strokeWidth: 1,
              },
              text: {
                fill: theme.palette.secondary[200],
              },
            },
          },
          legends: {
            text: {
              fill: theme.palette.secondary[200],
            },
          },
          tooltip: {
            container: {
              color: theme.palette.primary.main,
            },
          },
        }}
        colors={{ datum: "data.color" }}
        margin={
          isDashboard
            ? { top: 40, right: 0, bottom: 100, left: 0 }
            : { top: 20, right: 0, bottom: 150, left: 0 }
        }
        sortByValue={true}
        innerRadius={0.45}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        enableArcLinkLabels={!isDashboard}
        arcLinkLabelsTextColor={theme.palette.secondary[200]}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: isDashboard ? 20 : 0,
            translateY: isDashboard ? 50 : 56,
            itemsSpacing: 0,
            itemWidth: 85,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: theme.palette.primary[500],
                },
              },
            ],
          },
        ]}
      />
    </Box>
  )
}

export default BreakdownChart

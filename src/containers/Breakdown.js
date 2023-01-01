import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { useGetOverviewQuery } from 'state/api'
import { useTheme } from '@emotion/react';
import { Box, Typography } from '@mui/material';
import { ResponsivePie } from '@nivo/pie';
import BreakdownChart from 'components/BreakdownChart';
const Breakdown = ({isDashboard = false}) => {
  const {data, isLoading} = useGetOverviewQuery();
  const theme = useTheme();
  return (
    <Box 
        height="100%"
        maxWidth={'100%'}
        position={'relative'}>
          <BreakdownChart />
      <Box
        position="absolute"
        top="41%"
        left="50%"
        color={theme.palette.secondary[400]}
        textAlign="center"
        pointerEvents="none"
        sx={{
          transform: isDashboard
            ? "translate(-75%, -170%)"
            : "translate(-50%, -100%)",
        }}
      >
        <Typography variant="h6">
          {!isDashboard && "Total:"} ${data?.yearlySalesTotal}
        </Typography>
      </Box>
    </Box> 
  )
}
export default Breakdown;
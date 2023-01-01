import { Box, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Header from 'components/Header';
import React from 'react'
import { useSelector } from 'react-redux';
import { useGetUserPerformanceQuery } from 'state/api';

const Performance = () => {
  
  const userId = useSelector((state) => state.global.userId);
  const {data, isLoading} = useGetUserPerformanceQuery(userId);
  console.log('ggggggggg', data);
  const theme = useTheme();
    const columns = [
        {
            field: '_id',
            headerName: 'ID',
            flex: 1,
        },
        {
            field: 'userId',
            headerName: 'User ID',
            flex: .5,
        },
        {
            field: 'createdAt',
            headerName: 'Created At',
            flex: 1,
        },

        {
            field: "products",
            headerName: "# of products",
            flex: 0.5,
            storable: false,
            renderCell: (v) => {
              return v.value.length;
            },
          },
          {
            field: "cost",
            headerName: "Cost",
            flex: 1,
            renderCell: (p) => `$ ${Number(p.value).toFixed(2)}`
          },
    ]
  return (
    <Box  ml='2rem'>
        <Header title='PERFORMANCE' subtitle='Track your Affiliate Sales Performance Here' />
        <Box sx={{
          
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
        }} mt='1rem' height='75vh'>
            <DataGrid rows={data?.user && data?.sales || []} getRowId={(row) => row._id} loading={isLoading || !data} columns={columns} />
        </Box>
    </Box>
  )
}


export default Performance

import { useTheme, Box } from '@mui/material'
import Header from 'components/Header';
import React from 'react'
import { useGetCustomersQuery } from 'state/api';
import { DataGrid } from '@mui/x-data-grid';


const Customers = () => {
    const theme = useTheme();
    const {data, isLoading} = useGetCustomersQuery();
    console.log('dataaaaa', data);
    const columns = [
        {
            field: '_id',
            headerName: 'ID',
            flex: 1,
        },
        {
            field: 'name',
            headerName: 'Name',
            flex: .5,
        },
        {
            field: 'email',
            headerName: 'Email',
            flex: 1,
        },
        {
            field: "phoneNumber",
            headerName: "Phone Number",
            flex: 0.5,
            renderCell: (params) => {
              return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
            },
          },
          {
            field: "country",
            headerName: "Country",
            flex: 0.4,
          },
          {
            field: "occupation",
            headerName: "Occupation",
            flex: 1,
          },
          {
            field: "role",
            headerName: "Role",
            flex: 0.5,
          },
    ]
  return (
    <Box  ml='2rem'>
        <Header title='CUSTOMERS' subtitle='list of customers' />
        to see the data you have to specify the height of the box contsiner of DataGrid
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
            <DataGrid rows={data || []} getRowId={(row) => row._id} loading={isLoading || !data} columns={columns} />
        </Box>
    </Box>
  )
}

export default Customers;

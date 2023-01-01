import React from 'react'
import {Box, useTheme} from '@mui/material';
import { useGetAdminsQuery } from '../state/api';
import Header from 'components/Header';
import { DataGrid } from '@mui/x-data-grid';
import CustomColumnMenu from 'components/CustomColumnMenu';

const Admin = () => {
    const {data, isLoading} = useGetAdminsQuery();
    console.log('admins', data);
    const theme = useTheme();
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
        <Header title='ADMINS' subtitle='Managing Admins and list of Admins' />
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
            <DataGrid rows={data || []} getRowId={(row) => row._id} loading={isLoading || !data} columns={columns} components={{
            ColumnMenu: CustomColumnMenu,
          }} />
        </Box>
    </Box>
  )
}

export default Admin

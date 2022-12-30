import React, {useState} from 'react'
import { useGetTransactionsQuery } from 'state/api'
import { DataGrid } from '@mui/x-data-grid';
import { Box, Toolbar, useTheme } from '@mui/material';
import Header from 'components/Header';
import DataGridCustomToolbar from '../components/DataGridCustomToolbar';
const Transactions = () => {
    
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(20);
    const [sort, setSort] = useState({});
    const [search, setSearch] = useState("");
    const [searchInput, setSearchInput] = useState('');
    const theme = useTheme();
    const {data, isLoading} = useGetTransactionsQuery({
        page,
        pageSize,
        sort: JSON.stringify(sort),
        search,
    });
    console.log("data", data);

    const columns = [
        {
            field: '_id',
            headerName: 'ID',
            flex: 1,
        },
        {
            field: 'userId',
            headerName: 'User ID',
            flex: 1,
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
            sortable: false,
            renderCell: (params) => params.value.length,
        },
        {
        field: "cost",
        headerName: "Cost",
        flex: 1,
        renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
        },


    ];

    return (
        <Box m='1.5rem 2.5rem'>
            <Header title='TRANSACTIONS' subtitle='list of transactions' />
            <Box height='80vh' sx={{        
                "& .MuiDataGrid-virtualScroller": {
                    backgroundColor: theme.palette.primary.light,
                },
                "& .MuiDataGrid-footerContainer": {
                    backgroundColor: theme.palette.background.alt,
                    color: theme.palette.secondary[100],
                    borderTop: "none",
                },
                }} mt='1rem'>
                    <DataGrid rows={data || []} getRowId={(row) => row._id} loading={isLoading || !data} columns={columns}
                        rowCount={(data && data.total) || 0}
                        rowsPerPageOptions={[20, 50, 100]}
                        pagination
                        page={page}
                        onPageChange={(newPage) => setPage(newPage)}
                        pageSize={pageSize}
                        // paginationMode='server'
                        // sortingMode='server'
                        // onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                        // onSortModelChange={(sortModel) => setSort({...sortModel})}
                        components={{Toolbar: DataGridCustomToolbar}}
                        componentsProps={{
                            toolbar: {setSearchInput: searchInput, setSearch}
                        }}
                         />
                        
            </Box>
        </Box>
    )
}

export default Transactions

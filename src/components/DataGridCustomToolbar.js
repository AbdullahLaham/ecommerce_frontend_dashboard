import React, { useState } from 'react'
import {GridToolbarDensitySelector, GridToolbarColumnsButton, GridToolbarExport, GridToolbarContainer} from '@mui/x-data-grid'
import FlexBetween from '../styledComponents/FlexBetween';
import { Box, IconButton, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
const DataGridCustomToolbar = ({setSearchInput, searchInput, setSearch}) => {
    
  return (
    <GridToolbarContainer >
        <FlexBetween width='100%'>
            <Box>
                <GridToolbarColumnsButton />
                <GridToolbarDensitySelector />
                <GridToolbarExport />
            </Box>

            <TextField
                label="Search..."
                sx={{ mb: "0.5rem", width: "15rem" }}
                variant='standard'
                onChange={(e) => setSearchInput(e.target.value)}
                value={searchInput} 
                InputProps={{
                    endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            onClick={() => {
                                setSearch(searchInput);
                                setSearchInput("");
                            }}
                        >
                        <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                    ),
                }}
                />
        
        </FlexBetween>
    </GridToolbarContainer>
  )
}

export default DataGridCustomToolbar;

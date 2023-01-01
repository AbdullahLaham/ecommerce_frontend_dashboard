import React from 'react'
import { useGetDashboardDataQuery } from '../state/api';
import FlexBetween from '../styledComponents/FlexBetween';
import Header from '../components/Header';
import { DownloadOutlined, Email, PointOfSale, PersonAdd, Traffic,
} from "@mui/icons-material";
import { Box, Button, Typography, useTheme, useMediaQuery, } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import BreakdownChart from "../components/BreakdownChart";
import OverviewChart from "../components/OverviewChart";
import StatBox from "components/StatBox"; 

  const Dashboard = () => {
    const theme = useTheme();
    const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
    const { data, isLoading } = useGetDashboardDataQuery();
  
    const columns = [
      {
        field: "_id",
        headerName: "ID",
        flex: 1,
      },
      {
        field: "userId",
        headerName: "User ID",
        flex: 1,
      },
      {
        field: "createdAt",
        headerName: "CreatedAt",
        flex: 1,
      },
      {
        field: "products",
        headerName: "# of Products",
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
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.background.alt,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlined sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </FlexBetween>

      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns='repeat(12, 1fr)'
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        <StatBox title='Total Customers' value={data && data?.totalCustomers}  icon={ <Email sx={{color: theme.palette.secondary[300], fontSize: '26px'}} /> } />
        <StatBox title='Today Sales' value={data && data?.thisMonthStats.totalSales}  icon={ <PointOfSale sx={{color: theme.palette.secondary[300], fontSize: '26px'}} /> } />
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
        >
          <OverviewChart view="sales" />
        </Box>
        <StatBox title='Monthly Sales' value={data && data.thisMonthStats.totalSales} icon={ <PersonAdd sx={{color: theme.palette.secondary[300], fontSize: '26px'}} /> } />
        <StatBox title="Yearly Sales" value={data && data.yearlySalesTotal} icon={<Traffic sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}/>
          }
        />
        <Box
          gridColumn='span 8' gridRow='span 3' height='80vh' sx={{        
            "& .MuiDataGrid-virtualScroller": {
                backgroundColor: theme.palette.primary.light,
            },
            "& .MuiDataGrid-footerContainer": {
                backgroundColor: theme.palette.background.alt,
                color: theme.palette.secondary[100],
                borderTop: "none",
            },
            }} mt='1rem'>
              <DataGrid rows={data?.transactions || []} getRowId={(row) => row._id} loading={isLoading || !data} columns={columns}
                rowCount={(data && data.total) || 0}
                rowsPerPageOptions={[20, 50, 100]}
                pagination />
        </Box>
        <Box gridColumn='span 4' gridRow='span 3' backgroundColor={theme.palette.background.alt} p='1.5rem' borderRadius='.55rem' >
            <Typography color={theme.palette.secondary[200]} variant='h6'>Sales by category</Typography>
            <BreakdownChart isDashboard={true} />
            <Typography p='0 0.6rem' fontSize={'.8rem'} color={theme.palette.secondary[200]}>Breakdown of real states and information via category for revenue
            made for this year and total sales.</Typography>
        </Box>
        </Box>
      </Box>
  )
}

export default Dashboard;

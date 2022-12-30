import React from "react";

import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "../styledComponents/FlexBetween";
import profileImage from "../assets/me.png";
import { fontSize } from "@mui/system";

const navItems = [
    {
      text: "Dashboard",
      icon: <HomeOutlined />,
    },
    {
      text: "Client Facing",
      icon: null,
    },
    {
      text: "Products",
      icon: <ShoppingCartOutlined />,
    },
    {
      text: "Customers",
      icon: <Groups2Outlined />,
    },
    {
      text: "Transactions",
      icon: <ReceiptLongOutlined />,
    },
    {
      text: "Geography",
      icon: <PublicOutlined />,
    },
    {
      text: "Sales",
      icon: null,
    },
    {
      text: "Overview",
      icon: <PointOfSaleOutlined />,
    },
    {
      text: "Daily",
      icon: <TodayOutlined />,
    },
    {
      text: "Monthly",
      icon: <CalendarMonthOutlined />,
    },
    {
      text: "Breakdown",
      icon: <PieChartOutlined />,
    },
    {
      text: "Management",
      icon: null,
    },
    {
      text: "Admin",
      icon: <AdminPanelSettingsOutlined />,
    },
    {
      text: "Performance",
      icon: <TrendingUpOutlined />,
    },
  ];
  
const Sidebar = ({isSidebarOpen, setIsSidebarOpen, isNonMobile, drawerWidth, user}) => {
    const {pathname} = useLocation();
    const [active, setActive] = useState("");
    const navigate = useNavigate();
    const theme = useTheme();

    useEffect(() => {
        setActive(pathname.substring(1)); // pathname after '/'
    }, [pathname]);

    // create dark scrollbar theme
  

  return (
    <Box component="nav" className='scrollbar'>
      {isSidebarOpen && isNonMobile && (
        <Drawer className='scrollbar' display='block' open={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
            variant='persistent'
            anchor="left"
            sx={{
                width: drawerWidth,
                "& .MuiDrawer.paper": {
                    color: theme.palette.secondary[200],
                    backgroundColor: theme.palette.background.alt,
                    boxSizing: "border-box",
                    borderWidth: isNonMobile ? 0 : '2px',
                    width: drawerWidth,
                }
            }}
         >
          {/* width was 100% */}
            <Box> 
                <Box width='100%' textAlign='center' color={theme.palette.secondary.main} p='.4rem'>
                  <Typography variant="h4" sx={{marginBottom:'0'}}>
                      ECOMVISION
                  </Typography>
                </Box>
                <List margin='0' sx={{margin: '0'}} >
                    {navItems.map(({text, icon}, i) => {
                            return !icon ? (
                              <Typography key={text} sx={{m: "0 3rem"}} >
                                {text}
                              </Typography>
                            ) : (
                              <ListItem key={text} disablePadding >
                                <ListItemButton sx={{display: 'flex', alignItems: 'center', backgroundColor: active == text ? theme.palette.secondary[300] : 'transparent', color: active === text ? theme.palette.primary[600] : theme.palette.secondary[100]}} onClick={() => {navigate(`/${text.toLowerCase()}`); setActive(text.toLowerCase())}} >
                                  <ListItemIcon sx={{ml: '1.2rem', color: active === text ? theme.palette.primary[600] : theme.palette.secondary[200]}}>{icon}</ListItemIcon>
                                  <ListItemText sx={{ml: '1.2rem', color: active === text ? theme.palette.primary[600] : theme.palette.secondary[200]}}>{text} </ListItemText>
                                  {text === 'Dashboard' && <ListItemText sx={{ml: '1.5rem', color: active === text ? theme.palette.primary[600] : theme.palette.secondary[200]}}><ChevronRightOutlined sx={{ml:'auto'}} /></ListItemText>}
                                </ListItemButton>
                              </ListItem>
                            )
                    })}
                </List>
            </Box>
            <Box width='100%' >
                <FlexBetween textTransform='none' gap='1rem' m='0 1rem'>
                    <Box component='img' alt='profile' src={profileImage} height='40px' width='50px' borderRadius='50%' sx={{objectFit: 'cover'}}  />
                    <Box textAlign='left' width='72%'>
                        <Typography fontWeight='bold' fontSize='0 .9rem' sx={{color: theme.palette.secondary[100]}}>{user?.name}</Typography>
                        <Typography fontWeight='bold' fontSize='0 .9rem' sx={{color: theme.palette.secondary[100]}}>{user?.occupation}</Typography>
                    </Box>
                    <IconButton><SettingsOutlined sx={{color: theme.palette.secondary[300]}} /></IconButton>
                </FlexBetween>
            </Box>
         </Drawer>
            
      )}
    </Box>
  )
}

export default Sidebar;


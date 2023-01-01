import { Box, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useGetUserQuery } from 'state/api';
const Layout = () => {
    const isNonMobile = useMediaQuery("(min-width: 1000px)");
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const userId = useSelector((state) => state.global.userId);
    // fetch user data
    const { data } = useGetUserQuery(userId);
  return (
    <Box display={isNonMobile ? 'flex' : 'block' }  width='100%'  height='100%' >
        <Sidebar className='scrollbar' user={data || {}} isNonMobile={isNonMobile} drawerWidth="16rem" isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />        
        <Box flexGrow={1} mr='1rem'>
          <Navbar
            user={data || {}}
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
          <Outlet />
      </Box>
    </Box>
  )
}

export default Layout

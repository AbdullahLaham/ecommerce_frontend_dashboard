import React, {useState} from 'react'
import { LightModeOutlined, DarkModeOutlined, Menu as MenuIcon, Search, SettingsOutlined, ArrowDropDownOutlined } from '@mui/icons-material';
import FlexBetween from '../styledComponents/FlexBetween'
import { useDispatch } from 'react-redux';
import { setMode } from 'state';
import profileImage from 'assets/me.png';
import { useTheme } from '@emotion/react';
import { AppBar, Box, Button, IconButton, InputBase, Menu, MenuItem, Toolbar, Typography  } from '@mui/material';
const Navbar = ({isSidebarOpen, setIsSidebarOpen, user}) => {
    const dispatch = useDispatch();
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);
    const isOpen = Boolean(anchorEl);
    // to know what is the element that clicked it to show the Menu near of it
    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = (event) => setAnchorEl(null);

    // const [showSidebar, setShowSidebar] = useState(false);
  return (
    <AppBar sx={{position: 'static', background: 'none', boxShadow: 'none'}} >
        <Toolbar  sx={{ justifyContent: 'space-between', }}>
            <FlexBetween>
                <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)} ><MenuIcon /></IconButton>
                <FlexBetween backgroundColor={theme.palette.background.alt} borderRadius='9px' gap='3rem' p=".1rem 1.5rem">
                    <InputBase placeholder='Search...' />
                    <IconButton>
                        <Search />
                    </IconButton>
                </FlexBetween>
            </FlexBetween>

            <FlexBetween gap='1.5rem'>
                <IconButton onClick={() => dispatch(setMode())}>
                    {theme.palette.mode === 'dark' ? (
                        <DarkModeOutlined fontSize='25px' />
                    ) : (<LightModeOutlined fontSize='25px' /> ) }

                </IconButton>
                <IconButton>
                    <SettingsOutlined sx={{ fontSize: '25px', }} />
                </IconButton>
                <FlexBetween textTransform='none' gap='1rem' m='0 1rem'>
                    <Button onClick={handleClick} sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', textTransform: 'none', gap: '1', }}>
                        <Box component='img' alt='profile' src={profileImage} height='40px' width='40px' borderRadius='50%' sx={{objectFit: 'cover', marginRight: '1rem'}}  />
                        <Box textAlign='left'>
                            <Typography fontWeight='bold' fontSize='0 .9rem' sx={{color: theme.palette.secondary[100]}}>{user?.name}</Typography>
                            <Typography fontWeight='bold' fontSize='0 .9rem' sx={{color: theme.palette.secondary[100]}}>{user?.occupation}</Typography>
                            
                        </Box>
                        <ArrowDropDownOutlined sx={{color: theme.palette.secondary[300]}}  />
                    </Button>
                    <Menu anchorEl={anchorEl} open={isOpen} onClose={handleClose} anchorOrigin={{vertical: "bottom", horizontal: 'center',}}>
                        <MenuItem onClick={handleClose} >Log Out</MenuItem>
                    </Menu>
                </FlexBetween>
            </FlexBetween>
            
        </Toolbar >
    </AppBar>
  )
}

export default Navbar

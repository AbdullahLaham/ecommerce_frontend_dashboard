import { Box, TextField, Typography } from '@mui/material'
import React from 'react'

const LoginPage = () => {
  return (
    <Box width='100%' height='80%' display={'flex'} alignItems='center' justifyContent={'center'}>
      <Box width='50%' height='45%' display='flex' flexDirection={'column'} justifyContent='space-between' mt='-5rem'>
        <Typography fontSize={'3rem'} textAlign='center'>Login Page </Typography>
        <TextField 
            id="outlined-number"
            label="Email"
            type="text"
          />
          <TextField 
            id="outlined-number"
            label="Password"
            type="password"
          />
      </Box>
    </Box>
  )
}

export default LoginPage;
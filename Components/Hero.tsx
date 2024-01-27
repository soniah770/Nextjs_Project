import {Box, Typography } from '@mui/material'
import React from 'react'

const Hero = () => {
  return (
    <Box sx={{display:'flex',flexDirection:'column',height:'50vh',justifyContent:'center',width:'30vw'}}>
      <Typography variant='h3' sx={{textTransform:'uppercase',fontSize:'1.5rem',letterSpacing:'0.5rem',color:'#4f4f4f',width:'250px'}}>Welcome to Engalab </Typography>
      <Typography variant='h1'sx={{marginBottom:'10px'}}>Welcome Engalab </Typography>
    </Box>
  );
}

export default Hero

import { Box, Typography } from '@mui/material'
import React from 'react'
import Button from '../Components/Button'
const Cart = () => {
  return (
    <Box sx={{position:'absolute',
    height:'30vh',
    width:'30vw',
    left:800,
    top:'2rem',
    backgroundColor:'white'}}>
        <Box sx={{
        position:'absolute',
        right:400,
        minHeight:'20vh',
        backgroundcolor:'white',
        color:'1.5rem',
        textTransform:'uppercase',
        flexDirection:'column',
    
    }}>
  <Box sx={{display:'flex',color:'black',justifyContent:'space-between'}}>
    <Typography>Cart</Typography>
    <Typography>Remove All</Typography>

    </Box>
    <Button variant='contained' color='#f58321'>product</Button>
  </Box>
    
    </Box>
  )
}

export default Cart

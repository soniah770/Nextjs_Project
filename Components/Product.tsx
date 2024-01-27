/* eslint-disable jsx-a11y/alt-text */
import { Box, Container , Typography} from '@mui/material';
import React from 'react';
import Image from 'next/image';
import Button from '../Components/Button'
import ProductCounter from './ProductCounter';

const Product = () => {
  return (
    <Container sx={{display:'flex',marginTop:'15rem'}}>
        <Image src={'/assets/shared/desktop/image-xx99-mark-two-headphones.jpg'} width={500} height={500}/>
    <Box sx={{display:'flex',flexDirection:'column',height:'50vh',justifyContent:'cent er',width:'30vw',marginLeft:'5rem'}}>
      <Typography variant='h3' sx={{textTransform:'uppercase',fontSize:'1.5rem',letterSpacing:'0.5rem',color:'#4f4f4f',width:'250px'}}>Welcome to Engalab </Typography>
      <Typography variant='h1'sx={{marginBottom:'10px'}}>Welcome Engalab </Typography>
   <Box sx={{display:'flex'}}>
   <ProductCounter/>
      <Button varaint='contained' color='#f58321'>Add To Cart</Button>
     
      </Box>
    </Box>
    </Container>
  );
};

export default Product

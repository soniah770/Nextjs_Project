/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Container } from '@mui/material';
import Image from 'next/image'
import Link from 'next/link';

const Nav = () => {
  return (
    <Container sx={{color:'#ffffff',padding:'2rem 0',display:'flex',alignItems:'center',justifyContent:'space-between',backgroundColor:'#191919'}}>
    <Image alt='logo' src='./assets/shared/desktop/logo.svg'
     width={130} 
     height={30} />
<ul style={{textTransform:'uppercase', textDecoration:'none'}}>
<Link href={'/'} style={{marginRight:'2rem'}}>Home</Link>

<Link href={'/'} style={{marginRight:'2rem'}} >About</Link>
<Link href={'/'} style={{marginRight:'2rem'}}>Shopping Cart</Link>
<Link href={'/'} style={{marginRight:'2rem'}}>Contact</Link>

</ul>

<Image  alt='cart' src='./assets/shared/desktop/icon-cart.svg'
     width={40} 
     height={30} />

     </Container>
  )
}

export default Nav

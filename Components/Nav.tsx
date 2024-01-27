/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import { Container,Button } from '@mui/material';
import Image from 'next/image'
import Link from 'next/link';
import Cart from './Cart';
const Nav = () => {
     const [showCart,setshowCart]=useState(false);
  return (
    <div style={{color:'#ffffff',padding:'2rem 0',backgroundColor:'#191919'}}>
        <Container sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
    <Image alt='logo' src='./assets/shared/desktop/logo.svg'
     width={130} 
     height={30} />
<ul style={{textTransform:'uppercase', textDecoration:'none'}}>
<Link href={'/'} style={{marginRight:'2rem'}}>Home</Link>

<Link href={'/'} style={{marginRight:'2rem'}} >About</Link>
<Link href={'/'} style={{marginRight:'2rem'}}>Shopping Cart</Link>
<Link href={'/'} style={{marginRight:'2rem'}}>Contact</Link>

</ul>
<Button onClick={()=>setshowCart(!showCart)}>
<Image  alt='cart' src='./assets/shared/desktop/icon-cart.svg'
     width={40} 
     height={30} />
</Button>
</Container>
{showCart ? <Cart/> : null}
     </div>
  )
}

export default Nav

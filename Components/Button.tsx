import React from 'react'
import Muibutton from '@mui/material/Button';


interface Props{
    variant:'contained';
    color:'String';
}
const Button = ({color,variant}:Props) => {
  return (
    <Muibutton   sx={{background:color, width:'10rem',height:'50px',padding:'2rem',borderRadius:'0',color:'white'}}> See Product</Muibutton>
  )
}

export default Button

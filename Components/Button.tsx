import React, {  ReactElement } from 'react'
import Muibutton from '@mui/material/Button';


interface Props{
    variant:'contained |outlined | string ';
    color:'string';
    children:React.ReactNode;
}
const Button = ({color,variant,children}:Props) => {
  return (
    <Muibutton sx={{background:color, width:'10rem',height:'50px',padding:'2rem',borderRadius:'0',color:'white'}}> {children}</Muibutton>
  )
}

export default Button

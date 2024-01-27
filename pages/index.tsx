import type { NextPage } from 'next'
import Nav from '../Components/Nav'
import {  Container } from '@mui/material'
import Hero from '../Components/Hero'
import Button from '../Components/Button'
const Home: NextPage = () => {
  return (
  
    <div style={{backgroundImage:"url(./assets/home/desktop/image-hero.jpg)",height:'100vh',backgroundSize: '100%',color:'white'}}>

<Container>
<Nav />    
<hr></hr>


<Hero/>
<Button varaint='contained' color='#f58321'/>
</Container>
</div>

  )
}

export default Home

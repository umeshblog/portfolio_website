import React from 'react'
import {NavLink} from "react-router-dom"
import Navbar from './Navbar'
import styled from 'styled-components'
function Header() {

  return (
  <MainHeader>
   <NavLink to='/' className='Navbar'>
   {/* <img src='./images/photo.png' alt='umesh'></img> */}
    <h3>Web Developement</h3>
   </NavLink>
   <Navbar/>
  </MainHeader>
 
  )
}
const MainHeader= styled.header`
padding:0 4.8 rem;
height:4.5rem;
background-color:${({theme})=>theme.colors.bg};
display:flex;
justify-content:space-between;
align-items:center;
.Navbar{
text-decoration:none;
}
`;
export default Header
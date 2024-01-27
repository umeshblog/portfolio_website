import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
    const Nav =styled.nav`
    .navbar_list{
        display:flex;
        gap: 2rem;
        li{
            list-style:none;

        .Navbar-link{
            text-decoration: none;
            &:hover,
            // &:visited{
            //     display:inline-block;
            //     text-decoration: none;
            //     text-transform:uppercase;
            //     color:${({theme})=>theme.colors.black};
            //     transition:color 0.3s linear;

            // }
            &:active{
                color:${({theme})=>theme.colors.helper};
            }
        }
        }
    }
    `
    return (
       <Nav>
        <div className='menuIcon'>
            <ul className='navbar_list'>
                <li>
                    <NavLink to='/'className='Navbar-link'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about' className='Navbar-link'>About</NavLink>
                </li>
                <li>
                    <NavLink to='/service' className='Navbar-link'>Service</NavLink>
                </li>
                <li>
                    <NavLink to='/contact' className='Navbar-link'>Contact</NavLink>
                </li>
                <li>
                    
                </li>
               
            </ul>
        </div>
       </Nav>
    );
}

export default Navbar;

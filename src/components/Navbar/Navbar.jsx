import React from 'react'
import { NavLink } from 'react-router-dom';
import {Nav,NavBtn,NavBtnLink, NavbarContainer, NavLogo,MobileIcon,NavItem,NavLinks,NavMenu} from "../../styles/Style";
import {FaBars} from 'react-icons/fa'

function Navbar() {
  return (
    <>
    <Nav>
<NavbarContainer>
    <NavLogo to="/">Czech Kitchen</NavLogo>
    <MobileIcon>
      <FaBars/>
    </MobileIcon>
    <NavMenu>
      <NavItem>
        <NavLinks to="about">About</NavLinks>
      </NavItem>
    <NavItem>
        <NavLinks to="discover">Discover</NavLinks>
      </NavItem>
      <NavItem>
        <NavLinks to="services">Services</NavLinks>
      </NavItem>
      <NavItem>
        <NavLinks to="signup">Sign Up</NavLinks>
      </NavItem>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to="/signin"> Sign In</NavBtnLink>
      </NavBtn>
</NavbarContainer>
    </Nav>
    </>
  )
}

export default Navbar
import React, {useState} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'
import styled from 'styled-components'




const StyledNavLink = styled(Nav.Link)`
:hover {
  padding: 10px 10px 10px 10px;
}
`;

const StyledNavbar = styled(Navbar)`
box-shadow: 2px 2px 8px cornflowerblue;

`;


function Header(props) {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)



    return (
        <div>
        
        <StyledNavbar sticky="top" collapseOnSelect expand="lg" bg="white" variant="light">
        <Navbar.Brand  href="/">Bottom Line Bookkeeper</Navbar.Brand>
        <div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
           
          <StyledNavLink href="/">Home</StyledNavLink>
          <StyledNavLink href="/Guides">Guides</StyledNavLink>
          <StyledNavLink href="/HowWorks">How it Works</StyledNavLink>
          <StyledNavLink href="/Pricing">Pricing</StyledNavLink>
          <StyledNavLink href="/Form">Form</StyledNavLink>
          <StyledNavLink href="/FormWizard">Form Wizard</StyledNavLink>
            
                      
           
            
          </Nav>
        
        </Navbar.Collapse>
        </div>
      </StyledNavbar>
    
      </div>
    )
}

export default Header;
import React, {useState} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'
import styles from "../styles/Navbar.module.css"




function Header(props) {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)



    return (
        <div>
        
        <Navbar className={styles.navbar} sticky="top" collapseOnSelect expand="lg" bg="white" variant="light">
        <Navbar.Brand  href="/">Bottom Line Bookkeeper</Navbar.Brand>
        <div className={styles.navbar}>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
           
          <Nav.Link href="/">Home</Nav.Link>
          <NavDropdown 
          className={styles.dropdown}
          title="Account" 
          id="basic-nav-dropdown"
          {...props}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onToggle={() => setIsClicked(!isClicked)}
          show={isClicked || isHovered}
          >
        <NavDropdown.Item className={styles.drop} href="/Account">Account</NavDropdown.Item>
        <NavDropdown.Item className={styles.drop} href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item className={styles.drop} href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item className={styles.drop} href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
         
          
          <Nav.Link href="/Guides">Guides</Nav.Link>
          <Nav.Link href="/HowWorks">How it Works</Nav.Link>
          <Nav.Link href="/Pricing">Pricing</Nav.Link>
          <Nav.Link href="/Form">Form</Nav.Link>
            
                      
           
            
          </Nav>
        
        </Navbar.Collapse>
        </div>
      </Navbar>
    
      </div>
    )
}

export default Header;
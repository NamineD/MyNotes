import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand className='mx-2' href="#home"><i className="bi bi-journal"></i>React Notes</Navbar.Brand>
            <Nav className="me-auto">
                <Link to='/' className='nav-link'>My Notes</Link>
            </Nav>
        </Navbar>
    </>
  )
}

export default Header
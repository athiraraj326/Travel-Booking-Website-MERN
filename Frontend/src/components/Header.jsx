import React from 'react'
import { Container, Dropdown, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <Navbar className="position-fixed bg-dark w-100 p-3" style={{ zIndex: 1 }}>
                <Container className='px-5 mx-5'>
                    <Navbar.Brand href="#home">
                        <img alt="" src="logo.png" width="45" height="45" className="d-inline-block align-top" />{' '}
                        <span className='fs-2 text-warning'>Travel<span className='text-light fw-bold'>hub</span></span>
                    </Navbar.Brand>
                    <Link to={'/'} className='text-light fw-bold' style={{ textDecoration: 'none' }}>Home</Link>
                    <Link to={'/about'} className='text-light fw-bold' style={{ textDecoration: 'none' }}>About</Link>
                    <Link to={'/tours'} className='text-light fw-bold' style={{ textDecoration: 'none' }}>Tours</Link>
                    <Link to={'/contactinfo'} className='text-light fw-bold' style={{ textDecoration: 'none' }}>Contact Us</Link>
                    {
                        sessionStorage.getItem("token") ?
                            <Dropdown>
                                <Dropdown.Toggle variant="secondary border rounded" id="dropdown-basic">
                                    <i className="fa-solid fa-user me-2"></i>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            :
                            <div>
                                <Link to={'/login'}><button className='btn text-light rounded me-3'><i class="fa-regular fa-user me-2"></i>Login</button></Link>
                                <Link to={'/register'}><button className='btn bg-warning rounded-pill text-light'>Register</button></Link>
                            </div>
                    }
                </Container>
            </Navbar>

        </>
    )
}

export default Header
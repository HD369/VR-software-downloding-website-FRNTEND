import React from 'react'
import './Admin.css'
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import logo from '../Img/logo.png'
import { TfiMoreAlt } from "react-icons/tfi";

import { MdDashboard } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { HiOutlineLogout } from "react-icons/hi";
import { redirect, Link } from 'react-router-dom';
// import { TbListDetails } from "react-icons/tb";


function Navbaradmin() {

    const redirectpage = () => {
        redirect('/Admin')
    }

    return (
        <>
            {[false].map((expand) => (
                <Navbar key={expand} expand={expand} className="mb-3 adminavbar">
                    <Container fluid>
                        <Navbar.Brand href="/Dashboard"><img src={logo} alt='...' width='12%' /></Navbar.Brand>
                        
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} ><TfiMoreAlt className='text-light' /></Navbar.Toggle>

                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="start"
                            backdrop={false}
                        >
                            {/*___________ Close-button and logo (start) ______________ */}
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    HD Virtuality
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            {/*___________ Close-button and logo (end) ______________ */}


                            <Offcanvas.Body className='manubody'>
                                {/*___________ Navbar manu (start) ______________ */}
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <a href="/Dashboard" className='manulink'><MdDashboard className='manulinkicon' />{"\t"}Dashboard</a>
                                    <a href="/Paymonth" className='manulink'><RiSecurePaymentFill className='manulinkicon' />{"\t"}Pay Monthly</a>
                                    <a href="/Payyear" className='manulink'><RiSecurePaymentFill className='manulinkicon' />{"\t"}Pay Yearly</a>
                                    <Link to='/Admin' onClick={redirectpage} className='manulink'><HiOutlineLogout className='manulinkicon' />{"\t"}Logout</Link>
                                </Nav><br />
                                {/*___________ Navbar manu (enf) ______________ */}
                                <div>
                                    <img src={logo} alt='...' width='100%' />
                                </div>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default Navbaradmin
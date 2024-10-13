import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './App.css'
import access3 from './Img/access3.jpg'
import access from './Img/access.png';
import access2 from './Img/access2.jpg';

import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import { MdTouchApp } from "react-icons/md";


export const Lnading = () => {
    return (
        <>
            <CardGroup className='firstland'>
                <Card className='border-0 p-2 firstland_text homeheadertxt1 '>
                    <h1 style={{ color: 'Highlight' }}>Welcome To HD virtuality</h1><br />
                    <h6 style={{ color: 'GrayText' }}>Create immersive virtual tours of locations or travel destinations accessible via a web browser.
                        Develop VR training modules for various industries (e.g., healthcare, aviation, education, etc..) accessible on the web...</h6>
                    <br />
                    <a href='/Signup' className='btn btn-success' style={{ width: '40%' }}>Visit our Website</a>
                </Card>
                <Card className='border-0 p-5'>
                    <img src={access3} alt='...' className='firstland_img' />
                </Card>
            </CardGroup>
            <hr style={{ margin: '10%', borderWidth: '3px' }} />



            <h1 style={{ color: 'Highlight', textAlign: 'center' }}>Accessories is required for this software!</h1>
            <div>
                <CardGroup style={{ margin: '30px' }}>
                    <Card style={{ backgroundColor: 'transparent' }} className='border-0'>
                        <img variant="top" src={access} width='70%' alt='...' className='landingShadow homeheadertxt1' style={{ marginLeft: '10%' }} />
                    </Card>
                    <Card style={{ backgroundColor: 'transparent' }} className='border-0'>
                        <Card.Body>
                            <Card.Text className='text-start mt-5'>
                                <p style={{ color: 'GrayText' }}>All Accessories are free for any purchase package.<br />
                                    Virtual reality(VR) is a computer - generated environment with scenes and objects that appear to be real, making the user feel they are
                                    immersed in their surrounding. This environment is perceived through a device known as a Virtual reality headset or helmet.
                                    <br />Virtual reality(VR) is a computer - generated environment with scenes and objects that appear to be real, making the user feel they are
                                    immersed in their surrounding. This environment is perceived through a device known as a Virtual reality headset or helmet.
                                    Virtual reality(VR) is a computer - generated environment with scenes and objects that appear to be real, making the user feel they are
                                    immersed in their surrounding. This environment is perceived through a device known as a Virtual reality headset or helmet.
                                    <br />
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
            <br /><br />

            <br /><br />
            <div>
                <h1 style={{ color: 'Highlight', textAlign: 'center' }}>Wondering how all of this actually works?</h1><br />
                <CardGroup style={{ margin: '30px' }}>
                    <Card style={{ backgroundColor: 'transparent' }} className='border-0'>
                        <Card.Body>
                            <Card.Text className='text-start mt-5'>
                                <p style={{ color: 'GrayText' }}>All Accessories are free for any purchase package.
                                    Virtual reality(VR) is a computer - generated environment with scenes and objects that appear to be real, making the user feel they are
                                    immersed in their surrounding. This environment is perceived through a device known as a Virtual reality headset or helmet.
                                    <br />Virtual reality(VR) is a computer - generated environment with scenes and objects that appear to be real, making the user feel they are
                                    immersed in their surrounding. This environment is perceived through a device known as a Virtual reality headset or helmet.
                                    Virtual reality(VR) is a computer - generated environment with scenes and objects that appear to be real, making the user feel they are
                                    immersed in their surrounding. This environment is perceived through a device known as a Virtual reality headset or helmet.
                                    <br />
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ backgroundColor: 'transparent' }} className='border-0' >
                        <img variant="top" src={access2} width='80%' alt='...' className='landingShadow homeheadertxt1' style={{ marginLeft: '10%' }} />
                    </Card>
                </CardGroup>
            </div>


            <br /><br /><br />
            <hr style={{ borderWidth: '5px', borderStyle: 'dashed' }} />
            <div className="text-center"><br />
                <a href="https://www.facebook.com"><FaFacebook className='Social_landing_link_Facebook m-2' /></a>
                <a href="https://www.Instagram.com"><AiFillInstagram className='Social_landing_link_Insta m-2' /></a>
                <a href="https://www.linkedin.com"><FaLinkedin className='Social_landing_link_Linkdin m-2' /></a>
                <a href="https://www.youtube.com"><FaYoutube className='Social_landing_link_Youtube m-2' /></a>
                <br/>
                <a href='/Signup' className='btn btn-success' style={{width:'50%'}}>Get in touch{"\t"}<MdTouchApp className='fs-3'/></a>
            </div>
            <br /><br /><br />

        </>
    )
}
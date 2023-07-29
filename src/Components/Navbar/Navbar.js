import React, { useState } from 'react'
import {FaFacebookF, FaSkype, FaYoutube, FaLinkedin, FaAmazon} from 'react-icons/fa';
import './style.css'

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    const changeNavbar = () => {
        setShowNavbar(!showNavbar);
    }

return (
    <header>
        <h1>GAA<span>Games</span></h1>
        <div onClick={changeNavbar}><FaAmazon id='nav_button'/></div>
        <div className={`right ${(showNavbar) ? 'showNav' : ''}`}>
            <div>
                <div className='top'>
                    <div className='auth'>
                        {/* <div> */}
                            <a href='/'><FaFacebookF  id='social'/><p>Facebook</p></a>
                            <a href='/'><FaLinkedin id='social'/><p>LinkedIn</p></a>
                            <a href='/'><FaSkype id='social'/><p>Skype</p></a>
                            <a href='/'><FaYoutube id='social'/><p>YouTube</p></a>
                        {/* </div> */}
                        <div id='space'></div>
                        <a href='/' id='login'>LOGIN</a>
                        <a href='/' id='signup'>SIGN UP</a>
                    </div>
                </div>
            </div>
            <div className='links'>
                <a href='/' className='active'>Home</a>
                <a href='/'>About</a>
                <a href='/'>Blog</a>
                <a href='/'>Games</a>
                <a href='/'>Community</a>
                <a href='/'>eSports</a>
                <a href='/'>Contact</a>
            </div>
        </div>
    </header>
)
}

export default Navbar
import React from 'react'
import './style.css'

const Navbar = () => {
return (
    <header>
        <h1>GAA<span>Games</span></h1>
        <div className='right'>
            <div>
                <div className='top'>
                    {/* social media images here */}
                    <div className='auth'>
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
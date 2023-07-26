import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import spartan_female from '../../Assets/myImages/landscape/sparta_female.jpg';
import sparta from '../../Assets/myImages/landscape/sparta.jpg';
import sifu from '../../Assets/myImages/landscape/sifu.png';
import './style.css'

const Hero = () => {
  const images = [sifu, spartan_female, sparta]
  const [imageIndex, setImageIndex] = useState(0)
  const [defaultBg, setDefaultBg] = useState(images[imageIndex]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearTimeout(timer);
  }, [images.length, images]);

  useEffect(() => {
    setDefaultBg(images[imageIndex]);
  }, [imageIndex, images]);

  return (
    <div className='hero' style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${defaultBg})` }}>
        <Navbar/>
        <h1 id='hero-text'>RETURN OF THE SPARTANS</h1>
        <div className='details'>
          <p>
            An immersive action-packed game that transports players to ancient Greece,
            where they take on the role of a fearless Spartan warrior.
          </p>
        </div>
        <div className='hero-links'>
          <a href='/'>MORE DETAILS</a>
          <a href='/'>GET NOW</a>
        </div>
        <div className='slider'>
          <div className='circle active'></div>
          <div className='circle'></div>
          <div className='circle'></div>
        </div>
    </div>
  )
}

export default Hero
import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import games from '../../Assets/myImages/landscape/games_collage.jpg';
import games3 from '../../Assets/myImages/landscape/games_collage_3.jpg';
import games2 from '../../Assets/myImages/landscape/games_collage_2.png';
import './style.css'

const Hero = () => {
  const images = [games, games2, games3];

  const [imageIndex, setImageIndex] = useState(0);
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

  const changeActiveImage = (img_id) => {
    setImageIndex(img_id);
  };

  return (
    <div className='hero' style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${defaultBg})` }}>
        <Navbar/>
        <h1 id='hero-text'>Unleash Your True Potential!</h1>
        <div className='details'>
          <p>
          Whether you seek thrilling adventures, strategic conquests,
          or simply wish to unwind with casual games, our website has
          something extraordinary for every player.<span id='on_large'> Join us today and
          unlock the gateway to endless excitement, camaraderie, and gaming mastery!</span>
          </p>
        </div>
        <div className='hero-links'>
          <a href='/'>MORE DETAILS</a>
          <a href='/'>GET NOW</a>
        </div>
        <div className='slider'>
          <div className={`circle ${ (imageIndex === 0) ? 'active' : ''}`} onClick={() => changeActiveImage(0)}></div>
          <div className={`circle ${ (imageIndex === 1) ? 'active' : ''}`} onClick={() => changeActiveImage(1)}></div>
          <div className={`circle ${ (imageIndex === 2) ? 'active' : ''}`} onClick={() => changeActiveImage(2)}></div>
        </div>
    </div>
  )
}

export default Hero
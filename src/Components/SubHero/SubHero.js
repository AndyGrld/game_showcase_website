import React from 'react'
import './style.css'

const SubHero = ({backgroundImage, title}) => {
  return (
    <div className='subhero' style={{background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${backgroundImage}) center/cover no-repeat`}}>
      <div className='container1'>
        <div className='title'>
          <h2>
            {title}
          </h2>
        </div>
        <div className='description'>
          <p>
            Doki Doki Literature Club is an immersive game blending romance, suspense, and psychological
            horror. It challenges reality and explores the power of choice, leaving players captivated and questioning.
          </p>
        </div>
        <div className='ratings'>
          <p>Star</p>
        </div>
        <div className='release'>
          <p>January 23, 2016</p>
        </div>
        <div className='viewbtn'>
          <div>
            <a href='/'>
              <button>Details</button>
            </a>
          </div>
        </div>
      </div>
      <div className='container2'></div>
    </div>
  )
}

export default SubHero
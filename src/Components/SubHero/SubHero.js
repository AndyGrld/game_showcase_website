import React from 'react'
import './style.css'
import {FaStar} from 'react-icons/fa';

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
          Dive into a realm of excitement and strategy as you take on
          various roles, from brave heroes and cunning adventurers to skilled athletes and fierce warriors.
          <span>
            Immerse yourself in stunning landscapes,richly detailed
            environments, and breathtaking graphics that bring the game to life.
          </span>
          </p>
        </div>
        <div className='ratings'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
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
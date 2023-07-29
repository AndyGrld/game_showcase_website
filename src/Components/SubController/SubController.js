import React, { useState } from 'react'
import SubHero from '../SubHero/SubHero'
import './style.css'
import ac_brotherhood from '../../Assets/myImages/portrait/ac-brotherhood.png'
import sifu from '../../Assets/myImages/portrait/sifu.jpg'
import injustice2 from '../../Assets/myImages/portrait/injustice.png'
import nfs_heat from '../../Assets/myImages/portrait/nfs_heat.jpg'
import watch_dogs from '../../Assets/myImages/portrait/watch_dogs.jpg'
import ac_brotherhood_bg from '../../Assets/myImages/landscape/assassinscreedmirage.jpg'
import sifu_bg from '../../Assets/myImages/landscape/sifu.png'
import injustice2_bg from '../../Assets/myImages/landscape/injustice.jpg'
import nfs_heat_bg from '../../Assets/myImages/landscape/nfs_heat.jpg'
import watch_dogs_bg from '../../Assets/myImages/landscape/watch_dogs.jpg'

const SubController = () => {
    const images =  [watch_dogs, ac_brotherhood, sifu, injustice2, nfs_heat]
    const back_images = [watch_dogs_bg, ac_brotherhood_bg, sifu_bg, injustice2_bg, nfs_heat_bg]
    const titles = ['Watch Dogs Legion', 'Assassins Creed', 'Sifu', 'Injustice 2', 'Need for Speed Heat']

    const [backgroundImage, setBackgroundImage] = useState(back_images[0])
    const [imageTitle, setImageTitle] = useState(titles[0])
    const [id, setId] = useState(0);

    const changeImageInfo = (index) => {
        setBackgroundImage(back_images[index]);
        setImageTitle(titles[index]);
        setId(index);
    }

  return (
    <div className='subcontroller'>
        <SubHero backgroundImage={backgroundImage} title={imageTitle}/>
        <div className='row'>
            <div className={`m-card ${(id === 0) ? 'active_sub_bg' : ''}`} onClick={() => changeImageInfo(0)}>
                <img loading='lazy' src={images[0]} alt='background 1'/>
            </div>
            <div className={`m-card ${(id === 1) ? 'active_sub_bg' : ''}`} onClick={() => changeImageInfo(1)}>
                <img loading='lazy' src={images[1]} alt='background 2'/>
            </div>
            <div className={`m-card ${(id === 2) ? 'active_sub_bg' : ''}`} onClick={() => changeImageInfo(2)}>
                <img loading='lazy' src={images[2]} alt='background 3'/>
            </div>
            <div className={`m-card ${(id === 3) ? 'active_sub_bg' : ''}`} onClick={() => changeImageInfo(3)}>
                <img loading='lazy' src={images[3]} alt='background 4'/>
            </div>
            <div className={`m-card ${(id === 4) ? 'active_sub_bg' : ''}`} onClick={() => changeImageInfo(4)}>
                <img loading='lazy' src={images[4]} alt='background 5'/>
            </div>
        </div>
    </div>
  )
}

export default SubController
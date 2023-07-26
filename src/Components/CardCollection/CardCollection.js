import React from 'react'
import './style.css'
import Card from '../Card/Card'
import tomb_raider from '../../Assets/myImages/portrait/tomb_raider.jpg'
import blur from '../../Assets/myImages/portrait/blur.png'
import fifa_24 from '../../Assets/myImages/portrait/fifa23.jpg'
import legend_of_zelda from '../../Assets/myImages/portrait/legend_of_zelda.jpg'
import hollow_knight from '../../Assets/myImages/portrait/hollow_knight.png'
import jump_force from '../../Assets/myImages/portrait/jump_force.jpg'
import DDLC from '../../Assets/myImages/portrait/doki_doki.jpg'
import hades from '../../Assets/myImages/portrait/hades.png'

const CardCollection = () => {
return (
        <div className='collection'>
        <Card name='Rise of the Tomb Raider' desc="Experience the excitement of Lara's
                daring exploits and unravel captivating mysteries in this
                unforgettable gaming journey." categories='ACTION, ADVENTURE'
                backgroundImageURL={tomb_raider}/>
        <Card name='Blur' desc='Immerse yourself in the captivating world of "Blur,"
                an adrenaline-pumping racing game that takes high-speed action to a new level.' 
                categories='Sports, Racing' backgroundImageURL={blur}/>
        <Card name='FIFA 2024' desc="Showcase your skills on the pitch, build your dream team,
                and compete against players from around the world in this ultimate celebration of
                the world's most popular sport." categories='Sports' backgroundImageURL={fifa_24}/>
        <Card name='Legend of Zelda' desc='Play as the courageous hero, Link, as you journey through
                a vast and enchanting world filled with secrets, puzzles, and legendary quests.' categories='RPG, Adventure, Fantasy'
                backgroundImageURL={legend_of_zelda}/>
        <Card name='Hollow Knight' desc="Descend into the hauntingly beautiful underground kingdom of Hallownest,
                where you'll encounter unique creatures, unravel ancient secrets, and face challenging battles." categories='RPG, Adventure'
                backgroundImageURL={hollow_knight}/>
        <Card name='Jump Force' desc='Get ready to unleash your ultimate power and become the champion in this extraordinary anime crossover showdown.' categories='Action'
                backgroundImageURL={jump_force}/>
        <Card name='Doki Doki Literature Club' desc='"Doki Doki Literature Club" is an immersive game blending romance, suspense, and psychological
                horror. It challenges reality and explores the power of choice, leaving players captivated and questioning.' categories='Horror, Novel'
                backgroundImageURL={DDLC}/>
        <Card name='Hades' desc='Prepare for intense battles, challenging encounters, and a captivating narrative as you strive to escape the realm of
                the dead. Will you defy destiny and uncover the secrets of Hades?' categories='RPG, Action, Adventure'
                backgroundImageURL={hades}/>
        </div>
)
}

export default CardCollection
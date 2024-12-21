import React from 'react'
import "./Hero.css"
import { PrimaryButton } from '../../components/index';



const Hero = () => {
  return (
    <div className='main-Hero'>
        <div className='text-hero'>
            <h6 className='hero-subtitle'>Welcome To Cyborg</h6>
            <h1 className='hero-title'><em>BROWSE</em> OUR POPULAR GAMES HERE</h1>
        </div>

<PrimaryButton>
            <a href='browse-html'>Browse now</a>
</PrimaryButton>

    </div>
  )
}


export default Hero
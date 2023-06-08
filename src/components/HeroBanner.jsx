import React from 'react'
import img from '../assets/pic-1.webp'

const HeroBanner = () => {
  return (
    <div className='hero-banner-container'>
        <div>
            <p className="beats-solo">SMALL TEXT</p>
            <h3>MID TEXT</h3>
            <h1>FINE</h1>
            <img src={img} alt='headphones' className='hero-banner-image'/>
            <div>
              <button type='button'>Explore</button> 
              <div className="desc">
                <h5>Description</h5>
                <p>DESCRIPTION</p>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default HeroBanner
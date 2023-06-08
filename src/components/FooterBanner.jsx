import React from 'react'
import img from '../assets/pic-1.webp'

const FooterBanner = () => {
  return (
    <div className='footer-banner-container main-container'>
        <div className="banner-desc">
            <div className="left"> 
                <p>footerbanner</p>  
                <h3>large text</h3>  
                <h3>Happy</h3>  
                <p>Sale Time</p>  
            </div>
            <div className="right">
                <p>Small Text</p>
                <h3>Mid Text</h3>
                <p>desc</p>
            </div>
            <img src={img} alt="" className='footer-banner-image' />
        </div>
    </div>
  )
}

export default FooterBanner
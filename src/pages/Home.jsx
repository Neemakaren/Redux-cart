import React from 'react'
import HeroBanner from '../components/HeroBanner'
import Products from '../components/Products'
import FooterBanner from '../components/FooterBanner'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='main-container'>
        <Navbar/>
        <HeroBanner/>
        <div className="products-heading">
          <h2>Best Seller Products</h2>
          <p>speaker There are many variations passages</p>
       </div>
       <div className='product-container'>
        <Products/>
       </div>
       <FooterBanner />
       <Footer />
    </div>
  )
}

export default Home
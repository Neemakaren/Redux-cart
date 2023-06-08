import { useState } from 'react';
import './App.css';
import Products from './components/Products';
import axios from 'axios';
import Home from './pages/Home';
import Cart from './pages/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    // <div className='layout'> 
    //   <Home />
    // </div>
  )
}

export default App

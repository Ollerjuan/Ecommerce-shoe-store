 import './HomeScreen.css'
import React from 'react'
import Product from '../Components/Product'

const Home = () => {
  return <div className='homescreen'>
    <div className='car_pic'/>
       <h1 className='Current_list'>Current Shoes for sale</h1> 
       <div screen="homescreen_products">
          <Product />
          <Product />
          <Product />
          
       </div>
    </div>
  
}

export default Home;
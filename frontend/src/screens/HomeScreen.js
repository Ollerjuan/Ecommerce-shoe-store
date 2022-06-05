 import './HomeScreen.css'
import React from 'react'
import Product from '../Components/Product'


const Home = () => {
   
  return <div className='homescreen'>

      <img className="banner" src="http://s3.nikecdn.com/events-platform/pre-prod/NET_Admin/header/2017-05-20_657_Banner_Blue.jpeg"/>

       <h1 className='Current_list'>Current Shoes for sale</h1> 
       <div className="homescreen_products">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          
       </div>
       
    </div>
  
}

export default Home;
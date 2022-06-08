 import './HomeScreen.css'
import React from 'react'
import Product from '../Components/Product'


const Home = () => {
   
  return <div className='homescreen'>

      <img className="banner" alt=''/>
   
       <h1 className='Current_list'>Current Shoes for sale
 
       <input className="bar" type="text" id="myInput" onkeyup="myFunction()" placeholder="Search shoes..."></input>

       </h1> 

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
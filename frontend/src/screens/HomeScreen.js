import './HomeScreen.css'
import React from 'react'
import Product from '../Components/Product'
import Product1 from '../Components/product1'



const Home = () => {
   


  return <div className='homescreen'>
      <img className="banner" alt=''/>
   
       <h1 className='Current_list'>Current Shoes for sale
 
       <input className="bar" type="text" id="myInput" onkeyup="myFunction()" placeholder="Search shoes..."></input>

       </h1> 

       <div className="homescreen_products">
         <Product1 />
          <Product />
          <Product /> 
          <Product />
          <Product />
        
      
   
          
       </div>
 
    </div>
    
  
}

export default Home;





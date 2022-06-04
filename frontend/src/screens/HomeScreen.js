//  import './HomeScreen.css'
import React from 'react'
import Product from '../Components/Product'

const Home = () => {
  return <div className='homeScreen'>
       {/* <div className='bus_pic'> */}
        <img className='rolling' src="https://media0.giphy.com/media/clufgbyIA9Q2a23uQF/giphy.gif?cid=790b7611216ab7e300ed29c728e2840cb284f88f345355e4&rid=giphy.gif&ct=g" alt=""/>
      {/* </div> */}
       <h1 className='Current_list'>Current Shoes for sale</h1> 
       <div screen="homescreen_products">
          <Product />
          <Product />
          <Product />
          
       </div>
    </div>
  
}

export default Home;
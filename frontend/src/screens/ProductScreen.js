import React from 'react'
import './ProductScreen.css';

function View() {

  return(
   <div className='productscreen'>
    <div className='left_screen'>
      <img className="picture" src='https://images.stockx.com/images/Adidas-Yeezy-Boost-350-V2-Cream-White-1-1.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1606322741' alt="loading" />
  
      <div className='left_info'>
        <p className='shoe_name'> Yeezy</p>
        <p className='Style'>Style: Triple White </p>
        <p className='shoe_size'>Size: 8</p>
      </div>
    </div>
  
   
    <div className='right_screen'>
        <div className='right_info'>
          <p>
            Price: <span> 250$</span>
          </p>
          <p>
            Status: <span> In Stock</span>
          </p>
          <p>
            <button className="button" type="button"> Add to Cart</button>
          </p>
        
        </div>
    </div>
  </div>
  )
  
}

export default View;
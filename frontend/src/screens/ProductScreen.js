import React from 'react'
import './ProductScreen.css';


function View() {

  return <div className='productscreen'>
    <div className='left_screen'>
      <img src='https://images.stockx.com/images/Adidas-Yeezy-Boost-350-V2-Cream-White-1-1.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1606322741' alt="loading" />
  
    </div>
      <div className='left_info'>
        <p className='shoe_name'> Yeezy</p>
        <p className='price'>Price: $250.00</p>
        <p className='shoe_size'>Size: 8</p>
      </div>
  

  </div>
 

}

export default View;
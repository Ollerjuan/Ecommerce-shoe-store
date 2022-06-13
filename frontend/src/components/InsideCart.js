import React from 'react'
import './InsideCart.css';
import { Link } from 'react-router-dom'

export const InsideCart = () => {
 
  return (
    <div className="cartitem">
        <div className='cart_item'>
            <img className='productone' src="https://images.stockx.com/images/Adidas-Yeezy-Boost-350-V2-Cream-White-1-1.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1606322741" alt="logo"/>
        </div>
        <Link to={`/ProductScreen/`} className="product_one">
            <p> Yeezy Triple white</p>

        </Link>
        {/* <p className='cartitem_price'> 250$</p> */}

        <button className='delete'> Delete</button>
    </div>
  )
}
export default InsideCart


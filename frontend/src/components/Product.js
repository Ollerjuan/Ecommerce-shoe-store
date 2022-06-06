import React from 'react'
import { Link } from 'react-router-dom';
import './Product.css'

function Product() {
  return (
    <div className='product'>
        <img className='image' src="https://images.stockx.com/images/Adidas-Yeezy-Boost-350-V2-Cream-White-1-1.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1606322741" alt=""/>
       <div className='info'>
        <p className='product_name'> Yeezy triple white</p>
        <p className='shoe_price'>$250.00</p>

        <Link to={`/Product/${1111}`} className="view_button"> View Product</Link>
        </div>
    </div>
  )
}

export default Product
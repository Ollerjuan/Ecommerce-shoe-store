import React from 'react'
import { Link } from 'react-router-dom';
import './product1.css'


function Product1() {
  return (
    <div className='product'>
        <img className='image' src="https://images.stockx.com/images/Nike-Blazer-Mid-77-Vintage-White-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1606325720" alt=""/>
       <div className='info'>
        <p className='product_name'> Blazer Mid 77 Vintage White Blacks</p>
        <p className='shoe_price'>$110.00</p>

        <Link to={`./ProductScreen`} className="view_button"> View Product</Link>
        {/* <Link to={`/screens/ProductScreen/${11}`} className="info__button"> Viewsss </Link> */}
        </div>

    </div>

  )
}

export default Product1;
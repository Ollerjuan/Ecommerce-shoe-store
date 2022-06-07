import React from 'react'
import InsideCart from '../Components/InsideCart';
import './CartScreen.css';

const Cart = () => {
    return <div className="cartscreen">
        <div className='cart_left'>
            <h2> Shopping Cart</h2>

            <InsideCart />
        </div>  
        <div className='cart_right'>
            <div className='cartinfo'>
                <p> Subtotal (0) Items</p>
                <p> 250$</p>
            </div>
            <div className='buying'>
                <button className='checkout'>Checkout</button>
            </div>
        </div>  
    </div>
}
export default Cart;

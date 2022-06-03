import './Nav.css';
import {Link} from 'react-router-dom';


const Nav = () => {
    return (
        <nav className='navbar'>
            <div className='nav_logo'>
                <h3>Elite Shoes</h3>
            </div>

            <ul className='nav_links'>
                <li>
                    <Link to='./cart' className="cart_link">
                        <i className="cart_symbol"></i>
                        <span className='cartlogo_badge'></span>
                        
                        {/* Cart */}
                    </Link>
                </li> 
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/Login'>
                        Logout
                    </Link>
                </li>

            </ul>


        </nav>
    )
}
export default Nav;
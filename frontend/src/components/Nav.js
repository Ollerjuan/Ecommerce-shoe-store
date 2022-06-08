import './Nav.css';
import {Link} from 'react-router-dom';
// import Loginbutton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';

const Nav = () => {
    return (
        <nav className='navbar'>
            <div className='navlogo'>
                <h3>Elite Shoes</h3>
            </div>
                <Profile />

             

            <ul className='nav_links'>
                <li>
                    {/* <Loginbutton /> */}
                    <Link to='./cart' className="cart_link">
                        <i className="cart_symbol"></i>
                        {/* <span className='cart_symbol'></span> */}
                        
                        {/* Cart */}
                    </Link>
                </li>
                <li>
                    <Link to="/" className="home">
                        Home
                    </Link>
                </li>
        
                

                <li>
                 
                <div className='logout'>
                <LogoutButton />
                </div>
               
                </li>
                
                <li>
                    <Link to="/CreatePost" className="new_post">
                        Post
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
export default Nav;
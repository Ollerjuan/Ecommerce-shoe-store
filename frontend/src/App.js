import './App.css';
import { Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from 'react-router-dom'

//components
import Nav from './Components/Nav';
// import Login from './Components/Login';

//screens added
import Home from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Cart from './screens/CartScreen';
// import LoginScreen from './screens/LoginScreen';

function App() {
  return (
    <Router>
      <Nav />
        <Routes>
          <Route path="/" element={<Home/>}/>       
          <Route path="cart/" element={<Cart />} />
          {/* <Route path="Login/" element={<LoginScreen />} /> */}
          <Route path="product/" element={<ProductScreen />} />
          <Route path="./Product/:id" Component={<ProductScreen />}/>
          {/* <Route path="CartScreen/" Component={<CartScreen />}/>  */}
        </Routes>
    </Router>
  );
}

export default App;

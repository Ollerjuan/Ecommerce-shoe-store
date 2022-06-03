import './App.css';
import { Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from 'react-router-dom'

//components
import Nav from './Components/Nav';


//screens added
import Home from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Cart from './screens/CartScreen';

function App() {
  return (
    <Router>
      <Nav />
        <Routes>
          <Route path="/" element={<Home/>}/>       
          <Route path="cart/" element={<Cart />} />
          <Route path="product/" element={<ProductScreen />} />
          {/* <Route path="./Product/:id" Component={<ProductScreen />}/>
          <Route path="CartScreen/" Component={<CartScreen />}/> */}
        </Routes>
    </Router>
  );
}

export default App;

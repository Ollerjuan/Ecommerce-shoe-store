import './App.css';
import { Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from 'react-router-dom'


//components
import Nav from './Components/Nav';
// import Loginbutton from './Components/LoginButton';
import LogoutButton from './Components/LogoutButton';

//screens added
import Home from './screens/HomeScreen';
import View from './screens/ProductScreen';
import Cart from './screens/CartScreen';
import Login from './screens/LoginScreen';
import Profile from './Components/Profile';

function App() {
  return (
    <Router>
      <Nav />
        <Profile />
        {/* <Loginbutton /> */}
        <LogoutButton />
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="Home/" element={<Home/>}/>    
          <Route path="cart/" element={<Cart />} />
          <Route path="productScreen/" element={<View />} />
          <Route path="./Product/:id" Component={<View />}/>
        </Routes>
    </Router>
  );
}

export default App;

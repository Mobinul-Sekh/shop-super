import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './pages/home/home';
import Signup from './pages/signup/signup';
import Login from './pages/login/login';
import Cart from './pages/cart/cart';
import ProductDetails from './pages/product-details/product-details';
// import Header from './components/header/header';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/product-details' element={<ProductDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App

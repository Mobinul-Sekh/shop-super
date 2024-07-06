import { Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './pages/home/home';
import Signup from './pages/signup/signup';
import Login from './pages/login/login';
import Cart from './pages/cart/cart';


function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path='/' element={<Login/>}/>
    //     <Route path='/signup' element={<Signup/>}/>
    //     <Route path='/home' element={<Home/>}/>
    //     <Route path='/cart' element={<Cart/>}/>
    //   </Routes>
    // </Router>
    <>
      <Home/>
      {/* <Cart/> */}
      {/* <Login/> */}
      {/* <Signup/> */}
    </>
  );
}

export default App

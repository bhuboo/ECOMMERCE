import './App.css';
import "react-toastify/dist/ReactToastify.css"
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import {ToastContainer} from "react-toastify"

import Navbar from './component/Navbar';
import Cart from './component/Cart';
import Home from './component/Home';
import Notfound from './component/Notfound';
import Register from './component/auth/Register';
import Login from './component/auth/Login';
function App() {
  return (
   <div>
    <BrowserRouter>
    <ToastContainer/>
    <Navbar/>
    <Routes>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/register'  element={<Register/>}/>
      <Route path='/login'  element={<Login/>}/>
      <Route path='*' exact element={<Notfound/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

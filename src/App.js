import './app.module.scss';
import Home from './pages/home/Home';
import AboutUs from './pages/about/AboutUs';
import Menu from './pages/menu/Menu';
import Reservations from './pages/reservations/Reservations';
import OrderOnline from './pages/order_online/OrderOnline';
import Login from './pages/login/Login';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/reservations' element={<Reservations />} />
        <Route path='/order-online' element={<OrderOnline />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

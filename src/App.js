import React, { useReducer } from 'react';
import './app.module.scss';
import Home from './pages/home/Home';
import AboutUs from './pages/about/AboutUs';
import Menu from './pages/menu/Menu';
import Reservations from './pages/reservations/Reservations';
import Booking from './pages/reservations/Booking';
import OrderOnline from './pages/order_online/OrderOnline';
import Login from './pages/login/Login';
import { fetchAPI } from './API/GetData';

import { Routes, Route } from 'react-router-dom';

//Reducer function to update times
const updateTimes = (availableTimes, action) => {
  return {
    times: availableTimes.times.filter((value) => value !== action.value),
  };
};

const today = new Date();

export function initializeTimes() {
  const times = fetchAPI(today);
  return { times: times };
}

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/menu' element={<Menu />} />
        <Route
          path='/reservations'
          element={<Reservations initialTimes={availableTimes} />}
        />
        <Route path='/booking' element={<Booking dispatch={dispatch} />} />
        <Route path='/order-online' element={<OrderOnline />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

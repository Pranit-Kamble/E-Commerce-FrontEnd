import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Store from '../Pages/Store/Store'
import Ipad from '../Pages/Ipad/Ipad'
import Iphone from '../Pages/Iphone/Iphone'
import Accesories from '../Pages/Accesories/Accesories'
import Mackbook from '../Pages/Macbook/Mackbook'
import CartItems from '../CartItems/CartItems'
import Register from '../Login/Register'
import Login from '../Login/Login'

const RoutesFile = () => {
  return (
   
 <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/store' element={<Store/>} />
    <Route path='/ipad' element={<Ipad/>} />
    <Route path='/iphone' element={<Iphone/>} />
    <Route path='/macbook' element={<Mackbook/>} />
    <Route path='/accesories' element={<Accesories/>} />
    <Route path='/cart' element={<CartItems/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/login' element={<Login/>} />
 </Routes>
            
  )
}

export default RoutesFile
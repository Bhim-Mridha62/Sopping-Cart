import React from 'react'
// import './Style/SoppingCart.css'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SoppingCartNavbar from './SoppingCartNavbar'
import store from './Store/SoppingCartStore'
import SoppingCartProduct from './SoppingCartProduct'
import SoppingCartCart from './SoppingCartCart'
function SoppingCart() {
  return (
    <div>
   <Provider store={store}>
    <BrowserRouter>
     <SoppingCartNavbar/>
     <Routes>
        <Route path='/' element={<SoppingCartProduct/>}></Route>
        <Route path='/cart' element={<SoppingCartCart/>}></Route>
     </Routes>
    </BrowserRouter>
   </Provider>
    </div>
  )
}

export default SoppingCart
import React from 'react'
import { Link } from 'react-router-dom';
import './Style/SoppingCartNavbar.css'
import { useSelector } from 'react-redux';
function SoppingCartNavbar() {
    const item=useSelector((state)=>state.cart)
  return (
    <div className="navbar">
  <div className="navbar-inner">
    <span className="navbar-brand">Shopping</span>
    <div className="navbar-links">
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
      <span className="cart-info">Cart item: {item.length}</span>
    </div>
  </div>
</div>
  )
}

export default SoppingCartNavbar
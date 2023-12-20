import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ShoppingCart from './components/SoppingCart.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShoppingCart/>
  </React.StrictMode>
);
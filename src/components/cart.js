// Cart.js
import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
const Cart = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div>{item.name}</div>
          <div>Quantity: {item.quantity}</div>
        </div>
      ))}
    </div>
  );
};

export default Cart;

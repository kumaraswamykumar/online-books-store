import React from "react";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { items, removeFromCart, increaseQty, decreaseQty } = useCart();

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="container cart-page">
      <h2>Your Cart</h2>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {items.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.cover || item.image || "/default-cover.png"} alt={item.title} />
                <div className="cart-info">
                  <h3>{item.title}</h3>
                  <p className="price">₹{item.price}</p>
                  <div className="qty-controls">
                    <button onClick={() => decreaseQty(item.id)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => increaseQty(item.id)}>+</button>
                  </div>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total: ₹{total}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

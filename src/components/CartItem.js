import React from "react";
import { useCart } from "../context/CartContext";

export default function CartItem({ item }) {
  const { remove, setQty } = useCart();

  return (
    <div className="cart-item">
      <img src={item.volumeInfo.imageLinks?.thumbnail} alt={item.volumeInfo.title} />
      <div className="cart-info">
        <strong>{item.volumeInfo.title}</strong>
        <div className="muted small">{(item.volumeInfo.authors || []).join(", ")}</div>
        <div style={{ marginTop: 8 }}>
          <button className="outline" onClick={()=> setQty(item.id, Math.max(1, item.qty-1))}>-</button>
          <span className="qty">{item.qty}</span>
          <button className="outline" onClick={()=> setQty(item.id, item.qty+1)}>+</button>
        </div>
      </div>
      <div style={{ marginLeft: "auto", textAlign: "right" }}>
        <div>₹{(item.price * item.qty).toFixed(2)}</div>
        <button className="outline small" onClick={()=> remove(item.id)}>Remove</button>
      </div>
    </div>
  );
}

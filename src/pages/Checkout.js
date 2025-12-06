import React, { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Checkout(){
  const { items, total, clear } = useCart();
  const [form, setForm] = useState({ name: "", email: "", address: "" });
  const [status, setStatus] = useState("");

  function onSubmit(e){
    e.preventDefault();
    if (!items.length) return alert("Cart empty");
    setStatus("processing");
    setTimeout(() => {
      setStatus("done");
      clear();
    }, 900);
  }

  return (
    <div className="container">
      <h2>Checkout</h2>
      <div className="checkout-grid">
        <form className="checkout-form" onSubmit={onSubmit}>
          <label className="label">Name</label>
          <input className="input" value={form.name} onChange={(e)=> setForm({...form, name: e.target.value})} required />
          <label className="label">Email</label>
          <input className="input" type="email" value={form.email} onChange={(e)=> setForm({...form, email: e.target.value})} required />
          <label className="label">Address</label>
          <textarea className="input" rows={4} value={form.address} onChange={(e)=> setForm({...form, address: e.target.value})} required />
          <button className="button" type="submit" disabled={status==="processing"}>
            {status==="processing" ? "Placing order…" : `Place order (₹${total.toFixed(2)})`}
          </button>
          {status==="done" && <div className="card" style={{ marginTop: 12, padding: 12, background: "#ecffef" }}>Order placed — check your email (simulated)</div>}
        </form>

        <aside className="checkout-summary">
          <h3>Order Summary</h3>
          {items.map(it => (
            <div key={it.id} style={{ marginBottom: 8 }}>{it.volumeInfo.title} × {it.qty} — ₹{(it.price * it.qty).toFixed(2)}</div>
          ))}
          <hr />
          <div><strong>Total: ₹{total.toFixed(2)}</strong></div>
        </aside>
      </div>
    </div>
  );
}

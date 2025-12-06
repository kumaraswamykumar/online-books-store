import React from "react";
import { useCart } from "../context/CartContext";

export default function BookCard({ book }) {
  const { addToCart } = useCart();

  return (
    <div className="book-card">
      <img
        src={book.cover || "/default-cover.png"}
        alt={book.title}
        className="book-image"
      />
      <div className="book-info">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-price">₹{book.price}</p>
        <button onClick={() => addToCart(book)} className="btn-add">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

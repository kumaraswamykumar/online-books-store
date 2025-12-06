import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookById } from "../api/booksApi";
import { useCart } from "../context/CartContext";

export default function BookDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBookById(id)
      .then((res) => setBook(res))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="loader">Loading...</p>;
  if (!book) return <p className="error">Book not found</p>;

  return (
    <div className="container details">
      <div className="details-grid">

        <img src={book.image} className="details-img" alt={book.title} />

        <div>
          <h1>{book.title}</h1>
          <p className="price large">₹{book.price}</p>
          <p>{book.description}</p>

          <button className="button" onClick={() => addToCart(book)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

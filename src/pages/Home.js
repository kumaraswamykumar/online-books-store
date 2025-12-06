import React, { useEffect, useState } from "react";
import { searchBooks } from "../api/booksApi"; // <-- use searchBooks
import BookCard from "../components/BookCard";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [priceFilter, setPriceFilter] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch books from Open Library
  useEffect(() => {
    searchBooks("programming") // default query
      .then((res) => {
        setBooks(res);
        setFiltered(res);
      })
      .finally(() => setLoading(false));
  }, []);

  // Price filtering logic
  useEffect(() => {
    if (!priceFilter) {
      setFiltered(books);
      return;
    }

    if (priceFilter === "Above 1000") {
      setFiltered(books.filter((b) => b.price > 1000));
      return;
    }

    const limit = Number(priceFilter);
    setFiltered(books.filter((b) => b.price <= limit));
  }, [priceFilter, books]);

  return (
    <div className="home-page">
      {/* PRICE FILTER */}
      <div className="filters">
        <select
          className="price-select"
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
        >
          <option value="">All Prices</option>
          <option value="100">Below ₹100</option>
          <option value="200">Below ₹200</option>
          <option value="500">Below ₹500</option>
          <option value="1000">Below ₹1000</option>
          <option value="Above 1000">Above ₹1000</option>
        </select>
      </div>

      {loading && <p>Loading...</p>}

      {/* BOOK GRID */}
      <div className="book-grid">
        {filtered.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}

        {!loading && filtered.length === 0 && (
          <p>No books found for this price range.</p>
        )}
      </div>
    </div>
  );
}

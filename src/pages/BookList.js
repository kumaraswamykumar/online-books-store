// src/pages/BookList.js
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import BookCard from "../components/BookCard";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import PriceRange from "../components/PriceRange";

export default function BookList() {
  const [params] = useSearchParams();
  const q = params.get("q") || "";
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [priceFilter, setPriceFilter] = useState("");

  useEffect(() => {
    loadBooks();
  }, [q]);

  const loadBooks = async () => {
    try {
      setLoading(true);

      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();

      const fakeBooks = data.slice(0, 30).map((b) => ({
        id: b.id,
        title: b.title,
        price: Math.floor(Math.random() * 1500) + 100,
        image: `https://picsum.photos/200?random=${b.id}`,
      }));

      const searched = fakeBooks.filter((b) =>
        b.title.toLowerCase().includes(q.toLowerCase())
      );

      setBooks(searched);
    } catch (e) {
      setErr("Failed to load");
    } finally {
      setLoading(false);
    }
  };

  const filteredBooks = books.filter((b) => {
    if (!priceFilter) return true;

    if (priceFilter === "Above 1000") return b.price > 1000;
    return b.price <= Number(priceFilter);
  });

  return (
    <div className="container books-page">
      <div className="toolbar">
        <h2>Results for “{q}”</h2>
        <PriceRange value={priceFilter} onChange={setPriceFilter} />
      </div>

      {loading && <Loader />}
      {err && <ErrorMessage message={err} />}

      <div className="grid">
        {filteredBooks.map((b) => (
          <BookCard key={b.id} book={b} />
        ))}
      </div>

      {!loading && !filteredBooks.length && <p>No results found.</p>}
    </div>
  );
}

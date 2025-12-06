import { useEffect, useState } from "react";

export default function PriceRange() {
  const [books, setBooks] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [price, setPrice] = useState("");

  const options = ["100", "200", "500", "1000", "Above 1000"];

  useEffect(() => {
    async function fetchBooks() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();

        // Convert Fake Store API → Book format
        const formatted = data.map((b) => ({
          id: b.id,
          title: b.title,
          price: Math.floor(b.price * 80), // convert to INR
          image: b.image,
        }));

        setBooks(formatted);
        setFiltered(formatted);
      } catch (err) {
        console.error("Error loading books", err);
      }
    }
    fetchBooks();
  }, []);

  // FILTER LOGIC
  useEffect(() => {
    if (!price || price === "") {
      setFiltered(books);
      return;
    }

    if (price === "Above 1000") {
      setFiltered(books.filter((b) => b.price > 1000));
    } else {
      setFiltered(books.filter((b) => b.price <= Number(price)));
    }
  }, [price, books]);

  return (
    <div className="container">

      <h2>Filter by Price Range</h2>

      {/* PRICE SELECT DROPDOWN */}
      <div className="filters">
        <select
          className="price-select"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        >
          <option value="">Select Price</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      {/* BOOKS GRID */}
      <div className="book-grid">
        {filtered.map((book) => (
          <div className="book-card" key={book.id}>
            <img src={book.image} className="book-image" alt={book.title} />
            <h3 className="book-title">{book.title.slice(0, 30)}</h3>
            <p className="book-price">₹{book.price}</p>
            <button className="btn-add">Add to Cart</button>
          </div>
        ))}

        {filtered.length === 0 && <p>No books found in this price range.</p>}
      </div>
    </div>
  );
}

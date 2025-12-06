import React, { useState } from "react";

export default function SearchInput({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch && onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search books..."
      value={query}
      onChange={handleChange}
      className="search-input"
    />
  );
}

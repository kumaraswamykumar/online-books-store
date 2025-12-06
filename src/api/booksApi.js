// Open Library API (No key, No CORS issues)
const BASE = "https://openlibrary.org";

// Generate safe book price
function derivePrice(item) {
  const pages = item.number_of_pages;
  if (pages) return Math.max(99, Math.round(pages * 0.8));
  return 199 + ((item.key || "").length % 300);
}

// Search books
export async function searchBooks(q = "") {
  if (!q) return [];

  const url = `${BASE}/search.json?q=${encodeURIComponent(q)}`;
  const res = await fetch(url);

  if (!res.ok) throw new Error("Failed to fetch data");

  const data = await res.json();

  return data.docs.slice(0, 24).map((b) => ({
    id: b.key,
    title: b.title,
    author: b.author_name?.[0] ?? "Unknown",
    cover: b.cover_i
      ? `https://covers.openlibrary.org/b/id/${b.cover_i}-M.jpg`
      : "/default-cover.png",
    pages: b.number_of_pages_median,
    price: derivePrice(b),
  }));
}

// Single book details
export async function getBookById(id) {
  const res = await fetch(`${BASE}${id}.json`);
  const data = await res.json();

  return {
    id: data.key,
    title: data.title,
    description: data.description?.value || data.description || "No description",
    pages: data.number_of_pages,
    price: derivePrice(data),
  };
}

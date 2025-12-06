import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import SearchInput from "./SearchInput";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";

export default function Header() {
  const { items } = useCart();
  const loc = useLocation();

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="brand">📚 Readify</Link>
        {loc.pathname !== "/books" && <SearchInput />}
        <div className="header-icons">
          <Link to="/signin" className="icon-link" title="Sign In">
            <FaUserCircle size={24} />
          </Link>
          <Link to="/cart" className="icon-link cart-icon" title="Cart">
            <FaShoppingCart size={24} />
            {items.length > 0 && (
              <span className="cart-count">{items.reduce((s, i) => s + i.qty, 0)}</span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}

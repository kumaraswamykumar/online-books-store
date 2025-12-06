import React from "react";
export default function ErrorMessage({ message }) {
  return <div className="error">{message || "Something went wrong."}</div>;
}

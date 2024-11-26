import React, { useContext, useEffect } from "react";
import { BookContext } from "../BooksContext";
// import { useLocation } from "react-router-dom";

export default function Books() {
  //   const query = new URLSearchParams(useLocation().search);
  //   const search = query.get("search") || "";
  const books = useContext(BookContext);

  //   const filetredBooks = books.filter((book) =>
  //     book.title.toLowerCase().include(search.toLowerCase())
  //   );

  return (
    <div>
      <h1>All Book</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

import React, { useContext, useEffect } from "react";
import { BookContext } from "../BooksContext";
import { useParams } from "react-router-dom";

export default function BookDetails() {
  const { bookId } = useParams();
  const books = useContext(BookContext);

  const book = books.find((b) => b.id === parseInt(bookId));

  if (books.length === 0) {
    return <div>Loading...</div>;
  }

  if (book == null) {
    return <div>Book Not Found</div>;
  }
  return (
    <div>
      <h1>{book.title}</h1>
      <h2>by {book.author}</h2>
      <p>{book.description}</p>
    </div>
  );
}

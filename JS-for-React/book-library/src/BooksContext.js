import React, { useState, useEffect, createContext } from "react";

export const BookContext = createContext();

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/books.json")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((err) => console.log(err));
  }, []);

  return <BookContext.Provider value={books}>{children}</BookContext.Provider>;
};

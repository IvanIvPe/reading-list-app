import React, { createContext, useState} from "react";
import { v4 as uuid } from 'uuid';

export const BookContext = createContext();

export const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "The Name of the Wind", author: "Patrick Rothfuss", id: 1 },
    { title: "The Wise Man's Fear", author: "Patrick Rothfuss", id: 2 },
    { title: "The Slow Regard of Silent Things", author: "Ivan Pesic", id: 3 },
  ]);
    const addBook = (title, author) => {
      setBooks([...books, { title, author: author, id: uuid() }]);
    };
    const removeBook = (id) => {
      setBooks(books.filter((book) => book.id !== id));
    }
    return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
}

import React from 'react'
import Navbar from './components/Navbar'
import BookList from './components/BookList'
import AddBookForm from './components/AddBookForm'
import { BookContextProvider } from './context/BookContext'

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <AddBookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;

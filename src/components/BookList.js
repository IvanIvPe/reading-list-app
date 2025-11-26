import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext'; 
import BookDetails from './BookDetails'; 

const BookList = () => {
    const { books } = useContext(BookContext);

    return ( 
        <div className="book-list">
            {books.length ? (
                <ul>
                    {books.map(book => {
                        return ( <BookDetails book={book} key={book.id} /> );
                    })}
                </ul>
            ) : (
                <div className="empty">No books to read.</div>
            )}
        </div> 
    ); 
}

export default BookList;
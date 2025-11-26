import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';

const BookDetails = ( { book }) => {
    const { removeBook } = useContext(BookContext);
    return ( 
        <li onClick={() => removeBook(book.id)}>
            <div className="title">{ book.title }</div>
            <div className="author">{ book.author }</div>
            <button onClick={ () => removeBook(book.id) }>Delete</button>

        </li>
     );
}
 
export default BookDetails;
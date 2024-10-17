import React, { useState } from 'react';

const Booklist = () => {
  const [books, setBooks] = useState([
    { id: 1, title: 'Book One', author: 'Author A', available: true },
    { id: 2, title: 'Book Two', author: 'Author B', available: false },
  ]);

  return (
    <div>
      <h3>Available Books</h3>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Status</th>
            <th>Select</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.available ? 'Available' : 'Issued'}</td>
              <td>
                <input type="radio" name="selectedBook" disabled={!book.available} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Booklist;

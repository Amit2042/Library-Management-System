import React, { useState } from 'react';
import './AddBook.css'; 

const AddBook = () => {
  const [bookDetails, setBookDetails] = useState({
    title: '',
    author: '',
    isbn: '',
    genre: '',
    publishedDate: '',
    copies: '',
    type: 'book' // Default option is 'book'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation - check if all fields are filled
    if (!bookDetails.title || !bookDetails.author || !bookDetails.isbn || !bookDetails.genre || !bookDetails.publishedDate || !bookDetails.copies) {
      alert('Please fill in all the fields');
      return;
    }
    
    // Call the backend service to save the book (mocking here)
    console.log('Book details submitted:', bookDetails);
    alert('Book has been added successfully!');
    
    // Reset form
    setBookDetails({
      title: '',
      author: '',
      isbn: '',
      genre: '',
      publishedDate: '',
      copies: '',
      type: 'book'
    });
  };

  return (
    <div className="add-book-container">
      <h2>Add a New Book</h2>
      <form className="add-book-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={bookDetails.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            value={bookDetails.author}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="isbn">ISBN</label>
          <input
            type="text"
            id="isbn"
            name="isbn"
            value={bookDetails.isbn}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="genre">Genre</label>
          <input
            type="text"
            id="genre"
            name="genre"
            value={bookDetails.genre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="publishedDate">Published Date</label>
          <input
            type="date"
            id="publishedDate"
            name="publishedDate"
            value={bookDetails.publishedDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="copies">Number of Copies</label>
          <input
            type="number"
            id="copies"
            name="copies"
            value={bookDetails.copies}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="type">Type</label>
          <select
            id="type"
            name="type"
            value={bookDetails.type}
            onChange={handleChange}
          >
            <option value="book">Book</option>
            <option value="movie">Movie</option>
          </select>
        </div>

        <button type="submit" className="submit-button">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;

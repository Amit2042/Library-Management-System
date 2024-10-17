import React, { useState } from 'react';
import './UpdateBook.css'; // Optional for styling

const UpdateBook = () => {
  const [bookDetails, setBookDetails] = useState({
    bookId: '',
    bookName: '',
    authorName: '',
    genre: '',
    publishedYear: '',
    serialNo: '',
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

    // Validation - check if all required fields are filled
    if (!bookDetails.bookId || !bookDetails.bookName || !bookDetails.serialNo) {
      alert('Please fill in all the required fields');
      return;
    }

    // Call the backend service to update the book details (mocking here)
    console.log('Updated book details submitted:', bookDetails);
    alert('Book details updated successfully!');

    // Reset form
    setBookDetails({
      bookId: '',
      bookName: '',
      authorName: '',
      genre: '',
      publishedYear: '',
      serialNo: '',
    });
  };

  return (
    <div className="update-book-container">
      <h2>Update Book</h2>
      <form className="update-book-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="bookId">Book ID</label>
          <input
            type="text"
            id="bookId"
            name="bookId"
            value={bookDetails.bookId}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="bookName">Book Name</label>
          <input
            type="text"
            id="bookName"
            name="bookName"
            value={bookDetails.bookName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="authorName">Author Name</label>
          <input
            type="text"
            id="authorName"
            name="authorName"
            value={bookDetails.authorName}
            onChange={handleChange}
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
          />
        </div>

        <div className="form-group">
          <label htmlFor="publishedYear">Published Year</label>
          <input
            type="number"
            id="publishedYear"
            name="publishedYear"
            value={bookDetails.publishedYear}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="serialNo">Serial No</label>
          <input
            type="text"
            id="serialNo"
            name="serialNo"
            value={bookDetails.serialNo}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Update Book
        </button>
      </form>
    </div>
  );
};

export default UpdateBook;

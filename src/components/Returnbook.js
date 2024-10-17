import React, { useState } from 'react';
import './Returnbook.css'; // Optional for styling

const Returnbook = () => {
  const [returnDetails, setReturnDetails] = useState({
    memberId: '',
    bookName: '',
    authorName: '',
    serialNo: '',
    issueDate: '',
    returnDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReturnDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation - check if all required fields are filled
    if (!returnDetails.memberId || !returnDetails.bookName || !returnDetails.serialNo) {
      alert('Please fill in all the required fields');
      return;
    }

    // Call the backend service to process the return (mocking here)
    console.log('Return book details submitted:', returnDetails);
    alert('Book returned successfully!');

    // Reset form
    setReturnDetails({
      memberId: '',
      bookName: '',
      authorName: '',
      serialNo: '',
      issueDate: '',
      returnDate: '',
    });
  };

  return (
    <div className="return-book-container">
      <h2>Return Book</h2>
      <form className="return-book-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="memberId">Member ID</label>
          <input
            type="text"
            id="memberId"
            name="memberId"
            value={returnDetails.memberId}
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
            value={returnDetails.bookName}
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
            value={returnDetails.authorName}
            onChange={handleChange}
            readOnly // Auto-populated and non-editable
          />
        </div>

        <div className="form-group">
          <label htmlFor="serialNo">Serial No</label>
          <input
            type="text"
            id="serialNo"
            name="serialNo"
            value={returnDetails.serialNo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="issueDate">Issue Date</label>
          <input
            type="date"
            id="issueDate"
            name="issueDate"
            value={returnDetails.issueDate}
            onChange={handleChange}
            readOnly // Auto-populated and non-editable
          />
        </div>

        <div className="form-group">
          <label htmlFor="returnDate">Return Date</label>
          <input
            type="date"
            id="returnDate"
            name="returnDate"
            value={returnDetails.returnDate}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-button">
          Return Book
        </button>
      </form>
    </div>
  );
};

export default Returnbook;

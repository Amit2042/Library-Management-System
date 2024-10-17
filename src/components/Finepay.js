import React, { useState } from 'react';
import './Finepay.css'; // Optional for styling

const Finepay = () => {
  const [fineDetails, setFineDetails] = useState({
    memberId: '',
    fineAmount: '',
    remarks: '',
    finePaid: false, // Checkbox to indicate whether the fine is paid
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFineDetails((prevDetails) => ({
      ...prevDetails,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation - check if all required fields are filled
    if (!fineDetails.memberId || !fineDetails.fineAmount) {
      alert('Please fill in all the required fields');
      return;
    }
    
    // Call the backend service to process the fine payment (mocking here)
    console.log('Fine payment details submitted:', fineDetails);
    alert('Fine payment processed successfully!');

    // Reset form
    setFineDetails({
      memberId: '',
      fineAmount: '',
      remarks: '',
      finePaid: false,
    });
  };

  return (
    <div className="pay-fine-container">
      <h2>Pay Fine</h2>
      <form className="pay-fine-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="memberId">Member ID</label>
          <input
            type="text"
            id="memberId"
            name="memberId"
            value={fineDetails.memberId}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="fineAmount">Fine Amount</label>
          <input
            type="number"
            id="fineAmount"
            name="fineAmount"
            value={fineDetails.fineAmount}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="remarks">Remarks (optional)</label>
          <input
            type="text"
            id="remarks"
            name="remarks"
            value={fineDetails.remarks}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="finePaid"
              checked={fineDetails.finePaid}
              onChange={handleChange}
            />
            Fine Paid
          </label>
        </div>

        <button type="submit" className="submit-button">
          Process Fine Payment
        </button>
      </form>
    </div>
  );
};

export default Finepay;

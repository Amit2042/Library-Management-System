import React, { useState } from 'react';
import './UpdateMembership.css'; // Optional for styling

const UpdateMembership = () => {
  const [membershipDetails, setMembershipDetails] = useState({
    membershipNumber: '',
    extensionType: '6 months', // Default extension type
    status: 'active', // Default status
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMembershipDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation - check if all required fields are filled
    if (!membershipDetails.membershipNumber) {
      alert('Please enter your Membership Number');
      return;
    }

    // Call the backend service to update membership details (mocking here)
    console.log('Updated membership details submitted:', membershipDetails);
    alert('Membership updated successfully!');

    // Reset form
    setMembershipDetails({
      membershipNumber: '',
      extensionType: '6 months',
      status: 'active',
    });
  };

  return (
    <div className="update-membership-container">
      <h2>Update Membership</h2>
      <form className="update-membership-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="membershipNumber">Membership Number</label>
          <input
            type="text"
            id="membershipNumber"
            name="membershipNumber"
            value={membershipDetails.membershipNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="extensionType">Extension Type</label>
          <select
            id="extensionType"
            name="extensionType"
            value={membershipDetails.extensionType}
            onChange={handleChange}
          >
            <option value="6 months">6 months</option>
            <option value="1 year">1 year</option>
            <option value="2 years">2 years</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="status">Membership Status</label>
          <select
            id="status"
            name="status"
            value={membershipDetails.status}
            onChange={handleChange}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <button type="submit" className="submit-button">
          Update Membership
        </button>
      </form>
    </div>
  );
};

export default UpdateMembership;

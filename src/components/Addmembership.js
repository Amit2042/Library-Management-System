import React, { useState } from 'react';
import './Addmembership.css'; // Optional for styling

const Addmembership = () => {
  const [membershipDetails, setMembershipDetails] = useState({
    name: '',
    email: '',
    phone: '',
    membershipType: '6 months', // Default type
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
    // Validation - check if all fields are filled
    if (!membershipDetails.name || !membershipDetails.email || !membershipDetails.phone) {
      alert('Please fill in all the fields');
      return;
    }
    
    // Call the backend service to save the membership (mocking here)
    console.log('Membership details submitted:', membershipDetails);
    alert('Membership has been added successfully!');
    
    // Reset form
    setMembershipDetails({
      name: '',
      email: '',
      phone: '',
      membershipType: '6 months'
    });
  };

  return (
    <div className="add-membership-container">
      <h2>Add New Membership</h2>
      <form className="add-membership-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={membershipDetails.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={membershipDetails.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={membershipDetails.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="membershipType">Membership Type</label>
          <select
            id="membershipType"
            name="membershipType"
            value={membershipDetails.membershipType}
            onChange={handleChange}
          >
            <option value="6 months">6 Months</option>
            <option value="1 year">1 Year</option>
            <option value="2 years">2 Years</option>
          </select>
        </div>

        <button type="submit" className="submit-button">
          Add Membership
        </button>
      </form>
    </div>
  );
};

export default Addmembership;

import React, { useState } from 'react';
import './UserManagement.css'; 

const UserManagement = () => {
  const [userType, setUserType] = useState('new'); // Default to new user
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    membershipType: '6 months', // Default membership type
    membershipStatus: 'active', // Default status
  });
  const [existingUsers, setExistingUsers] = useState([]); // To store existing users

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
    setUserDetails({
      name: '',
      email: '',
      membershipType: '6 months',
      membershipStatus: 'active',
    }); // Reset user details when switching types
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    
    // Validation - check if all required fields are filled
    if (!userDetails.name || !userDetails.email) {
      alert('Please fill in all required fields');
      return;
    }

    // Add new user to the existing users list
    setExistingUsers((prevUsers) => [
      ...prevUsers,
      { ...userDetails, id: Date.now() }, // Assign a unique ID based on timestamp
    ]);

    // Reset form
    setUserDetails({
      name: '',
      email: '',
      membershipType: '6 months',
      membershipStatus: 'active',
    });
    
    alert('New user added successfully!');
  };

  const handleUpdateUser = (id) => {
    const updatedUsers = existingUsers.map((user) =>
      user.id === id ? userDetails : user
    );
    setExistingUsers(updatedUsers);
    alert('User details updated successfully!');
  };

  return (
    <div className="user-management-container">
      <h2>User Management</h2>
      <div className="user-type-toggle">
        <label>
          <input
            type="radio"
            value="new"
            checked={userType === 'new'}
            onChange={handleUserTypeChange}
          />
          New User
        </label>
        <label>
          <input
            type="radio"
            value="existing"
            checked={userType === 'existing'}
            onChange={handleUserTypeChange}
          />
          Existing User
        </label>
      </div>

      <form className="user-management-form" onSubmit={handleAddUser}>
        {userType === 'new' && (
          <>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={userDetails.name}
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
                value={userDetails.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="membershipType">Membership Type</label>
              <select
                id="membershipType"
                name="membershipType"
                value={userDetails.membershipType}
                onChange={handleChange}
              >
                <option value="6 months">6 months</option>
                <option value="1 year">1 year</option>
                <option value="2 years">2 years</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="membershipStatus">Membership Status</label>
              <select
                id="membershipStatus"
                name="membershipStatus"
                value={userDetails.membershipStatus}
                onChange={handleChange}
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>

            <button type="submit" className="submit-button">
              Add User
            </button>
          </>
        )}

        {userType === 'existing' && (
          <>
            <h3>Existing Users</h3>
            <ul>
              {existingUsers.map((user) => (
                <li key={user.id}>
                  <div>
                    <strong>Name:</strong> {user.name} | <strong>Email:</strong> {user.email} | <strong>Membership Type:</strong> {user.membershipType} | <strong>Status:</strong> {user.membershipStatus}
                    <button onClick={() => handleUpdateUser(user.id)} className="update-button">Update</button>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </form>
    </div>
  );
};

export default UserManagement;

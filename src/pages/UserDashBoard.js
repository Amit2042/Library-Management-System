import React from 'react';
import { Link } from 'react-router-dom';
import './UserDashBoard.css'; 

const UserDashBoard = () => {
  return (
    <div className="user-dashboard">
      <h1>Welcome to the Library Management System</h1>
      <p>Select an action from the options below:</p>
      
      <div className="dashboard-links">
        <Link to="/books" className="dashboard-link">
          View Available Books
        </Link>
        
        <Link to="/issue-book" className="dashboard-link">
          Issue a Book
        </Link>
        
        <Link to="/return-book" className="dashboard-link">
          Return a Book
        </Link>
        
        <Link to="/pay-fine" className="dashboard-link">
          Pay Fines
        </Link>
        
        <Link to="/add-membership" className="dashboard-link">
          Add Membership
        </Link>
        
        <Link to="/update-membership" className="dashboard-link">
          Update Membership
        </Link>
      </div>
    </div>
  );
};

export default UserDashBoard;

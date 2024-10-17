import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashBoard.css'; 

const AdminDashBoard = () => {
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <p>Welcome, Admin! Manage the Library System from here.</p>

      <div className="dashboard-links">
        <Link to="/add-book" className="dashboard-link">
          Add New Book
        </Link>
        
        <Link to="/update-book" className="dashboard-link">
          Update Book Details
        </Link>

        <Link to="/manage-users" className="dashboard-link">
          Manage Users
        </Link>
        
        <Link to="/view-reports" className="dashboard-link">
          View Reports
        </Link>

        <Link to="/manage-transactions" className="dashboard-link">
          Manage Transactions
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

export default AdminDashBoard;

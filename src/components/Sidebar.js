import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><NavLink to="/">🏠 Home</NavLink></li>
        <li><NavLink to="/admin-dashboard">📚 Admin Dashboard</NavLink></li>
        <li><NavLink to="/user-dashboard">👤 User Dashboard</NavLink></li>
        <li><NavLink to="/add-book">📚 Add Book</NavLink></li>
        <li><NavLink to="/return-book">🔙 Return Book</NavLink></li>
        <li><NavLink to="/fine-pay">💵 Pay Fine</NavLink></li>
        <li><NavLink to="/update-book">📖 Update Book</NavLink></li>
        <li><NavLink to="/user-management">👤 User Management</NavLink></li>
      </ul>
    </div>
  );
};

export default Sidebar;



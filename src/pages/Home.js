import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Home.css'; // Import CSS for styling


const Home = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to the Library Management System</h1>
        <p>Your one-stop solution for managing library books!</p>
      </header>

      <section className="home-content">
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Interior_view_of_Stockholm_Public_Library.jpg" alt="Library" className="home-image" />
        <div className="home-buttons">
          <button className="home-button" onClick={() => navigate('/browse-books')}>Browse Books</button>
          <button className="home-button" onClick={() => navigate('/addmembership')}>Manage Membership</button>
          <button className="home-button" onClick={() => navigate('/finepay')}>Pay Fines</button>
          <button className="home-button" onClick={() => navigate('/Returnbook')}>Return Book</button>
          <button className="home-button" onClick={() => navigate('/add-book')}>Add Book</button>
          
          <button className="home-button" onClick={() => navigate('/login')}>Login</button>
        </div>
      </section>

      <footer className="home-footer">
        <p>© 2024 Library Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;


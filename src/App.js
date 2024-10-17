import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import AdminDashBoard from './pages/AdminDashBoard';
import UserDashBoard from './pages/UserDashBoard';
import AddBook from './components/AddBook';
import Addmembership from './components/Addmembership';

import Finepay from './components/Finepay';
import Returnbook from './components/Returnbook';
import UpdateBook from './components/UpdateBook';
import UpdateMembership from './components/UpdateMembership';
import UserManagement from './components/UserManagement';
import Login from './pages/Login';



const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="app-container">
        {isAuthenticated && <Sidebar />}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/admin-dashboard" element={ <AdminDashBoard /> } />
            <Route path="/user-dashboard" element={<UserDashBoard />} />
            <Route path="/add-book" element={<AddBook />} />
            <Route path="/finepay" element={<Finepay />} />
            <Route path="/addmembership" element={<Addmembership />} />
            <Route path="/Returnbook" element={<Returnbook />} />
            <Route path="/Updatebook" element={<UpdateBook />} />
            <Route path="/UpdateMembership" element={<UpdateMembership />} />
            <Route path="/UserManagement" element={<UserManagement />} />

           
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;


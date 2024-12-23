import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/add-recipe">Add Product</Link>
      <Link to="/users">Users</Link>
      <Link to="/register-user">Register User</Link>
    </nav>
  );
};

export default Navbar;
import React from 'react';
import { FaUser, FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import './HomePage.css';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">20 Years</div>

      <div className="search-container">
        <FaSearch />
        <input type="text" placeholder="Search here..." />
      </div>

      <div className="account-icons">
        <span><FaUser /> My Account</span>
        <FaHeart />
        <FaShoppingCart />
      </div>
    </div>
  );
};

export default Header;

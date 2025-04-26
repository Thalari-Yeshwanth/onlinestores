import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Online Store</div>

      <div className="search-bar">
        <input type="text" placeholder="Search for anything..." />
        <button>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      <div className="header-icons">
        <div className="icon-container">
          <FontAwesomeIcon icon={faShoppingCart} className="icon" />
          <span className="cart-text">Cart</span>
        </div>
        <div className="icon-container">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <span className="cart-text">Login</span>
        </div>
      </div>
    </header>
  );
};

export default Header;

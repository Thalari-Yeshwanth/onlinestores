import React, { useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = ({ setSearchText, triggerSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSearchClick = () => {
    setSearchText(inputValue);      // Pass input to parent
    triggerSearch();                // Tell MainContent to refetch
  };
  return (
    <header className="header">
      <div className="logo">Online Store</div>

      <div className="search-bar">
        <input type="text" placeholder="Search for anything..." 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearchClick(); // Call the search button logic
          }
        }}
      />
        <button onClick={handleSearchClick}>
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

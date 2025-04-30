import React, { useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import LoginModal from './components/Login/LoginModal.jsx'
import clickSound from './assets/sounds/mixkit-long-pop-2358.wav'; // Adjust the path according to your project


const Header = ({ cartCount, setSearchText, triggerSearch }) => {

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleSearchClick = () => {
    setSearchText(inputValue);      // Pass input to parent
    triggerSearch();                // Tell MainContent to refetch
  };

  const playSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };


  console.log('showLoginModal', { showLoginModal });
  const handleLoginClick = () => {
    console.log('Login button clicked');
    playSound();          // 👈 Call playSound here
    setShowLoginModal(true);
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
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
          {/* Display the cart count dynamically */}
          <div className="cart-count">{cartCount > 0 ? cartCount : 0}</div>
        </div>
        <div className="icon-container">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <button className="cart-text" onClick={handleLoginClick}>
            Login
          </button>

          {/* Show login modal when showLoginModal state is true */}
          {showLoginModal && <LoginModal onClose={handleCloseModal} />}
        </div>

      </div>
    </header>
  );
};

export default Header;

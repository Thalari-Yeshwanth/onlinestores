import React, { useState } from 'react';
import './BookCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import NoImageAvailable from './No_Image_Available.jpg';

const BookCard = ({ title, author, price, image, onAddToCart, onBuyNow }) => {

  const [isWishlisted, setIsWishlisted] = useState(false);

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="book-card">
      <div
        className="wishlist-icon"
        title="Add to Wishlist"
        onClick={toggleWishlist}
        style={{ color: isWishlisted ? 'red' : 'white' }}
      >
        <FontAwesomeIcon icon={faHeart} />
      </div>

      <div className="book-details">
        <img
          src={image || NoImageAvailable}
          alt={title}
          className="book-image"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = NoImageAvailable;
          }}
        />
        <div className="book-title">{title}</div>
        <div className="book-author">by {author}</div>
        <div className="book-price">₹{price}</div>
      </div>

      <div className="card-buttons">
        <button onClick={onAddToCart}>Add to Cart</button>
        <button onClick={onBuyNow}>Buy Now</button>
      </div>
    </div>
  );
};

export default BookCard;


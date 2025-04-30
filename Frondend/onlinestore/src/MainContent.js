import React, { useState, useEffect } from "react";
import BookCard from './BookCard';
import './MainContent.css';
import axios from 'axios';
import logo from './logo.svg'; // Make sure this path is correct

const MainContent = ({ handleAddToCart, searchText, searchTrigger }) => {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);
  const [showAllBooks, setShowAllBooks] = useState(false);
  const [loading, setLoading] = useState(false);

  const displayedBooks = showAllBooks ? books : books.slice(0, 10);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true); // Start loader
      try {
        const requestBody = {
          page: 0,
          size: 10,
        };

        if (searchText && searchText.trim() !== '') {
          requestBody.bookName = searchText;
        }

        const response = await axios.post(
          'https://online-store-production-28ae.up.railway.app/onlinestores/book/findAll',
          requestBody
        );

        const fetchedBooks = response.data.content.map(book => ({
          id: book.bookId,
          title: book.bookName,
          author: book.bookAuthor,
          price: book.price,
          image: book.image,
        }));

        setBooks(fetchedBooks);
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setLoading(false); // Stop loader
      }
    };

    fetchBooks();
  }, [searchTrigger, searchText]);

  const handleBuyNow = (book) => {
    alert(`You chose to buy "${book.title}" now.`);
  };

  const handleAddToCartLocal = (book) => {
    setCart([...cart, book]);
    handleAddToCart(book);
  };

  const handleSeeAllClick = () => {
    setShowAllBooks(true);
  };

  return (
    <div className="main-content">
      {!showAllBooks && (
        <button className="see-all-button" onClick={handleSeeAllClick}>
          watch all
        </button>
      )}

      <h2>Available Books are</h2>

      {loading ? (
        <div className="loader-container">
          <img src={logo} alt="Loading..." className="loader" />
        </div>
      ) : (
        <div className="books-container">
          {displayedBooks.map((book) => (
            <BookCard
              key={book.id}
              author={book.author}
              title={book.title}
              price={book.price}
              image={book.image}
              onAddToCart={() => handleAddToCartLocal(book)}
              onBuyNow={() => handleBuyNow(book)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MainContent;

import React, { useState } from "react";
import BookCard from './BookCard';
import './MainContent.css';

const books = [
    {
        id: 1,
        title: "The Alchemist",
        author: "Paulo Coelho",
        price: 399,
        image: "https://images-na.ssl-images-amazon.com/images/I/51Z0nLAfLmL._SX324_BO1,204,203,200_.jpg"
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        price: 299,
        image: "https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL.jpg"
    },
    {
        id: 3,
        title: "Atomic Habits",
        author: "James Clear",
        price: 450,
        image: "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg"
    },
    {
        id: 4,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 349,
        image: "https://images-na.ssl-images-amazon.com/images/I/81xXAyfc9-L.jpg"
    },
    {
        id: 5,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        price: 399,
        image: "https://images-na.ssl-images-amazon.com/images/I/81OdwZ23H5L.jpg"
    },
    {
        id: 6,
        title: "Rich Dad Poor Dad",
        author: "Robert T. Kiyosaki",
        price: 320,
        image: "https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg"
    },
    {
        id: 7,
        title: "The Power of Subconscious Mind",
        author: "Joseph Murphy",
        price: 275,
        image: "https://images-na.ssl-images-amazon.com/images/I/81p1L85KinL.jpg"
    },
    {
        id: 8,
        title: "Think and Grow Rich",
        author: "Napoleon Hill",
        price: 299,
        image: "https://images-na.ssl-images-amazon.com/images/I/71UypkUjStL.jpg"
    },
    {
        id: 9,
        title: "Ikigai",
        author: "Héctor García, Francesc Miralles",
        price: 340,
        image: "https://images-na.ssl-images-amazon.com/images/I/81l3rZK4lnL.jpg"
    },
    {
        id: 10,
        title: "Can't Hurt Me",
        author: "David Goggins",
        price: 399,
        image: "https://images-na.ssl-images-amazon.com/images/I/61zRYbZkciL.jpg"
    },
    {
        id: 11,
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        price: 450,
        image: "https://images-na.ssl-images-amazon.com/images/I/713jIoMO3UL.jpg"
    },
    {
        id: 12,
        title: "The 5 AM Club",
        author: "Robin Sharma",
        price: 375,
        image: "https://images-na.ssl-images-amazon.com/images/I/81D-4AHN1-L.jpg"
    },
    {
        id: 13,
        title: "Wings of Fire",
        author: "A.P.J. Abdul Kalam",
        price: 330,
        image: "https://images-na.ssl-images-amazon.com/images/I/71+KxB0UqVL.jpg"
    },
    {
        id: 14,
        title: "The Psychology of Money",
        author: "Morgan Housel",
        price: 399,
        image: "https://images-na.ssl-images-amazon.com/images/I/71g2ednj0JL.jpg"
    },
    {
        id: 15,
        title: "The Monk Who Sold His Ferrari",
        author: "Robin Sharma",
        price: 349,
        image: "https://images-na.ssl-images-amazon.com/images/I/71FSjFjHq3L.jpg"
    }
];


const MainContent = ({ handleAddToCart }) => {
    const [cart, setCart] = useState([]);

    const handleBuyNow = (book) => {
        alert(`You chose to buy "${book.title}" now.`);
    };

    const handleAddToCartLocal = (book) => {
        setCart([...cart, book]); // Add book to cart state
        handleAddToCart(book); // Call the passed down function to update the parent state
    };

    const [showAllBooks, setShowAllBooks] = useState(false);
    const displayedBooks = showAllBooks ? books : books.slice(0, 10);


    const handleSeeAllClick = () => {
        console.log("handleSeeAllClick")
        setShowAllBooks(true); // Show all books
      };
    
  
   
        return (
            <div className="main-content">
              {/* See All button */}
              {!showAllBooks && (
        <button className="see-all-button" onClick={handleSeeAllClick}>
          See All
        </button>
      )}


              <h2>Available Books</h2>
              <div className="books-container">
        {displayedBooks.map((book) => (
          <BookCard
            key={book.id}
            author={book.author}
            title={book.title}
            price={book.price}
            image={book.image}
            onAddToCart={() => handleAddToCart(book)}
            onBuyNow={() => handleBuyNow(book)}
          />
        ))}
      </div>

            </div>
          );
        
        
    };
    
export default MainContent;
    

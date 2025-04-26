import React, { useState } from 'react';
import Header from './Header';
import MainContent from './MainContent';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [cart, setCart] = useState([]);

  if (window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
    for (let key in window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
      window.__REACT_DEVTOOLS_GLOBAL_HOOK__[key] = typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__[key] === 'function'
        ? () => {}
        : null;
    }
  }
  

  const handleAddToCart = (book) => {
    setCart([...cart, book]);
  };

  return (
    <BrowserRouter basename="/onlinestores">

    <div >
            <Header cartCount={cart.length} /> {/* Pass cart count to Header */}
      <MainContent handleAddToCart={handleAddToCart} /> {/* Pass handleAddToCart to MainContent */}

    </div>
    </BrowserRouter>

  );
}

export default App;

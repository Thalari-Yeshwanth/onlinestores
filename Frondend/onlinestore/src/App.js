import React, { useState } from 'react';
import Header from './Header';
import MainContent from './MainContent';

function App() {
  const [cart, setCart] = useState([]);
  const [searchTrigger, setSearchTrigger] = useState(0);
  const [searchText, setSearchText] = useState('');

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
    <div >
            <Header setSearchText={setSearchText}
        triggerSearch={() => setSearchTrigger(prev => prev + 1)} /> {/* Pass cart count to Header */}
      <MainContent handleAddToCart={handleAddToCart} searchText={searchText}
        searchTrigger={searchTrigger} /> {/* Pass handleAddToCart to MainContent */}

    </div>
  );
}

export default App;

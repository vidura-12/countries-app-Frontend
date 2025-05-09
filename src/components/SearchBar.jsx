import React, { useState, useRef, useEffect } from 'react';

const SearchBar = ({ onSearch, initialValue = '' }) => {
  const [searchTerm, setSearchTerm] = useState(initialValue);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  // Handle search input changes
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  // Clear search input
  const handleClearSearch = () => {
    setSearchTerm('');
    onSearch('');
    inputRef.current.focus();
  };

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Focus search bar when pressing / key
      if (e.key === '/' && !isFocused) {
        e.preventDefault();
        inputRef.current.focus();
      }
      // Clear search when pressing Escape
      if (e.key === 'Escape' && isFocused) {
        handleClearSearch();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFocused]);

  return (
    <div className="relative w-full max-w-7xl mx-auto mt-6 mb-8">
      {/* Search icon */}
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <svg 
          className={`w-5 h-5 transition-colors duration-200 ${
            isFocused ? 'text-blue-500' : 'text-gray-400'
          }`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
          />
        </svg>
      </div>

      {/* Search input */}
      <input
        ref={inputRef}
        type="text"
        placeholder="Search countries by name..."
        value={searchTerm}
        onChange={handleInputChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full pl-12 pr-10 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 hover:shadow-md"
        aria-label="Search countries"
      />

      {/* Keyboard shortcut indicator */}
      <div className="absolute inset-y-0 right-14 flex items-center pointer-events-none">
        {!isFocused && !searchTerm && (
          <span className="hidden sm:flex items-center justify-center h-6 w-6 rounded bg-gray-100 dark:bg-gray-700 text-xs font-medium text-gray-500 dark:text-gray-400">
            /
          </span>
        )}
      </div>

      {/* Clear button (only shows when there's input) */}
      {searchTerm && (
        <button
          onClick={handleClearSearch}
          className="absolute inset-y-0 right-3 flex items-center justify-center h-8 w-8 my-auto rounded-full text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          aria-label="Clear search"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}

      {/* Animated focus underline */}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-blue-500 transition-all duration-300 ease-out ${
        isFocused ? 'w-[calc(100%-2px)]' : 'w-0'
      }`} />
    </div>
  );
};

export default SearchBar;
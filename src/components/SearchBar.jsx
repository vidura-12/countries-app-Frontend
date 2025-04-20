import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="relative w-full mb-6">
      <input
        type="text"
        placeholder="🔍 Search countries by name..."
        onChange={handleInputChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
      />
    </div>
  );
};

export default SearchBar;

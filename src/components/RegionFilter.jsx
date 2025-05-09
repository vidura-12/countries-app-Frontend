import React, { useState } from 'react';

const regions = [
  { id: 'africa', name: 'Africa', icon: '🌍' },
  { id: 'americas', name: 'Americas', icon: '🌎' },
  { id: 'asia', name: 'Asia', icon: '🌏' },
  { id: 'europe', name: 'Europe', icon: '🌍' },
  { id: 'oceania', name: 'Oceania', icon: '🌏' }
];

const RegionFilter = ({ onFilter, selectedRegion = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(selectedRegion);
  
  // Handle region selection
  const handleSelectRegion = (region) => {
    setSelected(region);
    onFilter(region);
    setIsOpen(false);
  };
  
  // Clear selection
  const handleClearSelection = () => {
    setSelected('');
    onFilter('');
  };
  
  // Get selected region object
  const getSelectedRegion = () => {
    return regions.find(r => r.id.toLowerCase() === selected.toLowerCase());
  };

  return (
    <div className="relative mt-6 mb-8 w-full sm:w-72 z-20">
      <label htmlFor="region-filter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 ml-1">
        Filter by Region
      </label>
      
      {/* Custom select button */}
      <button
        id="region-filter"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:border-gray-300 dark:hover:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        type="button"
      >
        <div className="flex items-center truncate">
          {selected ? (
            <>
              <span className="mr-2">{getSelectedRegion()?.icon}</span>
              <span className="font-medium text-gray-900 dark:text-white">{getSelectedRegion()?.name}</span>
            </>
          ) : (
            <span className="text-gray-500 dark:text-gray-400">Select a region</span>
          )}
        </div>
        
        <div className="flex items-center">
          {selected && (
            <button 
              onClick={(e) => {
                e.stopPropagation();
                handleClearSelection();
              }}
              className="mr-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none"
              aria-label="Clear selection"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
          
          <svg 
            className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      
      {/* Dropdown menu */}
      {isOpen && (
        <div 
          className="absolute mt-1 w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden z-30 transform transition-all duration-200 origin-top animate-dropdown"
          role="listbox"
        >
          <div className="max-h-60 overflow-y-auto py-1">
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => handleSelectRegion(region.id)}
                className={`flex items-center w-full px-4 py-2.5 text-left hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-150 ${
                  selected.toLowerCase() === region.id.toLowerCase() ? 'bg-blue-50 dark:bg-gray-700' : ''
                }`}
                role="option"
                aria-selected={selected.toLowerCase() === region.id.toLowerCase()}
              >
                <span className="mr-2">{region.icon}</span>
                <span className={`font-medium ${
                  selected.toLowerCase() === region.id.toLowerCase() 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-gray-900 dark:text-white'
                }`}>
                  {region.name}
                </span>
                
                {selected.toLowerCase() === region.id.toLowerCase() && (
                  <svg className="w-5 h-5 ml-auto text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Click-outside overlay (invisible) */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-10" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

// Add these animation classes to your tailwind.config.js if not already there
// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         dropdown: {
//           '0%': { opacity: 0, transform: 'scale(0.95)' },
//           '100%': { opacity: 1, transform: 'scale(1)' }
//         }
//       },
//       animation: {
//         dropdown: 'dropdown 0.1s ease-out'
//       }
//     }
//   }
// }

export default RegionFilter;
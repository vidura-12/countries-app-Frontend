import React, { useEffect } from 'react';

const CountryModal = ({ country, onClose }) => {
  const { name, flags, population, region, capital, subregion, area, languages } = country;
  
  // Add keyboard support (ESC key to close)
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    document.addEventListener('keydown', handleEscKey);
    // Prevent scrolling of body while modal is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  // Format numbers with separator
  const formatNumber = (num) => num.toLocaleString();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      {/* Improved backdrop with smoother transition */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-md transition-all duration-300 ease-in-out"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Enhanced modal container with animation */}
      <div 
        className="relative w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 ease-out animate-modalEntry"
        role="dialog"
        aria-modal="true"
        aria-labelledby="country-modal-title"
      >
        {/* Improved close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 dark:text-gray-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>

        {/* Enhanced flag image section with better gradient */}
        <div className="relative h-64 w-full overflow-hidden">
          <img 
            src={flags?.svg} 
            alt={`Flag of ${name?.common}`}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          <h2 
            id="country-modal-title"
            className="absolute bottom-6 left-6 text-3xl font-bold text-white drop-shadow-lg tracking-wide"
          >
            {name?.common}
          </h2>
        </div>

        {/* Enhanced content section */}
        <div className="p-6 space-y-6 dark:text-gray-100">
          {/* Official name banner */}
          <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Official Name</p>
            <p className="text-lg font-semibold">{name?.official}</p>
          </div>
          
          {/* Main info grid with hover effects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-4">
              <div className="flex items-start group p-3 rounded-lg transition-all duration-200 hover:bg-blue-50 dark:hover:bg-gray-700/50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-0.5 mr-3 text-blue-500 group-hover:text-blue-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Capital</p>
                  <p className="font-medium text-lg">{capital?.join(', ') || 'N/A'}</p>
                </div>
              </div>

              <div className="flex items-start group p-3 rounded-lg transition-all duration-200 hover:bg-blue-50 dark:hover:bg-gray-700/50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-0.5 mr-3 text-blue-500 group-hover:text-blue-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Region</p>
                  <p className="font-medium text-lg">{region} {subregion && <span className="text-gray-500 dark:text-gray-400 text-base">({subregion})</span>}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start group p-3 rounded-lg transition-all duration-200 hover:bg-blue-50 dark:hover:bg-gray-700/50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-0.5 mr-3 text-blue-500 group-hover:text-blue-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Population</p>
                  <p className="font-medium text-lg">{formatNumber(population)}</p>
                </div>
              </div>

              <div className="flex items-start group p-3 rounded-lg transition-all duration-200 hover:bg-blue-50 dark:hover:bg-gray-700/50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-0.5 mr-3 text-blue-500 group-hover:text-blue-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Area</p>
                  <p className="font-medium text-lg">{formatNumber(area)} <span className="text-sm">km²</span></p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Languages section with enhanced styling */}
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-0.5 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              <div className="flex-1">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Languages</p>
                <div className="flex flex-wrap gap-2">
                  {languages ? 
                    Object.values(languages).map((lang, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                      >
                        {lang}
                      </span>
                    )) : 
                    <span className="text-gray-500 dark:text-gray-400">N/A</span>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add these animation classes to your tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         fadeIn: {
//           '0%': { opacity: '0' },
//           '100%': { opacity: '1' },
//         },
//         modalEntry: {
//           '0%': { opacity: '0', transform: 'scale(0.9)' },
//           '100%': { opacity: '1', transform: 'scale(1)' },
//         }
//       },
//       animation: {
//         fadeIn: 'fadeIn 0.3s ease-out',
//         modalEntry: 'modalEntry 0.4s ease-out',
//       }
//     }
//   }
// }

export default CountryModal;
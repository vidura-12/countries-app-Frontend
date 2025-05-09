import React, { useState } from 'react';

const CountryCard = ({ country, onClick }) => {
  const { name, flags, population, region, capital, cca3 } = country;
  const [imageLoaded, setImageLoaded] = useState(false);

  // Format population with separator
  const formatPopulation = (num) => {
    return new Intl.NumberFormat('en-US', {
      notation: num > 999999 ? 'compact' : 'standard',
      maximumFractionDigits: 1
    }).format(num);
  };

  return (
    <div
      onClick={() => onClick(cca3)}
      onKeyDown={(e) => e.key === 'Enter' && onClick(cca3)}
      className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-2 border border-gray-100 dark:border-gray-700 focus-within:ring-2 focus-within:ring-blue-400 outline-none"
      tabIndex={0}
      role="button"
      aria-label={`View details about ${name?.common}`}
    >
      {/* Card header with flag image */}
      <div className="relative overflow-hidden h-48 rounded-t-2xl bg-gray-100 dark:bg-gray-700">
        {/* Shimmer loading effect */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:400%_100%]" />
        )}
        
        <img 
          src={flags?.svg} 
          alt={`Flag of ${name?.common}`}
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
        
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Country code badge */}
        <div className="absolute top-4 right-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-xs font-bold py-1 px-2 rounded-md shadow-sm text-gray-600 dark:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {cca3}
        </div>
      </div>
      
      {/* Card content */}
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{name?.common}</h2>
        
        <div className="space-y-3 text-gray-600 dark:text-gray-300">
          {/* Capital */}
          <div className="flex items-center group/item">
            <div className="w-8 h-8 mr-3 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center group-hover/item:bg-blue-100 dark:group-hover/item:bg-blue-800/40 transition-colors duration-300">
              <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Capital</p>
              <p className="font-medium">{capital?.[0] || 'N/A'}</p>
            </div>
          </div>
          
          {/* Region */}
          <div className="flex items-center group/item">
            <div className="w-8 h-8 mr-3 rounded-full bg-green-50 dark:bg-green-900/30 flex items-center justify-center group-hover/item:bg-green-100 dark:group-hover/item:bg-green-800/40 transition-colors duration-300">
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Region</p>
              <p className="font-medium">{region}</p>
            </div>
          </div>
          
          {/* Population */}
          <div className="flex items-center group/item">
            <div className="w-8 h-8 mr-3 rounded-full bg-amber-50 dark:bg-amber-900/30 flex items-center justify-center group-hover/item:bg-amber-100 dark:group-hover/item:bg-amber-800/40 transition-colors duration-300">
              <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Population</p>
              <p className="font-medium">{formatPopulation(population)}</p>
            </div>
          </div>
        </div>
        
        {/* View details button */}
        <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
          <div className="flex justify-end">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              View details 
              <svg className="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};



export default CountryCard;
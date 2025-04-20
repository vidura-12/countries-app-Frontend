import React from 'react';

const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

const RegionFilter = ({ onFilter }) => {
  const handleChange = (e) => {
    onFilter(e.target.value);
  };

  return (
    <div className="mb-6">
      <select
        onChange={handleChange}
        className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
      >
        <option value="">🌍 Filter by region</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RegionFilter;

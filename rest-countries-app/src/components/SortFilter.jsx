// src/components/SortFilter.js
import React, { useState } from "react";
import { FiChevronDown, FiCheck } from "react-icons/fi";

const SortFilter = ({ onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("name-asc");

  const sortOptions = [
    { value: "name-asc", label: "Name (A-Z)" },
    { value: "name-desc", label: "Name (Z-A)" },
    { value: "population-asc", label: "Population (Low to High)" },
    { value: "population-desc", label: "Population (High to Low)" },
    { value: "area-asc", label: "Area (Small to Large)" },
    { value: "area-desc", label: "Area (Large to Small)" },
  ];

  const handleOptionClick = (value) => {
    setSelectedOption(value);
    onSortChange(value);
    setIsOpen(false);
  };

  const selectedLabel = sortOptions.find(opt => opt.value === selectedOption)?.label || "Sort by";

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between gap-2 bg-white border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 min-w-[180px]"
      >
        <span>{selectedLabel}</span>
        <FiChevronDown className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden">
          <div className="py-1">
            {sortOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => handleOptionClick(option.value)}
                className={`flex items-center justify-between w-full px-4 py-2 text-sm text-left hover:bg-blue-50 transition-colors duration-150 ${selectedOption === option.value ? 'bg-blue-50 text-blue-600' : 'text-gray-700'}`}
              >
                <span>{option.label}</span>
                {selectedOption === option.value && <FiCheck className="text-blue-500" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SortFilter;
import React, { useState } from 'react';

const Filter = ({ filterOptions }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="bg-indigo-900 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-indigo-950 focus:outline-none transition duration-300"
      >Filter
        
        <svg
          className={`w-5 h-5 inline-block ml-2 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        > 
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-10">
          <ul className="py-2 text-gray-800">
            {filterOptions.map((option, index) => (
              <li key={index}>
                <button
                  className="block px-4 py-2 text-sm hover:bg-indigo-100"
                  onClick={() => console.log(`Selected: ${option}`)} 
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Filter;

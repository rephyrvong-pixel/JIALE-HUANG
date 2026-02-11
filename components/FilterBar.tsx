
import React from 'react';
import { CATEGORIES } from '../constants';
import { motion } from 'framer-motion';

interface FilterBarProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="px-6 md:px-12 max-w-[1440px] mx-auto mb-16 overflow-x-auto whitespace-nowrap scrollbar-hide">
      <div className="flex space-x-8 border-b border-gray-100 pb-4">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`text-sm font-medium relative py-2 transition-colors duration-300 ${
              activeCategory === cat ? 'text-black' : 'text-gray-400 hover:text-black'
            }`}
          >
            {cat}
            {activeCategory === cat && (
              <motion.div
                layoutId="activeFilter"
                className="absolute bottom-0 left-0 w-full h-0.5 bg-black"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;

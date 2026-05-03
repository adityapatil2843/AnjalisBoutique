import React from 'react';

const FilterBar = ({ activeFilter, setActiveFilter }) => {
  const filters = ['All', 'Wedding', 'Casual', 'Festival'];

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`btn rounded-full px-6 transition-all duration-300 ${
            activeFilter === filter
              ? 'btn-primary shadow-lg scale-105'
              : 'btn-outline bg-base-100 text-base-content border-base-300 hover:btn-primary hover:text-primary-content hover:scale-105'
          }`}
          aria-label={`Filter by ${filter}`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;

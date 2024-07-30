import React, { useState } from 'react';
import ShortCut from './ShortCut';
import FilterCards from './FilterCards';

const MainCards = () => {
  const [currentFilter, setCurrentFilter] = useState('all');

  const handleFilterChange = (filter) => {
    setCurrentFilter(filter);
  };

  return (
    <div className='w-[100%]  h-[100%] rounded-xl font-jost '>
      <ShortCut onFilterChange={handleFilterChange} />
      <FilterCards filter={currentFilter} />
    </div>
  );
};

export default MainCards;
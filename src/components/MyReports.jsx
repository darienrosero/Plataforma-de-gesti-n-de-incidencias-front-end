import React, { useState } from 'react'
import ShortCut from './ShortCut';
import MyFilterCards from './MyFilterCards';

const MyReports = () => {
  const [currentFilter, setCurrentFilter] = useState('all');

  const handleFilterChange = (filter) => {
    setCurrentFilter(filter);
  };

  return (
    <div className='w-[100%] bg-transparent h-[100%] rounded-xl font-jost '>

      <ShortCut onFilterChange={handleFilterChange} />
      <MyFilterCards filter={currentFilter} />

    </div>
  )
}

export default MyReports

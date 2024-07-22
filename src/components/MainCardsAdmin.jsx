import React, { useState } from 'react';
import ShortCutAdmin from './ShortCutAdmin';
import FilterCardsAdmin from './FilterCardsAdmin';

const MainCardsAdmin = () => {
    const [currentFilter, setCurrentFilter] = useState('all');

    const handleFilterChange = (filter) => {
        setCurrentFilter(filter);
    };

    return (
        <div className='w-[100%] bg-transparent h-[100%] rounded-xl font-jost flex justify-between '>
            <div>
                <ShortCutAdmin onFilterChange={handleFilterChange} />
                <FilterCardsAdmin filter={currentFilter} />
            </div>

            <div className='flex flex-col '>
                <div className='bg-red-300 w-[300px] h-[200px]'>
hola
                </div>
                <div className='bg-green-400 w-[300px] h-[200px] '>
hola
                </div>
            </div>

        </div>
    );
};

export default MainCardsAdmin;
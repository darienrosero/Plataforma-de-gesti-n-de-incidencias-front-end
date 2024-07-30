import React, { useState } from 'react';
import ShortCutAdmin from './ShortCutAdmin';
import FilterCardsAdmin from './FilterCardsAdmin';

const MainCardsAdmin = () => {
    const [currentFilter, setCurrentFilter] = useState('all');

    const handleFilterChange = (filter) => {
        setCurrentFilter(filter);
    };

    return (
        <div className='w-[1220px] bg-transparent h-[100%] rounded-xl font-jost flex justify-between '>
            <div>
                <ShortCutAdmin onFilterChange={handleFilterChange} />
                <FilterCardsAdmin filter={currentFilter} />
            </div>

            <div className='flex flex-col justify-between place-content-center h-[480px] font-jost text-white '>

                <div className='  w-[350px] h-[200px]'>
                    <div className='w-[150px] bg-slate-700 bg-opacity-50 backdrop-blur-lg rounded-tr-xl p-2  '>
                        <p>
                            Pendientes
                        </p>
                    </div>

                    <div className='bg-gray-500 bg-opacity-35 backdrop-blur-lg overflow-y-auto flex flex-col justify-between p-3 h-[100%] w-[100%] '>

                        <div className='bg-ligth-purple bg-opacity-35 backdrop-blur-lg h-[50px] rounded-xl p-3 mb-3 '>
                            <p>cobrar renta</p>
                        </div>
                        <div className='bg-ligth-purple bg-opacity-35 backdrop-blur-lg h-[50px] rounded-xl p-3 mb-3 '>
                            <p>cobrar renta</p>
                        </div>
                        <div className='bg-ligth-purple bg-opacity-35 backdrop-blur-lg h-[50px] rounded-xl p-3 mb-3 '>
                            <p>cobrar renta</p>
                        </div>
                        <div className='bg-ligth-purple bg-opacity-35 backdrop-blur-lg h-[50px] rounded-xl p-3 mb-3 '>
                            <p>cobrar renta</p>
                        </div>
                        <div className='bg-ligth-purple bg-opacity-35 backdrop-blur-lg h-[50px] rounded-xl p-3 mb-3 '>
                            <p>cobrar renta</p>
                        </div>

                    </div>
                </div>

                <div className=' w-[350px] h-[200px]'>
                    <div className='w-[150px] bg-slate-700 bg-opacity-50 backdrop-blur-lg rounded-tr-xl p-2  '>
                        <p>
                            Aprovaciones
                        </p>
                    </div>

                    <div className='bg-gray-500 bg-opacity-35 backdrop-blur-lg overflow-y-auto flex flex-col justify-between p-3 h-[100%] w-[100%] '>

                        <div className='bg-ligth-purple bg-opacity-35 backdrop-blur-lg h-[50px] rounded-xl p-3 mb-3 '>
                            <p>cobrar renta</p>
                        </div>
                        <div className='bg-ligth-purple bg-opacity-35 backdrop-blur-lg h-[50px] rounded-xl p-3 mb-3 '>
                            <p>cobrar renta</p>
                        </div>
                        <div className='bg-ligth-purple bg-opacity-35 backdrop-blur-lg h-[50px] rounded-xl p-3 mb-3 '>
                            <p>cobrar renta</p>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default MainCardsAdmin;
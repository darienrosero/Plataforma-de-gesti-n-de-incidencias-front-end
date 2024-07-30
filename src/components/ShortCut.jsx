import React from 'react'

const ShortCut = ({ onFilterChange }) => {
  return (
    <div className='flex justify-around items-center text-white w-[700px] rounded-t-xl h-[65px] bg-gray-700 bg-opacity-50 backdrop-blur-lg '>
      <div onClick={() => onFilterChange('all')} className='border-r-2 border-purple-custom bg-opacity-40 backdrop-blur-lg w-[150px] h-[65px] flex justify-center items-center cursor-pointer '>Todos</div>
      <div onClick={() => onFilterChange('1')} className='border-r-2 border-purple-custom bg-opacity-40 backdrop-blur-lg w-[150px] h-[65px] flex justify-center items-center cursor-pointer '>Edificio</div>
      <div onClick={() => onFilterChange('2')} className='border-r-2 border-purple-custom bg-opacity-40 backdrop-blur-lg w-[150px] h-[65px] flex justify-center items-center cursor-pointer '>Carpinteria</div>
      <div onClick={() => onFilterChange('3')} className='border-r-2 border-purple-custom bg-opacity-40 backdrop-blur-lg w-[150px] h-[65px] flex justify-center items-center cursor-pointer '>Plomeria</div>
      <div onClick={() => onFilterChange('4')} className='border-r-2 border-purple-custom bg-opacity-40 backdrop-blur-lg w-[150px] h-[65px] flex justify-center items-center cursor-pointer '>Electricidad</div>
      <div onClick={() => onFilterChange('5')} className='h-[65px] flex justify-center w-[150px] items-center cursor-pointer'>Otros</div>
    </div>
  )
}

export default ShortCut;
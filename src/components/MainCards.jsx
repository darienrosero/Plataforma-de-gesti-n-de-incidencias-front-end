import React from 'react'
import Cards from './Cards'

const MainCards = () => {
  return (
    <div className='w-[100%] bg-transparent h-[100%] rounded-xl font-jost '>
      <div className='flex justify-around items-center w-[700px] rounded-t-xl h-[65px] bg-slate-300 '>
        <div className='border-r-2 border-gray-400 w-[150px]  h-[65px] flex justify-center items-center cursor-pointer '>Building</div>
        <div className='border-r-2 border-gray-400 w-[150px]  h-[65px] flex justify-center items-center cursor-pointer '>Carpentry</div>
        <div className='border-r-2 border-gray-400 w-[150px]  h-[65px] flex justify-center items-center cursor-pointer '>Plumbing</div>
        <div className='border-r-2 border-gray-400 w-[150px]  h-[65px] flex justify-center items-center cursor-pointer '>Electricity</div>
        <div className='h-[65px] flex justify-center w-[150px] items-center cursor-pointer'>Others</div>
      </div>

    <div className='w-100% h-[450px] bg-white justify-between flex-wrap grid grid-cols-4 gap-4 rounded-r-xl rounded-b-xl p-4 overflow-y-auto  '>
        <Cards />
    </div>

    </div>
  )
}

export default MainCards
